import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    
    </>
  );
}

export default App;
