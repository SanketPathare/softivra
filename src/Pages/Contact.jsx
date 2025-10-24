import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      subject: "",
      message: "",
    });
  };

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
      transition: { staggerChildren: 0.2 },
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

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            data-animate
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-white">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-white/30"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                Send Us a <span className="text-Maincolor">Message</span>
              </motion.h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your email address"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="contactNo"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Contact No. *
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your contact number"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Message subject"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-white text-Maincolor font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg text-sm sm:text-base"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-white/30"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-Maincolor mb-4 sm:mb-6"
                variants={fadeInUp}
              >
                Get in Touch with Us
              </motion.h2>
              <motion.p
                className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base"
                variants={fadeInUp}
              >
                Our team is ready to assist you with any inquiries or provide
                the information you need.
              </motion.p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <motion.div
                  className="flex items-start"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-blue-600/50 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm sm:text-base">
                      Contact Number
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      +91 76206 63151
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-blue-600/50 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm sm:text-base">
                      Email Address
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base">
                      contact@nextdigit.in
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="border-t border-gray-600 pt-6 sm:pt-8"
                variants={fadeInUp}
              >
                <h3 className="font-medium text-white mb-4 text-sm sm:text-base">
                  Write Some Words
                </h3>
                <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                  Download our eContact card to store us to your phone.
                </p>
                <motion.button
                  className="bg-white text-Maincolor font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center text-sm sm:text-base"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download eVisiting Card
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
