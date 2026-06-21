import React from "react";

export const SoftivraLogo = ({ className = "h-10", textColor = "text-slate-900", lightMode = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sleek SVG Icon */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto filter drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="softivraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" /> {/* Royal Blue */}
            <stop offset="50%" stopColor="#4f46e5" />  {/* Indigo */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
          </linearGradient>
        </defs>
        
        {/* Hexagonal Background Frame */}
        <path
          d="M50 5 L88 27 L88 73 L50 95 L12 73 L12 27 Z"
          fill="url(#softivraGrad)"
          stroke={lightMode ? "#ffffff" : "#1e293b"}
          strokeWidth="3"
        />

        {/* Abstract Stylized S-curve representing Softivra */}
        <path
          d="M68 35 C68 25, 58 22, 50 22 C40 22, 32 25, 32 35 C32 48, 68 45, 68 58 C68 68, 58 72, 50 72 C38 72, 32 68, 32 58"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Core Glowing Dot */}
        <circle cx="50" cy="47" r="4.5" fill="#22c55e" />
      </svg>
      
      {/* Brand Text */}
      <span className={`text-xl sm:text-2xl font-bold tracking-tight font-sans ${textColor}`}>
        Softivra
      </span>
    </div>
  );
};

export default SoftivraLogo;
