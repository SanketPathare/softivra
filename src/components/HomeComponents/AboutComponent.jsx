import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Target, Shield, Sparkles, Terminal, Cpu } from 'lucide-react';

const AboutComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  };

  const values = [
    { icon: <Cpu className="w-4 h-4 text-blue-400" />, label: "Next-Gen Tech" },
    { icon: <Shield className="w-4 h-4 text-blue-400" />, label: "Enterprise Security" },
    { icon: <Users className="w-4 h-4 text-blue-400" />, label: "Human-Centric UX" },
    { icon: <Sparkles className="w-4 h-4 text-blue-400" />, label: "Modern Design" },
  ];

  return (
    <div className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-slate-800/40">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Brand Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
            Architecting the Future of
            <span className="block sm:inline sm:ml-2 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Digital Innovation</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            At Softivra, we fuse high-performance engineering with interactive experience design to construct scalable software architectures that amplify business potential.
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
            transition={{ duration: 0.6 }}
          >
            {/* Card 1 */}
            <div className="relative p-6 bg-slate-950/40 rounded-2xl border border-slate-800/60 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm group">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Engineering & Core Performance</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    We deploy ultra-fast, modern web infrastructures and solid software applications. Security, accessibility, and high efficiency are written into every line of code we write, helping businesses build trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative p-6 bg-slate-950/40 rounded-2xl border border-slate-800/60 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm group">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Experience-Driven Design Systems</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    Our creative studio develops cohesive design patterns that captivate users. We ensure smooth cross-platform workflows and design layouts that feel intuitive, human, and completely premium.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2 text-center lg:text-left">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white uppercase tracking-widest transition-colors duration-300 group"
              >
                Discover our full philosophy
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Values Column */}
          <motion.div
            className="relative lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              {/* Outer Blue Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
              
              {/* Main Image Border Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950 p-2 shadow-2xl">
                <img
                  src="/softivra_team_about.png"
                  alt="Softivra team workspace"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-[1.02] transition duration-700"
                />
                {/* Visual Glass Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floater Badges (Values) */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 justify-center">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-950/85 backdrop-blur-md rounded-full border border-white/5 text-[10px] font-semibold text-gray-300 shadow-lg shadow-black/35 hover:border-blue-500/25 transition-all duration-300"
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
            { number: '150+', label: 'Deployments Live', icon: <Code2 className="w-4 h-4" /> },
            { number: '99.9%', label: 'System Uptime', icon: <Cpu className="w-4 h-4" /> },
            { number: '24/7', label: 'Core Support', icon: <Shield className="w-4 h-4" /> },
            { number: '8+', label: 'Design Accolades', icon: <Rocket className="w-4 h-4" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              className="group relative p-5 bg-gradient-to-br from-slate-950/60 to-slate-900/30 rounded-2xl border border-slate-800/60 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-center shadow-lg shadow-black/10"
            >
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-1.5">
                {stat.number}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 font-medium text-[11px] sm:text-xs group-hover:text-gray-300 transition-colors uppercase tracking-wider">
                <span className="text-blue-500/60 group-hover:text-blue-400 transition-colors">{stat.icon}</span>
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
