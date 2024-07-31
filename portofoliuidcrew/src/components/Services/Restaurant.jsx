import React, { useState } from "react";
import './Restaurant.css';

function Restaurant() { 
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="restaurant">
            <h1>Restaurant Management System</h1>
            <button className="btn" onClick={handleButtonClick}>
                {isExpanded ? "Show Less" : "Find More"}
            </button>
            {isExpanded && (
                <div className="restaurant-info">
                    <p>
                        Our Restaurant Management System offers a complete solution for efficiently managing your restaurant operations.
                        Key features include table reservations, order management, inventory control, and customer relationship management.
                    </p>
                    <p>
                        Designed to enhance both front-of-house and back-of-house operations, our system ensures seamless coordination and
                        exceptional service delivery. Whether you run a small café or a large restaurant chain, our platform is adaptable,
                        user-friendly, and secure.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Restaurant;
