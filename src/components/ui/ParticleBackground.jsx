import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const shapes = ['✦', '◆', '●', '■', '▲', '✧'];

const ParticleBackground = ({ count = 12, color = '#000000', opacity = 0.06 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 20,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      duration: 12 + Math.random() * 20,
      delay: Math.random() * 10,
      driftX: (Math.random() - 0.5) * 40,
      driftY: (Math.random() - 0.5) * 40,
    }));
    setParticles(items);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-black"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            color,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.shape}
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleBackground;
