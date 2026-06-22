import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Zap, Users, Rocket } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const ResponsiveSlider = () => {
  const slidesData = [
    {
      title: "DIGITAL GROWTH STARTS HERE",
      subtitle: "DESIGN & DEVELOPMENT BY SOFTIVRA",
      details: "Boost your online presence with Softivra's expert services.",
      image: "/slider_1.webp",
      blendClass: "bg-Maincolor/50 mix-blend-multiply",
      icon: <Rocket className="w-12 h-12 text-black" />,
    },
    {
      title: "YOUR BUSINESS, TRANSFORMED",
      subtitle: "COMPLETE TECH SOLUTIONS FOR GROWTH",
      details: "Scale your business with innovative technology and custom strategies.",
      image: "/slider_2.webp",
      blendClass: "bg-Secondcolor/50 mix-blend-multiply",
      icon: <Zap className="w-12 h-12 text-black" />,
    },
    {
      title: "EMPOWERING DIGITAL VISION",
      subtitle: "CUSTOM WEBSITES, SOFTWARE & APPS",
      details: "Create meaningful connections with compelling content and custom engineering.",
      image: "/slider_3.webp",
      blendClass: "bg-blue-accent/50 mix-blend-multiply",
      icon: <Users className="w-12 h-12 text-black" />,
    },
  ];

  return (
    <>
    <style>{`
      .swiper-pagination {
        position: relative !important;
        bottom: auto !important;
        left: auto !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 12px !important;
        margin-top: 20px !important;
      }
      .swiper-pagination-bullet {
        width: 14px !important;
        height: 14px !important;
        background-color: #ffffff !important;
        border: 2px solid #000000 !important;
        border-radius: 0px !important;
        opacity: 1 !important;
        transition: all 0.3s ease-in-out !important;
        margin: 0 !important;
        cursor: pointer;
      }
      .swiper-pagination-bullet-active {
        width: 42px !important;
        background-color: #ffd13b !important;
        box-shadow: 2px 2px 0px 0px #000000 !important;
      }
      .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
        background-color: #000000 !important;
      }
    `}</style>
    <div className="relative w-full max-w-7xl mx-auto px-4 py-4 sm:py-10">
      <div className="relative w-full h-[480px] sm:h-[550px] md:h-[550px] lg:h-[550px] rounded-2xl border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_#000]">
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
              return `<span class="${className}"></span>`;
            },
          }}
          loop={true}
          className="h-full rounded-2xl"
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
                {/* Grayscale filter and brutalist blend overlay screens */}
                <div className="absolute inset-0 bg-white grayscale contrast-[1.4] brightness-[0.8]"></div>
                <div className={`absolute inset-0 ${slide.blendClass}`}></div>
                
                {/* Visual Brutalist Pattern (Diagonal lines or grids overlay) */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.07]"></div>

                <div className="relative z-10 text-center text-black px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                  {/* Floating category sticker */}
                  <div className="inline-block px-4 py-1.5 border-2 border-black bg-white font-black text-[10px] tracking-widest uppercase mb-4 sm:mb-6 shadow-[2px_2px_0px_0px_#000]">
                    {slide.subtitle}
                  </div>

                  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tighter leading-none text-black">
                    {slide.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
                    <Link to="/services" className="w-full sm:w-auto px-8 py-3 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#ffd13b] hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#ffd13b]">
                      Our Services
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto px-8 py-3 border-3 border-black bg-white text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] hover:bg-black hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination rendered BELOW the slider */}
      <div className="swiper-pagination flex justify-center items-center gap-3 mt-5"></div>
    </div>
    </>
  );
};

export default ResponsiveSlider;
