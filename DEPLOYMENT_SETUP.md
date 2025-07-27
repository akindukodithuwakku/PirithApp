# ThePirithApp - Automated Deployment Setup

This guide will help you set up automated builds and deployments for ThePirithApp using GitHub Actions.

## 🚀 Overview

The automated deployment system includes:

- **GitHub Actions Workflow**: Automatically builds APK and AAB files for Android and IPA for iOS
- **React Website**: A beautiful download page that automatically updates with new releases
- **GitHub Releases**: Automatic release creation with download links
- **GitHub Pages**: Deployed website for easy access

## 📋 Prerequisites

1. **Expo Account**: You need an Expo account for EAS builds
2. **GitHub Repository**: Your app should be in a GitHub repository
3. **GitHub Secrets**: You'll need to configure some secrets

## 🔧 Setup Instructions

### 1. Expo Setup

First, install EAS CLI and login to your Expo account:

```bash
npm install -g @expo/cli eas-cli
eas login
```

### 2. Configure EAS Build

Run the following command to configure EAS builds:

```bash
eas build:configure
```

This will create the `eas.json` file with build profiles.

### 3. GitHub Secrets Configuration

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add the following secrets:

#### Required Secrets:

- **`EXPO_TOKEN`**: Your Expo access token
  - Get it from: https://expo.dev/accounts/[username]/settings/access-tokens
  - Create a new token with appropriate permissions

#### Optional Secrets:

- **`GITHUB_TOKEN`**: Automatically provided by GitHub Actions
- **`REACT_APP_GITHUB_REPO`**: Your repository name (e.g., `username/repo-name`)

### 4. Enable GitHub Pages

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy to GitHub Pages

### 5. Repository Settings

Make sure your repository has the following settings:

- **Actions**: Enabled
- **Pages**: Enabled (set to GitHub Actions)
- **Releases**: Enabled

## 🔄 How It Works

### Build Process

1. **Trigger**: Every push to `main` branch triggers the workflow
2. **Android Build**:
   - Builds APK (for direct installation)
   - Builds AAB (for Play Store submission)
3. **iOS Build**:
   - Builds IPA (for sideloading)
4. **Release Creation**:
   - Creates a new GitHub release
   - Uploads all build artifacts
5. **Website Deployment**:
   - Builds and deploys the React website
   - Updates download links automatically

### File Structure

```
ThePirithApp/
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml    # GitHub Actions workflow
├── website/                        # React download website
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── eas.json                        # EAS build configuration
├── app.json                        # Expo app configuration
└── package.json                    # Main app dependencies
```

## 🌐 Website Features

The React website includes:

- **Automatic Release Detection**: Fetches latest release from GitHub API
- **Platform-Specific Downloads**: Separate buttons for Android APK and iOS IPA
- **Installation Instructions**: Clear guidance for both platforms
- **App Content Preview**: Shows what's included in the app
- **Responsive Design**: Works on all devices
- **Beautiful UI**: Modern design with Tailwind CSS

## 📱 Download Links

Once deployed, users can access:

- **Website**: `https://[username].github.io/[repo-name]`
- **Direct Downloads**: Available on the website and GitHub releases page
- **QR Codes**: Can be generated for easy mobile access

## 🔧 Customization

### Website Customization

Edit `website/src/App.js` to customize:

- App description and features
- Color scheme and branding
- Content sections
- Download instructions

### Build Configuration

Edit `.github/workflows/build-and-deploy.yml` to:

- Change build triggers
- Modify build steps
- Add additional platforms
- Customize release notes

### EAS Configuration

Edit `eas.json` to:

- Modify build profiles
- Change build settings
- Add development builds
- Configure submission settings

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:

   - Check Expo token is valid
   - Verify EAS configuration
   - Check app.json settings

2. **Website Not Updating**:

   - Verify GitHub Pages is enabled
   - Check workflow permissions
   - Ensure secrets are configured

3. **Download Links Not Working**:
   - Verify release was created successfully
   - Check file permissions
   - Ensure assets were uploaded

### Debug Steps

1. Check GitHub Actions logs for errors
2. Verify all secrets are configured
3. Test EAS builds locally first
4. Check repository permissions

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all prerequisites are met
3. Ensure all secrets are configured correctly
4. Test the build process locally

## 🎉 Success!

Once everything is set up:

- Every push to `main` will trigger an automatic build
- New releases will be created automatically
- The website will update with latest download links
- Users can easily download the latest version

Your app will have a professional deployment pipeline that keeps users updated with the latest versions!
