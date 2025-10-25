import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesShowcase = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Your website is often the first impression customers have of your business. We specialize in creating visually stunning, user-friendly websites that not only look great but also deliver a seamless user experience and engaging your audience effectively.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Web Development",
      description:
        "Our web development services turn your ideas into reality. We build robust, scalable, and secure websites and web applications that meet the unique needs of your business, ensuring optimal performance and a strong online presence.",
         color: "from-blue-400 to-blue-600",
    },
    {
      title: "Custom Software",
      description:
        "When off-the-shelf solutions don't cut it, we step in with custom software development. We design and develop software tailored to your specific business processes and requirements, ensuring efficiency and effectiveness.",
         color: "from-blue-400 to-blue-600",
    },
    {
      title: "Logo & Branding",
      description:
        "Your brand's identity begins with a strong logo. We create memorable logos that capture the essence of your business and resonate with your target audience, helping you stand out in a crowded market.",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Graphic Design",
      description:
        "Visual communication is key to effective marketing. We ensure that your brand stands out in a crowded marketplace with eye-catching graphics for marketing materials, print, and social media, like facebook, instagram, whatsapp, youtube etc.",
        color: "from-blue-400 to-blue-600",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with tailored strategies, including SEO, PPC, social media, and content marketing. We drive targeted traffic, enhance brand visibility, and increase conversions, helping your business achieve measurable growth and long-term success.",
         color: "from-blue-400 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="bg-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-Maincolor text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We Can Help You
          </motion.p>
          <motion.h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            What Are You Looking For?
          </motion.h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              {/* Gradient Border Wrapper */}
              <div
                className={`relative rounded-tl-[40px] sm:rounded-tl-[50px] rounded-br-[20px] sm:rounded-br-[30px] p-[2px] bg-gradient-to-br ${service.color} shadow-lg transition-all duration-300`}
              >
                {/* Inner Card */}
                <div className="bg-slate-900 rounded-tl-[38px] sm:rounded-tl-[48px] rounded-br-[18px] sm:rounded-br-[28px] p-4 sm:p-6 lg:p-8 sm:min-h-[300px] flex flex-col justify-between">
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-tl-[38px] sm:rounded-tl-[48px] rounded-br-[18px] sm:rounded-br-[28px]`}
                  ></div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.h3
                      className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-5 sm:line-clamp-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {service.description}
                    </motion.p>

                    <div className="mt-auto">
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="text-Maincolor cursor-pointer font-semibold text-sm sm:text-base hover:underline transition-all duration-300"
                      >
                        Know more ...
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div
          className="text-center mt-8 sm:mt-10 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link to="/services">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white/10 backdrop-blur-lg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Find out more ...
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;