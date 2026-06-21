import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Shield, Sparkles, Terminal, Cpu } from 'lucide-react';

const AboutComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const values = [
    { icon: <Cpu className="w-4 h-4 text-black" />, label: "NEXT-GEN TECH" },
    { icon: <Shield className="w-4 h-4 text-black" />, label: "ENTERPRISE SEC" },
    { icon: <Users className="w-4 h-4 text-black" />, label: "HUMAN-CENTRIC" },
    { icon: <Sparkles className="w-4 h-4 text-black" />, label: "MODERN DESIGN" },
  ];

  return (
    <div className="bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-black">
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 border-2 border-black bg-Maincolor font-black text-[10px] uppercase tracking-widest mb-5 shadow-[2px_2px_0px_0px_#000]">
            WHO WE ARE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black mb-5 leading-none tracking-tighter uppercase">
            Architecting the Future of
            <span className="block sm:inline sm:ml-3 px-3 py-1.5 border-4 border-black bg-Secondcolor text-white shadow-[4px_4px_0px_0px_#000] rotate-[-1deg]">Digital Innovation</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-bold uppercase tracking-wide">
            At Softivra, we fuse high-performance engineering with interactive experience design to construct scalable software architectures.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          {/* Left Narrative Column */}
          <motion.div
            className="space-y-6 lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Card 1 */}
            <div className="relative p-6 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-250 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-Maincolor border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                  <Terminal className="w-5 h-5 text-black stroke-[3px]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-black mb-2 uppercase tracking-wide">Engineering & Core Performance</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    We deploy ultra-fast, modern web infrastructures and solid software applications. Security, accessibility, and high efficiency are written into every line of code we write.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative p-6 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-250 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-Secondcolor border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                  <Code2 className="w-5 h-5 text-black stroke-[3px]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-black mb-2 uppercase tracking-wide">Experience-Driven Design Systems</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    Our creative studio develops cohesive design patterns that captivate users. We ensure smooth cross-platform workflows and design layouts that feel intuitive, human, and completely premium.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2 text-center lg:text-left">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-white font-black text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-white transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000]"
              >
                Discover our full philosophy
                <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Values Column */}
          <motion.div
            className="relative lg:col-span-5 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Flat Colored Frame */}
              <div className="relative border-4 border-black bg-Secondcolor shadow-[8px_8px_0px_0px_#000] p-3 rounded-none">
                <img
                  src="/softivra_team_about.png"
                  alt="Softivra team workspace"
                  className="w-full h-auto object-cover border-3 border-black grayscale contrast-[1.4] brightness-[0.85] rounded-none"
                />
              </div>

              {/* Floater Badges (Values as stickers) */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 justify-center">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black font-black text-[9px] text-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor transition-all"
                  >
                    {v.icon}
                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '150+', label: 'Deployments Live', icon: <Code2 className="w-4 h-4 text-black" /> },
            { number: '99.9%', label: 'System Uptime', icon: <Cpu className="w-4 h-4 text-black" /> },
            { number: '24/7', label: 'Core Support', icon: <Shield className="w-4 h-4 text-black" /> },
            { number: '8+', label: 'Design Awards', icon: <Rocket className="w-4 h-4 text-black" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              className="group relative p-5 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-250 text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-black mb-1.5">
                {stat.number}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 font-black text-[9px] uppercase tracking-wider">
                <span className="text-black">{stat.icon}</span>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutComponent;
