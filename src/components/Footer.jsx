//@ts-nocheck
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SoftivraLogo from "./SoftivraLogo";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-slate-950 border-t-2 border-slate-700">
      {/* Top CTA */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-slate-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm sm:text-base font-semibold text-gray-200 text-center sm:text-left">
              Trust our professionals for reliable, comprehensive evaluations.
            </h3>
            <p className="text-Maincolor font-semibold text-sm text-center sm:text-left">
              Contact us today!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-Maincolor hover:bg-blue-600 text-white px-6 py-2.5 font-semibold text-sm transition-all cursor-pointer border-2 border-blue-500"
                aria-label="Get Started"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12"
        >
          {/* Company description */}
          <motion.div variants={itemVariants} className="sm:col-span-2 xl:col-span-2 space-y-4">
            <SoftivraLogo className="h-9" textColor="text-white" lightMode={true} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We specialize in innovative IT, custom software solutions, and creative
              design services, delivering excellence and driving digital
              transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-bold tracking-widest mb-4 text-blue-400 uppercase">
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/services", label: "Website Design" },
                { to: "/services", label: "Website Development" },
                { to: "/services", label: "Custom Software" },
                { to: "/services", label: "Payment Gateway" },
                { to: "/services", label: "Bulk SMS" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-bold tracking-widest mb-4 text-blue-400 uppercase">
              OTHER SERVICES
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/services", label: "Logo & Branding" },
                { to: "/services", label: "Graphic Design" },
                { to: "/services", label: "UI/UX Design" },
                { to: "/services", label: "Print Design" },
                { to: "/services", label: "Packaging Design" },
                { to: "/services", label: "Social Media Graphics" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-bold tracking-widest mb-4 text-blue-400 uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about-us", label: "Who We Are" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Career" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="sm:col-span-2 xl:col-span-1">
            <h4 className="text-[11px] font-bold tracking-widest mb-4 text-blue-400 uppercase">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-xs font-semibold text-blue-400 block mb-1">Phone</span>
                <a
                  href="tel:+917620663151"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +91 76206 xxx
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold text-blue-400 block mb-1">Email</span>
                <a
                  href="mailto:contact@softivra.com"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors break-all"
                >
                  contact@softivra.com
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-Maincolor transition-colors group"
                >
                  Leave a message
                  <MdOutlineKeyboardArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li className="pt-4">
                <span className="text-[11px] font-bold tracking-widest text-blue-400 block mb-3 uppercase">
                  Follow Us
                </span>
                <div className="flex gap-2.5">
                  {[
                    { to: "https://www.facebook.com/softivra", icon: FaFacebook, label: "Facebook" },
                    { to: "https://twitter.com/softivra", icon: FaTwitter, label: "Twitter" },
                    { to: "https://www.instagram.com/softivra", icon: FaInstagram, label: "Instagram" },
                    { to: "https://www.linkedin.com/company/softivra", icon: FaLinkedin, label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2.5 bg-slate-900 border-2 border-slate-700 text-gray-400 hover:text-Maincolor hover:border-Maincolor transition-all duration-200"
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t-2 border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-gray-500">
          <p>© 2026 Softivra. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
