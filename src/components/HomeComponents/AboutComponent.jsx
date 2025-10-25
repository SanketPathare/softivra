import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-slate-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="w-2 h-2 bg-Maincolor rounded-full animate-pulse"></div>
            <span className="text-Maincolor text-sm font-medium">About Our Company</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
           Welcome to Our 
             <span className="ml-2 bg-Maincolor bg-clip-text text-transparent">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where innovative ideas meet cutting-edge technology to craft remarkable digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Our Beginning
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Welcome to <span className="text-blue-400 font-semibold">NextDigit Software</span>, where creativity 
                  meets technology! Established with a vision to transform digital landscapes, 
                  we are a full-service web development and design company dedicated to helping 
                  businesses thrive online.
                </p>
              </div>

              <div className="p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-Maincolor rounded-full"></div>
                  Our Journey
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our journey began with a simple idea: to help businesses thrive in the digital world. 
                  Over the years, we have grown into a team of skilled developers, designers, and 
                  strategists who are committed to delivering exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <img 
                src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt='Our team collaborating' 
                className='relative rounded-2xl shadow-2xl shadow-blue-500/10 transform group-hover:scale-[1.02] transition duration-700'
              />
            </div>

          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '100+', label: 'Projects Completed', color: 'Maincolor' },
              { number: '50+', label: 'Happy Clients', color: 'purple' },
              { number: '24/7', label: 'Support Available', color: 'green' },
              { number: '5+', label: 'Years Experience', color: 'orange' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-slate-600/80 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`text-4xl lg:text-5xl font-bold text-Maincolor mb-3 animate-count-up`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your digital vision to life with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white transition-all duration-300 hover:scale-105">
                Schedule a Call
              </button>
            </div>
          </div>
        </div> */}
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

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 1s ease-out;
        }

        @keyframes count-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutComponent;