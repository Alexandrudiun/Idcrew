import React from 'react';
import PreLoader from './components/preloader/PreLoader';
import './style.css';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import Artifica from './components/Particles/Artifica';
import About from './components/about/About';
import promo from '../../../idcrew/portofoliuidcrew/src/assets/promo.mp4';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


function App() {
  const sectionStyle = { width: '100vw', minHeight: '100vh' };

  return (
    <div className="app">
      <div className="bg-video">
        <video autoPlay muted loop id="myVideo">
          <source src={promo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div style={sectionStyle} className="main bg">
        <Navbar />
        <Hero />
      </div>
      <div style={sectionStyle} className="main bg1" id="about">
        <About />
      </div>
      <div style={sectionStyle} className="main bg2" id="services">
        <Services />
        
      </div>

      <div style={sectionStyle} className="main bg3" id="contact">
        <Contact />
      </div>

      <div style={sectionStyle} className="main bg3" id="portofolio">
        <Projects />  
      </div>

      <Artifica />
      <PreLoader />
    </div>
  );
}

export default App;
