
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.tsx';
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <ScrollToTop />
        <App />
        <ScrollToTop />
 </BrowserRouter>
 
)
