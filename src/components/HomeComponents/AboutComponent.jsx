import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutComponent = () => {
  return (
    <div className="min-h-screen bg-slate-800 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <div className="w-1.5 h-1.5 bg-Maincolor rounded-full animate-pulse"></div>
            <span className="text-Maincolor text-xs font-semibold uppercase tracking-wider">About Our Company</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
           Welcome to Our 
             <span className="ml-2 text-Maincolor">Story</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where innovative ideas meet cutting-edge technology to craft remarkable digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-5">
              <div className="p-5 sm:p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                  Our Beginning
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Welcome to <span className="text-blue-400 font-semibold">Softivra</span>, where creativity 
                  meets technology! Established with a vision to transform digital landscapes, 
                  we are a full-service web development and design company dedicated to helping 
                  businesses thrive online.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-Maincolor rounded-full"></div>
                  Our Journey
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-Maincolor to-Secondcolor rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <img 
                src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                alt='Our team collaborating' 
                className='relative rounded-2xl shadow-xl shadow-blue-500/5 transform group-hover:scale-[1.01] transition duration-500 w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-fade-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="text-3xl sm:text-4xl font-bold text-Maincolor mb-1.5">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
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
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out 0.1s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default AboutComponent;