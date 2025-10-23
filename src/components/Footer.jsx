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
      className="relative bg-slate-800 text-white bg-opacity-90"
      style={{
        backgroundImage: 'url("https://nextdigit.in/img/city-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Top section with company info */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-white text-black py-2 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-2 text-center md:text-left"
        >
          <h2 className="text-base font-semibold mb-2">
            Trust our professionals for reliable, comprehensive evaluations.
          </h2>
          <p className="text-lg md:text-2base mb-6 text-Maincolor">
            Contact us today!
          </p>
        </motion.div>
        <div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-Maincolor text-white px-6 py-3 rounded-lg font-semibold shadow-lg cursor-pointer transition-colors"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 "
        >
          {/* Company description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2base font-bold mb-4">NextDigit Software</h3>
            <p className="text-gray-300 mb-4 max-w-sm">
              We specialize in innovative IT, software solutions and creative
              design services, delivering excellence and driving digital
              transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              SERVICES
            </h4>
            <ul className="space-y-2">
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
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              OTHER SERVICES
            </h4>
            <ul className="space-y-2 ">
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
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              COMPANY
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/about-us", label: "Who We Are" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Career" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <MdOutlineKeyboardArrowRight className="w-4 h-4" />
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
            <h4 className="text-base font-semibold mb-4 border-b border-gray-700 pb-2">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <Link
                  to="tel:+917620663151"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 76206 63151
                </Link>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                <Link
                  to="mailto:contact@nextdigit.in"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@nextdigit.in
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-medium hover:text-blue-400 transition-colors"
                >
                  Leave a message here
                </Link>
              </li>
              <li className="mt-4">
                <span className="font-medium block mb-2">
                  SOCIAL MEDIA LINKS
                </span>
                <div className="flex space-x-4">
                  {[
                    {
                      to: "https://www.facebook.com/Nextdigit-Software/",
                      icon: FaFacebook,
                      color: "bg-blue-700",
                      label: "Facebook",
                    },
                    {
                      to: "https://twitter.com/Nextdigit_Sw",
                      icon: FaTwitter,
                      color: "bg-blue-500",
                      label: "Twitter",
                    },
                    {
                      to: "https://www.instagram.com/nextdigitsoftware/",
                      icon: FaInstagram,
                      color: "bg-pink-600",
                      label: "Instagram",
                    },
                    {
                      to: "https://www.linkedin.com/company/nextdigit-software/",
                      icon: FaLinkedin,
                      color: "bg-blue-600",
                      label: "LinkedIn",
                    },
                  ].map((social) => (
                    <motion.div
                      key={social.to}
                      whileHover={{ scale: 1.2 }}
                      className={`${social.color} p-2 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      <Link
                        to={social.to}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon />
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
        className="fixed bottom-5 left-5 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* Copyright section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-t border-gray-500 py-6 text-center text-gray-100"
      >
        <p>© 2021-2025 NextDigit Software. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
