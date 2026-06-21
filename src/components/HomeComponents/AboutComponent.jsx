import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, Target, Shield, Sparkles } from 'lucide-react';

const AboutComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  const values = [
    { icon: <Target className="w-5 h-5" />, label: "Innovation First" },
    { icon: <Shield className="w-5 h-5" />, label: "Quality Assured" },
    { icon: <Users className="w-5 h-5" />, label: "Client-Centric" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Creative Excellence" },
  ];

  return (
    <div className="bg-slate-800 px-4 py-16 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-Maincolor/15 to-Secondcolor/15 border border-Maincolor/20 mb-5">
            <div className="w-1.5 h-1.5 bg-Maincolor rounded-full animate-pulse"></div>
            <span className="text-Maincolor text-xs font-semibold uppercase tracking-wider">About Our Company</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Welcome to Our
            <span className="ml-2 bg-gradient-to-r from-Maincolor to-Secondcolor bg-clip-text text-transparent">Story</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where innovative ideas meet cutting-edge technology to craft remarkable digital experiences that drive real business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative p-6 sm:p-7 bg-gradient-to-br from-slate-950/40 to-slate-900/20 rounded-2xl border border-slate-700/40 hover:border-Maincolor/30 transition-all duration-500 backdrop-blur-sm group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-Maincolor/20 to-Secondcolor/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-Maincolor" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Our Beginning</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Welcome to <span className="text-blue-400 font-semibold">Softivra</span>, where creativity
                    meets technology! Established with a vision to transform digital landscapes,
                    we are a full-service web development and design company dedicated to helping
                    businesses thrive online with cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-6 sm:p-7 bg-gradient-to-br from-slate-950/40 to-slate-900/20 rounded-2xl border border-slate-700/40 hover:border-Maincolor/30 transition-all duration-500 backdrop-blur-sm group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-Maincolor/20 to-Secondcolor/20 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5 text-Maincolor" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Our Journey</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Our journey began with a simple idea: to help businesses thrive in the digital world.
                    Over the years, we have grown into a team of 50+ skilled developers, designers, and
                    strategists who are committed to delivering exceptional results and measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Our team collaborating'
                  className='w-full h-auto object-cover transform group-hover:scale-105 transition duration-700'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {values.map((v, i) => (
                  <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full border border-white/10 text-xs text-gray-300">
                    <span className="text-Maincolor">{v.icon}</span>
                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: 'Projects Completed', icon: <Code2 className="w-4 h-4" /> },
            { number: '50+', label: 'Happy Clients', icon: <Users className="w-4 h-4" /> },
            { number: '24/7', label: 'Support Available', icon: <Shield className="w-4 h-4" /> },
            { number: '5+', label: 'Years Experience', icon: <Rocket className="w-4 h-4" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              className="group relative p-5 sm:p-6 bg-gradient-to-br from-slate-950/30 to-slate-900/10 rounded-xl border border-slate-700/40 hover:border-Maincolor/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-Maincolor to-Secondcolor bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-gray-500 font-medium text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                <span className="text-Maincolor/60 group-hover:text-Maincolor transition-colors">{stat.icon}</span>
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
