import React from 'react';
import './Slider.css';

function Slider() {
    return (
        <div className="slider-container">
            <div className="slider-section">
                <label htmlFor="pages-slider">Number of Pages:</label>
                <input type="range" id="pages-slider" min="1" max="100" className="slider" />
            </div>
            <div className="slider-section">
                <label htmlFor="price-slider">Price Range:</label>
                <input type="range" id="price-slider" min="0" max="10000" className="slider" />
            </div>
            <div className="checkbox-section">
                <label>
                    <input type="checkbox" id="static-site" />
                    Static Site
                </label>
            </div>
            <div className="checkbox-section">
                <label>
                    <input type="checkbox" id="dynamic-site" />
                    Dynamic Site
                </label>
            </div>
        </div>
    );
}

export default Slider;
