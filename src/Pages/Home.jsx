import { motion } from 'framer-motion';
import { Code, Cpu, Shield, Rocket, Sparkles } from 'lucide-react';
import Footer from '../components/Footer'
import AboutComponent from '../components/HomeComponents/AboutComponent'
import BlogInsights from '../components/HomeComponents/BlogInsights'
import CTASection from '../components/HomeComponents/CTASection'
import  PartnersSlider  from '../components/HomeComponents/PartnersSlider'
import ServicesShowcase from '../components/HomeComponents/ServicesShowcase'
import SwiperComponent from '../components/HomeComponents/SwiperComponent'
import TestimonialSlider from '../components/HomeComponents/TestimonialSlider'
import Navbar from '../components/Navbar'
import { StatCard } from '../components/ui/AnimatedCounter'
import ProcessFlow from '../components/ui/ProcessFlow'
import FloatingBadges from '../components/ui/FloatingBadges'
import AnimatedDivider from '../components/ui/AnimatedDivider'
import SplitTextReveal from '../components/ui/SplitTextReveal'
import AnimatedGridBackground from '../components/ui/AnimatedGridBackground'
import TiltCard from '../components/ui/TiltCard'
import MorphingShape from '../components/ui/MorphingShape'

const Home = () => {
  return (
    <>
      <div className="relative">
        <SwiperComponent/>
        <FloatingBadges />
      </div>
      <div className='mx-auto'>
        <AboutComponent/>

        <AnimatedDivider variant="minimal" />

        {/* Process Flow Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black overflow-hidden">
          <AnimatedGridBackground variant="dots" />
          <div className="absolute top-8 right-8 opacity-20 hidden lg:block">
            <MorphingShape color="#ffd13b" size={80} speed={5} />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="inline-block px-4 py-1.5 border-2 border-black bg-Secondcolor text-white font-black text-[9px] uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#000]"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                OUR PROCESS
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                How We <span className="inline-block px-3 py-1.5 bg-Maincolor border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[1deg] group-hover:rotate-2 transition-all"><SplitTextReveal>Deliver</SplitTextReveal></span>
              </h2>
            </motion.div>
            <ProcessFlow />
          </div>
        </section>

        <ServicesShowcase/>

        <AnimatedDivider />

        {/* Animated Stats Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#ff4a77] border-t-4 border-b-4 border-black overflow-hidden">
          <AnimatedGridBackground variant="grid" />
          <div className="absolute bottom-8 left-8 opacity-[0.12] hidden lg:block">
            <MorphingShape color="#ffffff" size={100} speed={6} />
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                <SplitTextReveal>By The Numbers</SplitTextReveal>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <TiltCard tiltDegree={4}>
                <StatCard icon={<Code className="w-5 h-5 text-black" />} value={150} suffix="+" label="Deployments Live" delay={0} />
              </TiltCard>
              <TiltCard tiltDegree={4}>
                <StatCard icon={<Cpu className="w-5 h-5 text-black" />} value={99.9} suffix="%" label="System Uptime" delay={0.1} />
              </TiltCard>
              <TiltCard tiltDegree={4}>
                <StatCard icon={<Shield className="w-5 h-5 text-black" />} value={24} suffix="/7" label="Core Support" delay={0.2} />
              </TiltCard>
              <TiltCard tiltDegree={4}>
                <StatCard icon={<Rocket className="w-5 h-5 text-black" />} value={8} suffix="+" label="Design Awards" delay={0.3} />
              </TiltCard>
            </div>
          </div>
        </section>

        <PartnersSlider/>
        <CTASection/>
        <TestimonialSlider/>
        <BlogInsights/>
      </div>
    </>
  )
}

export default Home