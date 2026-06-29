import { motion } from "motion/react";
import { Tv, Monitor, Smartphone, Tablet, Globe } from "lucide-react";
import { DEVICES } from "../data";

export default function SupportedDevices() {
  const getIcon = (iconName: string) => {
    const props = { 
      className: "h-10 w-10 group-hover:scale-110 transition-transform duration-300",
      stroke: "url(#device-icon-gradient)"
    };
    switch (iconName) {
      case "Tv":
        return <Tv {...props} />;
      case "MonitorSmartphone":
        return <Monitor {...props} />;
      case "Smartphone":
        return <Smartphone {...props} />;
      case "Tablet":
        return <Tablet {...props} />;
      case "Globe":
        return <Globe {...props} />;
      default:
        return <Tv {...props} />;
    }
  };

  return (
    <section id="devices" className="relative py-20 bg-[#070A11] overflow-hidden">
      {/* SVG Linear Gradient definition to style icons */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="device-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00DFB6" />
            <stop offset="50%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#0082FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background glow orb */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4" id="devices-header">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black text-white font-cairo"
          >
            متاح على جميع <span className="bg-gradient-to-r from-[#00DFB6] via-[#00F0FF] to-[#0082FF] bg-clip-text text-transparent font-black">أجهزتك</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            تطبيق سينماتيكس متوافق مع مجموعة واسعة من الأجهزة الذكية ليوفر لك تجربة ترفيه متكاملة أينما كنت.
          </motion.p>
        </div>

        {/* Devices Row / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6" id="devices-grid">
          {DEVICES.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-900 bg-slate-950/60 p-6 md:p-8 text-center transition-all duration-300 hover:border-slate-800 hover:bg-slate-950"
              id={`device-card-${device.id}`}
            >

              {/* Icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#131A2C]/60 border border-slate-900 group-hover:border-slate-800/80 transition-colors duration-300 shadow-inner">
                {getIcon(device.iconName)}
              </div>

              {/* Device Tech Label */}
              <div className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                {device.name}
              </div>

              {/* Human-readable Arabic label */}
              <div className="mt-1 text-xs text-gray-400 leading-normal font-medium">
                {device.description}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
