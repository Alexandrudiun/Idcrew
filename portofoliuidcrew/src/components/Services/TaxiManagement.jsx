import React, { useState } from "react";
import './taxi.css';

function TaxiManagement() { 
    const [numTaxis, setNumTaxis] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const pricePerTaxi = 1; // Price per taxi per month in Lei

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleTaxiChange = (e) => {
        setNumTaxis(e.target.value);
    };

    return (
        <div className="taxi-container">
            <h1>Taxi Management System</h1>
            <div className="slider-section">
                <label htmlFor="taxi-slider">Number of Taxis: {numTaxis}</label>
                <input
                    type="range"
                    id="taxi-slider"
                    min="1"
                    max="2000"
                    className="slider"
                    value={numTaxis}
                    onChange={handleTaxiChange}
                />
                <div className="price-display">
                    <label htmlFor="taxi-price-display">Price: {numTaxis * pricePerTaxi} Lei/month</label>
                </div>
            </div>
            <button className="btn" onClick={handleButtonClick}>
                {isExpanded ? "Show Less" : "Find More"}
            </button>
            {isExpanded && (
                <div className="taxi-info">
                    <p>
                        Our Taxi Management System provides comprehensive features for managing your taxi fleet efficiently. 
                        Key features include real-time tracking, automated dispatching, fare calculation, driver management, 
                        and detailed reporting.
                    </p>
                    <p>
                        With our system, you can ensure your customers receive the best service while maximizing your operational efficiency. 
                        Our platform is scalable, secure, and easy to use, making it an ideal choice for both small and large taxi operators.
                    </p>
                    <p>
                        For municipalities, our solution offers enhanced oversight and regulation capabilities, ensuring compliance and 
                        improving public transportation services. The real-time data and analytics provide valuable insights for urban planning 
                        and traffic management, making it a viable solution for modern cities.
                    </p>
                </div>
            )}
        </div>
    );
}

export default TaxiManagement;
