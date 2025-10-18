import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Partner logos data
  const partners = [
    { logo: "/public/AboutImages/1.jpg" },
    { logo: "/public/AboutImages/2.jpg" },
    { logo: "/public/AboutImages/3.png" },
    { logo: "/public/AboutImages/4.jpg" },
    { logo: "/public/AboutImages/5.jpg" },
    { logo: "/public/AboutImages/6.jpg" },
    { logo: "/public/AboutImages/7.jpg" },
    { logo: "/public/AboutImages/8.jpg" },
    { logo: "/public/AboutImages/9.jpg" },
    { logo: "/public/AboutImages/10.png" },
    { logo: "/public/AboutImages/11.png" },
    { logo: "/public/AboutImages/12.png" },
    { logo: "/public/AboutImages/13.png" },
    { logo: "/public/AboutImages/14.png" },
    { logo: "/public/AboutImages/15.png" },
    { logo: "/public/AboutImages/16.png" },
    { logo: "/public/AboutImages/17.png" },
  ];

  // Helper function to check if the logo is a valid image URL
  const isImageUrl = (logo) => {
    return (
      typeof logo === "string" &&
      (logo.startsWith("http") || logo.startsWith("/"))
    );
  };

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Hero Section */}
      <motion.section
        className="inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-20 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-4"
            variants={itemVariants}
          >
            About Us
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-gray-200">
              At{' '}
              <span className="text-Maincolor font-semibold">
                NextDigit Software
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
        className="py-16 bg-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={containerVariants}>
              <motion.h2
                className="text-4xl font-bold text-Maincolor mb-6"
                variants={itemVariants}
              >
                Who we are
              </motion.h2>
              <motion.div className="space-y-4 text-white leading-relaxed" variants={containerVariants}>
                <motion.p variants={itemVariants}>
                  At{' '}
                  <span className="font-semibold text-Maincolor">
                    NextDigit Software
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
              </motion.div>
            </motion.div>

            <motion.div
              variants={scaleVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="w-90 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center"
                  variants={scaleVariants}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="h-full w-full rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 bg-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-bold mb-6 mt-30 capitalize text-white">
                Our Guiding <br />{' '}
                <span className="text-Maincolor">Principles</span>
              </h2>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div
                variants={itemVariants}
                className="bg-white/20 backdrop-blur-lg text-white px-8 py-6 rounded-lg shadow-lg text-center border border-white/30"
              >
                <h3 className="text-2xl font-bold text-Maincolor mb-4">
                  Mission
                </h3>
                <p className="leading-relaxed">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and success. We are committed
                  to delivering tailored IT services that meet the unique needs
                  of each client, ensuring they stay competitive in the digital
                  age.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/20 backdrop-blur-lg text-white px-8 py-6 rounded-lg shadow-lg text-center border border-white/30"
              >
                <h3 className="text-2xl font-bold text-Maincolor mb-4">
                  Vision
                </h3>
                <p className="leading-relaxed">
                  To be the leading provider of cutting-edge technology
                  solutions that transform businesses and set new standards of
                  excellence, enabling our clients to thrive in an ever-evolving
                  digital landscape.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="py-16 bg-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" variants={containerVariants}>
            <motion.h2
              className="text-5xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Partners in <span className="text-Maincolor">Growth</span>
            </motion.h2>
            <motion.p
              className="text-white max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We're proud to work with amazing partners who share our vision of
              digital excellence
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto max-w-7xl"
            variants={containerVariants}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border hover:border-blue-200 group"
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-video overflow-hidden flex items-center justify-center bg-white">
                  {isImageUrl(partner.logo) ? (
                    <motion.img
                      src={partner.logo}
                      alt="logo"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      variants={scaleVariants}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">Invalid Image</span>
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
        className="py-16 bg-gradient-to-b from-slate-800 via-slate-600/90 to-slate-800 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Let's work together to bring your digital vision to life with
            cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-white text-Maincolor font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
            variants={scaleVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;