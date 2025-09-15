import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const PartnersSlider = () => {
  // Mock partner data with placeholder images
  const partners = [
    {
      id: 1,
      name: "Tikhe",
      logo: "https://nextdigit.in/img/client/4.jpg"
    },
    {
      id: 2,
      name: "AVGC Skills Academy",
      logo: "https://nextdigit.in/img/client/9.jpg"
    },
    {
      id: 3,
      name: "Mary's Frozen Foods",
      logo: "https://nextdigit.in/img/client/3.png"
    },
    {
      id: 4,
      name: "Tech Solutions",
      logo: "https://nextdigit.in/img/client/7.jpg"
    },
     {
      id: 5,
      name: "Tech Solutions",
      logo: "https://nextdigit.in/img/client/7.jpg"
    },
    {
      id: 6,
      name: "AVGC Skills Academy",
      logo: "https://nextdigit.in/img/client/9.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an extended array for seamless looping
  const extendedPartners = [...partners, ...partners, ...partners];

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Handle seamless looping
  useEffect(() => {
    if (currentIndex >= partners.length) {
      // After transitioning to a clone, instantly reset to the original
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex % partners.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, partners.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? partners.length * 2 - 1 : prev - 1));
  }, [partners.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  // Calculate the actual index for display purposes
  const displayIndex = currentIndex % partners.length;

  return (
    <section className="bg-slate-800 py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="flex-shrink-0 lg:w-1/2"
            variants={itemVariants}
          >
            <motion.h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Partners in Success
            </motion.h2>

            <motion.p
              className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our valuable customers are the heart of our business, inspiring us
              to deliver exceptional quality and unmatched service every day.
            </motion.p>

            <motion.button
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join them today!
            </motion.button>
          </motion.div>

          {/* Right Slider */}
          <motion.div className="flex-1 w-full" variants={itemVariants}>
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
          

              {/* Main Slider */}
              <div className="overflow-hidden rounded-2xl mx-10">
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentIndex * (100 / slidesToShow)}%`
                  }}
                  transition={{
                    ease: isTransitioning ? "linear" : "easeInOut",
                    duration: isTransitioning ? 0 : 0.5
                  }}
                >
                  {extendedPartners.map((partner, index) => (
                    <motion.div
                      key={`${partner.id}-${index}`}
                      className="flex-shrink-0 px-3"
                      style={{ width: `${100 / slidesToShow}%` }}
                      variants={logoVariants}
                      whileHover="hover"
                    >
                      <div className="bg-white rounded-xl p-1 h-32 sm:h-40  flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-40 w-40 object-contain filter group-hover:brightness-110 "
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {partners.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === displayIndex
                        ? "bg-white scale-125"
                        : "bg-white/50"
                    }`}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSlider;