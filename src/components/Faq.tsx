import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#0B0F19] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4" id="faq-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-400"
          >
            <HelpCircle size={20} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white font-cairo"
          >
            الأسئلة <span className="bg-gradient-to-r from-[#00DFB6] via-[#00F0FF] to-[#0082FF] bg-clip-text text-transparent drop-shadow-sm font-black">الشائعة</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            كل ما تود معرفته حول كيفية تثبيت واستخدام تطبيق وموقع سينماتيكس على أجهزتك المختلفة.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-500/30 bg-slate-900/40 shadow-lg shadow-cyan-500/5"
                    : "border-slate-900 bg-slate-950/40 hover:border-slate-800/80"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-5 md:p-6 text-right font-bold text-slate-100 font-cairo group"
                >
                  <span className={`text-base md:text-lg transition-colors duration-200 ${
                    isOpen ? "text-cyan-400" : "text-slate-100 group-hover:text-cyan-400"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Rotating Chevron */}
                  <span className={`flex h-8 w-8 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-cyan-950/40 border-cyan-800/40 text-cyan-400" : ""
                  }`}>
                    <ChevronDown size={16} />
                  </span>
                </button>

                {/* Collapsible Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-900/60 p-5 md:p-6 text-sm md:text-base leading-relaxed text-slate-300 font-medium bg-[#131A2C]/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
