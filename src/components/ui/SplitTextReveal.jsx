import { motion } from 'framer-motion';

const SplitTextReveal = ({ children, className = '', delay = 0, stagger = 0.04 }) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-flex overflow-hidden mr-[0.25em]">
          {word.split('').map((char, cIdx) => (
            <motion.span
              key={cIdx}
              className="inline-block"
              initial={{ y: '100%', rotate: 5 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + (wIdx * word.length + cIdx) * stagger,
                duration: 0.4,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default SplitTextReveal;
