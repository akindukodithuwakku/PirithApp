import React, { useState, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  CloudArrowDownIcon,
  InformationCircleIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [androidBuildInfo, setAndroidBuildInfo] = useState(null);
  const [iosBuildInfo, setIosBuildInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuildInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchBuildInfo = async () => {
    try {
      // Fetch Android build info
      const androidResponse = await fetch("/android-build-info.json");
      if (androidResponse.ok) {
        const androidData = await androidResponse.json();
        setAndroidBuildInfo(androidData);
        console.log("Android build info loaded:", androidData);
      } else {
        console.log("No Android build info found, using fallback");
        setAndroidBuildInfo({
          buildId: "c1faef92-05b4-45ea-be90-58f434f377e0",
          downloadUrl:
            "https://expo.dev/artifacts/eas/c1faef92-05b4-45ea-be90-58f434f377e0.apk",
          buildDate: new Date().toISOString(),
          version: "1.0.1",
          platform: "android",
        });
      }

      // Fetch iOS build info
      const iosResponse = await fetch("/ios-build-info.json");
      if (iosResponse.ok) {
        const iosData = await iosResponse.json();
        setIosBuildInfo(iosData);
        console.log("iOS build info loaded:", iosData);
      } else {
        console.log("No iOS build info found, using fallback");
        setIosBuildInfo({
          buildId: "ios-1",
          downloadUrl: "https://expo.dev/artifacts/eas/ios-1.ipa",
          buildDate: new Date().toISOString(),
          version: "1.0.0",
          platform: "ios",
        });
      }
    } catch (error) {
      console.error("Error fetching build info:", error);
      // Fallback build info
      setAndroidBuildInfo({
        buildId: "c1faef92-05b4-45ea-be90-58f434f377e0",
        downloadUrl:
          "https://expo.dev/artifacts/eas/c1faef92-05b4-45ea-be90-58f434f377e0.apk",
        buildDate: new Date().toISOString(),
        version: "1.0.1",
        platform: "android",
      });
      setIosBuildInfo({
        buildId: "ios-1",
        downloadUrl: "https://expo.dev/artifacts/eas/ios-1.ipa",
        buildDate: new Date().toISOString(),
        version: "1.0.0",
        platform: "ios",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (platform) => {
    const buildInfo = platform === "android" ? androidBuildInfo : iosBuildInfo;
    if (buildInfo && buildInfo.downloadUrl) {
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
      title: "Offline Access",
      description: "Download content for offline reading and listening",
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
        {/* Download Section - PROMINENT */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Download ThePirithApp
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download the latest version of ThePirithApp for your platform
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-buddhist-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">
                Loading download information...
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Android Download */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Android Version
                  </h3>
                  {androidBuildInfo && (
                    <p className="text-gray-600 mb-4">
                      Version {androidBuildInfo.version} • Built on{" "}
                      {new Date(
                        androidBuildInfo.buildDate
                      ).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                  <div className="flex items-center mb-4">
                    <DevicePhoneMobileIcon className="w-8 h-8 text-green-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">
                      Android APK
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Download the APK file for direct installation on Android
                    devices
                  </p>

                  <button
                    onClick={() => handleDownload("android")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center transition-colors text-lg"
                  >
                    <CloudArrowDownIcon className="w-6 h-6 mr-3" />
                    Download APK v{androidBuildInfo?.version || "1.0.0"}
                  </button>

                  {androidBuildInfo && (
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      Build ID: {androidBuildInfo.buildId}
                    </div>
                  )}
                </div>

                {/* Android Installation Instructions */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <InformationCircleIcon className="w-5 h-5 mr-2" />
                    Android Installation
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Download the APK file</p>
                    <p>• Enable "Install from unknown sources"</p>
                    <p>• Open the downloaded APK file</p>
                    <p>• Follow the installation prompts</p>
                  </div>
                </div>
              </div>

              {/* iOS Download */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    iOS Version
                  </h3>
                  {iosBuildInfo && (
                    <p className="text-gray-600 mb-4">
                      Version {iosBuildInfo.version} • Built on{" "}
                      {new Date(iosBuildInfo.buildDate).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                  <div className="flex items-center mb-4">
                    <DevicePhoneMobileIcon className="w-8 h-8 text-blue-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">
                      iOS IPA
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Download the IPA file for installation on iOS devices
                  </p>

                  <button
                    onClick={() => handleDownload("ios")}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center transition-colors text-lg"
                  >
                    <CloudArrowDownIcon className="w-6 h-6 mr-3" />
                    Download IPA v{iosBuildInfo?.version || "1.0.0"}
                  </button>

                  {iosBuildInfo && (
                    <div className="mt-4 text-sm text-gray-500 text-center">
                      Build ID: {iosBuildInfo.buildId}
                    </div>
                  )}
                </div>

                {/* iOS Installation Instructions */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <InformationCircleIcon className="w-5 h-5 mr-2" />
                    iOS Installation
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Download the IPA file</p>
                    <p>• Install via TestFlight (recommended)</p>
                    <p>• Or use direct installation method</p>
                    <p>• Trust the developer certificate</p>
                  </div>
                </div>
              </div>
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
