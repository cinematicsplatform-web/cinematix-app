import { motion } from "motion/react";
import { Download, ShieldCheck, Play, ArrowUpRight } from "lucide-react";
import { APP_MOCKUP_URL, APP_LOGO_URL } from "../data";

interface HeroProps {
  onDownloadClick: (platform: "android" | "ios") => void;
}

export default function Hero({ onDownloadClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-24 lg:pt-32 pb-0 overflow-hidden bg-[#0B0F19]"
    >
      {/* Background Gradients and Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[25%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA (completely centered and aligned vertically, ordered second on desktop so it is on the left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 lg:order-2 flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6 lg:space-y-8"
            id="hero-content"
          >
            {/* Version Badge (Beta version v1) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-xs font-bold text-cyan-400 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-cairo text-cyan-400 tracking-wide">النسخة التجريبية v1 (Beta) متاحة الآن</span>
            </motion.div>

            {/* Main Catchy Heading */}
            <div className="space-y-2.5 sm:space-y-4 max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white font-cairo">
                عالم <span className="bg-gradient-to-r from-[#00DFB6] via-[#00F0FF] to-[#0082FF] bg-clip-text text-transparent drop-shadow-sm font-black">الترفيه</span> <br className="hidden sm:block" />
                بين إيديك
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed font-medium font-cairo">
                سينماتيكس تطبيق streaming حديث يمنحك تجربة مشاهدة لا مثيل لها من أفلام ومسلسلات وبرامج تلفزيونية بجودة عالية وترجمة عربية.
              </p>
            </div>

            {/* Action Buttons (Centered single download CTA) */}
            <div className="flex flex-row items-center justify-center w-full" id="hero-actions-container">
              
              {/* Android download (Teal gradient, centered and beautifully sized) */}
              <button
                onClick={() => onDownloadClick("android")}
                className="group flex flex-row items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-gradient-to-r from-[#00D49C] to-[#0082FF] px-8 py-4 text-sm sm:text-base font-black text-slate-950 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-android-btn"
              >
                <span className="font-cairo">تحميل للأندرويد</span>
                {/* Modern Android Head Icon SVG - perfectly curved at the top, 50% larger than original, non-shrinking, centered with translate-y */}
                <svg className="h-8 w-8 sm:h-9.5 sm:w-9.5 flex-shrink-0 fill-current text-slate-950 transition-transform duration-300 group-hover:rotate-12 translate-y-[3px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C7.58 2 4 5.58 4 10h16c0-4.42-3.58-8-8-8zm-3.5 5.5c-.83 0-1.5-.67-1.5-1.5S7.67 4.5 8.5 4.5s1.5.67 1.5 1.5S9.33 7.5 8.5 7.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5.73-4.14L8.46 1.09c-.15-.26-.49-.35-.75-.2-.26.15-.35.49-.2.75l1.31 2.27c-1.35.6-2.45 1.57-3.14 2.76h12.64c-.69-1.19-1.79-2.16-3.14-2.76l1.31-2.27c.15-.26.06-.6-.2-.75-.26-.15-.6-.06-.75.2l-1.31 2.27c-.83-.13-1.68-.14-2.5 0z" />
                </svg>
              </button>

            </div>

            {/* Sub-badge text matching the screenshot exactly */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium pt-2 w-full" id="hero-badges">
              {/* Shield Check Icon */}
              <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-cairo">متاح أيضاً عبر الموقع لأجهزة التلفاز الذكية</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Realistic Phone Mockup (ordered first on desktop so it is on the right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 lg:order-1 self-end flex justify-center items-end relative pt-2 sm:pt-4 lg:pt-0"
            id="hero-mockup-col"
          >
            {/* Ambient Background Light under phone */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-500/15 blur-[60px] animate-pulse pointer-events-none" />

            {/* Custom Phone Mockup Box - sitting flush on the dividing line with the features section */}
            <div className="relative w-full max-w-[250px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[460px] transition-transform duration-500 hover:rotate-1 z-10">
              <img
                src={APP_MOCKUP_URL}
                alt="تطبيق سينماتيكس على الهاتف"
                className="w-full h-auto object-contain select-none"
                referrerPolicy="no-referrer"
              />

              {/* Floating Teal App Icon Overlay */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                className="absolute left-1 top-[18%] sm:left-3 sm:top-[20%] z-20 pointer-events-none"
              >
                <img
                  src={APP_LOGO_URL}
                  alt="لوجو سينماتيكس"
                  className="w-18 h-18 sm:w-24 sm:h-24 object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}