import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <>
     <Navbar/>
      <main className='bg-slate-800'>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
            <Route path="/services" element={<Services/>} />
             <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    <Footer/>
    </>
  );
}

export default App;
