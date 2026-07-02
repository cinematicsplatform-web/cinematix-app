import { motion, AnimatePresence } from "motion/react";
import { X, Download, AlertTriangle, CheckCircle2, ShieldCheck, ChevronLeft, AppWindow } from "lucide-react";
import { useState } from "react";
import { APP_LOGO_URL } from "../data";

interface DownloadStepsModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: "android" | "ios" | null;
}

export default function DownloadStepsModal({ isOpen, onClose, platform }: DownloadStepsModalProps) {
  const [activeStep, setActiveStep] = useState(1);

  const androidSteps = [
    {
      title: "بدء تحميل ملف APK الأصلي",
      description: "اضغط على زر التنزيل لبدء تحميل ملف تثبيت سينماتيكس الآمن مباشرة على جهازك.",
      note: "حجم الملف حوالي 28 ميجابايت ويعمل على جميع إصدارات أندرويد 5.0 فما فوق.",
    },
    {
      title: "السماح بمصادر غير معروفة",
      description: "اذهب إلى إعدادات الهاتف > الحماية والخصوصية > تفعيل خيار 'التثبيت من مصادر غير معروفة' لمتصفحك الحالي لكي تتمكن من تثبيت التطبيقات الخارجية.",
      note: "خطوة روتينية لنظام الأندرويد عند تثبيت أي تطبيق خارج متجر جوجل بلاي.",
    },
    {
      title: "تثبيت ملف الـ APK",
      description: "افتح مدير الملفات أو قائمة التنزيلات في متصفحك واضغط على ملف `Cinematix-v1.0.apk` الذي تم تنزيله، ثم اختر 'تثبيت' (Install).",
      note: "عملية التثبيت لن تستغرق أكثر من 10 ثوانٍ.",
    },
    {
      title: "افتح التطبيق واستمتع بالبث!",
      description: "مبروك! تم التثبيت بنجاح. ستجد أيقونة تطبيق 'سينماتيكس' على شاشتك الرئيسية، افتحه الآن واستمتع بمشاهدة غير محدودة بجودة 4K.",
      note: "لا يتطلب التسجيل، ادخل مباشرة للمحتوى.",
    },
  ];

  const iosSteps = [
    {
      title: "تنزيل تطبيق سينماتيكس للـ iOS",
      description: "نظراً لقيود متجر App Store، يتوفر تطبيق سينماتيكس للأجهزة العاملة بنظام iOS من خلال التثبيت المباشر عبر متصفح سفاري (Safari) كـ Web App متطور أو عبر TestFlight.",
      note: "التطبيق يعمل بشكل سلس وبسرعة فائقة على جميع أجهزة الـ iPhone والـ iPad.",
    },
    {
      title: "إضافة للشاشة الرئيسية",
      description: "افتح الرابط في متصفح Safari، ثم اضغط على زر المشاركة (Share) في الأسفل، واختر 'إضافة إلى الشاشة الرئيسية' (Add to Home Screen).",
      note: "ستظهر أيقونة سينماتيكس بجانب بقية تطبيقاتك الرسمية.",
    },
    {
      title: "بدء الاستخدام الفوري",
      description: "افتح تطبيق سينماتيكس من شاشتك الرئيسية وقم بتسجيل الدخول السريع للاستمتاع بكافة الميزات وبأعلى جودة بث ممكنة.",
      note: "تحديثات تلقائية بالكامل دون حاجة لإعادة التحميل.",
    },
  ];

  const steps = platform === "android" ? androidSteps : iosSteps;
  const totalSteps = steps.length;

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep(prev => prev + 1);
    } else {
      if (platform === "android") {
        // Trigger actual download of the APK file from GitHub releases
        const link = document.createElement("a");
        link.href = "https://github.com/cinematicsplatform-web/cinematix-app/releases/download/v1.0.0/Cinematix-v1.0.apk";
        link.download = "Cinematix-v1.0.apk";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("تم تجهيز تطبيق الويب الخاص بأجهزة الآيفون! اتبع الخطوات المعروضة لإضافته للشاشة الرئيسية.");
      }
      onClose();
      setActiveStep(1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-[#0F172A] p-6 shadow-2xl md:p-8"
            id="download-modal-container"
          >
            {/* Glow Accent */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 rounded-full border border-slate-800 bg-slate-900/50 p-2 text-gray-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="إغلاق"
              id="modal-close-btn"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6 flex items-center gap-4 border-b border-slate-800 pb-5" id="modal-header">
              <img
                src={APP_LOGO_URL}
                alt="سينماتيكس"
                className="h-14 w-14 rounded-2xl shadow-lg border border-slate-700/50 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  خطوات تحميل سينماتيكس لـ {platform === "android" ? "أندرويد" : "iOS"}
                </h3>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  تحميل رسمي آمن وموثوق ومفحوص 100%
                </p>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="mb-8 flex items-center justify-between" id="modal-step-indicator">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                الخطوة {activeStep} من {totalSteps}
              </span>
              <div className="flex gap-1.5">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx + 1 === activeStep
                        ? "w-8 bg-cyan-400"
                        : idx + 1 < activeStep
                        ? "w-3 bg-emerald-500"
                        : "w-1.5 bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[160px] flex flex-col justify-between" id="modal-step-content">
              <motion.div
                key={activeStep}
                initial={{ x: 15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 text-sm font-bold border border-cyan-800/50">
                    {activeStep}
                  </span>
                  {steps[activeStep - 1].title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {steps[activeStep - 1].description}
                </p>
                <div className="flex gap-2 rounded-xl bg-slate-900/50 p-3.5 border border-slate-800/60 text-xs text-gray-400">
                  <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-semibold text-slate-300">ملاحظة: </span>
                    {steps[activeStep - 1].note}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-800 pt-5" id="modal-footer">
              <button
                onClick={handlePrev}
                disabled={activeStep === 1}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  activeStep === 1
                    ? "text-slate-600 cursor-not-allowed"
                    : "text-slate-300 hover:text-white"
                }`}
                id="modal-prev-btn"
              >
                <ChevronLeft className="rotate-180" size={18} />
                السابق
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02]"
                id="modal-next-btn"
              >
                {activeStep === totalSteps ? (
                  <>
                    <Download size={16} />
                    تحميل التطبيق الآن
                  </>
                ) : (
                  <>
                    التالي
                    <ChevronLeft size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
