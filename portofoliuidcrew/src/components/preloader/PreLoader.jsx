import React, { useState, useEffect } from 'react';
import '../../components/preloader/preloader.css';
import logo from '../../assets/logo.png';

const PreLoader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        // Setează un timer care va declanșa animația de dispariție după 3 secunde
        const timer = setTimeout(() => {
            setShouldHide(true);
        }, 3000);

        // Curăță timer-ul dacă componenta este demontată înainte de cele 3 secunde
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (shouldHide) {
            // Așteaptă finalizarea animației de retragere înainte de a ascunde complet preloader-ul
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // durata animației de retragere

            return () => clearTimeout(hideTimer);
        }
    }, [shouldHide]);

    // Dacă preloader-ul nu mai este vizibil, returnează null (nu afișa nimic)
    if (!isVisible) {
        return null;
    }

    return (
        <div className={`preloader ${shouldHide ? 'hide' : ''}`}>
            <div className="img-container">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default PreLoader;
