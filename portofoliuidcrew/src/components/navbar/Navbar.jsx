import React from 'react'
import '../../components/navbar/navbar.css';
import logo from '../../assets/favicon.png';
import '../../style.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
            <img src={logo} alt="logo" />
            <h3 className="logo-text">
              I&D Crew | FullStack Developers
            </h3>
        </div>
        <div className="nav-wrapper">
            <ul className="nav-items">
              <a href="#about"><li className="nav-item">About Us</li></a>
              <a href="#background"><li className="nav-item">Our Background</li></a>
              <a href="#skills"><li className="nav-item">Our Skills</li></a>
              <a href="#portofolio"><li className="nav-item">Portofolio</li></a>
              <a href="#services"><li className="nav-item">Services</li></a>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar