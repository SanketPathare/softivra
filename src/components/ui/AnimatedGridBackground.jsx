import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DotGrid = ({ className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 0.8px, transparent 0.8px)',
          backgroundSize: '32px 32px',
          opacity: 0.06,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 0.8px, transparent 0.8px)',
          backgroundSize: '32px 32px',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
};

const AnimatedGridBackground = ({ variant = 'dots', className = '' }) => {
  if (variant === 'dots') return <DotGrid className={className} />;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default AnimatedGridBackground;
