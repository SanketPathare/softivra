import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, Zap, Users, Rocket } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const ResponsiveSlider = () => {
  const slidesData = [
    {
      title: "Digital Growth Starts Here",
      subtitle: "Marketing, Design & Development by Softivra",
      details: "Boost your online presence with Softivra's expert services.",
      image: "/slider_1.webp",
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Brand Development",
      ],
    },
    {
      title: "Your Business, Transformed",
      subtitle: "Complete Tech Solutions for Growth",
      details: "Scale your business with innovative technology and custom strategies.",
      image: "/slider_2.webp",
      icon: <Zap className="w-12 h-12 text-emerald-400" />,
      features: ["Cloud Solutions", "Process Automation", "Digital Transformation"],
    },
    {
      title: "Empowering Your Digital Vision",
      subtitle: "Custom Websites, Software & Apps",
      details: "Create meaningful connections with compelling content and custom engineering.",
      image: "/slider_3.webp",
      icon: <Users className="w-12 h-12 text-orange-400" />,
      features: [
        "Content Creation",
        "Community Building",
        "Analytics & Insights",
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2.5 h-2.5 rounded-full transition-all duration-300 bg-white/40 hover:bg-white/70"></span>`;
          },
        }}
        loop={true}
        className="h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-w-full h-full flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b to-blue-950/70 via-black/90 from-blue-950/50"></div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg mb-8 text-blue-200 animate-fade-in-up delay-200 tracking-wide">
                  {slide.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4 justify-center animate-fade-in-up delay-300">
                  <Link to="/services" className="group px-6 py-3 bg-Maincolor hover:bg-blue-600 cursor-pointer text-white rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Our Services
                  </Link>
                  <Link to="/contact" className="px-6 py-3 border border-white/40 text-white rounded-lg text-sm font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/60 transform hover:scale-105 cursor-pointer">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>
      </Swiper>

      {/* Progress Bar - Custom implementation for Swiper */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div className="h-full bg-Maincolor swiper-progress-bar"></div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
