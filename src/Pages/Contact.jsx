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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-3">
              Contact Us
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-Maincolor to-Secondcolor font-semibold text-sm sm:text-base max-w-lg mx-auto">
              Get in touch with the Softivra team for solutions and support.
            </p>
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
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              className="bg-slate-900 border-2 border-slate-700 p-5 sm:p-6 lg:p-8"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-lg sm:text-xl font-bold text-white mb-5"
                variants={fadeInUp}
              >
                Send Us a <span className="text-Maincolor">Message</span>
              </motion.h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeInUp} className="space-y-1.5">
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
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white placeholder-gray-500 text-sm outline-none"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1.5">
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
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white placeholder-gray-500 text-sm outline-none"
                    placeholder="Your email address"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1.5">
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
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white placeholder-gray-500 text-sm outline-none"
                    placeholder="Your contact number"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1.5">
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
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white placeholder-gray-500 text-sm outline-none"
                    placeholder="Message subject"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white placeholder-gray-500 text-sm outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-Maincolor hover:bg-Secondcolor text-white font-bold py-3 px-4 text-sm cursor-pointer transition-all duration-300"
                  variants={fadeInUp}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="bg-slate-900 border-2 border-slate-700 p-5 sm:p-6 lg:p-8 space-y-6"
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
                  className="text-gray-400 text-sm leading-relaxed"
                  variants={fadeInUp}
                >
                  Our team is ready to assist you with any inquiries or provide
                  the information you need.
                </motion.p>
              </div>

              <div className="space-y-5">
                <motion.div
                  className="flex items-center gap-4"
                  variants={fadeInUp}
                >
                  <div className="bg-slate-800 p-3 border-2 border-slate-700 text-Maincolor">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      Phone Number
                    </h3>
                    <p className="text-gray-300 text-sm">
                      +91 76206 xxx
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4"
                  variants={fadeInUp}
                >
                  <div className="bg-slate-800 p-3 border-2 border-slate-700 text-Maincolor">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      Email Address
                    </h3>
                    <p className="text-gray-300 text-sm">
                      contact@softivra.com
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="border-t-2 border-slate-700 pt-6 space-y-4"
                variants={fadeInUp}
              >
                <h3 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider">
                  Download Contact Card
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Download our official eContact card (vCard) to save our details directly to your mobile device or address book.
                </p>

                <Link
                  to="/softivra.vcf" 
                  target="_blank"
                  download="softivra.vcf"
                  className="inline-flex items-center justify-center gap-2 bg-Maincolor hover:bg-Secondcolor text-white font-bold py-3 px-5 text-sm transition-all duration-300 w-full"
                >
                  <Download className="w-4 h-4" />
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
