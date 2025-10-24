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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-white">
              Career
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero Section with Text, Image, and Buttons */}
      <motion.section
        className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Embrace the Future,{' '}
              <span className="text-blue-500">Shape It with Us!</span>
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed"
              variants={itemVariants}
            >
              At <span className="font-semibold text-blue-500">NextDigit Software</span>, we believe that the future is shaped by those who anticipate its challenges and seize its opportunities. We are on a mission to innovate and lead, and we're looking for passionate individuals who are ready to take on tomorrow's possibilities today.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed"
              variants={itemVariants}
            >
              When you join our team, you're not just taking a job—you're embarking on a journey of growth, creativity, and impact. Together, we can build solutions that make a difference and drive the future forward. Join us in shaping what's next!
            </motion.p>
            <motion.div
              className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <Link to="/job-openings">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base w-full sm:w-auto"
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.button>
              </Link>
              <Link to="/job-openings">
                <motion.button
                  className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base w-full sm:w-auto"
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Current Openings
                </motion.button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="w-full lg:w-1/2 mt-6 lg:mt-0"
            variants={itemVariants}
          >
            <img
              src="/career.svg"
              alt="Team collaborating at NextDigit Software"
              className="w-full max-w-[400px] sm:max-w-[500px] mx-auto rounded-lg shadow-lg object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Career Section */}
      <motion.section
        className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Be Part of Our Impactful Journey!
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At NextDigit Software, we value creativity, collaboration, and a passion for excellence. We foster creativity, growth, and collaboration, empowering every individual to excel.
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-blue-500 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Ready to Shape the Future with Us?
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join NextDigit Software and be part of a team that's building innovative solutions for tomorrow's challenges.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            variants={containerVariants}
          >
            <Link to="/job-openings">
              <motion.button
                className="bg-white text-blue-500 hover:bg-gray-100 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base w-full sm:w-auto"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                View All Openings
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="border border-white text-white hover:bg-white hover:text-blue-500 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base w-full sm:w-auto"
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
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