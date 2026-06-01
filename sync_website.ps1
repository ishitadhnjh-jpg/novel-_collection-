## Website Sync Script (PowerShell)

# This script uses Robocopy to efficiently sync your local website files to a remote server.
# It leverages multithreading, restartable mode, and exclusion patterns to maximize speed.
# Adjust the `$source`, `$destination`, and `$exclude` variables to match your environment.

# Configuration
$source = "C:\path\to\your\site"   # <--- Update this path to your local website folder
$destination = "\\REMOTE-SERVER\path\to\deploy"  # <--- Update this UNC path or use a mapped drive

# Exclude patterns (e.g., source control, temporary files)
$exclude = @(
    "*.git*",
    "node_modules",
    "*.DS_Store",
    "Thumbs.db",
    "*.log"
)

# Build the exclude arguments for Robocopy
$excludeArgs = $exclude | ForEach-Object { "/XD \"$_\"" }

# Robocopy options:
#   /MIR          – Mirror source to destination (adds/deletes as needed)
#   /Z            – Restartable mode (good for unstable connections)
#   /MT:16        – Multithreaded copy (adjust number of threads as needed)
#   /R:3          – Retry 3 times on failures
#   /W:5          – Wait 5 seconds between retries
#   /NP           – No progress (cleaner output)
#   /LOG:sync.log – Log output to a file

$robocopyOptions = "/MIR /Z /MT:16 /R:3 /W:5 /NP /LOG:sync.log"

# Execute Robocopy
Write-Host "Starting website sync..."
robocopy "${source}" "${destination}" $robocopyOptions $excludeArgs

if ($LASTEXITCODE -le 7) {
    Write-Host "Sync completed successfully (exit code $LASTEXITCODE)."
} else {
    Write-Error "Sync encountered errors (exit code $LASTEXITCODE). Check sync.log for details."
}
