import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faFileCode, faAlignLeft, faTimes, faCheckCircle, faLongArrowAltRight, faMobile, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import Slider from './Slider';
import Restaurant from "./Restaurant";
import TaxiManagement from "./TaxiManagement";

function Services() {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalIndex) => {
        setActiveModal(modalIndex);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="services-container">
            <a className="btn-shine">Our Services</a>
            <div className="services-section">
                <ul className="service-list">
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(1)}>
                            <FontAwesomeIcon icon={faPencilRuler} className="service-icon" />
                            <h3>Video Editing</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 1 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>Video Editing</h3>
                                <h4>What is Video Editing?</h4>
                                <p>Our professional video editing team is dedicated to transforming your raw footage into polished, compelling content that stands out. Whether you're launching a new app, promoting a product, or showcasing your services, we ensure your message is delivered with impact and style</p>
                                <h4>What We Provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Seamlessly stitching your footage together to create a smooth and engaging narrative.
                                    </li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Utilizing After Effects to add dynamic visual elements that enhance your video's appeal.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Adjusting colors to set the right tone and mood for your video, ensuring it resonates with your audience.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Enhancing audio quality and adding sound effects that complement your visuals.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Creating custom animations and graphics to highlight key information and make your video more informative and visually appealing.</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(2)}>
                            <FontAwesomeIcon icon={faMobile} className="service-icon" />
                            <h3>Mobile Apps</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 2 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>Mobile Apps</h3>
                                <h4>What is Brand & Design?</h4>
                                <p>Our experienced development team is dedicated to delivering seamless, user-friendly, and visually appealing apps that meet your specific needs. Whether you're looking to launch a new product, enhance your services, or engage your audience with a mobile solution, we ensure your app stands out in a competitive market.</p>
                                <h4>What We provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Using React Native, we build apps that run smoothly on both iOS and Android, ensuring a consistent experience for all users.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Crafting intuitive and attractive interfaces that provide a great user experience and keep users engaged.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Ensuring your app runs efficiently and responds quickly, providing a smooth experience even under heavy usage.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Seamlessly connecting your app to necessary services and databases for real-time data and functionality.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Offering continuous updates and improvements to keep your app running at its best and aligned with the latest platform updates.
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(3)}>
                            <FontAwesomeIcon icon={faFileCode} className="service-icon" />
                            <h3>Web Development</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 3 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>Web Development</h3>
                                <h4>What is Web Development?</h4>
                                <p>Web development services are used to design, build, support, and evolve all types of web-based software.</p>
                                <h4>What I provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Web application development</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Testing</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Maintenance</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Design personalizat</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Site-ul va fi optimizat pentru motoarele de cautare (SEO)</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Site-ul va fi securizat</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Site-ul va fi creat in 7-14 zile lucratoare</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Site-ul va fi scris de la 0.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Site-ul va fi optimizat pentru toate dispozitivele</li>
                                </ul>
                                <Slider />
                               
                            </div>
                        </div>
                    </li>
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(4)}>
                            <FontAwesomeIcon icon={faPenFancy} className="service-icon" />
                            <h3>Logo & Slogans</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 4 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>Content Writing</h3>
                                <h4>What is Content Writing?</h4>
                                <p>Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.</p>
                                <h4>What I provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Web content writing</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Blog writing for websites</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Social media content</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Services;
