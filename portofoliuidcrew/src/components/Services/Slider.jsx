import React, { useState } from 'react';
import './Slider.css';

function Slider() {
    const [numStaticPages, setNumStaticPages] = useState(1);
    const [staticPrice, setStaticPrice] = useState(0);

    const handleStaticPageChange = (e) => {
        const pages = e.target.value;
        setNumStaticPages(pages);
        calculateStaticPrice(pages);
    };

    const calculateStaticPrice = (pages) => {
        const pricePerPage = 100;
        if (pages > 2) {
            let basePrice = pages * pricePerPage - (pages * pricePerPage * 10) / 100; // Example price calculation
            basePrice += 50;
            setStaticPrice(basePrice);
        } else {
            setStaticPrice(pages * pricePerPage + 50);
        }
    };

    return (
    
        <div className="slider-container">
            <div className="container">
            <div className="slider-section">
                <h3>Static Website</h3>
                <label htmlFor="static-pages-slider">Number of Pages: {numStaticPages}</label>
                <input
                    type="range"
                    id="static-pages-slider"
                    min="1"
                    max="50"
                    className="slider"
                    value={numStaticPages}
                    onChange={handleStaticPageChange}
                />
                <div className="price-display">
                    <label htmlFor="static-price-display">Price: ${staticPrice.toFixed(2)}</label>
                </div>
            </div>
        </div>

        <div className="informatii">
        <ul>
            <li>Design personalizat</li>
            <br/> <li>Site-ul va fi optimizat pentru toate dispozitivele</li>
            <br/> <li>Site-ul va fi optimizat pentru motoarele de cautare (SEO)</li>
            <br/> <li>Site-ul va fi securizat</li>
            <br/> <li>Site-ul va fi creat in 7-14 zile lucratoare</li>
            <br/> <li>Site-ul va fi scris de la 0.</li>
        </ul>
        </div>


    </div>
    );
}

export default Slider;
