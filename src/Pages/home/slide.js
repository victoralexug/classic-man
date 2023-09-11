import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';

const Slide = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
        image: 'https://victoralexug.github.io/the-classic-man/assets/img/featured1.png'
        },
        {
        image: 'https://victoralexug.github.io/the-classic-man/assets/img/product1.png'
        },
        {
        image: 'https://victoralexug.github.io/the-classic-man/assets/img/new1.png'
        },
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        }, 2000); // Change slide every 2 seconds

        return () => {
        clearInterval(slideInterval);
        };
    }, []);


    return (
        <div>
            <div>    
                <div className="side-slider">
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className={`small-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                    >
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Slide;