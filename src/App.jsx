
import './App.css'
import AboutComponent from './components/AboutComponent'
import BlogInsights from './components/BlogInsights'
import CTASection from './components/CTASection'
import Navbar from './components/Navbar'
import  PartnersSlider  from './components/PartnersSlider'
import ServicesShowcase from './components/ServicesShowcase'
import SwiperComponent from './components/SwiperComponent'
import TestimonialSlider from './components/TestimonialSlider'

function App() {


  return (
<>
<Navbar/>
 <SwiperComponent/>
 <AboutComponent/>
 <ServicesShowcase/>
 <PartnersSlider/>
 <CTASection/>
 <TestimonialSlider/>
 <BlogInsights/>  
</>
  )
}

export default App
