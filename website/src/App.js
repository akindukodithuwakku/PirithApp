import React, { useState, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CloudArrowDownIcon,
  InformationCircleIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [latestRelease, setLatestRelease] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestRelease();
  }, []);

  const fetchLatestRelease = async () => {
    try {
      const repo =
        process.env.REACT_APP_GITHUB_REPO || "akindukodithuwakku/PirithApp";
      const response = await fetch(
        `https://api.github.com/repos/${repo}/releases/latest`
      );
      const data = await response.json();
      setLatestRelease(data);
    } catch (error) {
      console.error("Error fetching latest release:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (asset) => {
    window.open(asset.browser_download_url, "_blank");
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
      title: "Offline Access",
      description: "Download content for offline reading and listening",
    },
  ];

  const downloadAssets = latestRelease?.assets || [];

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

        {/* Download Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Download ThePirithApp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your platform and download the latest version of
              ThePirithApp
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-buddhist-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading latest release...</p>
            </div>
          ) : latestRelease ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Latest Release: {latestRelease.tag_name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Released on{" "}
                  {new Date(latestRelease.published_at).toLocaleDateString()}
                </p>
                <div className="bg-buddhist-50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    What's New:
                  </h4>
                  <div
                    className="text-gray-600 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: latestRelease.body.replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Android Download */}
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-buddhist-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <DevicePhoneMobileIcon className="w-8 h-8 text-green-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">
                      Android
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Download the APK file for direct installation on Android
                    devices
                  </p>
                  {downloadAssets
                    .filter((asset) => asset.name.includes(".apk"))
                    .map((asset, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(asset)}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <CloudArrowDownIcon className="w-5 h-5 mr-2" />
                        Download APK ({Math.round(asset.size / 1024 / 1024)}MB)
                      </button>
                    ))}
                </div>

                {/* iOS Download */}
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-buddhist-300 transition-colors">
                  <div className="flex items-center mb-4">
                    <ComputerDesktopIcon className="w-8 h-8 text-blue-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">iOS</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Download the IPA file for iOS devices (requires sideloading)
                  </p>
                  {downloadAssets
                    .filter((asset) => asset.name.includes(".ipa"))
                    .map((asset, index) => (
                      <button
                        key={index}
                        onClick={() => handleDownload(asset)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <CloudArrowDownIcon className="w-5 h-5 mr-2" />
                        Download IPA ({Math.round(asset.size / 1024 / 1024)}MB)
                      </button>
                    ))}
                </div>
              </div>

              {/* Installation Instructions */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <InformationCircleIcon className="w-5 h-5 mr-2" />
                  Installation Instructions
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">
                      Android:
                    </h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Download the APK file</li>
                      <li>
                        • Enable "Install from unknown sources" in settings
                      </li>
                      <li>
                        • Open the APK file and follow installation prompts
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">iOS:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Requires a developer account or TestFlight</li>
                      <li>• Use tools like AltStore or Sideloadly</li>
                      <li>• Follow the specific sideloading instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600">
                No releases available at the moment.
              </p>
            </div>
          )}
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
                <li>• Offline reading capability</li>
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
