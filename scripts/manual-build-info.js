#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get build ID from command line argument or use default
const buildId = process.argv[2] || "986805a3-1e51-4c9e-82ff-8b89f575a6e9";

// Create build info object
const buildInfo = {
  buildId: buildId,
  downloadUrl: `https://expo.dev/artifacts/eas/${buildId}.apk`,
  buildDate: new Date().toISOString(),
  version: process.env.GITHUB_RUN_NUMBER || "manual",
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
console.log("💡 Usage: node scripts/manual-build-info.js <build-id>");
console.log(
  "💡 Example: node scripts/manual-build-info.js 986805a3-1e51-4c9e-82ff-8b89f575a6e9"
);
