import React, { useEffect, useRef } from 'react';
import modellaptop from '../assets/modellaptop.svg';
import '../assets/modellaptop.svg'; // Asigură-te că ai un fișier CSS pentru stiluri

function HomePage() {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;
            const percentX = (clientX - centerX) / centerX;
            const percentY = (clientY - centerY) / centerY;

            if (imgRef.current) {
                imgRef.current.style.transform = `rotateY(${percentX * 20}deg) rotateX(${percentY * -20}deg)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <p>Sal</p>
            <div className='ContainerFlex'>
            <img ref={imgRef} src={modellaptop} alt="Model Laptop" className="modellaptop" />
            </div>
        </>
    );
}

export default HomePage;
