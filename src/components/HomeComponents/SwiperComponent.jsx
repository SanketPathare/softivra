import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, Zap, Users, Rocket } from "lucide-react";

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
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      features: ["Cloud Solutions", "Process Automation", "Digital Transformation"],
    },
    {
      title: "Empowering Your Digital Vision",
      subtitle: "Custom Websites, Software & Apps",
      details: "Create meaningful connections with compelling content and custom engineering.",
      image: "/slider_3.webp",
      icon: <Users className="w-12 h-12 text-blue-400" />,
      features: [
        "Content Creation",
        "Community Building",
        "Analytics & Insights",
      ],
    },
  ];

  const [heightClass, setHeightClass] = useState("h-[60vh] md:h-[75vh] lg:h-[90vh]");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeightClass("h-[55vh] md:h-[75vh] lg:h-[90vh]");
      } else {
        setHeightClass("h-[60vh] md:h-[75vh] lg:h-[90vh]");
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className={`relative w-full ${heightClass} rounded-3xl sm:rounded-5xl lg:rounded-7xl border border-slate-700/40 overflow-hidden shadow-2xl shadow-orange-500/10`}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-2.5 h-2.5 rounded-full transition-all duration-500 bg-white/30 hover:bg-white/60"></span>`;
            },
          }}
          loop={true}
          className="h-full rounded-3xl sm:rounded-5xl lg:rounded-7xl"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-950/20 via-transparent to-blue-950/20"></div>

                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-white via-orange-300 to-orange-400 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-blue-100 animate-fade-in-up delay-200 tracking-wide font-light">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-300">
                    <Link to="/services" className="group px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-Maincolor to-Secondcolor hover:from-Secondcolor hover:to-Maincolor cursor-pointer text-white rounded-xl text-sm font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                      Our Services
                    </Link>
                    <Link to="/contact" className="px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/60 transform hover:scale-105 cursor-pointer">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>
        </Swiper>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20 rounded-b-3xl sm:rounded-b-5xl lg:rounded-b-7xl">
          <div className="h-full bg-gradient-to-r from-Maincolor to-Secondcolor rounded-b-3xl sm:rounded-b-5xl lg:rounded-b-7xl swiper-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
