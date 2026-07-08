$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$prefix = "http://127.0.0.1:5177/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "D-Coach PWA läuft auf $prefix"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $requestPath = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
        if ([string]::IsNullOrWhiteSpace($requestPath)) {
            $requestPath = "index.html"
        }

        $fullPath = [IO.Path]::GetFullPath((Join-Path $root $requestPath))
        $rootPath = [IO.Path]::GetFullPath($root)

        if (-not $fullPath.StartsWith($rootPath, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
            $context.Response.StatusCode = 404
            $bytes = [Text.Encoding]::UTF8.GetBytes("Not found")
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
            $context.Response.Close()
            continue
        }

        $ext = [IO.Path]::GetExtension($fullPath).ToLowerInvariant()
        $contentType = switch ($ext) {
            ".html" { "text/html; charset=utf-8" }
            ".css" { "text/css; charset=utf-8" }
            ".js" { "text/javascript; charset=utf-8" }
            ".json" { "application/json; charset=utf-8" }
            ".webmanifest" { "application/manifest+json; charset=utf-8" }
            ".svg" { "image/svg+xml" }
            default { "application/octet-stream" }
        }

        $bytes = [IO.File]::ReadAllBytes($fullPath)
        $context.Response.ContentType = $contentType
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        $context.Response.Close()
    }
}
finally {
    $listener.Stop()
}
