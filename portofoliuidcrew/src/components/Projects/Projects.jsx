import React from "react";
import './Projects.css';
import Proiect from "../Proiect/Proiect";
import '../about/about.css'; //!important schimba asta si fa o in css ul de la projects
function Projects() {   
    return ( 
        <>
            <h1 style={{fontSize: '334px'}} className="btn-shine">PROIECTE</h1> 
        <div className="flex">
            {/* <Proiect
             Title="Restaurant Management"
             Description="A web application for managing a restaurant."
             Link="www.google.com"
             Image="https://i.imgur.com/9Y9Yq6B.png"
            /> */}

            <Proiect
                Title="Taxi Management"
                Description="A web application for managing a taxi company."
                Link="www.google.com"
                Image="https://i.imgur.com/9Y9Yq6B.png"
            />
            
            <Proiect
                Title="JSF Project"
                Description="An online job store for students."
                Link="www.google.com"
                Image="https://i.imgur.com/9Y9Yq6B.png"
            />

            <Proiect
                Title="Plug Hunt"
                Description="An EV charging station platform for renting and finding Charging stations."
                Link="www.google.com"
                Image="https://i.imgur.com/9Y9Yq6B.png"
            />
        </div>
        </>
    );
}

export default Projects;
