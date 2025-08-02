# Firebase Storage Setup for APK Downloads

This guide will help you set up Firebase Storage to host APK files for direct downloads from your website.

## Prerequisites

1. A Firebase project
2. Firebase Storage enabled
3. Firebase CLI installed

## Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Firebase Storage in your project

### 2. Configure Firebase Storage Rules

Update your Firebase Storage rules to allow public read access for APK files:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read access to APK files
    match /apks/{fileName} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Deny all other access
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

### 3. Get Firebase Configuration

1. Go to Project Settings > General
2. Scroll down to "Your apps" section
3. Add a web app if you haven't already
4. Copy the Firebase configuration object

### 4. Set Environment Variables

Create a `.env` file in the `website` directory with your Firebase configuration:

```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# GitHub Repository
REACT_APP_GITHUB_REPO=akindukodithuwakku/PirithApp
```

### 5. GitHub Secrets Setup

Add these secrets to your GitHub repository:

1. Go to your repository Settings > Secrets and variables > Actions
2. Add the following secrets:

#### Required Secrets:

- `FIREBASE_PROJECT_ID`: Your Firebase project ID
- `FIREBASE_SERVICE_ACCOUNT_KEY`: Your Firebase service account JSON key
- `FIREBASE_TOKEN`: Firebase CLI token

#### How to get Firebase Service Account Key:

1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate new private key"
3. Download the JSON file
4. Copy the entire JSON content and add it as `FIREBASE_SERVICE_ACCOUNT_KEY` secret

#### How to get Firebase CLI Token:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Get token: `firebase login:ci`
4. Copy the token and add it as `FIREBASE_TOKEN` secret

### 6. Test the Setup

1. Build and deploy your website
2. Check if the APK download section shows Firebase APK when available
3. Test the download functionality

## File Structure

APK files will be stored in Firebase Storage with this structure:

```
apks/
├── ThePirithApp-v1.0.0.apk
├── ThePirithApp-v1.1.0.apk
└── ThePirithApp-v2.0.0.apk
```

## Features

- ✅ Automatic APK upload from GitHub Actions
- ✅ Version-based file naming
- ✅ Public download links
- ✅ Fallback to GitHub releases
- ✅ Loading states and error handling

## Troubleshooting

### Common Issues:

1. **Firebase not initialized**: Check if environment variables are set correctly
2. **Permission denied**: Verify Firebase Storage rules allow public read access
3. **Upload failed**: Check if Firebase service account has proper permissions
4. **Download not working**: Verify the APK file exists in Firebase Storage

### Debug Steps:

1. Check browser console for Firebase errors
2. Verify Firebase configuration in `src/firebase.js`
3. Test Firebase service functions in `src/services/firebaseService.js`
4. Check GitHub Actions logs for upload errors
