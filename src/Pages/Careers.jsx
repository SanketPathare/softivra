import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Users, TrendingUp } from 'lucide-react';
import AnimatedGridBackground from '../components/ui/AnimatedGridBackground';
import MorphingShape from '../components/ui/MorphingShape';
import SplitTextReveal from '../components/ui/SplitTextReveal';
import TiltCard from '../components/ui/TiltCard';
import AnimatedDivider from '../components/ui/AnimatedDivider';

const CareersPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-[#faf6ee] pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-black">
        <AnimatedGridBackground variant="dots" />
        <div className="absolute top-6 right-10 opacity-15 hidden lg:block">
          <MorphingShape color="#ffd13b" size={70} speed={4} />
        </div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            id="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 bg-[#ffd13b] text-black text-xs font-black uppercase mb-4 border-2 border-black shadow-[2px_2px_0px_0px_#000] tracking-widest">
              We're Hiring!
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              <SplitTextReveal>Careers</SplitTextReveal>
            </h1>
            <p className="text-black text-xs sm:text-sm font-bold max-w-2xl mx-auto leading-relaxed">
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
            <TiltCard tiltDegree={4} glare={false}>
              <div className="p-6 border-3 border-black bg-[#ff4a77] shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200">
                <img
                  src="/career.svg"
                  alt="Team collaborating at Softivra"
                  className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </TiltCard>
          </motion.div>
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 order-1 lg:order-2">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-black leading-snug uppercase tracking-tight"
              variants={itemVariants}
            >
              Embrace the Future,{' '}
              <span className="bg-[#ffd13b] px-2 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000] inline-block mt-1">Shape It with Us!</span>
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-black font-bold leading-relaxed"
              variants={itemVariants}
            >
              At <span className="bg-[#ffd13b] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_#000] text-black">Softivra</span>, we believe that the future is shaped by those who anticipate its challenges and seize its opportunities. We are on a mission to innovate and lead, and we're looking for passionate individuals who are ready to take on tomorrow's possibilities today.
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm text-black/85 font-semibold leading-relaxed"
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
                  className="bg-Maincolor text-black font-black uppercase tracking-wider py-3 px-6 text-xs cursor-pointer transition-all border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  Join Now
                </motion.button>
              </Link>
              <Link to="/job-openings">
                <motion.button
                  className="bg-white text-black font-black uppercase tracking-wider py-3 px-6 text-xs cursor-pointer transition-all border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#00b8a9] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
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

      <AnimatedDivider variant="minimal" />

      {/* Career Impact Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedGridBackground variant="dots" />
        <div className="absolute bottom-6 left-8 opacity-20 hidden lg:block">
          <MorphingShape color="#00b8a9" size={80} speed={5} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="bg-white border-3 border-black p-8 sm:p-12 text-center space-y-6 shadow-[4px_4px_0_0_#000]"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight"
              variants={itemVariants}
            >
              <SplitTextReveal>Be Part of Our Impactful Journey!</SplitTextReveal>
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-black font-bold leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              At Softivra, we value creativity, collaboration, and a passion for excellence. We foster growth, learning, and mutual respect, empowering every team member to achieve their professional best.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              variants={containerVariants}
            >
              {[
                { icon: <Rocket className="w-6 h-6 text-black" />, title: 'Innovation', desc: 'Pushing boundaries every day' },
                { icon: <Users className="w-6 h-6 text-black" />, title: 'Collaboration', desc: 'Together we achieve more' },
                { icon: <TrendingUp className="w-6 h-6 text-black" />, title: 'Growth', desc: 'Continuous learning & development' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <TiltCard tiltDegree={4} glare={false}>
                    <div className="bg-[#faf6ee] border-2 border-black p-5 shadow-[3px_3px_0px_0px_#000] hover:bg-white hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all cursor-default">
                      <div className="flex justify-center mb-3">
                        <div className="p-2 bg-Maincolor border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-black font-black text-sm mb-1 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-black/80 text-xs font-semibold">{item.desc}</p>
                    </div>
                  </TiltCard>
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
            className="bg-[#ff4a77] border-3 border-black p-10 sm:p-14 text-center shadow-[6px_6px_0_0_#000]"
            variants={itemVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-black text-black mb-4 uppercase tracking-tight"
              variants={itemVariants}
            >
              Ready to Shape the Future with Us?
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm text-black font-bold max-w-xl mx-auto leading-relaxed mb-8"
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
                  className="bg-[#ffd13b] text-black font-black py-3 px-8 text-xs cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 uppercase tracking-widest"
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                >
                  View All Openings
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="bg-white text-black font-black py-3 px-8 text-xs cursor-pointer border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#00b8a9] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-0 active:translate-y-0 uppercase tracking-widest"
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
