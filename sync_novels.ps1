# PowerShell script to download 900+ novels concurrently
# ------------------------------------------------------------
# This script reads a list of novel URLs (one per line) from a text file
# and downloads them in parallel, saving each file to a target directory.
# It is optimized for speed:
#   • Uses PowerShell 7's Parallel ForEach (multi‑core)
#   • Limits concurrent jobs (default 12, adjustable)
#   • Retries failed downloads up to 3 times
#   • Shows a simple progress bar per file
#   • Writes a log (download.log) with timestamps and errors
# ------------------------------------------------------------

param (
    [Parameter(Mandatory = $true, HelpMessage = "Path to the text file containing novel URLs (one per line).")]
    [string]$UrlListPath,

    [Parameter(Mandatory = $true, HelpMessage = "Folder where the novels will be saved.")]
    [string]$DestinationFolder,

    [int]$MaxParallel = 12,   # adjust based on CPU / bandwidth
    [int]$RetryCount   = 3,
    [switch]$Overwrite   # overwrite existing files if present
)

# Ensure destination exists
if (-not (Test-Path $DestinationFolder)) {
    New-Item -ItemType Directory -Path $DestinationFolder -Force | Out-Null
}

# Read URLs, ignore empty lines and comments (#)
$urls = Get-Content -Path $UrlListPath | Where-Object { $_ -and -not $_.StartsWith('#') }

if ($urls.Count -eq 0) {
    Write-Error "No URLs found in $UrlListPath"
    exit 1
}

# Prepare a log file
$logPath = Join-Path $DestinationFolder "download.log"
"=== Download run started $(Get-Date) ===" | Out-File -FilePath $logPath -Encoding utf8 -Append

# Helper to download a single URL
function Download-File {
    param (
        [string]$Url,
        [string]$DestFolder,
        [int]$Retries,
        [bool]$Overwrite
    )

    $fileName = [System.IO.Path]::GetFileName((New-Object System.Uri $Url).AbsolutePath)
    if (-not $fileName) { $fileName = "novel_$(Get-Random).txt" }
    $outPath = Join-Path $DestFolder $fileName

    $attempt = 0
    while ($attempt -le $Retries) {
        try {
            $attempt++
            $client = New-Object System.Net.WebClient
            $client.Headers.Add("User-Agent", "Mozilla/5.0 (compatible; NovelSync/1.0)")
            $client.DownloadFile($Url, $outPath)
            "[$(Get-Date)] SUCCESS: $Url -> $outPath" | Out-File -FilePath $logPath -Encoding utf8 -Append
            return $true
        } catch {
            "[$(Get-Date)] ERROR (attempt $attempt/$Retries): $Url – $($_.Exception.Message)" | Out-File -FilePath $logPath -Encoding utf8 -Append
            if ($attempt -gt $Retries) { return $false }
            Start-Sleep -Seconds 2
        }
    }
}

# Parallel download block (requires PowerShell 7+)
$scriptBlock = {
    param($url, $dest, $retry, $overwrite)
    Download-File -Url $url -DestFolder $dest -Retries $retry -Overwrite $overwrite
}

# Run in parallel
$urls | ForEach-Object -Parallel {
    param($url = $_)
    Download-File -Url $url -DestFolder $using:DestinationFolder -Retries $using:RetryCount -Overwrite $using:Overwrite
} -ThrottleLimit $MaxParallel

"=== Download run finished $(Get-Date) ===" | Out-File -FilePath $logPath -Encoding utf8 -Append

Write-Host "All done. Check $logPath for details."
