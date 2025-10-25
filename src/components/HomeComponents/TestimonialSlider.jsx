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
    text: "The designs provided by NextDigit Software were not only creative but also aligned perfectly with our vision.Their professional approach and ability to bring ideas to life make them our go-to design partner.",
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-slate-800 py-16 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center relative overflow-hidden">
   

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Side: Title, Description, Button */}
        <div className="flex-1 text-white text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Why  <span className='text-Maincolor'>Choose Us? </span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg lg:text-xl max-w-xl leading-relaxed">
              Discover why clients trust us for their digital needs. Hear their stories of satisfaction and successful project deliveries.
            </p>
            <Link to={"/contact"}>      
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 cursor-pointer">
              Join them today!
              
            </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Enhanced Testimonial Slider */}
        <div className="flex-1 max-w-2xl w-full relative">
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-Maincolor to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center"
              >
                {/* Rating Stars */}
                {/* <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div> */}

                <p className="text-gray-100 text-lg lg:text-xl leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              {/* <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button> */}

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex 
                        ? 'bg-blue-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;