# PowerShell wrapper for aria2c to download 900+ novels fast
# ------------------------------------------------------------
# This script expects:
#   1. aria2c installed and on PATH (download from https://aria2.github.io/)
#   2. A text file (novels.txt) with one URL per line
# It launches aria2c with multi‑connection and parallel download settings
# to maximise bandwidth usage.
# ------------------------------------------------------------

param (
    [Parameter(Mandatory=$true, HelpMessage="Path to the URL list file (one URL per line).")]
    [string]$UrlListPath,

    [Parameter(Mandatory=$true, HelpMessage="Folder where the downloaded novels will be saved.")]
    [string]$DestinationFolder,

    [int]$MaxParallel = 50,   # number of simultaneous downloads (adjust to CPU/connection)
    [int]$ConnectionsPerFile = 8,   # parallel connections per file (ARIA2 feature)
    [int]$RetryCount = 2,
    [switch]$Overwrite   # overwrite existing files if present
)

if (-not (Test-Path $DestinationFolder)) {
    New-Item -ItemType Directory -Path $DestinationFolder -Force | Out-Null
}

# Build aria2c command
$ariaArgs = @(
    "-i", $UrlListPath,            # input file list
    "-d", $DestinationFolder,      # download dir
    "-j", $MaxParallel,            # max simultaneous downloads
    "-x", $ConnectionsPerFile,     # max connections per file
    "-s", $ConnectionsPerFile,     # same as -x for compatibility
    "--retry-wait=5",
    "--max-tries=$RetryCount",
    "--summary-interval=0",        # suppress periodic summary
    "--log=aria2_download.log",
    "--log-level=error"
)

if ($Overwrite) { $ariaArgs += "--allow-overwrite=true" }

# Execute aria2c
Write-Host "Starting aria2c download with $MaxParallel parallel jobs..."
$cmd = "aria2c " + ($ariaArgs -join " ")
Invoke-Expression $cmd

Write-Host "Download finished. See aria2_download.log in $DestinationFolder for details."
