import React from 'react';
import PreLoader from './components/preloader/PreLoader';
import './style.css';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import HorizontalScroll from 'react-scroll-horizontal';
import Artifica from './components/Particles/Artifica';
import About from './components/about/About';
import promo from '../../../idcrew/portofoliuidcrew/src/assets/promo.mp4';

function App() {
  const childStyle = { width: '100vw', height: '100vh' };

  return (
    <div className="app">
      <div className="bg-video">
        <video autoPlay muted loop id="myVideo">
          <source src={promo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay"></div>
      </div>
      <HorizontalScroll style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll', overflowY: 'hidden' }}>
        <div style={childStyle} className="main bg">
          <Navbar />
          <Hero />
        </div>
        <div style={childStyle} className="main bg1" id="about">
          <About />
        </div>
        <div style={childStyle} className="main bg2">
          <Services />
        </div>
        <Artifica />
      </HorizontalScroll>
      <PreLoader />
    </div>
  );
}

export default App;
