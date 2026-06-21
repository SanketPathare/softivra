import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    text: "The logo design perfectly captured the essence of our brand. It's creative, modern, and instantly recognizable. We've received so many compliments!",
    author: "Durva Infotech",
  },
  {
    id: 2,
    text: "The graphic design work with media banners to market delivers creative designs that stand out and drive real engagement for our campaigns.",
    author: "Vega Vacation",
  },
  {
    id: 3,
    text: "The designs provided by Softivra were not only creative but also aligned perfectly with our vision. Their professional approach and ability to bring ideas to life make them our go-to design partner.",
    author: "Arru's Frozen Foods",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden border-t border-slate-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14 relative z-10 w-full">
        {/* Left Side: Title, Description, Button */}
        <div className="flex-1 text-white text-center lg:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
              Why <span className='text-Maincolor'>Choose Us? </span>
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-md leading-relaxed">
              Discover why clients trust us for their digital needs. Hear their stories of satisfaction and successful project deliveries.
            </p>
            <Link to="/contact">      
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 cursor-pointer">
                Join them today!
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Enhanced Testimonial Slider */}
        <div className="flex-1 max-w-xl w-full relative">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-3 -left-3 w-9 h-9 bg-gradient-to-br from-Maincolor to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-center space-y-4"
              >
                <p className="text-gray-100 text-sm sm:text-base leading-relaxed font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-xs sm:text-sm">
                    {testimonials[currentIndex].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex 
                      ? 'bg-blue-400 scale-110' 
                      : 'bg-white/30 hover:bg-white/55'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;