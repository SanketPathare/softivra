import { useState, useEffect } from "react";
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

  const [heightClass, setHeightClass] = useState("h-[65vh] md:h-[75vh] lg:h-[80vh]");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setHeightClass("h-[65vh] md:h-[75vh] lg:h-[80vh]");
      } else {
        setHeightClass("h-[65vh] md:h-[75vh] lg:h-[80vh]");
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-6 sm:py-10">
      <div className={`relative w-full ${heightClass} rounded-2xl border-4 border-black overflow-hidden bg-white shadow-[8px_8px_0px_0px_#000]`}>
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
              return `<span class="${className} w-3 h-3 rounded-none border-2 border-black transition-all duration-500 bg-white hover:bg-black"></span>`;
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

                <div className="relative z-10 text-center text-black px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                  {/* Floating category sticker */}
                  <div className="inline-block px-4 py-1.5 border-2 border-black bg-white font-black text-[10px] tracking-widest uppercase mb-6 shadow-[2px_2px_0px_0px_#000]">
                    {slide.subtitle}
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-none text-black">
                    {slide.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/services" className="w-full sm:w-auto px-8 py-3.5 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#ffd13b] hover:bg-white hover:text-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#ffd13b]">
                      Our Services
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 border-3 border-black bg-white text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] hover:bg-black hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>
        </Swiper>

        {/* Brutalist border divider bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-black z-20"></div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
