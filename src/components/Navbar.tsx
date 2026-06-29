import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download, Search } from "lucide-react";
import { WEBSITE_LOGO_URL } from "../data";

interface NavbarProps {
  onDownloadClick: (platform: "android" | "ios") => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "مميزات التطبيق", href: "#features" },
    { name: "لقطات من التطبيق", href: "#latest" },
    { name: "الأجهزة المدعومة", href: "#devices" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
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
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F19]/90 border-b border-slate-900 backdrop-blur-md py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
        id="main-navbar"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Logo Group */}
            <div className="flex items-center gap-3">
              <img
                src={WEBSITE_LOGO_URL}
                alt="سينماتيكس"
                className="h-8 w-auto max-w-[100px] object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-black tracking-tight font-cairo">
                <span className="text-white">سينما</span>
                <span className="bg-gradient-to-r from-[#00DFB6] via-[#00F0FF] to-[#0082FF] bg-clip-text text-transparent">تيكس</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => onDownloadClick("android")}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                id="nav-download-btn"
              >
                <Download size={15} />
                تحميل التطبيق
              </button>
            </div>

            {/* Mobile Actions Group (Styled like the desktop download button) */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => onDownloadClick("android")}
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/10 active:scale-[0.98] transition-all duration-200"
                id="mobile-nav-login-btn"
              >
                <Download size={12} />
                تحميل التطبيق
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-b border-slate-900 bg-[#0B0F19]/95 backdrop-blur-lg overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="space-y-1.5 px-4 pt-2 pb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-300 hover:bg-slate-800/40 hover:text-cyan-400 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
