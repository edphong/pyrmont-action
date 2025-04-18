#Requires -Version 5.1

<#
.SYNOPSIS
  Recursively finds specified source code files within given source directories,
  excluding specified directories (like node_modules), and concatenates their
  content into summary text files in a parallel target directory structure.

.DESCRIPTION
  This script scans project directories (e.g., 'backend', 'frontend/src') for source files
  (e.g., *.js, *.html, *.css). It skips directories like 'node_modules'.
  For each source directory processed (and its subdirectories), it creates a
  corresponding directory structure under a specified target root (e.g., './scripts/codeText').
  Inside each target directory, it generates a single text file (e.g., 'all_backend_code.txt')
  containing the concatenated content of all found source files within that source directory tree.

.PARAMETER SourcePath
  The path to the source directory to process for this specific call.

.PARAMETER TargetPath
  The path to the target directory where the output text file for the corresponding
  SourcePath should be created.

.PARAMETER FileFilters
  An array of wildcard patterns specifying which file types to include (e.g., @("*.js", "*.css")).

.PARAMETER ExcludeDirs
  An array of directory names to exclude from scanning (e.g., @("node_modules", ".git")).

.EXAMPLE
  # Process the 'backend' directory
  Export-SourceCode -SourcePath ".\backend" -TargetPath ".\scripts\codeText\backend" -FileFilters @("*.js") -ExcludeDirs @("node_modules")

.EXAMPLE
  # Process the 'frontend\src' directory
  Export-SourceCode -SourcePath ".\frontend\src" -TargetPath ".\scripts\codeText\frontend\src" -FileFilters @("*.js", "*.jsx", "*.css") -ExcludeDirs @("node_modules")
#>
function Export-SourceCode {
    param (
        [Parameter(Mandatory=$true)]
        [string]$SourcePath,

        [Parameter(Mandatory=$true)]
        [string]$TargetPath,

        [Parameter(Mandatory=$true)]
        [string[]]$FileFilters,

        [Parameter(Mandatory=$true)]
        [string[]]$ExcludeDirs
    )

    # 1. Ensure the matching target folder exists
    if (-not (Test-Path -Path $TargetPath -PathType Container)) {
        Write-Verbose "Creating target directory: $TargetPath"
        New-Item -ItemType Directory -Path $TargetPath | Out-Null
    }

    # 2. Figure out the text file name (e.g., "all_backend_code.txt" if folder name is "backend")
    $folderName = Split-Path $SourcePath -Leaf
    $outputFile = Join-Path $TargetPath ("all_{0}_code.txt" -f $folderName)

    # 3. Collect *all* relevant source files in this folder *and* subfolders (recursive), excluding specified dirs
    #    Note: -Exclude applies to the names of items being enumerated. When recursing,
    #          if a directory name matches an exclusion, that directory and its contents are skipped.
    Write-Verbose "Searching for files matching $($FileFilters -join ', ') in '$SourcePath', excluding $($ExcludeDirs -join ', ')"
    $sourceFiles = Get-ChildItem -Path $SourcePath -Include $FileFilters -File -Recurse -Exclude $ExcludeDirs -ErrorAction SilentlyContinue

    if ($sourceFiles) {
        # 4. Write them into one .txt for this folder
        Write-Verbose "Found $($sourceFiles.Count) files. Writing content to $outputFile"
        # Use -Raw to read entire file content at once, potentially faster
        # Use -Encoding UTF8 for better compatibility
        Get-Content -Path $sourceFiles.FullName -Raw | Out-File -FilePath $outputFile -Encoding UTF8

        Write-Host "Wrote code to $outputFile (found $($sourceFiles.Count) files recursively in '$SourcePath')"
    } else {
        Write-Host "No files matching filters found in '$SourcePath' or its subdirectories (excluding specified folders). Skipping file creation for '$outputFile'."
        # Optional: Create an empty file if you always want the file to exist
        # New-Item -Path $outputFile -ItemType File -Force | Out-Null
    }

    # 5. Then recurse into each *direct* subfolder (that isn't excluded) to create *their* .txt files as well
    $subDirs = Get-ChildItem -Path $SourcePath -Directory -Exclude $ExcludeDirs -ErrorAction SilentlyContinue
    foreach ($dir in $subDirs) {
        $subSource = $dir.FullName
        $subTarget = Join-Path $TargetPath $dir.Name

        # Recursive call, passing down the filters and exclusions
        Export-SourceCode -SourcePath $subSource -TargetPath $subTarget -FileFilters $FileFilters -ExcludeDirs $ExcludeDirs
    }
}

