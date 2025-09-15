import React, { useState } from 'react';

const AboutComponent = () => {
  const [images, setImages] = useState({
    topImage: null,
    bottomImage: null
  });

  const handleImageUpload = (position, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => ({
          ...prev,
          [position]: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" bg-slate-800 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Welcome to Our Story
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Welcome to <span className="text-blue-400 font-semibold">NextDigit Software</span>, where creativity 
                meets technology! Established with a vision to 
                transform digital landscapes, we are a full-service 
                web development and design company dedicated 
                to helping businesses thrive online.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Our journey began with a simple idea: to help 
                businesses thrive in the digital world. Over the 
                years, we have grown into a team of skilled 
                developers, designers, and strategists who are 
                committed to delivering exceptional results.
              </p>
            </div>
            
            <div>
              <button className="bg-Maincolor cursor-pointer text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Know more ...
              </button>
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-4 lg:space-y-6 animate-slide-in-right">
           <img src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img' className=' rounded-2xl shadow-Maincolor/20 shadow-lg'/>

         
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-slate-700/50 rounded-xl backdrop-blur-sm hover:scale-105 hover:bg-slate-700/80 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-Maincolor mb-2 animate-count-up">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default AboutComponent;