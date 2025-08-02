#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Files that should trigger a rebuild
const REBUILD_TRIGGERS = [
  "app.json",
  "package.json",
  "eas.json",
  "App.js",
  "src/**/*",
  "assets/**/*",
];

// Files that don't need rebuilds
const IGNORE_FILES = [
  "README.md",
  "*.md",
  "website/**/*",
  ".github/**/*",
  "scripts/**/*",
  "build-info.json",
  "*.log",
];

function getChangedFiles() {
  try {
    // Get files changed in the last commit
    const output = execSync("git diff --name-only HEAD~1 HEAD", {
      encoding: "utf8",
    });
    return output
      .trim()
      .split("\n")
      .filter((line) => line.length > 0);
  } catch (error) {
    console.log("Could not get changed files, assuming rebuild needed");
    return ["force-rebuild"];
  }
}

function shouldRebuild(changedFiles) {
  // If no files changed, no rebuild needed
  if (changedFiles.length === 0) {
    return false;
  }

  // Check if any changed files match rebuild triggers
  for (const file of changedFiles) {
    // Skip ignored files
    if (
      IGNORE_FILES.some((pattern) => {
        if (pattern.includes("*")) {
          const regex = new RegExp(pattern.replace(/\*/g, ".*"));
          return regex.test(file);
        }
        return file === pattern;
      })
    ) {
      continue;
    }

    // Check if file matches rebuild triggers
    if (
      REBUILD_TRIGGERS.some((pattern) => {
        if (pattern.includes("**")) {
          const regex = new RegExp(pattern.replace(/\*\*/g, ".*"));
          return regex.test(file);
        }
        return file === pattern;
      })
    ) {
      console.log(`✅ Rebuild needed: ${file} changed`);
      return true;
    }
  }

  console.log("✅ No rebuild needed: Only non-critical files changed");
  return false;
}

function getLatestBuildInfo() {
  try {
    // Check if we have a recent build info file
    const buildInfoPath = path.join(__dirname, "..", "build-info.json");
    if (fs.existsSync(buildInfoPath)) {
      const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, "utf8"));
      const buildDate = new Date(buildInfo.buildDate);
      const now = new Date();
      const hoursSinceBuild = (now - buildDate) / (1000 * 60 * 60);

      // If build is less than 24 hours old, we can reuse it
      if (hoursSinceBuild < 24) {
        console.log(
          `✅ Found recent build (${hoursSinceBuild.toFixed(1)} hours old)`
        );
        return buildInfo;
      }
    }
  } catch (error) {
    console.log("Could not read existing build info");
  }

  return null;
}

function main() {
  console.log("🔍 Checking if rebuild is needed...");

  const changedFiles = getChangedFiles();
  console.log(`📝 Changed files: ${changedFiles.join(", ")}`);

  const needsRebuild = shouldRebuild(changedFiles);
  const existingBuild = getLatestBuildInfo();

  if (!needsRebuild && existingBuild) {
    console.log("✅ Using existing build - no rebuild needed");
    console.log(`📁 Build ID: ${existingBuild.buildId}`);
    console.log(`🔗 Download URL: ${existingBuild.downloadUrl}`);

    // Update build info with current timestamp
    const updatedBuildInfo = {
      ...existingBuild,
      buildDate: new Date().toISOString(),
      reused: true,
    };

    // Write updated build info
    const buildInfoPath = path.join(__dirname, "..", "build-info.json");
    fs.writeFileSync(buildInfoPath, JSON.stringify(updatedBuildInfo, null, 2));

    // Copy to website
    const websitePath = path.join(
      __dirname,
      "..",
      "website",
      "public",
      "build-info.json"
    );
    fs.writeFileSync(websitePath, JSON.stringify(updatedBuildInfo, null, 2));

    process.exit(0); // Success - no rebuild needed
  } else {
    console.log("🔄 Rebuild needed - proceeding with build");
    process.exit(1); // Indicates rebuild is needed
  }
}

main();
