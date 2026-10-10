Add-Type -AssemblyName System.Drawing

$src = 'C:\Users\Kashmir Computer\.gemini\antigravity\brain\b951aa1a-3727-4227-94ad-a16647ceb8ee\.user_uploaded\media_1790181705965.jpg'
$destFull = 'C:\Users\Kashmir Computer\.gemini\antigravity\scratch\cyber-portfolio\assets\bilal.jpg'
$destHeadshot = 'C:\Users\Kashmir Computer\.gemini\antigravity\scratch\cyber-portfolio\assets\bilal_headshot.jpg'

# 1. Copy full photo
Copy-Item $src $destFull -Force

# 2. Crop face and hand (450x450 square)
$img = [System.Drawing.Image]::FromFile($src)
$cropRect = New-Object System.Drawing.Rectangle(160, 220, 450, 450)
$bmp = New-Object System.Drawing.Bitmap(450, 450)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, 450, 450)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save($destHeadshot, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()

# 3. Create Base64 strings for photoData.js
$bytesFull = [System.IO.File]::ReadAllBytes($destFull)
$b64Full = "data:image/jpeg;base64," + [Convert]::ToBase64String($bytesFull)

$bytesHeadshot = [System.IO.File]::ReadAllBytes($destHeadshot)
$b64Headshot = "data:image/jpeg;base64," + [Convert]::ToBase64String($bytesHeadshot)

$jsContent = @"
// Automatically generated Base64 assets for instant zero-server execution
window.BILAL_PHOTO_BASE64 = "$b64Full";
window.BILAL_HEADSHOT_BASE64 = "$b64Headshot";
"@

[System.IO.File]::WriteAllText('C:\Users\Kashmir Computer\.gemini\antigravity\scratch\cyber-portfolio\assets\photoData.js', $jsContent)
Write-Host "Images and photoData.js successfully created!"
