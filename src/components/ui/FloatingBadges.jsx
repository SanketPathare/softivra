import { motion } from 'framer-motion';

const badges = [
  { text: 'AI POWERED', color: 'bg-Maincolor', x: '5%', y: '10%', rotate: -8 },
  { text: '99.9% UPTIME', color: 'bg-teal-accent', x: '80%', y: '15%', rotate: 6 },
  { text: '24/7 SUPPORT', color: 'bg-Secondcolor', x: '88%', y: '70%', rotate: -5 },
  { text: '8+ AWARDS', color: 'bg-blue-accent', x: '3%', y: '75%', rotate: 7 },
];

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 border-2 border-black font-black text-[8px] uppercase tracking-widest text-black shadow-[2px_2px_0px_0px_#000] ${badge.color}`}
          style={{ left: badge.x, top: badge.y, rotate: `${badge.rotate}deg` }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 + 0.5, duration: 0.4, ease: 'easeOut' }}
          animate={{ y: [0, -6, 0] }}
        >
          <span className="text-[10px]">{badge.text === 'AI POWERED' ? '⚡' : badge.text === '99.9% UPTIME' ? '🛡' : badge.text === '24/7 SUPPORT' ? '★' : '🏆'}</span>
          {badge.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBadges;
