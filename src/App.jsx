import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import Careers from "./Pages/Careers.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import BlogPost from "./Pages/BlogPost.jsx";
import JobOpenings from "./Pages/JobOpenings.jsx";
import JobOpeningDetail from "./Pages/JobOpeningDetail.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="job-openings" element={<JobOpenings />} />
        <Route path="/job-openings/:slug" element={<JobOpeningDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
