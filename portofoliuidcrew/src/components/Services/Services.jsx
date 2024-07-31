import React, { useState } from "react";
import './Services.css';
import Slider from './Slider';

function Services() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`servicesexpanded ${isExpanded ? "expanded" : ""}`}>
            <div className="services">
                <h1>Our Services</h1>
                <button className="btn" onClick={handleButtonClick}>
                    {isExpanded ? "Collapse" : "View All"}
                </button>
            </div>
            {isExpanded && <Slider />}
        </div>
    );
}

export default Services;
