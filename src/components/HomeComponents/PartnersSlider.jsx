import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

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
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      y: -3,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-slate-800 py-16 overflow-hidden relative border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Content */}
          <motion.div className="flex-shrink-0 lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
            <motion.h2
              className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            >
              Partners in <span className="text-Maincolor">Success</span>
            </motion.h2>
            <motion.p
              className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0"
            >
              Our valuable customers are the heart of our business, inspiring us
              to deliver exceptional quality and unmatched service every day.
            </motion.p>
            <Link to="/contact">
              <motion.button
                className="bg-white/20 backdrop-blur-lg text-white px-5 py-2.5 rounded-full font-semibold text-xs border border-white/30 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Join them today!
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Slider */}
          <motion.div className="flex-1 w-full sm:max-w-md mx-auto" variants={itemVariants}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={slidesPerView}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-xl mx-auto"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <motion.div
                    className="bg-white rounded-lg p-2 h-24 sm:h-28 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={logoVariants}
                    whileHover="hover"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-contain filter hover:brightness-105"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSlider;