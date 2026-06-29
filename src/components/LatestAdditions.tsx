import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { APP_SCREENSHOTS } from "../data";

export default function LatestAdditions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  const activeIndex = APP_SCREENSHOTS.findIndex(s => s.id === selectedScreenshot);

  const handleNextScreenshot = () => {
    if (activeIndex !== -1) {
      const nextIndex = (activeIndex + 1) % APP_SCREENSHOTS.length;
      setSelectedScreenshot(APP_SCREENSHOTS[nextIndex].id);
    }
  };

  const handlePrevScreenshot = () => {
    if (activeIndex !== -1) {
      const prevIndex = (activeIndex - 1 + APP_SCREENSHOTS.length) % APP_SCREENSHOTS.length;
      setSelectedScreenshot(APP_SCREENSHOTS[prevIndex].id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedScreenshot) return;
      if (e.key === "ArrowRight") {
        handleNextScreenshot();
      } else if (e.key === "ArrowLeft") {
        handlePrevScreenshot();
      } else if (e.key === "Escape") {
        setSelectedScreenshot(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedScreenshot, activeIndex]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const multiplier = direction === "left" ? -1 : 1;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount * multiplier,
        behavior: "smooth",
      });
    }
  };

  const activeScreenshot = APP_SCREENSHOTS.find(s => s.id === selectedScreenshot);

  return (
    <section id="latest" className="relative py-20 bg-[#0B0F19] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12" id="latest-header">
          {/* Right: Section Title */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-white font-cairo flex items-center gap-2.5">
              <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-cyan-500 to-blue-500" />
              لقطات من داخل التطبيق
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-medium font-cairo">استكشف واجهة مستخدم سينماتيكس الحديثة والأنيقة على أجهزة الجوال</p>
          </div>

          {/* Left: Navigation Controls - Hidden on mobile screens to prevent title wrapping/cut-off */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
              aria-label="التالي"
              id="carousel-next-btn"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
              aria-label="السابق"
              id="carousel-prev-btn"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>

        {/* Grid/Carousel wrapper */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pt-6 pb-12 -mt-6 scrollbar-none snap-x snap-mandatory scroll-smooth justify-start md:justify-start"
          style={{ scrollbarWidth: "none" }}
          id="latest-carousel-container"
        >
          {APP_SCREENSHOTS.map((screen, idx) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: Math.min(idx * 0.08, 0.3) }}
              className="w-[200px] sm:w-[230px] md:w-[250px] flex-shrink-0 snap-start group flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedScreenshot(screen.id)}
              id={`screen-card-${screen.id}`}
            >
              {/* Simple Flat Image Card Container (No Device Frame, Google Play Store style) */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950 shadow-xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:scale-[1.04]">
                
                {/* Main Screen Content */}
                <div className="relative h-full w-full overflow-hidden bg-slate-900">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="h-full w-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Photo Lightbox / Modal */}
      <AnimatePresence>
        {selectedScreenshot && activeScreenshot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshot(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm overflow-hidden bg-transparent z-10 flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="absolute top-4 left-4 rounded-full bg-slate-950/80 p-2.5 text-gray-300 hover:bg-slate-900 hover:text-white transition-colors z-20 border border-slate-800/80 backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              {/* Clean Poster Image (No smartphone frame) - responsive height to avoid cutting off */}
              <div className="relative aspect-[9/16] h-[75vh] max-h-[700px] rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
                <img
                  src={activeScreenshot.image}
                  alt="لقطة الشاشة"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
