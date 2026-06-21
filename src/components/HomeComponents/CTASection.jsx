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
      boxShadow: "6px 6px 0px 0px #000000",
      transition: { duration: 0.15, ease: "easeInOut" }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative overflow-hidden border-t-4 border-b-4 border-black bg-Secondcolor py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Floating Retro Grid Markers / Stickers */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-black text-black text-xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl sm:text-5xl font-black leading-none tracking-tighter uppercase"
          >
            Ready to Start Your{" "}
            <span className="inline-block px-3 py-1 bg-white text-black border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[1.5deg]">Project?</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/95 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-bold uppercase tracking-wider"
          >
            Let's bring your ideas to life with Softivra's premium software development and design engineering.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2">
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center px-8 py-3.5 border-3 border-black bg-white text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] hover:bg-black hover:text-white transition-all duration-150 group cursor-pointer active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]"
              >
                <span>Let's Discuss</span>
                <span className="ml-2 font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
