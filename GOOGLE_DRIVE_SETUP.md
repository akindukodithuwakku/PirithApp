# 🚀 Google Drive APK Distribution Setup Guide

## 📱 **Why Google Drive Instead of EAS Artifacts?**

- **EAS artifacts expire** after a certain time period
- **Google Drive links are permanent** and reliable
- **No storage costs** for small APK files
- **Easy sharing** with anyone
- **Direct download** without authentication

## 🔧 **Step-by-Step Setup**

### **1. Upload APK to Google Drive**

1. **Go to [Google Drive](https://drive.google.com)**
2. **Create a new folder** called "ThePirithApp-Releases"
3. **Upload your APK file** to this folder
4. **Right-click on the APK file** → "Share"
5. **Set sharing to "Anyone with the link can view"**
6. **Copy the sharing link**

### **2. Get the File ID from the Link**

Your Google Drive link will look like this:
```
https://drive.google.com/file/d/1ABC123DEF456GHI789/view?usp=sharing
```

The **File ID** is the part between `/d/` and `/view`:
```
File ID: 1ABC123DEF456GHI789
```

### **3. Create Direct Download Link**

Replace `YOUR_GOOGLE_DRIVE_FILE_ID` in these files with your actual file ID:

**Format:**
```
https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID
```

**Example:**
```
https://drive.google.com/uc?export=download&id=1ABC123DEF456GHI789
```

### **4. Files to Update**

After getting your file ID, update these files:

#### **A. `build-info.json`**
```json
{
  "buildId": "4ae2b552-ba7f-439a-9970-4502a7fcf6be",
  "downloadUrl": "https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID",
  "buildDate": "2025-08-02T21:16:06.350Z",
  "version": "1.0.0",
  "platform": "Android",
  "profile": "preview",
  "status": "finished"
}
```

#### **B. `.github/workflows/build-and-deploy.yml`**
```yaml
- name: Create Build Info for Website
  run: |
    npm run manual-build-info 4ae2b552-ba7f-439a-9970-4502a7fcf6be "https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID"
```

#### **C. `website/src/App.js`**
```javascript
downloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID"
```

## 🎯 **Alternative: GitHub Releases**

If you prefer GitHub Releases instead:

1. **Go to your GitHub repository**
2. **Click "Releases" → "Create a new release"**
3. **Upload your APK file**
4. **Copy the download link**
5. **Update the files above with the GitHub download link**

## 🔄 **Workflow Update**

After updating the file ID, run:

```bash
git add .
git commit -m "Update APK download link to Google Drive"
git push origin main
```

This will trigger the workflow and update your website with the new download link.

## ✅ **Benefits of This Approach**

- **Permanent download links** that never expire
- **No build failures** due to EAS authentication issues
- **Easy to update** when you have new APK versions
- **Reliable distribution** for your users
- **Cost-effective** solution

## 🚨 **Important Notes**

- **Keep your APK file** in the Google Drive folder
- **Don't delete or move** the file after sharing
- **Test the download link** before deploying
- **Update the link** whenever you release a new version

## 📞 **Need Help?**

If you encounter any issues:
1. **Check the file ID** is correct
2. **Verify sharing permissions** are set correctly
3. **Test the download link** in an incognito browser
4. **Check the workflow logs** for any errors
