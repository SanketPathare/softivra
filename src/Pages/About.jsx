import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const partners = [
    { logo: "/AboutImages/1.jpg" },
    { logo: "/AboutImages/2.jpg" },
    { logo: "/AboutImages/3.png" },
    { logo: "/AboutImages/4.jpg" },
    { logo: "/AboutImages/5.jpg" },
    { logo: "/AboutImages/6.jpg" },
    { logo: "/AboutImages/7.jpg" },
    { logo: "/AboutImages/8.jpg" },
    { logo: "/AboutImages/9.jpg" },
    { logo: "/AboutImages/10.png" },
    { logo: "/AboutImages/11.png" },
    { logo: "/AboutImages/12.png" },
    { logo: "/AboutImages/13.png" },
    { logo: "/AboutImages/14.png" },
    { logo: "/AboutImages/15.png" },
    { logo: "/AboutImages/16.png" },
    { logo: "/AboutImages/17.png" },
  ];

  const isImageUrl = (logo) => {
    return (
      typeof logo === "string" &&
      (logo.startsWith("http") || logo.startsWith("/"))
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 border-b-2 border-slate-700">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              About Us
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-Maincolor to-Secondcolor font-semibold text-sm sm:text-base max-w-lg mx-auto">
              Get to know the team and vision behind Softivra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Intro */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              At{' '}
              <span className="text-Maincolor font-semibold">
                Softivra
              </span>
              , we are passionate about empowering businesses through
              cutting-edge technology and innovative design. Our team of
              dedicated professionals specializes in offering a wide range of
              digital solutions to meet the ever-evolving needs of modern
              businesses. Whether it's crafting custom websites, developing
              robust software, or creating compelling designs, we are committed
              to helping you achieve your goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Text - first on mobile */}
            <motion.div variants={containerVariants} className="space-y-4 order-2 md:order-1">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-Maincolor"
                variants={itemVariants}
              >
                Who we are
              </motion.h2>
              <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <motion.p variants={itemVariants}>
                  At{' '}
                  <span className="font-semibold text-Maincolor">
                    Softivra
                  </span>
                  , we believe that technology should empower, not overwhelm.
                  Our team of expert developers, designers, and strategists work
                  closely with clients to understand their unique needs and
                  craft tailor-made solutions that deliver real results.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Whether you're a startup, small business, or large enterprise,
                  we are here to help you navigate the{' '}
                  <span className="font-semibold text-Maincolor">
                    digital landscape
                  </span>{' '}
                  with ease.
                </motion.p>
              </div>
            </motion.div>

            {/* Image - on top on mobile */}
            <motion.div
              variants={scaleVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="w-full max-w-sm border-2 border-slate-700 bg-slate-800 p-2">
                <img
                  src="/softivra_team_about_page.png"
                  alt="Team collaborating at Softivra"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-12 sm:py-16 bg-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white capitalize leading-tight">
              Our Guiding <span className="text-Maincolor">Principles</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-slate-900 border-2 border-slate-700 p-6 sm:p-8"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-Maincolor to-Secondcolor"></div>
              <h3 className="text-lg sm:text-xl font-bold text-Maincolor mb-3">
                Mission
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                To empower businesses with innovative technology solutions
                that drive growth, efficiency, and success. We are committed
                to delivering tailored IT services that meet the unique needs
                of each client, ensuring they stay competitive in the digital
                age.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="relative bg-slate-900 border-2 border-slate-700 p-6 sm:p-8"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-Maincolor to-Secondcolor"></div>
              <h3 className="text-lg sm:text-xl font-bold text-Maincolor mb-3">
                Vision
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                To be the leading provider of cutting-edge technology
                solutions that transform businesses and set new standards of
                excellence, enabling our clients to thrive in an ever-evolving
                digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" variants={containerVariants}>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-2"
              variants={itemVariants}
            >
              Partners in <span className="text-Maincolor">Growth</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto"
              variants={itemVariants}
            >
              We're proud to work with amazing partners who share our vision of
              digital excellence.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto max-w-5xl"
            variants={containerVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="border-2 border-slate-700 bg-slate-900 hover:border-Maincolor transition-all duration-300"
                variants={scaleVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="aspect-square flex items-center justify-center bg-white p-2">
                  {isImageUrl(partner.logo) ? (
                    <img
                      src={partner.logo}
                      alt="partner logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <span className="text-gray-500 text-[10px]">Invalid Image</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 bg-slate-800 border-t-2 border-b-2 border-slate-700 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Let's work together to bring your digital vision to life with
            cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-white hover:bg-slate-100 text-Maincolor font-bold py-3 px-7 text-sm border-2 border-slate-700 cursor-pointer transition-colors"
            variants={scaleVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
