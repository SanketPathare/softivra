import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnerLogo = ({ type }) => {
  switch (type) {
    case "aetheris":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aetherisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007aff" />
              <stop offset="100%" stopColor="#00c6ff" />
            </linearGradient>
          </defs>
          <path d="M25 38C32.1797 38 38 32.1797 38 25C38 17.8203 32.1797 12 25 12C17.8203 12 12 17.8203 12 25C12 32.1797 17.8203 38 25 38Z" stroke="url(#aetherisGrad)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M38 25C38 32.1797 43.8203 38 51 38C58.1797 38 64 32.1797 64 25C64 17.8203 58.1797 12 51 12C43.8203 12 38 17.8203 38 25Z" stroke="url(#aetherisGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3"/>
          <circle cx="38" cy="25" r="3.5" fill="#007aff" />
          <text x="76" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">AETHERIS</text>
          <text x="76" y="39" fill="#007aff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">AI LABS</text>
        </svg>
      );
    case "kortex":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="kortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="18" r="3.5" fill="#6366f1" />
          <circle cx="42" cy="18" r="3.5" fill="#a855f7" />
          <circle cx="31" cy="34" r="5" fill="url(#kortexGrad)" />
          <line x1="20" y1="18" x2="31" y2="34" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="42" y1="18" x2="31" y2="34" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
          <text x="72" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">KORTEX</text>
          <text x="72" y="39" fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">NEURAL</text>
        </svg>
      );
    case "vortex":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <path d="M15 15 L30 38 L45 15" stroke="url(#vortexGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 24 L30 33 L38 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">VORTEX</text>
          <text x="68" y="39" fill="#3b82f6" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">DATA LABS</text>
        </svg>
      );
    case "quantix":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="quantixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <rect x="18" y="18" width="20" height="20" rx="4" stroke="url(#quantixGrad)" strokeWidth="3" transform="rotate(45 28 28)"/>
          <circle cx="28" cy="28" r="3.5" fill="#ffffff" />
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">QUANTIX</text>
          <text x="68" y="39" fill="#06b6d4" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SYSTEMS</text>
        </svg>
      );
    case "cyphr":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyphrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path d="M15 20C15 15 30 10 30 10C30 10 45 15 45 20C45 30 30 40 30 40C30 40 15 30 15 20Z" fill="url(#cyphrGrad)" fillOpacity="0.2" stroke="url(#cyphrGrad)" strokeWidth="2.5"/>
          <path d="M23 23 L28 28 L37 18" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">CYPHR</text>
          <text x="68" y="39" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SECURITY</text>
        </svg>
      );
    case "optima":
      return (
        <svg className="w-full h-10 sm:h-12 max-h-full" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="optimaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <path d="M15 30 L23 16 L31 30 L39 16" stroke="url(#optimaGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">OPTIMA</text>
          <text x="68" y="39" fill="#f43f5e" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">ANALYTICS</text>
        </svg>
      );
    default:
      return null;
  }
};

const PartnersSlider = () => {
  const partners = [
    { id: 1, name: "Aetheris AI Labs", logoType: "aetheris" },
    { id: 2, name: "Kortex Neural", logoType: "kortex" },
    { id: 3, name: "Vortex Data", logoType: "vortex" },
    { id: 4, name: "Quantix Systems", logoType: "quantix" },
    { id: 5, name: "Cyphr Security", logoType: "cyphr" },
    { id: 6, name: "Optima Analytics", logoType: "optima" },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-slate-800 py-16 overflow-hidden relative border-t border-slate-700/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="flex-shrink-0 lg:w-2/5 text-center lg:text-left" variants={itemVariants}>
            <motion.h2
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            >
              Partners in <span className="text-Maincolor">Success</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0"
            >
              Our valuable customers are the heart of our business, inspiring us
              to deliver exceptional quality and unmatched service every day.
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="bg-gradient-to-r from-Maincolor to-Secondcolor text-white px-5 py-2.5 rounded-full font-semibold text-xs shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Join them today!
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className="flex-1 w-full lg:w-3/5" variants={itemVariants}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={slidesPerView}
              spaceBetween={14}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-xl mx-auto"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 h-28 sm:h-32 flex items-center justify-center border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-md hover:shadow-blue-500/10"
                    whileHover={{ scale: 1.04, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PartnerLogo type={partner.logoType} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSlider;
