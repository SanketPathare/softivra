import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "The logo design perfectly captured the essence of our brand. It's creative, modern, and instantly recognizable. We've received so many compliments!",
    author: "Durva Infotech",
  },
  {
    id: 2,
    text: "The graphic design work with media banners to market delivers creative designs that stand out.",
    author: "Vega Vacation",
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
    <div className="bg-slate-800 py-14 px-4 sm:px-6 lg:px-8 min-h-[400px] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Side: Title, Description, Button */}
        <div className="flex-1 text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose NextDigit?
          </h2>
          <p className="text-gray-200 mb-6 text-lg max-w-xl">
            Discover why clients trust us for their insurance needs. Hear their stories of satisfaction and successful claim resolutions.
          </p>
          <button className="bg-white/20 backdrop-blur-lg text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer">
            Join them today!
          </button>
        </div>

        {/* Right Side: Testimonial Slider */}
        <div className="flex-1 max-w-xl w-full ">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                type: 'tween',
              }}
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-6 rounded-lg shadow-lg text-center border border-white/30 h-[160px]"
            >
              <p className="text-gray-100 italic mb-4 text-base sm:text-lg">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-blue-400 font-semibold">
                — {testimonials[currentIndex].author}
              </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;