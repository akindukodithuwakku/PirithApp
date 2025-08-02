# ThePirithApp Build System

This document describes the automated build system for ThePirithApp, which creates separate builds for Android and iOS platforms and displays them on the website.

## 🏗️ Build Workflows

### 1. Android Build Workflow (`build-android.yml`)

**Purpose**: Builds Android APK files using EAS Build

**Triggers**:

- Push to `main` branch (when `src/`, `app.json`, `package.json`, or `eas.json` changes)
- Manual workflow dispatch

**Features**:

- ✅ Creates Android APK using EAS Build
- ✅ Generates build info with download URL
- ✅ Creates GitHub release with download link
- ✅ Updates website with Android build info
- ✅ Supports preview and production builds

**Output**:

- Android APK file (`.apk`)
- Build info file (`android-build-info.json`)
- GitHub release with download link

### 2. iOS Build Workflow (`build-ios.yml`)

**Purpose**: Builds iOS IPA files using EAS Build

**Triggers**:

- Push to `main` branch (when `src/`, `app.json`, `package.json`, or `eas.json` changes)
- Manual workflow dispatch

**Features**:

- ✅ Creates iOS IPA using EAS Build
- ✅ Generates build info with download URL
- ✅ Creates GitHub release with download link
- ✅ Updates website with iOS build info
- ✅ Supports preview and production builds

**Output**:

- iOS IPA file (`.ipa`)
- Build info file (`ios-build-info.json`)
- GitHub release with download link

### 3. Combined Build Workflow (`build-all-platforms.yml`)

**Purpose**: Orchestrates both Android and iOS builds

**Triggers**:

- Push to `main` branch (when `src/`, `app.json`, `package.json`, or `eas.json` changes)
- Manual workflow dispatch

**Features**:

- ✅ Triggers both Android and iOS builds
- ✅ Updates website with latest build info
- ✅ Deploys updated website to GitHub Pages

### 4. Website Deployment Workflow (`build-and-deploy.yml`)

**Purpose**: Deploys the website with build information

**Features**:

- ✅ Builds and deploys website to GitHub Pages
- ✅ Creates fallback build info files
- ✅ Handles both Android and iOS build info

## 🌐 Website Integration

### Build Info Files

The website uses separate build info files for each platform:

- `android-build-info.json` - Android build information
- `ios-build-info.json` - iOS build information

### Build Info Structure

```json
{
  "buildId": "android-1",
  "downloadUrl": "https://expo.dev/artifacts/eas/android-1.apk",
  "buildDate": "2024-12-19T10:00:00.000Z",
  "version": "1.0.0",
  "platform": "android"
}
```

### Website Features

- ✅ **Dual Platform Support**: Shows both Android and iOS download options
- ✅ **Real-time Build Info**: Displays latest build information
- ✅ **Fallback Support**: Shows fallback info if builds are not available
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Installation Instructions**: Platform-specific installation guides

## 🚀 How to Use

### Manual Builds

1. **Go to GitHub Actions** in your repository
2. **Select the desired workflow**:
   - `Build Android App` for Android only
   - `Build iOS App` for iOS only
   - `Build All Platforms` for both
3. **Click "Run workflow"**
4. **Choose build type** (preview or production)
5. **Click "Run workflow"**

### Automatic Builds

Builds are automatically triggered when you push changes to:

- `src/` directory (app source code)
- `app.json` (Expo configuration)
- `package.json` (dependencies)
- `eas.json` (EAS build configuration)

### Build Types

- **Preview**: Development builds for testing
- **Production**: Release builds for distribution

## 📱 Download Links

### Website Display

The website shows download links in a side-by-side layout:

```
┌─────────────────┐ ┌─────────────────┐
│   Android APK   │ │    iOS IPA      │
│                 │ │                 │
│ Download APK    │ │ Download IPA    │
│ v1.0.0          │ │ v1.0.0          │
│                 │ │                 │
│ Build ID:       │ │ Build ID:       │
│ android-1       │ │ ios-1           │
└─────────────────┘ └─────────────────┘
```

### Direct Links

- **Android**: `https://expo.dev/artifacts/eas/{build-id}.apk`
- **iOS**: `https://expo.dev/artifacts/eas/{build-id}.ipa`

## 🔧 Configuration

### Required Secrets

Set these secrets in your GitHub repository:

- `EXPO_TOKEN`: Your Expo access token for EAS builds

### EAS Configuration

Ensure your `eas.json` has the correct build profiles:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "buildType": "archive"
      }
    },
    "production": {
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "buildType": "archive"
      }
    }
  }
}
```

## 📊 Build Status

### Monitoring Builds

1. **GitHub Actions**: Check the Actions tab for build status
2. **EAS Dashboard**: Monitor builds at expo.dev
3. **Website**: View latest build info on the website

### Build Artifacts

- **APK/IPA files**: Available for download from EAS
- **Build info**: Stored in website/public/
- **GitHub releases**: Created automatically with download links

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**: Check EAS token and configuration
2. **Website Not Updated**: Verify build info files are created
3. **Download Links Broken**: Ensure EAS artifacts are accessible

### Debug Steps

1. Check GitHub Actions logs
2. Verify EAS build status
3. Confirm build info files exist
4. Test website locally

## 📈 Future Enhancements

### Planned Features

- [ ] **TestFlight Integration**: Automatic TestFlight uploads
- [ ] **App Store Connect**: Direct App Store submissions
- [ ] **Build Notifications**: Slack/Discord notifications
- [ ] **Build Analytics**: Track build times and success rates
- [ ] **Rollback Support**: Easy rollback to previous builds

### Performance Optimizations

- [ ] **Parallel Builds**: Run Android and iOS builds simultaneously
- [ ] **Caching**: Cache dependencies for faster builds
- [ ] **Incremental Builds**: Only rebuild changed components

## 📞 Support

For issues with the build system:

1. Check the GitHub Actions logs
2. Review this documentation
3. Check EAS build status
4. Contact the development team

---

**Last Updated**: December 19, 2024
**Version**: 1.0.0
