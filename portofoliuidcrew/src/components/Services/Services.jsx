import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faPhotoVideo, faFileCode, faAlignLeft, faTimes, faCheckCircle, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
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
                            <h3>UI/UX Consultancy</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 1 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>UI/UX Consultancy</h3>
                                <h4>What is UX consulting?</h4>
                                <p>UX consulting helps companies improve their product’s overall usability and optimize expenses by implementing the right UX processes, methods, and tools.</p>
                                <h4>What I provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Establish the right UX processes</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Create exceptional user experiences</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Discover new business opportunities</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Save resources</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(2)}>
                            <FontAwesomeIcon icon={faPhotoVideo} className="service-icon" />
                            <h3>Branding & Design</h3>
                            <div className="learn-more-btn">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></div>
                        </div>
                        <div className={`service-modal flex-center ${activeModal === 2 ? 'active' : ''}`}>
                            <div className="service-modal-body">
                                <button className="modal-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /> Close</button>
                                <h3>Branding & Design</h3>
                                <h4>What is Brand & Design?</h4>
                                <p>Brand Design can be defined as one of the crucial marketing practices of creating the name, logo, design, and the symbolic elements related to the brand to create a distinctive identity in comparison to the other brands in the market and also providing impetus to the product differentiation.</p>
                                <h4>What I provide</h4>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Logo Design</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Banner Design</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Visual Identity Packages</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Business Cards & Business Systems</li>
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
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="service-container">
                        <div className="service-card" onClick={() => openModal(4)}>
                            <FontAwesomeIcon icon={faAlignLeft} className="service-icon" />
                            <h3>Content Writing</h3>
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
