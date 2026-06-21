import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareersPage = () => {
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
    <div className="min-h-screen bg-slate-900 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-slate-800 border-b-2 border-slate-700">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-Maincolor text-white text-xs font-bold mb-4 border-2 border-Maincolor">
              We're Hiring!
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Careers
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join Softivra and push the boundaries of technology and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Content Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center"
            variants={itemVariants}
          >
            <img
              src="/career.svg"
              alt="Team collaborating at Softivra"
              className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain"
            />
          </motion.div>
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 order-1 lg:order-2">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug"
              variants={itemVariants}
            >
              Embrace the Future,{' '}
              <span className="text-Maincolor">Shape It with Us!</span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              At <span className="font-semibold text-Maincolor">Softivra</span>, we believe that the future is shaped by those who anticipate its challenges and seize its opportunities. We are on a mission to innovate and lead, and we're looking for passionate individuals who are ready to take on tomorrow's possibilities today.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              When you join our team, you're not just taking a job—you're embarking on a journey of growth, creativity, and impact. Together, we can build solutions that make a difference and drive the future forward. Join us in shaping what's next!
            </motion.p>
            <motion.div
              className="flex flex-row gap-3 justify-center lg:justify-start pt-3"
              variants={containerVariants}
            >
              <Link to="/job-openings">
                <motion.button
                  className="bg-Maincolor hover:bg-Secondcolor text-white font-semibold py-3 px-6 text-sm cursor-pointer transition-all"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Now
                </motion.button>
              </Link>
              <Link to="/job-openings">
                <motion.button
                  className="border-2 border-Maincolor text-Maincolor hover:bg-Maincolor hover:text-white font-semibold py-3 px-6 text-sm cursor-pointer transition-all"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Current Openings
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Career Impact Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-900 border-2 border-slate-700 p-8 sm:p-12 text-center space-y-5"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white"
              variants={itemVariants}
            >
              Be Part of Our Impactful Journey!
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              At Softivra, we value creativity, collaboration, and a passion for excellence. We foster growth, learning, and mutual respect, empowering every team member to achieve their professional best.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { icon: '🚀', title: 'Innovation', desc: 'Pushing boundaries every day' },
                { icon: '🤝', title: 'Collaboration', desc: 'Together we achieve more' },
                { icon: '📈', title: 'Growth', desc: 'Continuous learning & development' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-800 border-2 border-slate-700 p-5"
                  variants={itemVariants}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-Maincolor border-2 border-slate-700 p-10 sm:p-14 text-center"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Ready to Shape the Future with Us?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-white max-w-xl mx-auto leading-relaxed mb-8"
              variants={itemVariants}
            >
              Join Softivra and be part of a team that's building innovative solutions for tomorrow's challenges.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <Link to="/job-openings">
                <motion.button
                  className="bg-white text-Maincolor hover:bg-gray-100 font-semibold py-3 px-8 text-sm cursor-pointer border-2 border-white transition-all"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  View All Openings
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-Maincolor font-semibold py-3 px-8 text-sm cursor-pointer transition-all"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CareersPage;
