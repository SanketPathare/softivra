import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
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
    <div className="min-h-screen bg-slate-800 ">
      {/* Hero Section */}
      <motion.section
        className=" inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20  py-20 text-white"
        initial="hidden"
        animate="visible"

      >
        <div className="container mx-auto px-4  ">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            About Us
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center "
            variants={fadeInUp}
          >
            <p className="text-lg leading-relaxed text-gray-200">
              At{" "}
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-Maincolor mb-6">
                Who we are
              </h2>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  At{" "}
                  <span className="font-semibold text-Maincolor">
                    NextDigit Software
                  </span>
                  , we believe that technology should empower, not overwhelm.
                  Our team of expert developers, designers, and strategists work
                  closely with clients to understand their unique needs and
                  craft tailor-made solutions that deliver real results.
                </p>
                <p>
                  Whether you're a startup, small business, or large enterprise,
                  we are here to help you navigate the{" "}
                  <span className="font-semibold text-Maincolor">
                    digital landscape
                  </span>{" "}
                  with ease.
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="flex justify-center">
              <div className="relative">
                <div className="w-90 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image"
                    className="h-full w-full rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="py-16 bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-6 mt-30 capitalize text-white">
                Our Guiding <br />{" "}
                <span className="text-Maincolor">Principles</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
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
                variants={fadeInUp}
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
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="py-16 bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <h2 className="text-5xl font-bold text-white mb-4">
              Partners in <span className="text-Maincolor">Growth</span>
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              We're proud to work with amazing partners who share our vision of
              digital excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border hover:border-blue-200 group"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="aspect-video overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={partner.logo}
                    alt="logo"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-slate-800 via-slate-600/90 to-slate-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Let's work together to bring your digital vision to life with
            cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-white text-Maincolor font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
            variants={scaleIn}
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
