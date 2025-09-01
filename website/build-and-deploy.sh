#!/bin/bash

# ThePirithApp Website Build and Deploy Script
# This script builds the website and prepares it for deployment

echo "🚀 Building ThePirithApp Website..."

# Navigate to website directory
cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the website
echo "🔨 Building website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build files are in the 'build' directory"
    echo "🌐 To deploy:"
    echo "   1. Upload the contents of 'build' directory to your web server"
    echo "   2. Or use GitHub Pages, Netlify, Vercel, etc."
    echo ""
    echo "📱 The website is now ready to serve APK downloads!"
    echo "🔗 APK Download URL: https://drive.google.com/uc?export=download&id=1x21c_YbxtzOERDKeG3GgCwhWmZDvoxbL"
else
    echo "❌ Build failed!"
    exit 1
fi
