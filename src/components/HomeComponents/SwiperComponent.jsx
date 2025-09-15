import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Users,
  Rocket,
} from "lucide-react";

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
      title: "Innovate Your Business",
      subtitle: "Technology & Solutions",
      details:
        "Transform your business with innovative technology and data-driven strategies.",
      image: "/slider_2.webp",
      icon: <Zap className="w-16 h-16 text-emerald-400" />,
      features: ["AI Integration", "Cloud Solutions", "Digital Transformation"],
    },
    {
      title: "Engage Your Audience",
      subtitle: "Content & Strategy",
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide, isAutoPlaying, slidesData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="relative h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b to-Maincolor/50 via-black/90 from-Maincolor/50  "></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/3 rounded-full animate-ping"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* <div className="mb-8 flex justify-center animate-bounce">
                {slide.icon}
              </div> */}

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-200 animate-fade-in-up delay-200">
                {slide.subtitle}
              </p>

              <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 animate-fade-in-up delay-300">
                {slide.details}
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up delay-500">
                {slide.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
                <button className="group px-8 py-4 bg-Maincolor cursor-pointer text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <span className="flex items-center justify-center">
                    Our Services
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-Maincolor"
          style={{
            width: `${((currentSlide + 1) / slidesData.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
