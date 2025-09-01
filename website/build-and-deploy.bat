@echo off
REM ThePirithApp Website Build and Deploy Script for Windows
REM This script builds the website and prepares it for deployment

echo 🚀 Building ThePirithApp Website...

REM Navigate to website directory
cd /d "%~dp0"

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the website
echo 🔨 Building website...
npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    echo.
    echo 📁 Build files are in the 'build' directory
    echo 🌐 To deploy:
    echo    1. Upload the contents of 'build' directory to your web server
    echo    2. Or use GitHub Pages, Netlify, Vercel, etc.
    echo.
    echo 📱 The website is now ready to serve APK downloads!
    echo 🔗 APK Download URL: https://drive.google.com/uc?export=download&id=1x21c_YbxtzOERDKeG3GgCwhWmZDvoxbL
) else (
    echo ❌ Build failed!
    pause
    exit /b 1
)

pause
