import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const geoms = [
  { path: 'M0,50 Q25,0 50,50 Q75,100 100,50', label: 'wave' },
  { path: 'M0,0 L50,100 L100,0 Z', label: 'triangle' },
  { path: 'M50,0 L100,50 L50,100 L0,50 Z', label: 'diamond' },
  { path: 'M0,0 L100,0 L100,100 L0,100 Z', label: 'square' },
  { path: 'M50,0 C70,0 100,20 100,50 C100,80 70,100 50,100 C30,100 0,80 0,50 C0,20 30,0 50,0 Z', label: 'circle' },
];

const MorphingShape = ({ color = '#ffd13b', size = 60, speed = 4, className = '' }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % geoms.length);
    }, speed * 1000);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {geoms.map((geom, i) => (
        <motion.svg
          key={geom.label}
          viewBox="0 0 100 100"
          className="absolute inset-0"
          style={{ width: size, height: size }}
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={
            i === current
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0.8, rotate: 20 }
          }
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <path
            d={geom.path}
            fill={color}
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="round"
            opacity={0.85}
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default MorphingShape;
