import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { skill: 'Web Dev', value: 95 },
  { skill: 'UI/UX', value: 90 },
  { skill: 'Cloud', value: 82 },
  { skill: 'Security', value: 78 },
  { skill: 'AI/ML', value: 72 },
  { skill: 'Mobile', value: 85 },
];

const CapabilityRadar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-white border-3 border-black p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-Maincolor border border-black" />
        <h3 className="font-black text-base uppercase tracking-wide">Core Capabilities</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#000" strokeWidth={1.5} strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#000', fontSize: 10, fontWeight: 800, fontFamily: 'Outfit' }}
            stroke="#000"
            strokeWidth={1.5}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Capabilities"
            dataKey="value"
            stroke="#000"
            strokeWidth={2.5}
            fill="#ffd13b"
            fillOpacity={0.4}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            activeDot={{ r: 6, fill: '#ff4a77', stroke: '#000', strokeWidth: 2 }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {data.map((item, i) => (
          <motion.div
            key={item.skill}
            className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 border-2 border-black shadow-[1px_1px_0px_0px_#000] transition-all cursor-default ${
              activeIndex === i ? 'bg-Maincolor -translate-x-[1px] -translate-y-[1px]' : 'bg-white'
            }`}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            animate={activeIndex === i ? { scale: 1.05 } : { scale: 1 }}
          >
            {item.skill}: {item.value}%
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CapabilityRadar;
