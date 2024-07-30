import React, { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';
import '../../components/preloader/preloader.css'
import logo from '../../assets/logo.png'

const PreLoader = () => {

    useEffect(() => {
      preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
          <div className="img-container">
            <img src={logo} alt="" />
          </div>
        </div>
    );
};

export default PreLoader;
