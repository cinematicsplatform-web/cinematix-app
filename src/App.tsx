/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LatestAdditions from "./components/LatestAdditions";
import SupportedDevices from "./components/SupportedDevices";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import DownloadStepsModal from "./components/DownloadStepsModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | null>(null);

  const handleDownloadClick = (platform: "android" | "ios") => {
    setSelectedPlatform(platform);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 overflow-x-hidden relative">
      {/* Navbar Header */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Hero Section */}
      <Hero onDownloadClick={handleDownloadClick} />

      {/* Features Overview */}
      <Features />

      {/* Movie Library / Additions Carousel */}
      <LatestAdditions />


      {/* Multi-Device Support Indicators */}
      <SupportedDevices />

      {/* FAQ Accordion Section */}
      <Faq />

      {/* Footer & CTA block */}
      <Footer onDownloadClick={handleDownloadClick} />

      {/* Interactive Step-by-Step Installation Manual Modal */}
      <DownloadStepsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        platform={selectedPlatform}
      />
    </div>
  );
}

