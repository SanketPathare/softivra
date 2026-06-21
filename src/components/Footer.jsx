//@ts-nocheck
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SoftivraLogo from "./SoftivraLogo";

const Footer = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer
      className="relative bg-slate-800 text-white bg-opacity-90 border-t border-slate-700"
      style={{
        backgroundImage: 'url("https://nextdigit.in/img/city-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Top section with company info */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-white text-black py-4 px-4 shadow-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-2 text-center md:text-left"
        >
          <h2 className="text-sm sm:text-base font-semibold mb-1">
            Trust our professionals for reliable, comprehensive evaluations.
          </h2>
          <p className="text-base sm:text-lg mb-2 md:mb-0 text-Maincolor font-medium">
            Contact us today!
          </p>
        </motion.div>
        <div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-Maincolor hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md cursor-pointer transition-colors"
              aria-label="Get Started"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {/* Company description */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <SoftivraLogo className="h-9" textColor="text-white" lightMode={true} />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              We specialize in innovative IT, custom software solutions, and creative
              design services, delivering excellence and driving digital
              transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold tracking-wider mb-4 border-b border-slate-700 pb-2 text-blue-400">
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { to: "/services", label: "Website Design" },
                { to: "/services", label: "Website Development" },
                { to: "/services", label: "Custom Software" },
                { to: "/services", label: "Payment Gateway" },
                { to: "/services", label: "Bulk SMS" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold tracking-wider mb-4 border-b border-slate-700 pb-2 text-blue-400">
              OTHER SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { to: "/services", label: "Logo & Branding" },
                { to: "/services", label: "Graphic Design" },
                { to: "/services", label: "UI/UX Design" },
                { to: "/services", label: "Print Design" },
                { to: "/services", label: "Packaging Design" },
                { to: "/services", label: "Social Media Graphics" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold tracking-wider mb-4 border-b border-slate-700 pb-2 text-blue-400">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { to: "/about-us", label: "Who We Are" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Career" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1"
          >
            <h4 className="text-xs font-bold tracking-wider mb-4 border-b border-slate-700 pb-2 text-blue-400">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="font-semibold mr-1.5 text-blue-400 flex-shrink-0">Phone:</span>
                <Link
                  to="tel:+917620663151"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 76206 63151
                </Link>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-1.5 text-blue-400 flex-shrink-0">Email:</span>
                <Link
                  to="mailto:contact@softivra.com"
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  contact@softivra.com
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-semibold text-blue-400 hover:underline transition-colors"
                >
                  Leave a message here
                </Link>
              </li>
              <li className="mt-4">
                <span className="font-semibold block mb-2 text-xs tracking-wider">
                  FOLLOW US
                </span>
                <div className="flex space-x-3">
                  {[
                    {
                      to: "https://www.facebook.com/softivra",
                      icon: FaFacebook,
                      color: "bg-blue-700 hover:bg-blue-600",
                      label: "Facebook",
                    },
                    {
                      to: "https://twitter.com/softivra",
                      icon: FaTwitter,
                      color: "bg-blue-500 hover:bg-blue-400",
                      label: "Twitter",
                    },
                    {
                      to: "https://www.instagram.com/softivra",
                      icon: FaInstagram,
                      color: "bg-pink-600 hover:bg-pink-500",
                      label: "Instagram",
                    },
                    {
                      to: "https://www.linkedin.com/company/softivra",
                      icon: FaLinkedin,
                      color: "bg-blue-600 hover:bg-blue-500",
                      label: "LinkedIn",
                    },
                  ].map((social) => (
                    <motion.div
                      key={social.to}
                      whileHover={{ scale: 1.15 }}
                      className={`${social.color} p-2 rounded-full cursor-pointer transition-colors`}
                    >
                      <Link
                        to={social.to}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-4 h-4 text-white" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Icon */}
      <motion.a
        href="https://wa.me/917620663151"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-5 left-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Copyright section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-t border-slate-700 py-6 text-center text-xs text-gray-400"
      >
        <p>© 2026 Softivra. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
