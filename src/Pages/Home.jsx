import { motion } from 'framer-motion';
import { Code, Cpu, Shield, Rocket } from 'lucide-react';
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

const Home = () => {
  return (
    <>
      <div className="relative">
        <SwiperComponent/>
        <FloatingBadges />
      </div>
      <div className='mx-auto'>
        <AboutComponent/>

        {/* Process Flow Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-b-4 border-black overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 border-2 border-black bg-Secondcolor text-white font-black text-[9px] uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#000]">
                OUR PROCESS
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter leading-none">
                How We <span className="inline-block px-3 py-1.5 bg-Maincolor border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[1deg]">Deliver</span>
              </h2>
            </motion.div>
            <ProcessFlow />
          </div>
        </section>

        <ServicesShowcase/>

        {/* Animated Stats Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#ff4a77] border-t-4 border-b-4 border-black overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                By The <span className="inline-block px-3 py-1.5 bg-white text-black border-3 border-black shadow-[4px_4px_0_0_#000] rotate-[-1deg]">Numbers</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <StatCard
                icon={<Code className="w-5 h-5 text-black" />}
                value={150}
                suffix="+"
                label="Deployments Live"
                delay={0}
              />
              <StatCard
                icon={<Cpu className="w-5 h-5 text-black" />}
                value={99.9}
                suffix="%"
                label="System Uptime"
                delay={0.1}
              />
              <StatCard
                icon={<Shield className="w-5 h-5 text-black" />}
                value={24}
                suffix="/7"
                label="Core Support"
                delay={0.2}
              />
              <StatCard
                icon={<Rocket className="w-5 h-5 text-black" />}
                value={8}
                suffix="+"
                label="Design Awards"
                delay={0.3}
              />
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