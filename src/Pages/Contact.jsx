import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Phone, Mail } from "lucide-react";

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-800 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            id="hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-2">
              Contact Us
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto">
              Get in touch with the Softivra team for solutions and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-5 sm:p-6 lg:p-8"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-lg sm:text-xl font-bold text-white mb-4"
                variants={fadeInUp}
              >
                Send Us a <span className="text-Maincolor">Message</span>
              </motion.h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={fadeInUp} className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-400">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-gray-500 text-xs"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-400">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-gray-500 text-xs"
                    placeholder="Your email address"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1">
                  <label htmlFor="contactNo" className="block text-xs font-semibold text-gray-400">
                    Contact No. *
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-gray-500 text-xs"
                    placeholder="Your contact number"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1">
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-400">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-gray-500 text-xs"
                    placeholder="Message subject"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-950/60 border border-slate-800 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-gray-500 text-xs"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-Maincolor hover:bg-Secondcolor text-white font-bold py-2 px-4 rounded-lg text-xs cursor-pointer shadow transition-colors duration-300"
                  variants={fadeInUp}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 space-y-6"
              variants={staggerContainer}
            >
              <div>
                <motion.h2
                  className="text-lg sm:text-xl font-bold text-white mb-2"
                  variants={fadeInUp}
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-xs leading-relaxed"
                  variants={fadeInUp}
                >
                  Our team is ready to assist you with any inquiries or provide
                  the information you need.
                </motion.p>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700/60 text-blue-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      Phone Number
                    </h3>
                    <p className="text-gray-300 text-xs">
                      +91 76206 63151
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  variants={fadeInUp}
                >
                  <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700/60 text-blue-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      Email Address
                    </h3>
                    <p className="text-gray-300 text-xs">
                      contact@softivra.com
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="border-t border-slate-800 pt-6 space-y-3"
                variants={fadeInUp}
              >
                <h3 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
                  Download Contact Card
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Download our official eContact card (vCard) to save our details directly to your mobile device or address book.
                </p>

                <Link
                  to="/softivra.vcf" 
                  target="_blank"
                  download="softivra.vcf"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-900 font-bold py-2.5 px-4 rounded-lg text-xs shadow transition-colors duration-300 w-full"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download eVisiting Card
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
