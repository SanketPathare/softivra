import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-700 bg-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-600/20 to-slate-800" />

      {/* Content Container */}
      <motion.div 
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
          >
            Ready to Start Your Project?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-blue-200 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed font-light"
          >
            Let's bring your ideas to life with Softivra's premium software development and design engineering.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link to="/contact">      
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 bg-white/10 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300">
                Let's Discuss
              </span>

              {/* Animated Arrow */}
              <motion.svg
                className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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