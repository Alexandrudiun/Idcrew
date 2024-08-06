import React, { useState } from "react";
import './Services.css';
import Slider from './Slider';
import Restaurant from "./Restaurant";
import TaxiManagement from "./TaxiManagement";

function Services() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="servicesCOMP">
            <div className={`servicesexpanded ${isExpanded ? "expanded" : ""}`}>
                <div className="services">
                    <h1>Our Services</h1>
                    <button className="btn" onClick={handleButtonClick}>
                        {isExpanded ? "Collapse" : "View All"}
                    </button>
                </div>
                <div className={`content ${isExpanded ? "expanded" : ""}`}>
                    <div>
                        <h2>Prices for Static Websites</h2>
                        <Slider />
                    </div>
                    
                    {/* <div>
                        <h2>Restaurant Management</h2>
                        <Restaurant />
                    </div> */}
                    
                    <div>
                        <h2>Taxi Management</h2>
                        <TaxiManagement />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
