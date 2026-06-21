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

  const [heightClass, setHeightClass] = useState("h-[65vh] md:h-[75vh] lg:h-[85vh]");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeightClass("h-[60vh] md:h-[75vh] lg:h-[85vh]");
      } else {
        setHeightClass("h-[65vh] md:h-[75vh] lg:h-[85vh]");
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className={`relative w-full ${heightClass} border-2 border-slate-700 overflow-hidden`}>
        <style>{`
          .swiper-pagination-bullet {
            border-radius: 0 !important;
          }
        `}</style>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={850}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-2.5 h-2.5 transition-all duration-500"></span>`;
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/45"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-cyan-950/20"></div>

                <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-blue-200/80 tracking-widest uppercase font-semibold">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-row gap-3 sm:gap-4 justify-center">
                    <Link to="/services" className="group px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-Maincolor to-Secondcolor hover:from-Secondcolor hover:to-Maincolor cursor-pointer text-white text-xs font-bold transform hover:scale-[1.03] transition-all duration-300 uppercase tracking-wider">
                      Our Services
                    </Link>
                    <Link to="/contact" className="px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-slate-600 text-white text-xs font-bold hover:bg-slate-700 transition-all duration-300 hover:border-slate-500 transform hover:scale-[1.03] cursor-pointer uppercase tracking-wider">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div
            className="swiper-pagination absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"
            style={{
              "--swiper-pagination-bullet-border-radius": "0px",
              "--swiper-pagination-bullet-inactive-color": "#475569",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-width": "10px",
              "--swiper-pagination-bullet-height": "10px",
              "--swiper-pagination-bullet-active-color": "#007aff",
              "--swiper-pagination-bullet-active-opacity": "1",
            }}
          ></div>
        </Swiper>

        <div className="absolute bottom-0 left-0 w-full h-1 z-20">
          <div className="h-full bg-gradient-to-r from-Maincolor to-Secondcolor swiper-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
