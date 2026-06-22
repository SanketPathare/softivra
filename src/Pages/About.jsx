import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Terminal, Shield, Sparkles, Layout, Code, Award, Palette, LineChart, Rocket, Users, Target, Zap } from 'lucide-react';
import { StatCard } from '../components/ui/AnimatedCounter';
import ParticleBackground from '../components/ui/ParticleBackground';

const PartnerLogo = ({ type }) => {
  switch (type) {
    case "aetheris":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutAetherisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007aff" />
              <stop offset="100%" stopColor="#00c6ff" />
            </linearGradient>
          </defs>
          <path d="M25 38C32.1797 38 38 32.1797 38 25C38 17.8203 32.1797 12 25 12C17.8203 12 12 17.8203 12 25C12 32.1797 17.8203 38 25 38Z" stroke="url(#aboutAetherisGrad)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M38 25C38 32.1797 43.8203 38 51 38C58.1797 38 64 32.1797 64 25C64 17.8203 58.1797 12 51 12C43.8203 12 38 17.8203 38 25Z" stroke="url(#aboutAetherisGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 3"/>
          <circle cx="38" cy="25" r="3.5" fill="#007aff" />
          <text x="76" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">AETHERIS</text>
          <text x="76" y="39" fill="#007aff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">AI LABS</text>
        </svg>
      );
    case "kortex":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutKortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="18" r="3.5" fill="#6366f1" />
          <circle cx="42" cy="18" r="3.5" fill="#a855f7" />
          <circle cx="31" cy="34" r="5" fill="url(#aboutKortexGrad)" />
          <line x1="20" y1="18" x2="31" y2="34" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" />
          <line x1="42" y1="18" x2="31" y2="34" stroke="#000000" strokeOpacity="0.4" strokeWidth="1.5" />
          <text x="72" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">KORTEX</text>
          <text x="72" y="39" fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">NEURAL</text>
        </svg>
      );
    case "vortex":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutVortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <path d="M15 15 L30 38 L45 15" stroke="url(#aboutVortexGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 24 L30 33 L38 24" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">VORTEX</text>
          <text x="68" y="39" fill="#3b82f6" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">DATA LABS</text>
        </svg>
      );
    case "quantix":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutQuantixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <rect x="18" y="18" width="20" height="20" rx="4" stroke="url(#aboutQuantixGrad)" strokeWidth="3" transform="rotate(45 28 28)"/>
          <circle cx="28" cy="28" r="3.5" fill="#06b6d4" />
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">QUANTIX</text>
          <text x="68" y="39" fill="#06b6d4" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SYSTEMS</text>
        </svg>
      );
    case "cyphr":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutCyphrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path d="M15 20C15 15 30 10 30 10C30 10 45 15 45 20C45 30 30 40 30 40C30 40 15 30 15 20Z" fill="url(#aboutCyphrGrad)" fillOpacity="0.2" stroke="url(#aboutCyphrGrad)" strokeWidth="2.5"/>
          <path d="M23 23 L28 28 L37 18" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">CYPHR</text>
          <text x="68" y="39" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SECURITY</text>
        </svg>
      );
    case "optima":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutOptimaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <path d="M15 30 L23 16 L31 30 L39 16" stroke="url(#aboutOptimaGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">OPTIMA</text>
          <text x="68" y="39" fill="#f43f5e" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">ANALYTICS</text>
        </svg>
      );
    case "nova":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutNovaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path d="M30 10 L34 22 L46 22 L36 30 L40 42 L30 34 L20 42 L24 30 L14 22 L26 22 Z" fill="url(#aboutNovaGrad)"/>
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">NOVA</text>
          <text x="68" y="39" fill="#f59e0b" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">NETWORKS</text>
        </svg>
      );
    case "nexa":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutNexaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M15 15 L25 15 L35 35 L45 35" stroke="url(#aboutNexaGrad)" strokeWidth="4.5" strokeLinecap="round"/>
          <path d="M45 15 L35 15 L25 35 L15 35" stroke="url(#aboutNexaGrad)" strokeWidth="4.5" strokeLinecap="round" strokeOpacity="0.5"/>
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">NEXA</text>
          <text x="68" y="39" fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">SOFTWARE</text>
        </svg>
      );
    case "zenith":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutZenithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007aff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path d="M15 15 L45 15 L15 35 L45 35" stroke="url(#aboutZenithGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="30" cy="25" r="4.5" fill="#007aff" />
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">ZENITH</text>
          <text x="68" y="39" fill="#007aff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">DIGITAL</text>
        </svg>
      );
    case "astrix":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutAstrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="25" r="12" stroke="url(#aboutAstrixGrad)" strokeWidth="3"/>
          <line x1="30" y1="13" x2="30" y2="37" stroke="url(#aboutAstrixGrad)" strokeWidth="2.5" />
          <line x1="18" y1="25" x2="42" y2="25" stroke="url(#aboutAstrixGrad)" strokeWidth="2.5" />
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">ASTRIX</text>
          <text x="68" y="39" fill="#ec4899" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">CYBERNETICS</text>
        </svg>
      );
    case "helyx":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutHelyxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path d="M15 15 C15 35, 45 15, 45 35 C45 35, 15 35, 15 15" stroke="url(#aboutHelyxGrad)" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="15" cy="15" r="3.5" fill="#14b8a6" />
          <circle cx="45" cy="35" r="3.5" fill="#06b6d4" />
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">HELYX</text>
          <text x="68" y="39" fill="#14b8a6" fontSize="7" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4">GENETICS</text>
        </svg>
      );
    case "synapse":
      return (
        <svg className="w-full h-8" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aboutSynapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect x="18" y="14" width="22" height="22" rx="3" stroke="url(#aboutSynapseGrad)" strokeWidth="3" transform="rotate(15 29 25)"/>
          <circle cx="29" cy="25" r="4.5" fill="#3b82f6" />
          <text x="68" y="30" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="sans-serif" letterSpacing="2">SYNAPSE</text>
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
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-5xl font-black text-black mb-3 uppercase tracking-tight">
              About Us
            </h1>
            <p className="font-bold text-xs sm:text-sm max-w-lg mx-auto text-black border-2 border-black bg-[#ffd13b] px-4 py-2 inline-block shadow-[3px_3px_0px_0px_#000] tracking-widest uppercase">
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
            className="max-w-3xl mx-auto text-center font-bold text-black leading-relaxed"
            variants={itemVariants}
          >
            <p className="text-xs sm:text-sm">
              At{' '}
              <span className="bg-[#ffd13b] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_#000] text-black">
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
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            {/* Text - first on mobile */}
            <motion.div variants={containerVariants} className="space-y-4 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight"
                variants={itemVariants}
              >
                Who we are
              </motion.h2>
              <div className="space-y-3 text-black text-xs sm:text-sm leading-relaxed font-semibold">
                <motion.p variants={itemVariants}>
                  At{' '}
                  <span className="bg-[#ffd13b] px-1 py-0.5 border border-black shadow-[1px_1px_0px_0px_#000] text-black">
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
                  <span className="font-bold border-b-2 border-black">
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
              <div className="w-full max-w-sm border-4 border-black bg-[#ff4a77] shadow-[8px_8px_0_0_#000] p-3 rounded-none">
                <img
                  src="/softivra_team_about_page.png"
                  alt="Team collaborating at Softivra"
                  className="w-full h-48 sm:h-56 object-cover border-3 border-black grayscale contrast-[1.4] brightness-[0.85] rounded-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-12 sm:py-16 bg-white border-t-4 border-b-4 border-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase leading-tight">
              Our Guiding <span className="inline-block px-3 py-1 bg-[#ffd13b] border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[1.5deg]">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-white border-3 border-black rounded-none p-6 sm:p-8 overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-Maincolor"></div>
              <h3 className="text-base sm:text-lg font-black text-black mb-3 uppercase tracking-wide">
                Mission
              </h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold">
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
              className="relative bg-white border-3 border-black rounded-none p-6 sm:p-8 overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#ff4a77]"></div>
              <h3 className="text-base sm:text-lg font-black text-black mb-3 uppercase tracking-wide">
                Vision
              </h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold">
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
              className="text-2xl sm:text-3xl font-black text-black uppercase"
              variants={itemVariants}
            >
              Partners in <span className="inline-block px-3 py-1 bg-[#00b8a9] border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-1deg]">Growth</span>
            </motion.h2>
            <motion.p
              className="text-black text-xs sm:text-sm max-w-md mx-auto font-bold uppercase tracking-wide mt-4"
              variants={itemVariants}
            >
              We're proud to work with amazing partners who share our vision of
              digital excellence.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl"
            variants={containerVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white border-3 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 flex items-center justify-center p-4 aspect-[3/2] rounded-none"
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

      {/* Our Journey Timeline */}
      <motion.section
        className="py-16 sm:py-20 bg-white border-t-4 border-b-4 border-black relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ParticleBackground count={8} opacity={0.05} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase leading-tight">
              Our <span className="inline-block px-3 py-1 bg-Secondcolor text-white border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[1.5deg]">Journey</span>
            </h2>
            <p className="text-black text-xs sm:text-sm max-w-md mx-auto font-bold uppercase tracking-wide mt-4">
              Milestones that shaped who we are today.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-black/20" />
            {[
              { year: '2019', title: 'The Beginning', desc: 'Softivra was founded with a vision to bridge the gap between technology and business innovation.' },
              { year: '2020', title: 'First Major Client', desc: 'Secured our first enterprise client and delivered a comprehensive digital transformation project.' },
              { year: '2021', title: 'Team Expansion', desc: 'Grew to a team of 25+ experts across design, development, and marketing disciplines.' },
              { year: '2022', title: 'Industry Recognition', desc: 'Received multiple design and development awards for outstanding project delivery.' },
              { year: '2023', title: 'Global Reach', desc: 'Expanded operations internationally, serving clients across 4 continents.' },
              { year: '2024', title: 'Innovation Hub', desc: 'Launched our AI/ML division and innovation lab for next-gen solutions.' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-6 mb-10 last:mb-0 relative"
                variants={itemVariants}
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-Maincolor border-3 border-black flex items-center justify-center font-black text-xs shadow-[3px_3px_0px_0px_#000]">
                  {milestone.year}
                </div>
                <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200">
                  <h3 className="font-black text-sm uppercase tracking-wide mb-1">{milestone.title}</h3>
                  <p className="text-[11px] font-semibold text-black/70 leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 sm:py-20 bg-[#ff4a77] border-t-4 border-b-4 border-black relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ParticleBackground count={10} color="#ffffff" opacity={0.08} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight tracking-tighter">
              Impact <span className="inline-block px-3 py-1.5 bg-white text-black border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-1deg]">Metrics</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <StatCard icon={<Code className="w-5 h-5 text-black" />} value={150} suffix="+" label="Projects Delivered" delay={0} />
            <StatCard icon={<Users className="w-5 h-5 text-black" />} value={50} suffix="+" label="Team Members" delay={0.1} />
            <StatCard icon={<Target className="w-5 h-5 text-black" />} value={98} suffix="%" label="Client Satisfaction" delay={0.2} />
            <StatCard icon={<Zap className="w-5 h-5 text-black" />} value={4} suffix="+" label="Global Offices" delay={0.3} />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 bg-black border-t-4 border-b-4 border-black text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.h2
            className="text-2xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-black"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-black text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-bold uppercase tracking-wide"
            variants={itemVariants}
          >
            Let's work together to bring your digital vision to life with
            cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-[#ffd13b] border-3 border-black px-8 py-3.5 text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] hover:bg-white hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer"
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
