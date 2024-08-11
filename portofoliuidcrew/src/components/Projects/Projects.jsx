import React from "react";
import './Projects.css';
import Proiect from "../Proiect/Proiect";
import img from '../../assets/Taxi.webp';
import imgJFS from '../../assets/logo512JFS.png';
import imgHUNT from '../../assets/logo512JFS.png';

function Projects() {   
    return ( 
        <>
            <h1 className="btn-shine">PROIECTE</h1> 
        <div className="flex">
            <Proiect
                Title="Taxi Management"
                Description="A web application for managing a taxi company."
                Link="www.google.com"
                Image={img}
            />
            
            <Proiect
                Title="JSF Project"
                Description="An online job store for students."
                Link="www.google.com"
                Image={imgJFS}
            />

            <Proiect
                Title="Plug Hunt"
                Description="An EV charging station platform for renting and finding Charging stations."
                Link="www.google.com"
                Image={imgHUNT}
            />
        </div>
        </>
    );
}

export default Projects;
