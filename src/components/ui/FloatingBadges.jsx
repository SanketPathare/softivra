import { motion } from 'framer-motion';

const badges = [
  { text: 'AI POWERED', color: 'bg-Maincolor', x: '4%', y: '8%', rotate: -8 },
  { text: '99.9% UPTIME', color: 'bg-teal-accent', x: '82%', y: '12%', rotate: 6 },
  { text: '24/7 SUPPORT', color: 'bg-Secondcolor', x: '86%', y: '68%', rotate: -5 },
  { text: '8+ AWARDS', color: 'bg-blue-accent', x: '2%', y: '72%', rotate: 7 },
];

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block pointer-events-auto"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 + 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className={`flex items-center gap-2 px-3 py-1.5 border-3 border-black font-black text-[9px] uppercase tracking-widest text-black shadow-[3px_3px_0px_0px_#000] cursor-pointer rounded-none select-none ${badge.color}`}
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{
              y: [0, -8, 0],
              rotate: [badge.rotate - 1, badge.rotate + 1.5, badge.rotate - 1]
            }}
            variants={{
              hover: {
                scale: 1.1,
                boxShadow: "6px 6px 0px 0px #000000",
                y: -14,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }
            }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2.2 + i * 0.4,
                ease: "easeInOut"
              },
              rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2.6 + i * 0.5,
                ease: "easeInOut"
              }
            }}
            whileHover="hover"
          >
            <motion.div
              className="flex items-center justify-center"
              variants={{
                hover: { 
                  scale: 1.15,
                  rotate: [badge.rotate, badge.rotate - 10, badge.rotate + 10, badge.rotate],
                  transition: { duration: 0.4, ease: "easeInOut" }
                }
              }}
            >
              <span className="text-[11px] leading-none">
                {badge.text === 'AI POWERED' ? '⚡' : badge.text === '99.9% UPTIME' ? '🛡' : badge.text === '24/7 SUPPORT' ? '★' : '🏆'}
              </span>
            </motion.div>
            <motion.span
              variants={{
                hover: { 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }
              }}
            >
              {badge.text}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBadges;
