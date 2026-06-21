import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Terminal, Shield, Sparkles, Layout, Code, Award, Palette, LineChart } from 'lucide-react';

const PartnerLogo = ({ type }) => {
  switch (type) {
    case "aetheris":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    case "nova":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="novaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path d="M30 10 L34 22 L46 22 L36 30 L40 42 L30 34 L20 42 L24 30 L14 22 L26 22 Z" fill="url(#novaGrad)"/>
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">NOVA</text>
          <text x="68" y="39" fill="#f59e0b" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">NETWORKS</text>
        </svg>
      );
    case "nexa":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nexaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M15 15 L25 15 L35 35 L45 35" stroke="url(#nexaGrad)" strokeWidth="4.5" strokeLinecap="round"/>
          <path d="M45 15 L35 15 L25 35 L15 35" stroke="url(#nexaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.5"/>
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">NEXA</text>
          <text x="68" y="39" fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SOFTWARE</text>
        </svg>
      );
    case "zenith":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="zenithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007aff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path d="M15 15 L45 15 L15 35 L45 35" stroke="url(#zenithGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="30" cy="25" r="4.5" fill="#ffffff" />
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">ZENITH</text>
          <text x="68" y="39" fill="#007aff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">DIGITAL</text>
        </svg>
      );
    case "astrix":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="astrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="25" r="12" stroke="url(#astrixGrad)" strokeWidth="3"/>
          <line x1="30" y1="13" x2="30" y2="37" stroke="url(#astrixGrad)" strokeWidth="2.5" />
          <line x1="18" y1="25" x2="42" y2="25" stroke="url(#astrixGrad)" strokeWidth="2.5" />
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">ASTRIX</text>
          <text x="68" y="39" fill="#ec4899" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">CYBERNETICS</text>
        </svg>
      );
    case "helyx":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="helyxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path d="M15 15 C15 35, 45 15, 45 35 C45 35, 15 35, 15 15" stroke="url(#helyxGrad)" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="15" cy="15" r="3.5" fill="#14b8a6" />
          <circle cx="45" cy="35" r="3.5" fill="#06b6d4" />
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">HELYX</text>
          <text x="68" y="39" fill="#14b8a6" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">GENETICS</text>
        </svg>
      );
    case "synapse":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect x="18" y="14" width="22" height="22" rx="3" stroke="url(#synapseGrad)" strokeWidth="3" transform="rotate(15 29 25)"/>
          <circle cx="29" cy="25" r="4.5" fill="#ffffff" />
          <text x="68" y="30" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">SYNAPSE</text>
          <text x="68" y="39" fill="#3b82f6" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">COGNITIVE</text>
        </svg>
      );
    default:
      return null;
  }
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const partners = [
    { name: "Aetheris AI Labs", logoType: "aetheris" },
    { name: "Kortex Neural", logoType: "kortex" },
    { name: "Vortex Data Labs", logoType: "vortex" },
    { name: "Quantix Systems", logoType: "quantix" },
    { name: "Cyphr Security", logoType: "cyphr" },
    { name: "Optima Analytics", logoType: "optima" },
    { name: "Nova Networks", logoType: "nova" },
    { name: "Nexa Software", logoType: "nexa" },
    { name: "Zenith Digital", logoType: "zenith" },
    { name: "Astrix Cybernetics", logoType: "astrix" },
    { name: "Helyx Genetics", logoType: "helyx" },
    { name: "Synapse Cognitive", logoType: "synapse" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-Maincolor/10 via-transparent to-Secondcolor/5">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
              About Us
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-Maincolor to-Secondcolor font-bold text-xs sm:text-sm max-w-lg mx-auto uppercase tracking-widest">
              Get to know the team and vision behind Softivra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Intro */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center font-light"
            variants={itemVariants}
          >
            <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
              At{' '}
              <span className="text-Maincolor font-semibold">
                Softivra
              </span>
              , we are passionate about empowering businesses through
              cutting-edge technology and innovative design. Our team of
              dedicated professionals specializes in offering a wide range of
              digital solutions to meet the ever-evolving needs of modern
              businesses. Whether it's crafting custom websites, developing
              robust software, or creating compelling designs, we are committed
              to helping you achieve your goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Text - first on mobile */}
            <motion.div variants={containerVariants} className="space-y-4 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl font-black text-Maincolor"
                variants={itemVariants}
              >
                Who we are
              </motion.h2>
              <div className="space-y-3 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                <motion.p variants={itemVariants}>
                  At{' '}
                  <span className="font-semibold text-Maincolor">
                    Softivra
                  </span>
                  , we believe that technology should empower, not overwhelm.
                  Our team of expert developers, designers, and strategists work
                  closely with clients to understand their unique needs and
                  craft tailor-made solutions that deliver real results.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Whether you're a startup, small business, or large enterprise,
                  we are here to help you navigate the{' '}
                  <span className="font-semibold text-Maincolor">
                    digital landscape
                  </span>{' '}
                  with ease.
                </motion.p>
              </div>
            </motion.div>

            {/* Image - on top on mobile */}
            <motion.div
              variants={scaleVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg border border-slate-800/80 bg-slate-950 p-2">
                <img
                  src="/softivra_team_about_page.png"
                  alt="Team collaborating at Softivra"
                  className="w-full h-48 sm:h-56 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-12 sm:py-16 bg-slate-950/20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-black text-white capitalize leading-tight">
              Our Guiding <span className="text-Maincolor">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-slate-950/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-Maincolor to-Secondcolor"></div>
              <h3 className="text-base sm:text-lg font-bold text-Maincolor mb-3">
                Mission
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                To empower businesses with innovative technology solutions
                that drive growth, efficiency, and success. We are committed
                to delivering tailored IT services that meet the unique needs
                of each client, ensuring they stay competitive in the digital
                age.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-slate-950/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-Maincolor to-Secondcolor"></div>
              <h3 className="text-base sm:text-lg font-bold text-Maincolor mb-3">
                Vision
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                To be the leading provider of cutting-edge technology
                solutions that transform businesses and set new standards of
                excellence, enabling our clients to thrive in an ever-evolving
                digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={containerVariants}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              variants={itemVariants}
            >
              Partners in <span className="text-Maincolor">Growth</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto font-light"
              variants={itemVariants}
            >
              We're proud to work with amazing partners who share our vision of
              digital excellence.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-5xl"
            variants={containerVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-md hover:shadow-blue-500/10 flex items-center justify-center p-4 aspect-[3/2]"
                variants={scaleVariants}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <PartnerLogo type={partner.logoType} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 bg-slate-950/40 backdrop-blur-sm border-t border-b border-slate-800/80 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.h2
            className="text-2xl sm:text-3xl font-black tracking-tight"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Let's work together to bring your digital vision to life with
            cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-Maincolor to-Secondcolor text-white font-bold py-3 px-7 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 cursor-pointer transition-all"
            variants={scaleVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
