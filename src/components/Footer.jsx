import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      className="bg-slate-800 text-white bg-opacity-90"
      style={{
        backgroundImage: 'url("https://nextdigit.in/img/city-bg.png")',
        backgroundSize: 'fit',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Top section with company info */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-white text-black py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-2 px-4 text-center md:text-left"
        >
          <h2 className="text-xl font-semibold mb-2">
            Trust our professionals for reliable, comprehensive evaluations.
          </h2>
          <p className="text-lg md:text-2xl mb-6 text-Maincolor">Contact us today!</p>
        </motion.div>
        <div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-Maincolor text-white  px-6 py-3 rounded-lg font-semibold shadow-lg cursor-pointer transition-colors"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Company description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NextDigit Software</h3>
            <p className="text-gray-300 mb-4">
              We specialize in innovative IT, software solutions, and creative design services,
              delivering excellence and driving digital transformation for businesses worldwide.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">SERVICES</h4>
            <ul className="space-y-2">
              {[
                { to: "/services/website-design", label: "Website Design" },
                { to: "/services/website-development", label: "Website Development" },
                { to: "/services/custom-software", label: "Custom Software" },
                { to: "/services/payment-gateway", label: "Payment Gateway" },
                { to: "/services/bulk-sms", label: "Bulk SMS" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">ABOUT US</h4>
            <ul className="space-y-2">
              {[
                { to: "/about/logo-branding", label: "Logo & Branding" },
                { to: "/about/graphic-design", label: "Graphic Design" },
                { to: "/about/ui-ux-design", label: "UI/UX Design" },
                { to: "/about/print-design", label: "Print Design" },
                { to: "/about/packaging-design", label: "Packaging Design" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+917620663151" className="hover:text-blue-400 transition-colors">
                  +91 76206 63151
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:contact@nextdigit.in" className="hover:text-blue-400 transition-colors">
                  contact@nextdigit.in
                </a>
              </li>
              <li>
                <Link to="/contact" className="font-medium hover:text-blue-400 transition-colors">
                  Leave a message here
                </Link>
              </li>
              <li className="mt-4">
                <span className="font-medium block mb-2">SOCIAL MEDIA LINKS</span>
                <div className="flex space-x-4">
                  {[
                    { href: "https://www.facebook.com/nextdigitsoftware", icon: FaFacebook, color: "bg-blue-700", label: "Facebook" },
                    { href: "https://twitter.com/nextdigitsoft", icon: FaTwitter, color: "bg-blue-500", label: "Twitter" },
                    { href: "https://www.instagram.com/nextdigitsoftware", icon: FaInstagram, color: "bg-pink-600", label: "Instagram" },
                    { href: "https://www.linkedin.com/company/nextdigitsoftware", icon: FaLinkedin, color: "bg-blue-600", label: "LinkedIn" },
                  ].map((social) => (
                    <motion.a
                      key={social.href}
                      whileHover={{ scale: 1.2 }}
                      href={social.href}
                      className={`${social.color} p-2 rounded-full hover:opacity-90 transition-opacity`}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

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