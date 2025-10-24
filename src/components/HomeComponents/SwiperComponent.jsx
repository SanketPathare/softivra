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
  const [currentTime, setCurrentTime] = useState("");

  const slidesData = [
    {
      title: "Digital Growth Starts Here",
      subtitle: "Marketing, Design & Development",
      details:
        "Boost your online presence with our expert services and cutting-edge solutions.",
      image: "/slider_1.webp",
      icon: <Rocket className="w-16 h-16 text-blue-400" />,
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Brand Development",
      ],
    },
    {
      title: "Your Business, Transformed Digitally",
      subtitle: "Complete Tech Solutions for Growth",
      details:
        "Transform your business with innovative technology and data-driven strategies.",
      image: "/slider_2.webp",
      icon: <Zap className="w-16 h-16 text-emerald-400" />,
      features: ["AI Integration", "Cloud Solutions", "Digital Transformation"],
    },
    {
      title: "Empowering Your Digital Vision",
      subtitle: "Custom Websites, Software & Apps",
      details:
        "Create meaningful connections with compelling content and strategic engagement.",
      image: "/slider_3.webp",
      icon: <Users className="w-16 h-16 text-orange-400" />,
      features: [
        "Content Creation",
        "Community Building",
        "Analytics & Insights",
      ],
    },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 rounded-full transition-all duration-300 bg-white/40 hover:bg-white/70"></span>`;
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
              <div className="absolute inset-0 bg-gradient-to-b to-Maincolor/50 via-black/90 from-Maincolor/50"></div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/3 rounded-full animate-ping"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-200 animate-fade-in-up delay-200">
                  {slide.subtitle}
                </p>

                {/* <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-300">
                  {slide.details}
                </p> */}

                {/* Features */}
                {/* <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-500">
                  {slide.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}

                {/* Action Buttons */}
                <div className="flex flex-row sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
                  <Link  to="/services" className="group px-8 py-4 bg-Maincolor cursor-pointer text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <span className="flex items-center justify-center">
                      Our Services
                    </span>
                  </Link>
                  <Link to="/contact" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50 transform hover:scale-105 cursor-pointer">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        {/* <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group">
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button> */}

        {/* <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group">
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button> */}

        {/* Custom Pagination */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>
      </Swiper>

      {/* Progress Bar - Custom implementation for Swiper */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div className="h-full bg-Maincolor swiper-progress-bar"></div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;