# ---------------------------------------
# MAIN SCRIPT LOGIC
# ---------------------------------------

# --- Configuration ---
# Adjust this path to where you want the combined code text files to live.
$codeTextRoot = ".\scripts\codeText"

# Define the top-level source directories you want to process.
# Based on your image, 'backend' and 'frontend' seem appropriate.
# If your frontend code is mainly inside 'src', you might prefer ".\frontend\src"
# but processing ".\frontend" and relying on ExcludeDirs is also viable.
$sourceRoots = @(
    ".\backend",
    ".\frontend"
    # Add other root source directories if needed, e.g., ".\packages\mylib"
)

# Define the file extensions/patterns to include.
$includeFileFilters = @(
    "*.js",
    "*.jsx",
    "*.ts",
    "*.tsx",
    "*.html",
    "*.css",
    "*.scss",
    "*.vue",
    "*.svelte",
    "*.json" # Include package.json etc? Adjust as needed.
    # Add or remove patterns as required for your project
)
# Exclude config files that might match above patterns but shouldn't be included
$excludeFileFilters = @(
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "jsconfig.json",
    "vite.config.js",
    "playwright.config.js",
    ".eslintrc.cjs"
    # Add other specific files to exclude if necessary
)


# Define directories to completely exclude from scanning.
$excludeDirectories = @(
    "node_modules",
    ".git",
    ".vscode",
    ".idea",
    "dist",      # Common build output directory
    "build",     # Common build output directory
    "public",    # Often contains static assets, not source code
    "e2e",       # Often contains test setup/results, adjust if needed
    "coverage"   # Code coverage reports
    # Add other directories like 'test', 'docs' if you wish to exclude them
)
# --- End Configuration ---


Write-Host "------------------------------"
Write-Host "      EXPORTING SOURCE        "
Write-Host "------------------------------"
Write-Host "Target Root: $codeTextRoot"
Write-Host "Including Files: $($includeFileFilters -join ', ')"
Write-Host "Excluding Specific Files: $($excludeFileFilters -join ', ')"
Write-Host "Excluding Directories: $($excludeDirectories -join ', ')"
Write-Host "------------------------------"

# Ensure the main codeText folder exists
if (-not (Test-Path -Path $codeTextRoot -PathType Container)) {
    Write-Verbose "Creating root target directory: $codeTextRoot"
    New-Item -ItemType Directory -Path $codeTextRoot | Out-Null
}

# Process each specified top-level source directory
foreach ($rootPath in $sourceRoots) {
    if (Test-Path -Path $rootPath -PathType Container) {
        $sourceRootName = Split-Path $rootPath -Leaf
        $targetSubPath = Join-Path $codeTextRoot $sourceRootName

        Write-Host "`nProcessing Source Root: $rootPath"
        # Call the function for the current top-level source directory
        # Combine include filters with exclusions for specific files
        $effectiveFileFilters = $includeFileFilters | Where-Object { $_ -notin $excludeFileFilters }

        Export-SourceCode -SourcePath $rootPath -TargetPath $targetSubPath -FileFilters $effectiveFileFilters -ExcludeDirs $excludeDirectories -Verbose # Add -Verbose for detailed logs

    } else {
        Write-Warning "Source root path not found, skipping: $rootPath"
    }
}

Write-Host "------------------------------"
Write-Host "      EXPORT COMPLETE         "
Write-Host "------------------------------"
# You might want a corresponding clean script. Example:
# Write-Host "TO CLEAN: Remove-Item -Recurse -Force '$codeTextRoot'"
Write-Host "TO CLEAN AGAIN: .\scripts\clean.ps1 "
Write-Host "TO EXPORT CODE: .\scripts\export.ps1"