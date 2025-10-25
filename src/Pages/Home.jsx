import Footer from '../components/Footer'
import AboutComponent from '../components/HomeComponents/AboutComponent'
import BlogInsights from '../components/HomeComponents/BlogInsights'
import CTASection from '../components/HomeComponents/CTASection'
import  PartnersSlider  from '../components/HomeComponents/PartnersSlider'
import ServicesShowcase from '../components/HomeComponents/ServicesShowcase'
import SwiperComponent from '../components/HomeComponents/SwiperComponent'
import TestimonialSlider from '../components/HomeComponents/TestimonialSlider'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>   
 <SwiperComponent/>
    <div  className=' mx-auto '>
    
 <AboutComponent/>
 <ServicesShowcase/>
 <PartnersSlider/>
 <CTASection/>
 <TestimonialSlider/>
 <BlogInsights/>  

</div>
    </>
  )
}

export default Home