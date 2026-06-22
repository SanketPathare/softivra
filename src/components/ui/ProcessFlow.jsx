import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We analyze your needs, goals, and market to define the perfect strategy.', color: '#ffd13b' },
  { num: '02', title: 'Design', desc: 'Our team crafts intuitive wireframes and stunning visual concepts.', color: '#ff4a77' },
  { num: '03', title: 'Develop', desc: 'We build scalable, high-performance solutions using modern tech stacks.', color: '#00b8a9' },
  { num: '04', title: 'Deploy', desc: 'Rigorous testing, launch, and ongoing support to ensure success.', color: '#2563eb' },
];

const ProcessFlow = () => {
  return (
    <div className="relative py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-black/20">
                    <motion.div
                      className="h-full bg-Maincolor"
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                )}
                <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 relative z-10">
                  <div
                    className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm mb-3 shadow-[2px_2px_0px_0px_#000]"
                    style={{ backgroundColor: step.color, color: step.color === '#ffd13b' ? '#000' : '#fff' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-wide mb-2">{step.title}</h3>
                  <p className="text-[11px] font-semibold text-black/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/tablet: vertical timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-black/20" />
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
                className="flex gap-5 mb-8 last:mb-0 relative"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_#000]"
                    style={{ backgroundColor: step.color, color: step.color === '#ffd13b' ? '#000' : '#fff' }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="bg-white border-3 border-black p-5 flex-1 shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200">
                  <h3 className="font-black text-sm uppercase tracking-wide mb-1">{step.title}</h3>
                  <p className="text-[11px] font-semibold text-black/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
