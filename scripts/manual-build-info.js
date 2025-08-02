#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get build ID from command line argument or use default
const buildId = process.argv[2] || "4ae2b552-ba7f-439a-9970-4502a7fcf6be";

// Get download URL from command line argument or use default
const downloadUrl = process.argv[3] || "https://expo.dev/artifacts/eas/afkxRf39uzGFiLHocYVC17.apk";

// Create build info object
const buildInfo = {
  buildId: buildId,
  downloadUrl: downloadUrl,
  buildDate: new Date().toISOString(),
  version: process.env.GITHUB_RUN_NUMBER || "1.0.0",
  platform: "Android",
  profile: "preview",
  status: "finished",
  logsUrl: `https://expo.dev/accounts/akindu2002/projects/thepirithapp/builds/${buildId}`
};

// Write to build-info.json
const buildInfoPath = path.join(__dirname, "..", "build-info.json");
fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));

// Also copy to website public folder
const websitePath = path.join(
  __dirname,
  "..",
  "website",
  "public",
  "build-info.json"
);
fs.writeFileSync(websitePath, JSON.stringify(buildInfo, null, 2));

console.log("✅ Manual build info created successfully!");
console.log(`📁 Build ID: ${buildId}`);
console.log(`🔗 Download URL: ${buildInfo.downloadUrl}`);
console.log(`📄 Files created:`);
console.log(`   - ${buildInfoPath}`);
console.log(`   - ${websitePath}`);
console.log("");
console.log("💡 Usage: node scripts/manual-build-info.js <build-id> [download-url]");
console.log(
  "💡 Example: node scripts/manual-build-info.js 4ae2b552-ba7f-439a-9970-4502a7fcf6be https://expo.dev/artifacts/eas/afkxRf39uzGFiLHocYVC17.apk"
);
