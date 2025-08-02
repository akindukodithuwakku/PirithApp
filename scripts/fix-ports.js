const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

async function fixPorts() {
  console.log("🔧 Fixing React Native port conflicts...\n");

  try {
    // Check for processes using port 8081
    console.log("📡 Checking port 8081...");
    const { stdout: port8081 } = await execAsync(
      "netstat -ano | findstr :8081"
    );

    if (port8081.trim()) {
      console.log("⚠️  Port 8081 is in use. Found processes:");
      console.log(port8081);

      // Extract PIDs
      const lines = port8081.split("\n").filter((line) => line.trim());
      const pids = new Set();

      lines.forEach((line) => {
        const match = line.match(/\s+(\d+)$/);
        if (match && match[1] !== "0") {
          pids.add(match[1]);
        }
      });

      if (pids.size > 0) {
        console.log("\n🔄 Killing processes using port 8081...");
        for (const pid of pids) {
          try {
            await execAsync(`taskkill /PID ${pid} /F`);
            console.log(`✅ Killed process ${pid}`);
          } catch (error) {
            console.log(`⚠️  Could not kill process ${pid}: ${error.message}`);
          }
        }
      }
    } else {
      console.log("✅ Port 8081 is free");
    }

    // Check for processes using port 8082
    console.log("\n📡 Checking port 8082...");
    try {
      const { stdout: port8082 } = await execAsync(
        "netstat -ano | findstr :8082"
      );
      if (port8082.trim()) {
        console.log(
          "⚠️  Port 8082 is also in use. Consider using a different port."
        );
      } else {
        console.log("✅ Port 8082 is free");
      }
    } catch (error) {
      console.log("✅ Port 8082 is free");
    }

    console.log("\n🎉 Port cleanup completed!");
    console.log("💡 You can now run: npm start");
    console.log("💡 Or use a specific port: npm start -- --port 8082");
  } catch (error) {
    console.error("❌ Error fixing ports:", error.message);
  }
}

// Run the fix
fixPorts();
