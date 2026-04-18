$files = Get-ChildItem "src\components\*.tsx"
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    $c = $c -replace 'text-\[#5c4f3d\] dark:text-\[#d7ccbb\]', 'text-accent-text'
    $c = $c -replace 'hover:text-\[#5c4f3d\] dark:hover:text-\[#d7ccbb\]', 'hover:text-accent-text'
    $c = $c -replace 'group-hover:text-\[#5c4f3d\] dark:group-hover:text-\[#d7ccbb\]', 'group-hover:text-accent-text'
    Set-Content $f.FullName $c -NoNewline
    Write-Host "Updated: $($f.Name)"
}
Write-Host "All done!"
