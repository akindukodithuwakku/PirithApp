#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const CACHE_FILE = path.join(__dirname, "..", ".build-cache.json");
const MAX_BUILDS_PER_DAY = 30; // Expo free tier limit
const MAX_CACHE_AGE_DAYS = 7; // Keep builds for 7 days

function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
    }
  } catch (error) {
    console.log("Could not load build cache");
  }
  return { builds: [], lastReset: new Date().toISOString() };
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function resetDailyCount(cache) {
  const lastReset = new Date(cache.lastReset);
  const now = new Date();
  const daysSinceReset = (now - lastReset) / (1000 * 60 * 60 * 24);

  if (daysSinceReset >= 1) {
    console.log("🔄 Resetting daily build count");
    cache.builds = [];
    cache.lastReset = now.toISOString();
    saveCache(cache);
  }
}

function canBuild(cache) {
  resetDailyCount(cache);

  const today = new Date().toDateString();
  const todayBuilds = cache.builds.filter(
    (build) => new Date(build.date).toDateString() === today
  );

  const remaining = MAX_BUILDS_PER_DAY - todayBuilds.length;
  console.log(
    `📊 Build usage: ${todayBuilds.length}/${MAX_BUILDS_PER_DAY} (${remaining} remaining)`
  );

  return remaining > 0;
}

function recordBuild(cache, buildId) {
  cache.builds.push({
    id: buildId,
    date: new Date().toISOString(),
    type: "android",
  });

  // Clean old builds
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - MAX_CACHE_AGE_DAYS);

  cache.builds = cache.builds.filter((build) => new Date(build.date) > cutoff);

  saveCache(cache);
  console.log(`✅ Recorded build: ${buildId}`);
}

function getBuildStats(cache) {
  resetDailyCount(cache);

  const today = new Date().toDateString();
  const todayBuilds = cache.builds.filter(
    (build) => new Date(build.date).toDateString() === today
  );

  const thisWeek = cache.builds.filter((build) => {
    const buildDate = new Date(build.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return buildDate > weekAgo;
  });

  console.log("📊 Build Statistics:");
  console.log(`   Today: ${todayBuilds.length}/${MAX_BUILDS_PER_DAY}`);
  console.log(`   This week: ${thisWeek.length}`);
  console.log(`   Total cached: ${cache.builds.length}`);

  return {
    today: todayBuilds.length,
    thisWeek: thisWeek.length,
    total: cache.builds.length,
    remaining: MAX_BUILDS_PER_DAY - todayBuilds.length,
  };
}

function main() {
  const command = process.argv[2];
  const cache = loadCache();

  switch (command) {
    case "check":
      const canBuildNow = canBuild(cache);
      if (canBuildNow) {
        console.log("✅ Can build - quota available");
        process.exit(0);
      } else {
        console.log("❌ Cannot build - daily quota exceeded");
        process.exit(1);
      }
      break;

    case "record":
      const buildId = process.argv[3];
      if (!buildId) {
        console.log("❌ Please provide build ID");
        process.exit(1);
      }
      recordBuild(cache, buildId);
      break;

    case "stats":
      getBuildStats(cache);
      break;

    case "reset":
      cache.builds = [];
      cache.lastReset = new Date().toISOString();
      saveCache(cache);
      console.log("✅ Build cache reset");
      break;

    default:
      console.log("Usage:");
      console.log("  node scripts/manage-build-cache.js check");
      console.log("  node scripts/manage-build-cache.js record <build-id>");
      console.log("  node scripts/manage-build-cache.js stats");
      console.log("  node scripts/manage-build-cache.js reset");
      break;
  }
}

main();
