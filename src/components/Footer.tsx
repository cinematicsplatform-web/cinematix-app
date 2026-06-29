import React from "react";
import { motion } from "motion/react";
import { Download, Globe, Facebook, Twitter, Instagram, Youtube, HelpCircle, ArrowUpRight } from "lucide-react";
import { WEBSITE_LOGO_URL } from "../data";

interface FooterProps {
  onDownloadClick: (platform: "android" | "ios") => void;
}

export default function Footer({ onDownloadClick }: FooterProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      const navbarElement = document.getElementById("main-navbar");
      const offset = navbarElement ? navbarElement.offsetHeight : 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset - 12;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="relative bg-[#070A11] border-t border-slate-900 pt-16 overflow-hidden">
      {/* Background glow orb inside footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Call To Action Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-[#131A2C]/30 p-8 md:p-14 text-center mb-20 shadow-2xl"
          id="cta-banner"
        >
          {/* Internal glowing lights */}
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-cairo">
              جاهز لتجربة عالم <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">الترفيه</span>؟
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-medium">
              حمّل تطبيق سينماتيكس الأصلي الآن مجاناً واستمتع بمكتبة ضخمة ومحدثة باستمرار من الأفلام والمسلسلات الحصرية بأعلى دقة ممكنة ومترجمة للغة العربية.
            </p>

            {/* Quick Action Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onDownloadClick("android")}
                className="group flex items-center justify-center gap-2.5 w-full sm:w-52 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                id="cta-android-btn"
              >
                {/* Modern Android Head Icon SVG - perfectly curved at the top */}
                <svg className="h-4.5 w-4.5 fill-current text-slate-950" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C7.58 2 4 5.58 4 10h16c0-4.42-3.58-8-8-8zm-3.5 5.5c-.83 0-1.5-.67-1.5-1.5S7.67 4.5 8.5 4.5s1.5.67 1.5 1.5S9.33 7.5 8.5 7.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5.73-4.14L8.46 1.09c-.15-.26-.49-.35-.75-.2-.26.15-.35.49-.2.75l1.31 2.27c-1.35.6-2.45 1.57-3.14 2.76h12.64c-.69-1.19-1.79-2.16-3.14-2.76l1.31-2.27c.15-.26.06-.6-.2-.75-.26-.15-.6-.06-.75.2l-1.31 2.27c-.83-.13-1.68-.14-2.5 0z" />
                </svg>
                تحميل للأندرويد
              </button>

              <a
                href="https://www.cinematix.watch/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-52 rounded-2xl border border-slate-800 bg-[#0F172A] px-6 py-3.5 font-bold text-white hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                id="cta-ios-btn"
              >
                <Globe size={18} className="text-cyan-400" />
                الموقع الرسمي
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. Main Footer Links & Brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-900 pb-12" id="footer-grid">
          
          {/* Col 1: Brand Info (5/12 cols) */}
          <div className="md:col-span-5 space-y-6 md:text-right text-center flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={WEBSITE_LOGO_URL}
                alt="سينماتيكس"
                className="h-12 w-auto max-w-[140px] object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-black text-white font-cairo">سينماتيكس</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm md:text-right text-center">
              عالم الترفيه بين إيديك. المنصة الرسمية والمصدر الموثوق لتحميل تطبيق سينماتيكس المتميز لمشاهدة الأفلام والمسلسلات بجودة فائقة ودعم كامل للترجمة العربية.
            </p>
          </div>

          {/* Col 2: Quick links (2/12 cols) */}
          <div className="md:col-span-2 space-y-4 text-center md:text-right">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-cairo">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" onClick={(e) => handleScrollToSection(e, "#hero")} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollToSection(e, "#features")} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  مميزات التطبيق
                </a>
              </li>
              <li>
                <a href="#latest" onClick={(e) => handleScrollToSection(e, "#latest")} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  لقطات من التطبيق
                </a>
              </li>
              <li>
                <a href="#devices" onClick={(e) => handleScrollToSection(e, "#devices")} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  الأجهزة المدعومة
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support (2/12 cols) */}
          <div className="md:col-span-2 space-y-4 text-center md:text-right">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-cairo">الدعم والمساعدة</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#faq" onClick={(e) => handleScrollToSection(e, "#faq")} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <button onClick={() => alert("يمكنك التواصل معنا عبر البريد: contact@cinematix.app")} className="text-gray-400 hover:text-cyan-400 transition-colors text-right">
                  اتصل بنا
                </button>
              </li>
              <li>
                <button onClick={() => alert("شروط الخدمة والأحكام متوفرة داخل التطبيق في الإعدادات.")} className="text-gray-400 hover:text-cyan-400 transition-colors text-right">
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button onClick={() => alert("نحن ملتزمون بحماية خصوصيتك بالكامل. تطبيقنا لا يجمع أي بيانات حساسة.")} className="text-gray-400 hover:text-cyan-400 transition-colors text-right">
                  سياسة الخصوصية
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Social media & follows (3/12 cols) */}
          <div className="md:col-span-3 space-y-4 text-center md:text-right flex flex-col items-center md:items-start">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-cairo">تابعنا</h4>
            <p className="text-xs text-gray-400">انضم لمجتمعاتنا لمتابعة كل جديد فور صدوره</p>
            
            {/* Social Buttons row */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("حسابنا الرسمي على فيسبوك سيتوفر قريباً!"); }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("حسابنا الرسمي على تويتر سيتوفر قريباً!"); }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-sky-500 hover:text-white hover:border-sky-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("حسابنا الرسمي على انستغرام سيتوفر قريباً!"); }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert("قناتنا الرسمية على يوتيوب ستتوفر قريباً!"); }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Credits */}
        <div className="py-8 text-center text-xs text-gray-500 flex items-center justify-center" id="footer-credits">
          <div className="text-center">جميع الحقوق محفوظة © {new Date().getFullYear()} سينماتيكس</div>
        </div>

      </div>
    </footer>
  );
}
