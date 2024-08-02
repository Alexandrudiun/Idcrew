import React from 'react';
import PreLoader from './components/preloader/PreLoader';
import '../src/style.css';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import HorizontalScroll from 'react-scroll-horizontal';
import Artifica from './components/Particles/Artifica';
import About from './components/about/About';

function App() {
  const childStyle = { width: '100vw', height: '100vh' };

  return (
    <div className="app">
      <HorizontalScroll
        config={{ stiffness: 160, damping: 24 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <div style={childStyle} className="main bg">
          <Navbar />
          <Hero />
        </div>
        <div style={childStyle} className="main bg1">
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
