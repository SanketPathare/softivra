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
    <div  className='max-w-[100rem] mx-auto'>
        <Navbar/>
 <SwiperComponent/>
 <AboutComponent/>
 <ServicesShowcase/>
 <PartnersSlider/>
 <CTASection/>
 <TestimonialSlider/>
 <BlogInsights/>  
 <Footer/>
</div>
  )
}

export default Home