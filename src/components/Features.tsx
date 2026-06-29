import { motion } from "motion/react";
import { Play, Tv, Lock, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative pt-12 pb-24 bg-[#0B0F19] overflow-hidden scroll-mt-24">
      {/* SVG Linear Gradient definition to style icons matching the logo/hero word */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="feature-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00DFB6" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#0082FF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="features-header">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white font-cairo"
          >
            <span className="bg-gradient-to-r from-[#00DFB6] via-[#00F0FF] to-[#0082FF] bg-clip-text text-transparent font-black">مميزات</span> التطبيق
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed font-cairo"
          >
            اكتشف أهم الخصائص والمميزات التي تجعل تطبيق وموقع سينماتيكس رفيقك المثالي للمشاهدة
          </motion.p>
        </div>

        {/* Extended full-width layout container with no boxes or background squares */}
        <div className="w-full mx-auto" id="features-card-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center" id="features-grid">
            
            {/* Feature 1: محتوى متجدد */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 transition-transform duration-300"
              id="feature-item-updated"
            >
              <div className="mb-4">
                <Play size={40} stroke="url(#feature-icon-gradient)" fill="url(#feature-icon-gradient)" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-cairo">محتوى متجدد</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xs mx-auto leading-relaxed font-cairo">أحدث الأفلام والمسلسلات يومياً</p>
            </motion.div>
  
            {/* Feature 2: جودة عالية */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 transition-transform duration-300"
              id="feature-item-quality"
            >
              <div className="mb-4">
                <Tv size={40} stroke="url(#feature-icon-gradient)" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-cairo">جودة عالية</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xs mx-auto leading-relaxed font-cairo">استمتع بالمشاهدة بجودة عالية</p>
            </motion.div>
  
            {/* Feature 3: آمن وسهل */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 transition-transform duration-300"
              id="feature-item-secure"
            >
              <div className="mb-4">
                <Lock size={40} stroke="url(#feature-icon-gradient)" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-cairo">آمن وسهل</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xs mx-auto leading-relaxed font-cairo">تجربة آمنة وسهلة الاستخدام على جميع الأجهزة</p>
            </motion.div>

            {/* Feature 4: واجهة احترافية */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 transition-transform duration-300"
              id="feature-item-interface"
            >
              <div className="mb-4">
                <Sparkles size={40} stroke="url(#feature-icon-gradient)" fill="url(#feature-icon-gradient)" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-cairo">واجهة احترافية</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xs mx-auto leading-relaxed font-cairo">تصفح سلس وتصميم عصري يناسب ذوقك</p>
            </motion.div>
  
          </div>
        </div>

      </div>
    </section>
  );
}

