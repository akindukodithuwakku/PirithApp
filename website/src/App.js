import React, { useState, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  CloudArrowDownIcon,
  InformationCircleIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [buildInfo, setBuildInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuildInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchBuildInfo = async () => {
    try {
      const response = await fetch("/build-info.json");
      if (response.ok) {
        const data = await response.json();
        setBuildInfo(data);
        console.log("Build info loaded:", data);
      } else {
        console.log("No build info found, using fallback");
        // Fallback build info
        setBuildInfo({
          buildId: "4ae2b552-ba7f-439a-9970-4502a7fcf6be",
          downloadUrl:
            "https://drive.google.com/uc?export=download&id=1x21c_YbxtzOERDKeG3GgCwhWmZDvoxbL",
          buildDate: new Date().toISOString(),
          version: "1.0.0",
          platform: "Android",
          profile: "preview",
          status: "finished",
        });
      }
    } catch (error) {
      console.error("Error fetching build info:", error);
      // Fallback build info
      setBuildInfo({
        buildId: "4ae2b552-ba7f-439a-9970-4502a7fcf6be",
        downloadUrl:
          "https://drive.google.com/uc?export=download&id=1x21c_YbxtzOERDKeG3GgCwhWmZDvoxbL",
        buildDate: new Date().toISOString(),
        version: "1.0.0",
        platform: "Android",
        profile: "preview",
        status: "finished",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (buildInfo && buildInfo.downloadUrl) {
      // Track download attempt
      console.log("Download initiated for version:", buildInfo.version);
      window.open(buildInfo.downloadUrl, "_blank");
    }
  };

  const features = [
    {
      icon: BookOpenIcon,
      title: "Pirith Collection",
      description:
        "Complete collection of Buddhist Pirith chants in Pali and Sinhala languages",
    },
    {
      icon: HeartIcon,
      title: "Suthra Content",
      description:
        "Sacred Buddhist discourses and teachings for daily practice",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Optimized",
      description: "Beautiful, responsive design optimized for mobile devices",
    },
    {
      icon: ShieldCheckIcon,
      title: "Online Access",
      description: "Access content directly from the web for instant viewing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-buddhist-50 to-buddhist-100">
      {/* Header */}
      <header className="buddhist-gradient text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ThePirithApp
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your digital companion for Buddhist Pirith chants and Suthra
              teachings
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Download Section - ENHANCED AND PROMINENT */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              📱 Download ThePirithApp APK
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest Android APK version for direct installation on your
              device
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-buddhist-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">
                Loading download information...
              </p>
            </div>
          ) : buildInfo ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border-2 border-buddhist-200">
              {/* Version and Status Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Latest Version Available
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Version {buildInfo.version}
                </h3>
                <p className="text-gray-600 mb-2">
                  Built on{" "}
                  {new Date(buildInfo.buildDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-500">
                  Platform: {buildInfo.platform} • Profile: {buildInfo.profile}
                </p>
              </div>

              {/* Android Download - ENHANCED */}
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <DevicePhoneMobileIcon className="w-10 h-10 text-green-600 mr-3" />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">
                        Android APK Download
                      </h4>
                      <p className="text-green-700 font-medium">
                        Ready for Installation
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg">
                    Download the APK file for direct installation on Android
                    devices. This is the official release from our build system.
                  </p>

                  {/* Download Button - ENHANCED */}
                  <button
                    onClick={handleDownload}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-8 rounded-xl flex items-center justify-center transition-all duration-200 text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <CloudArrowDownIcon className="w-7 h-7 mr-3" />
                    Download APK v{buildInfo.version}
                  </button>

                  {/* Build Information */}
                  <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-600">
                          Build ID:
                        </span>
                        <p className="text-gray-800 font-mono">
                          {buildInfo.buildId}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">
                          Status:
                        </span>
                        <p className="text-green-600 font-medium capitalize">
                          {buildInfo.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Installation Instructions - ENHANCED */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center text-lg">
                  <InformationCircleIcon className="w-6 h-6 mr-2" />
                  📲 Installation Instructions
                </h4>
                <div className="text-blue-800 space-y-3">
                  <div className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong>Download:</strong> Click the download button above
                      to get the APK file
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong>Enable Unknown Sources:</strong> Go to Settings →
                      Security → Unknown Sources (enable)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    <p>
                      <strong>Install:</strong> Open the downloaded APK file and
                      follow the prompts
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      4
                    </span>
                    <p>
                      <strong>Enjoy:</strong> Launch ThePirithApp and explore
                      the Buddhist texts
                    </p>
                  </div>
                </div>

                {/* Important Note */}
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> This APK is built for Android
                      devices. Make sure to download from this official website
                      only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternative Download Links */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-3">
                  Need help? Check our other resources:
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/akindukodithuwakku/PirithApp/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buddhist-600 hover:text-buddhist-700 font-medium hover:underline"
                  >
                    GitHub Releases
                  </a>
                  <a
                    href="https://expo.dev/accounts/akindu2002/projects/thepirithapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-buddhist-600 hover:text-buddhist-700 font-medium hover:underline"
                  >
                    Expo Builds
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600">
                Download information not available at the moment.
              </p>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About ThePirithApp
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ThePirithApp is a comprehensive mobile application designed to
              bring the sacred Buddhist Pirith chants and Suthra teachings to
              your fingertips. Whether you're a practicing Buddhist, a student
              of Buddhist philosophy, or simply interested in these ancient
              texts, our app provides easy access to these spiritual resources
              in both Pali and Sinhala languages.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-buddhist-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              App Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the rich collection of Buddhist texts and teachings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Pirith Collection
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Angulimala Piritha</li>
                <li>• Budhu Guna Piritha</li>
                <li>• Chanda Piritha</li>
                <li>• Dajagga Piritha</li>
                <li>• Jaya Piritha</li>
                <li>• And many more...</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Suthra Content
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Chakkawaththi Suthra</li>
                <li>• Girimananda Suthra</li>
                <li>• Parabawa Suthra</li>
                <li>• Rathnamali Suthra</li>
                <li>• Wasala Suthra</li>
                <li>• Three Suthras collection</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Special Features
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Bilingual content (Pali & Sinhala)</li>
                <li>• Online viewing capability</li>
                <li>• Beautiful, intuitive interface</li>
                <li>• Search functionality</li>
                <li>• Bookmark favorite texts</li>
                <li>• Dark mode support</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">ThePirithApp</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Bringing the sacred Buddhist texts and teachings to the digital age,
            making them accessible to everyone, everywhere.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/akindukodithuwakku/PirithApp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/akindukodithuwakku/PirithApp/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              All Releases
            </a>
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            © 2024 ThePirithApp. Built with ❤️ for the Buddhist community.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
