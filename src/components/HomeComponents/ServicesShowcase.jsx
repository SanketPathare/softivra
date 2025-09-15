import React from 'react';
import { motion } from 'framer-motion';

const ServicesShowcase = () => {
  const services = [
    {
      title: "Web Design",
      description: "Your website is often the first impression customers have of your business. We specialize in creating visually stunning, user-friendly websites that not only look great but also deliver a seamless user experience and engaging your audience effectively",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Our web development services turn your ideas into reality. We build robust, scalable, and secure websites and web applications that meet the unique needs of your business, ensuring optimal performance and a strong online presence.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Custom Software",
      description: "When off-the-shelf solutions don't cut it, we step in with custom software development. We design and develop software tailored to your specific business processes and requirements, ensuring efficiency and effectiveness.",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Logo & Branding",
      description: "Your brand's identity begins with a strong logo. We create memorable logos that capture the essence of your business and resonate with your target audience, helping you stand out in a crowded market.",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Graphic Design",
      description: "Visual communication is key to effective marketing. We ensure that your brand stands out in a crowded marketplace with eye-catching graphics for marketing materials, print, and social media, like facebook, instagram, whatsapp, youtube etc.",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Digital Marketing",
      description: "Boosts your online presence with tailored strategies, including SEO, PPC, social media, and content marketing. We drive targeted traffic, enhance brand visibility, and increase conversions, helping your business achieve measurable growth and long-term success.",
      color: "from-violet-400 to-violet-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className=" bg-slate-800 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-blue-300 text-lg sm:text-xl mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We Can Help You
          </motion.p>
          <motion.h1 
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            What Are You Looking For ?
          </motion.h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 h-full border border-white/20 shadow-2xl">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-white text-2xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-blue-100 text-base leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-Maincolor font-semibold text-lg group-hover:underline transition-all duration-300"
                  >
                    Know more →
                  </motion.button>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-Maincolor backdrop-blur-lg text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Find out more ...
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;