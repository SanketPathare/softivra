import { motion } from 'framer-motion';

const shapes = [
  { icon: '◆', size: 14, color: '#ffd13b' },
  { icon: '●', size: 10, color: '#ff4a77' },
  { icon: '■', size: 12, color: '#00b8a9' },
  { icon: '▲', size: 11, color: '#2563eb' },
  { icon: '✦', size: 9, color: '#ffd13b' },
  { icon: '⬟', size: 10, color: '#ff4a77' },
];

const AnimatedDivider = ({ variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <div className="relative py-8 overflow-hidden">
        <div className="h-px bg-black/10" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-Maincolor border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 180, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-black font-black text-xs">✦</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-black/10" />
            <div className="flex items-center gap-2">
              {shapes.map((shape, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20, rotate: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: 'easeOut' }}
                  animate={{
                    y: [0, -4, 0],
                    rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                  }}
                  style={{ color: shape.color, fontSize: shape.size }}
                >
                  {shape.icon}
                </motion.div>
              ))}
            </div>
            <div className="flex-1 h-px bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedDivider;
