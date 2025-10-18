import React from 'react';
import { motion } from 'framer-motion';

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
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white">
           Career
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero Section with Text and Buttons */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Embrace the Future,{' '}
            <span className="text-Maincolor">Shape It with Us!</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            At <span className="font-semibold text-Maincolor">NextDigit Software</span>, we believe that the future is shaped by those who anticipate its challenges and seize its opportunities. We are on a mission to innovate and lead, and we're looking for passionate individuals who are ready to take on tomorrow's possibilities today.
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            When you join our team, you're not just taking a job—you're embarking on a journey of growth, creativity, and impact. Together, we can build solutions that make a difference and drive the future forward. Join us in shaping what's next!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              className="bg-Maincolor hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
            <motion.button
              className="border-2 border-Maintext-Maincolor text-Maincolor hover:bg-Maintext-Maincolor hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Current Openings
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Career Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Be Part of Our Impactful Journey!
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              At NextDigit Software, we value creativity, collaboration, and a passion for excellence. We foster creativity, growth, and collaboration, empowering every individual to excel.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-Maintext-Maincolor py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Ready to Shape the Future with Us?
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join NextDigit Software and be part of a team that's building innovative solutions for tomorrow's challenges.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              className="bg-white text-Maincolor hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Openings
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-Maincolor font-semibold py-3 px-8 rounded-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CareersPage;