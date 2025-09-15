import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2
      }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-slate-800"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-600/90 to-slate-800" />

      {/* Content Container */}
      <motion.div 
        className="relative z-10 py-16   px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Ready to Start Your Project?
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-blue-100 text-lg sm:text-xl  mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Let's bring your ideas to life with our expert web design and development services.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center px-8  py-4  bg-white text-blue-600 font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              <span className="relative z-10 group-hover:text-blue-700 transition-colors duration-300">
                Let's Discuss
              </span>

              {/* Animated Arrow */}
              <motion.svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>

              {/* Ripple Effect on Click */}
              <motion.div
                className="absolute inset-0 bg-blue-200 rounded-full opacity-0"
                whileTap={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;