import React, { useState } from "react";
import './Services.css';
import Slider from './Slider';
import Restaurant from "./Restaurant";
import TaxiManagement from "./TaxiManagement";

function Services() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSliderVisible, setIsSliderVisible] = useState(false);
    const [isRestaurantVisible, setIsRestaurantVisible] = useState(false);
    const [isTaxiManagementVisible, setIsTaxiManagementVisible] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSliderButtonClick = () => {
        setIsSliderVisible(!isSliderVisible);
    };

    // const handleRestaurantButtonClick = () => {
    //     setIsRestaurantVisible(!isRestaurantVisible);
    // };

    const handleTaxiManagementButtonClick = () => {
        setIsTaxiManagementVisible(!isTaxiManagementVisible);
    };

    return (
        <>
            <div className="servicesCOMP">
                <div className={`servicesexpanded ${isExpanded ? "expanded" : ""}`}>
                    <div className="services">
                        <h1>Our Services</h1>
                        <button className="btn" onClick={handleButtonClick}>
                            {isExpanded ? "Collapse" : "View All"}
                        </button>
                    </div>
                    {isExpanded && (
                        <>
                            <button className="btn" onClick={handleSliderButtonClick}>
                                {isSliderVisible ? "Hide Prices for Static Websites" : "Show Prices for Static Websites"}
                            </button>
                            {isSliderVisible && <Slider />}
                            
                            {/* <button className="btn" onClick={handleRestaurantButtonClick}>
                                {isRestaurantVisible ? "Hide Restaurant Management" : "Show Restaurant Management"}
                            </button>
                            {isRestaurantVisible && <Restaurant />} */}
                            
                            <button className="btn" onClick={handleTaxiManagementButtonClick}>
                                {isTaxiManagementVisible ? "Hide Taxi Management" : "Show Taxi Management"}
                            </button>
                            {isTaxiManagementVisible && <TaxiManagement />}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Services;
