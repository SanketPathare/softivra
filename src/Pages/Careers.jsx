import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-slate-800 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-fade-in">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-2">
              Careers
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
              Join Softivra and push the boundaries of technology and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Content Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug"
              variants={itemVariants}
            >
              Embrace the Future,{' '}
              <span className="text-blue-400">Shape It with Us!</span>
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              At <span className="font-semibold text-blue-400">Softivra</span>, we believe that the future is shaped by those who anticipate its challenges and seize its opportunities. We are on a mission to innovate and lead, and we're looking for passionate individuals who are ready to take on tomorrow's possibilities today.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              When you join our team, you're not just taking a job—you're embarking on a journey of growth, creativity, and impact. Together, we can build solutions that make a difference and drive the future forward. Join us in shaping what's next!
            </motion.p>
            <motion.div
              className="flex flex-row gap-3 justify-center lg:justify-start pt-2"
              variants={containerVariants}
            >
              <Link to="/job-openings">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg text-xs cursor-pointer shadow-md transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Now
                </motion.button>
              </Link>
              <Link to="/job-openings">
                <motion.button
                  className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-2.5 px-5 rounded-lg text-xs cursor-pointer transition-colors"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Current Openings
                </motion.button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <img
              src="/career.svg"
              alt="Team collaborating at Softivra"
              className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain filter drop-shadow-md"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Career Impact Section */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900"
            variants={itemVariants}
          >
            Be Part of Our Impactful Journey!
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm text-gray-600 leading-relaxed"
            variants={itemVariants}
          >
            At Softivra, we value creativity, collaboration, and a passion for excellence. We foster growth, learning, and mutual respect, empowering every team member to achieve their professional best.
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 text-white border-t border-blue-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl font-bold"
            variants={itemVariants}
          >
            Ready to Shape the Future with Us?
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join Softivra and be part of a team that's building innovative solutions for tomorrow's challenges.
          </motion.p>
          <motion.div
            className="flex flex-row gap-3 justify-center pt-2"
            variants={containerVariants}
          >
            <Link to="/job-openings">
              <motion.button
                className="bg-white text-blue-500 hover:bg-gray-50 font-semibold py-2.5 px-5 rounded-lg text-xs cursor-pointer shadow-md transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.97 }}
              >
                View All Openings
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="border border-white text-white hover:bg-white hover:text-blue-500 font-semibold py-2.5 px-5 rounded-lg text-xs cursor-pointer transition-colors"
                variants={itemVariants}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CareersPage;