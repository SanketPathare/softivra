import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1, scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 122, 255, 0.3)",
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-800/60 bg-slate-900">
      {/* Animated Glowing Particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950/40 to-slate-900"></div>

      <motion.div
        className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl sm:text-4xl font-black mb-4 leading-tight tracking-tight"
          >
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Project?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xs sm:text-sm mb-8 max-w-xl mx-auto leading-relaxed font-light"
          >
            Let's bring your ideas to life with Softivra's premium software development and design engineering.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-Maincolor to-Secondcolor text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10 transition-colors duration-300">
                  Let's Discuss
                </span>
                <motion.svg
                  className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
