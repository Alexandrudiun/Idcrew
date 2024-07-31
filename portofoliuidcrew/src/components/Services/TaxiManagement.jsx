import React, { useState } from "react";
import './taxi.css';

function TaxiManagement() { 
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="taxi">
            <h1>Taxi Management System</h1>
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
                </div>
            )}
        </div>
    );
}

export default TaxiManagement;
