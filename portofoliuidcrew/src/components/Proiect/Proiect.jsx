import React from "react";
import './Proiect.css';

function Proiect({Title, Description, Image , Link}) {
    return (
        <>
            <div className="card">

                
                <img src={Image} className="imagini" alt="Avatar" />
                <div className="container">
                    <h4><b>{Title}</b></h4>
                    <p>{Description}</p>
                    <a href={Link}>View Project</a>
                </div>
            </div>
        </>
    );
}

export default Proiect;