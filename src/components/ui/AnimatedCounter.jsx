import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, suffix = '', duration = 2, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

const StatCard = ({ icon, value, suffix, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    className="relative bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 text-center group"
  >
    <div className="absolute top-0 left-0 w-full h-1.5 bg-Maincolor" />
    <div className="flex justify-center mb-3">
      <div className="p-2.5 bg-Maincolor border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:bg-Secondcolor transition-colors">
        {icon}
      </div>
    </div>
    <div className="text-3xl sm:text-4xl font-black text-black mb-1">
      <AnimatedCounter end={value} suffix={suffix} />
    </div>
    <div className="text-[10px] font-black text-black/70 uppercase tracking-widest">
      {label}
    </div>
  </motion.div>
);

export { AnimatedCounter, StatCard };
