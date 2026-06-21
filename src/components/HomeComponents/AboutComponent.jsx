import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <div className="min-h-screen bg-slate-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <div className="w-1.5 h-1.5 bg-Maincolor rounded-full animate-pulse"></div>
            <span className="text-Maincolor text-xs font-semibold uppercase tracking-wider">About Our Company</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
           Welcome to Our
            <span className="ml-2 text-Maincolor">Story</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where innovative ideas meet cutting-edge technology to craft remarkable digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5">
              <div className="p-5 sm:p-6 bg-slate-950/30 rounded-2xl border border-slate-700/40 hover:border-orange-500/30 transition-all duration-500 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-full"></div>
                  Our Beginning
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Welcome to <span className="text-blue-400 font-semibold">Softivra</span>, where creativity
                  meets technology! Established with a vision to transform digital landscapes,
                  we are a full-service web development and design company dedicated to helping
                  businesses thrive online.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-slate-950/30 rounded-2xl border border-slate-700/40 hover:border-orange-500/30 transition-all duration-500 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-full"></div>
                  Our Journey
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Our journey began with a simple idea: to help businesses thrive in the digital world.
                  Over the years, we have grown into a team of skilled developers, designers, and
                  strategists who are committed to delivering exceptional results.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img
                src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Our team collaborating'
                className='relative rounded-2xl shadow-xl shadow-orange-500/10 transform group-hover:scale-[1.02] transition duration-500 w-full h-auto object-cover'
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' },
            { number: '5+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              className="group p-5 sm:p-6 bg-slate-950/20 rounded-xl border border-slate-700/40 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-[1.03] backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-Maincolor to-Secondcolor bg-clip-text text-transparent mb-1.5">
                {stat.number}
              </div>
              <div className="text-gray-500 font-medium text-sm sm:text-base group-hover:text-gray-300 transition-colors">
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
