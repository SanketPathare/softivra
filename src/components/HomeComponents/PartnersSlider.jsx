import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PartnersSlider = () => {
  // Mock partner data
  const partners = [
    {
      id: 1,
      name: "Tikhe",
      logo: "https://nextdigit.in/img/client/4.jpg",
    },
    {
      id: 2,
      name: "AVGC Skills Academy",
      logo: "https://nextdigit.in/img/client/9.jpg",
    },
    {
      id: 3,
      name: "Mary's Frozen Foods",
      logo: "https://nextdigit.in/img/client/3.png",
    },
    {
      id: 4,
      name: "Tech Solutions",
      logo: "https://nextdigit.in/img/client/7.jpg",
    },
    {
      id: 5,
      name: "Tech Solutions",
      logo: "https://nextdigit.in/img/client/7.jpg",
    },
    {
      id: 6,
      name: "AVGC Skills Academy",
      logo: "https://nextdigit.in/img/client/9.jpg",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-slate-800 py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div className="flex-shrink-0 lg:w-1/2" variants={itemVariants}>
            <motion.h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Partners in <span className="text-Maincolor"> Success</span>
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
            <Link to="/contact">
              <motion.button
                className="bg-white/20 backdrop-blur-lg text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30  border border-white/30 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Join them today!
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Slider */}
          <motion.div className="flex-1 w-full sm:max-w-xl  mx-auto" variants={itemVariants}>
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={slidesPerView}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              className="rounded-2xl mx-10"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <motion.div
                    className="bg-white rounded-xl p-1 h-32 sm:h-40 flex items-center justify-center shadow-xl hover:shadow-2xl "
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
             
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-40 w-40 object-contain filter group-hover:brightness-110"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSlider;