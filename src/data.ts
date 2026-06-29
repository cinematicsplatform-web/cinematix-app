import { Movie, Device, FaqItem, Feature, AppScreenshot } from "./types";

export const APP_LOGO_URL = "/src/assets/images/ic.logo.png";
export const WEBSITE_LOGO_URL = "/src/assets/images/logo.png";
export const APP_MOCKUP_URL = "/src/assets/images/my_new_hero.png";

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: "screen-1",
    title: "لقطة شاشة 1",
    description: "لقطة شاشة 1 من التطبيق",
    image: "/src/assets/images/1.jpg",
  },
  {
    id: "screen-2",
    title: "لقطة شاشة 2",
    description: "لقطة شاشة 2 من التطبيق",
    image: "/src/assets/images/2.jpg",
  },
  {
    id: "screen-3",
    title: "لقطة شاشة 3",
    description: "لقطة شاشة 3 من التطبيق",
    image: "/src/assets/images/3.jpg",
  },
  {
    id: "screen-4",
    title: "لقطة شاشة 4",
    description: "لقطة شاشة 4 من التطبيق",
    image: "/src/assets/images/4.jpg",
  },
  {
    id: "screen-5",
    title: "لقطة شاشة 5",
    description: "لقطة شاشة 5 من التطبيق",
    image: "/src/assets/images/5.jpg",
  },
  {
    id: "screen-6",
    title: "لقطة شاشة 6",
    description: "لقطة شاشة 6 من التطبيق",
    image: "/src/assets/images/6.jpg",
  },
  {
    id: "screen-7",
    title: "لقطة شاشة 7",
    description: "لقطة شاشة 7 من التطبيق",
    image: "/src/assets/images/7.jpg",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "secure",
    title: "آمن وسهل",
    description: "تجربة آمنة وسهلة الاستخدام على جميع الأجهزة دون الحاجة لأي إعدادات معقدة.",
    iconName: "ShieldCheck",
  },
  {
    id: "quality",
    title: "جودة عالية",
    description: "استمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بجودة تصل إلى 4K مع صوت محيطي مجاناً.",
    iconName: "Tv",
  },
  {
    id: "updated",
    title: "محتوى متجدد",
    description: "تحديث يومي ومستمر للمكتبة بإضافة أحدث حلقات المسلسلات والأفلام فور صدورها.",
    iconName: "Sparkles",
  },
];

export const MOVIES: Movie[] = [
  {
    id: "others",
    title: "الآخرون",
    year: 2025,
    tags: ["رعب", "غموض"],
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80",
    rating: 8.4,
  },
  {
    id: "noor",
    title: "مغامرات نور",
    year: 2024,
    tags: ["مغامرة", "عائلي"],
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=500&q=80",
    rating: 7.9,
  },
  {
    id: "shadow",
    title: "في الظل",
    year: 2025,
    tags: ["دراما", "تشويق"],
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=500&q=80",
    rating: 8.1,
  },
  {
    id: "turtles",
    title: "السلاحف النينجا",
    year: 2024,
    tags: ["مغامرة", "إثارة"],
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=500&q=80",
    rating: 7.5,
  },
];

export const DEVICES: Device[] = [
  {
    id: "smart-tv",
    name: "Smart TV",
    iconName: "Tv",
    description: "شاشات التلفاز الذكية",
  },
  {
    id: "android-tv",
    name: "Android TV",
    iconName: "MonitorSmartphone",
    description: "التلفزيون الذكي",
  },
  {
    id: "ios",
    name: "iOS",
    iconName: "Smartphone",
    description: "iPhone & iPad",
  },
  {
    id: "android",
    name: "Android",
    iconName: "Tablet",
    description: "هواتف وأجهزة أندرويد",
  },
  {
    id: "web",
    name: "Web Browser",
    iconName: "Globe",
    description: "جميع المتصفحات",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "هل التطبيق مجاني؟",
    answer: "نعم، تطبيق سينماتيكس مجاني بالكامل 100%. يمكنك تحميله مباشرة والبدء في الاستمتاع بمشاهدة أحدث الأفلام والمسلسلات دون الحاجة إلى دفع أي رسوم اشتراك شهري أو مصاريف خفية.",
  },
  {
    id: "faq-2",
    question: "هل يمكنني مشاهدة المحتوى بدون الإنترنت؟",
    answer: "نعم بكل تأكيد! يوفر تطبيق سينماتيكس ميزة التحميل المباشر داخل التطبيق. يمكنك تنزيل حلقات مسلسلاتك المفضلة أو الأفلام بجودات متعددة لمشاهدتها لاحقاً في أي وقت وبدون الحاجة لربط جهازك بالإنترنت.",
  },
  {
    id: "faq-3",
    question: "ما هي جودة الفيديو المتاحة؟",
    answer: "يدعم التطبيق المشغل الذكي التلقائي الذي يقوم بضبط الجودة بناءً على سرعة الإنترنت لديك. تتوفر جودات تبدأ من SD 360p وحتى جودات عالية الدقة HD 720p و Full HD 1080p وحتى دقة الـ 4K الخارقة للشاشات والأجهزة الداعمة لها.",
  },
  {
    id: "faq-4",
    question: "كيف يمكنني الدفع؟",
    answer: "التطبيق لا يطلب أي عمليات دفع أو إدخال لبيانات بطاقات الائتمان حالياً. التطبيق ممول بالكامل من خلال إعلانات خفيفة وغير مزعجة لضمان استمرارية الخدمة وتوفير البث المجاني لجميع المستخدمين.",
  },
  {
    id: "faq-5",
    question: "هل التطبيق آمن وموثوق للتثبيت؟",
    answer: "نعم، ملفات الـ APK والروابط الرسمية المتاحة على موقعنا يتم فحصها بشكل دوري ومستمر ضد الفيروسات والبرمجيات الخبيثة. التطبيق آمن تماماً للثبيت على هاتفك أو شاشتك الذكية ولا يقوم بجمع أي بيانات شخصية حساسة.",
  },
];
