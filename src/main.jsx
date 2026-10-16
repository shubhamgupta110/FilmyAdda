import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import HelloWorld from './Components/HelloWorld.jsx'
import Navbar from './Components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MainPage from './Components/MainPage.jsx'
import Footer from './Components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
  </StrictMode>,
)
