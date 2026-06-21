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

  const fadeVariants = {
    enter: { opacity: 0, y: 15 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden border-b-4 border-black">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14 relative z-10 w-full">
        {/* Left Column: Text & Button */}
        <div className="flex-1 text-black text-center lg:text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 border-2 border-black bg-Maincolor font-black text-[9px] uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#000]">
              FEEDBACK
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-none tracking-tighter uppercase">
              Why <span className="inline-block px-2.5 py-1.5 border-4 border-black bg-teal-accent text-black shadow-[4px_4px_0_0_#000] rotate-[-1deg]">Choose Us?</span>
            </h2>
            <p className="text-gray-500 mb-6 text-xs sm:text-sm max-w-md leading-relaxed font-bold uppercase tracking-wide">
              Discover why clients trust us for their digital needs. Hear their stories of satisfaction and successful project deliveries.
            </p>
            <Link to="/contact">
              <button className="px-5 py-2.5 border-3 border-black bg-black text-white font-black text-xs uppercase tracking-widest shadow-[4px_4px_0_0_#ffd13b] hover:bg-white hover:text-black transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#ffd13b] cursor-pointer">
                Join them today!
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Cards */}
        <div className="flex-1 max-w-xl w-full relative">
          <div className="relative bg-white border-3 border-black rounded-none p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
            {/* Sticker Quote Box */}
            <div className="absolute -top-4 -left-4 w-9 h-9 bg-Secondcolor text-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000] rounded-none">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-center space-y-4"
              >
                <p className="text-black text-xs sm:text-sm leading-relaxed font-semibold italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="border-t-2 border-black pt-4">
                  <p className="text-black font-black text-xs uppercase tracking-wider">
                    {testimonials[currentIndex].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 cursor-pointer rounded-none border-2 border-black ${
                    index === currentIndex
                      ? 'bg-Maincolor w-8 h-2.5 shadow-[1px_1px_0px_0px_#000]'
                      : 'bg-white hover:bg-Maincolor/30 w-2.5 h-2.5'
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
