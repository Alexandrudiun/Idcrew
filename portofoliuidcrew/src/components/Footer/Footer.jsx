import React from "react";
import "./Footer.css";
export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text">IDCREW</h1>
                        <p>
                            IDCREW is a web development team that is here to help you with
                            your website needs.
                        </p>
                        <div className="contact">
                            <span>
                                <i className="fas fa-phone"></i> &nbsp; 123-456-789
                            </span>
                            <span>
                                <i className="fas fa-envelope"></i> &nbsp; info@idcrew.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 IDCREW. All rights reserved.</p>
            </div>
        </footer>
    );
}
