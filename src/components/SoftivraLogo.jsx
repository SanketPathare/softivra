import React from "react";

export const SoftivraLogo = ({ className = "h-10", textColor = "text-black", lightMode = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Neo-Brutalist SVG Icon */}
      <svg
        viewBox="0 0 110 110"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flat SVG Shadow Hexagon */}
        <path
          d="M55 12 L93 34 L93 80 L55 102 L17 80 L17 34 Z"
          fill="#000000"
        />

        {/* Foreground Hexagon with solid border */}
        <path
          d="M50 7 L88 29 L88 75 L50 97 L12 75 L12 29 Z"
          fill="#ffd13b"
          stroke="#000000"
          strokeWidth="6"
          strokeLinejoin="miter"
        />

        {/* Heavy Black S-curve representing Softivra */}
        <path
          d="M66 37 C66 27, 58 24, 50 24 C40 24, 34 27, 34 37 C34 50, 66 48, 66 61 C66 71, 58 74, 50 74 C40 74, 34 71, 34 61"
          stroke="#000000"
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Saturated Core Pink Dot with outline */}
        <circle 
          cx="50" 
          cy="49" 
          r="5" 
          fill="#ff4a77" 
          stroke="#000000" 
          strokeWidth="2.5" 
        />
      </svg>
      
      {/* Brand Text */}
      <span className={`text-base sm:text-lg font-black tracking-widest uppercase ${textColor}`}>
        Softivra
      </span>
    </div>
  );
};

export default SoftivraLogo;
