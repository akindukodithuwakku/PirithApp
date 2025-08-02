# Free APK Distribution Setup Guide

This guide explains how to set up free APK distribution using GitHub Actions and GitHub Releases.

## 🎯 Overview

Instead of using paid Firebase Storage, we use:
- **GitHub Actions** - Free CI/CD pipeline for building APKs
- **GitHub Releases** - Free file hosting for APK downloads
- **EAS Build** - Expo's cloud build service (free tier available)

## 🚀 How It Works

### 1. **Automatic Build Process**
When you push code to the `main` branch:
1. GitHub Actions triggers automatically
2. EAS builds the APK in the cloud
3. APK is downloaded and uploaded as a GitHub artifact
4. GitHub Release is created with the APK attached

### 2. **Website Integration**
The website automatically:
1. Fetches the latest release from GitHub API
2. Displays download buttons for APK files
3. Provides direct download links to GitHub Releases

## 📋 Required Setup

### GitHub Secrets
Add these secrets to your repository (`Settings > Secrets and variables > Actions`):

#### Required:
- `EXPO_TOKEN` - Your Expo access token

#### How to get EXPO_TOKEN:
1. Go to [Expo Account Settings](https://expo.dev/accounts/[username]/settings/access-tokens)
2. Create a new access token
3. Copy the token and add it as `EXPO_TOKEN` secret

### Repository Settings
1. **Enable GitHub Actions**: Go to `Settings > Actions > General`
2. **Allow all actions**: Select "Allow all actions and reusable workflows"
3. **Enable GitHub Pages**: Go to `Settings > Pages`

## 🔧 Workflow Features

### **Build Jobs:**
- **Android Build**: Creates APK using EAS Build
- **iOS Build**: Creates IPA using EAS Build (requires macOS runner)
- **Website Deployment**: Builds and deploys React website to GitHub Pages

### **Release Creation:**
- Automatically creates GitHub releases with version numbers
- Attaches APK and IPA files to releases
- Includes release notes and installation instructions

## 📱 Download Process

### **For Users:**
1. Visit your website: `https://akindukodithuwakku.github.io/PirithApp`
2. Click "Download APK" button
3. APK downloads directly from GitHub Releases
4. Install on Android device

### **For Developers:**
1. Push code to `main` branch
2. GitHub Actions builds automatically
3. New release is created with APK
4. Website updates automatically

## 🎨 Website Features

### **Download Section:**
- Shows latest release information
- Displays APK download button with file size
- Shows release date and version
- Includes installation instructions

### **Fallback Handling:**
- Gracefully handles when no releases are available
- Shows "Development in Progress" message
- Provides links to GitHub repository

## 📊 Benefits

### **Cost:**
- ✅ **Completely Free** - No paid services required
- ✅ **GitHub Actions** - 2000 minutes/month free
- ✅ **GitHub Releases** - Unlimited storage
- ✅ **GitHub Pages** - Free hosting

### **Reliability:**
- ✅ **Automatic builds** - No manual intervention needed
- ✅ **Version control** - Every release is tracked
- ✅ **Direct downloads** - Fast and reliable
- ✅ **Public access** - Anyone can download

### **Developer Experience:**
- ✅ **Simple setup** - Only one secret required
- ✅ **Automatic deployment** - Push code, get builds
- ✅ **Version management** - Automatic versioning
- ✅ **Release notes** - Built-in documentation

## 🔍 Troubleshooting

### **Common Issues:**

1. **Build fails:**
   - Check if `EXPO_TOKEN` is set correctly
   - Verify EAS project configuration
   - Check build logs in GitHub Actions

2. **Website not showing downloads:**
   - Ensure GitHub Pages is enabled
   - Check if releases exist in repository
   - Verify website build completed successfully

3. **APK not downloading:**
   - Check if APK was uploaded to release
   - Verify file permissions in GitHub
   - Test download link directly

### **Debug Steps:**
1. Check GitHub Actions logs
2. Verify secrets are set correctly
3. Test EAS build locally: `eas build --platform android --profile preview`
4. Check GitHub Releases page for files

## 📈 Next Steps

1. **Add EXPO_TOKEN** to GitHub secrets
2. **Push code** to trigger first build
3. **Check GitHub Actions** for build status
4. **Visit website** to test downloads
5. **Share download link** with users

## 🎉 Success Indicators

- ✅ GitHub Actions build completes successfully
- ✅ GitHub Release is created with APK
- ✅ Website shows download button
- ✅ APK downloads and installs correctly
- ✅ No errors in browser console

---

**Note:** This setup provides a completely free solution for APK distribution using GitHub's free tier services. 