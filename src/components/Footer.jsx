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
    <footer className="relative bg-white border-t-4 border-black text-black">
      {/* Top CTA */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-black">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h3 className="text-sm sm:text-base font-black text-black uppercase tracking-wide">
              Trust our professionals for reliable, comprehensive evaluations.
            </h3>
            <p className="text-Secondcolor font-black text-xs uppercase tracking-widest mt-1">
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border-3 border-black bg-Maincolor text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000] cursor-pointer"
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
            <SoftivraLogo className="h-9" textColor="text-black" lightMode={false} />
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm font-semibold uppercase tracking-wide">
              We specialize in innovative IT, custom software solutions, and creative design services, delivering excellence and driving digital transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-black tracking-widest mb-4 text-black uppercase">
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
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-Secondcolor transition-colors group font-black uppercase tracking-wider"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-black group-hover:text-Secondcolor transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-black tracking-widest mb-4 text-black uppercase">
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
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-Secondcolor transition-colors group font-black uppercase tracking-wider"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-black group-hover:text-Secondcolor transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] font-black tracking-widest mb-4 text-black uppercase">
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
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-Secondcolor transition-colors group font-black uppercase tracking-wider"
                  >
                    <MdOutlineKeyboardArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-black group-hover:text-Secondcolor transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="sm:col-span-2 xl:col-span-1">
            <h4 className="text-[11px] font-black tracking-widest mb-4 text-black uppercase">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-[10px] font-black text-black block mb-1 uppercase tracking-wider">Phone</span>
                <a
                  href="tel:+917620663151"
                  className="text-xs text-gray-500 hover:text-Secondcolor transition-colors font-black uppercase tracking-wider"
                >
                  +91 76206 xxx
                </a>
              </li>
              <li>
                <span className="text-[10px] font-black text-black block mb-1 uppercase tracking-wider">Email</span>
                <a
                  href="mailto:contact@softivra.com"
                  className="text-xs text-gray-500 hover:text-Secondcolor transition-colors whitespace-nowrap font-black tracking-wider"
                >
                  contact@softivra.com
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-black text-black hover:text-Secondcolor transition-colors group uppercase tracking-wider"
                >
                  Leave a message
                  <MdOutlineKeyboardArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
              <li className="pt-4">
                <span className="text-[11px] font-black tracking-widest text-black block mb-3 uppercase">
                  Follow Us
                </span>
                <div className="flex gap-2">
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
                      whileHover={{ scale: 1.05 }}
                      className="p-2 bg-white border-2 border-black text-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor transition-all duration-150 active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000]"
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
        className="border-t-2 border-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-gray-500 font-bold uppercase tracking-wider">
          <p>© 2026 Softivra. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
