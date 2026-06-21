import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesShowcase = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Your website is the digital storefront of your business. We craft custom visual identities and user interfaces that resonate with your target audience, establishing immediate trust and credibility.",
      color: "from-Maincolor to-Secondcolor",
    },
    {
      title: "Web Development",
      description:
        "We build robust, scalable, and responsive web applications using modern stacks. Our development workflow ensures optimized performance, cross-device consistency, and clean code architectures.",
      color: "from-Maincolor to-Secondcolor",
    },
    {
      title: "Custom Software",
      description:
        "Tailor-made software built to optimize your unique business operations. From standalone applications to complex enterprise integrations, we create tools that enhance automation and productivity.",
      color: "from-Maincolor to-Secondcolor",
    },
    {
      title: "Logo & Branding",
      description:
        "Create a memorable presence with unified brand identity design. We deliver pixel-perfect logos, brand assets, and styling guidelines that set you apart in highly competitive markets.",
      color: "from-Maincolor to-Secondcolor",
    },
    {
      title: "Graphic Design",
      description:
        "Meticulously designed marketing collateral, social media assets, and print media. We translate complex brand ideas into clear, striking visual statements that drive engagement.",
      color: "from-Maincolor to-Secondcolor",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your business through search engine optimization, content strategy, and target outreach campaigns. We analyze user demographics and behaviors to maximize your marketing returns.",
      color: "from-Maincolor to-Secondcolor",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.03, y: -6,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  return (
    <div className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8 relative border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-Maincolor text-xs font-semibold uppercase tracking-wider block mb-2">
            What We Do
          </span>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Services Designed for Growth
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              <div
                className={`relative rounded-2xl p-[1.5px] bg-gradient-to-br ${service.color} shadow-lg shadow-orange-500/5 transition-all duration-300 group-hover:shadow-orange-500/20`}
              >
                <div className="bg-slate-900 rounded-2xl p-6 lg:p-7 min-h-[240px] flex flex-col justify-between relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full space-y-4">
                    <motion.h3
                      className="text-white text-lg sm:text-xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.4 }}
                    >
                      {service.description}
                    </motion.p>

                    <div className="mt-auto pt-2">
                      <Link to="/services">
                        <motion.button
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="text-Maincolor cursor-pointer font-semibold text-xs hover:text-orange-300 transition-all duration-300 flex items-center gap-1.5 group/link"
                        >
                          Find out more
                          <span className="group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/services">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-Maincolor/20 to-Secondcolor/20 backdrop-blur-lg text-white px-5 py-2.5 rounded-full font-semibold text-xs border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-md cursor-pointer"
            >
              View Detailed Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
