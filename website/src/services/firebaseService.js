import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

class FirebaseService {
  // Upload APK file to Firebase Storage
  async uploadAPK(file, version) {
    try {
      const fileName = `apks/ThePirithApp-v${version}.apk`;
      const storageRef = ref(storage, fileName);

      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return {
        success: true,
        downloadURL,
        fileName: snapshot.ref.name,
        version,
      };
    } catch (error) {
      console.error("Error uploading APK:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Get all available APK files
  async getAvailableAPKs() {
    try {
      const apksRef = ref(storage, "apks");
      const result = await listAll(apksRef);

      const apkFiles = [];

      for (const itemRef of result.items) {
        const downloadURL = await getDownloadURL(itemRef);
        const fileName = itemRef.name;

        // Extract version from filename (e.g., "ThePirithApp-v1.0.0.apk")
        const versionMatch = fileName.match(/ThePirithApp-v(.+)\.apk/);
        const version = versionMatch ? versionMatch[1] : "unknown";

        apkFiles.push({
          name: fileName,
          version,
          downloadURL,
          size: "Unknown", // Firebase doesn't provide file size in listAll
          uploadedAt: new Date().toISOString(), // We'll need to store this separately
        });
      }

      // Sort by version (newest first)
      apkFiles.sort((a, b) => {
        const versionA = a.version.split(".").map(Number);
        const versionB = b.version.split(".").map(Number);

        for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
          const numA = versionA[i] || 0;
          const numB = versionB[i] || 0;
          if (numA !== numB) {
            return numB - numA; // Descending order
          }
        }
        return 0;
      });

      return {
        success: true,
        apks: apkFiles,
      };
    } catch (error) {
      console.error("Error fetching APKs:", error);
      return {
        success: false,
        error: error.message,
        apks: [],
      };
    }
  }

  // Get the latest APK
  async getLatestAPK() {
    const result = await this.getAvailableAPKs();
    if (result.success && result.apks.length > 0) {
      return {
        success: true,
        apk: result.apks[0], // First one is the latest due to sorting
      };
    }
    return {
      success: false,
      error: "No APK files found",
    };
  }
}

export default new FirebaseService();
