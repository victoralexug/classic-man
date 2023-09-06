import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';

const Slide = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
        image: 'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Shop the Latest Collection',
        },
        {
        image: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Discover Amazing Deals',
        },
        {
        image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Free Shipping on Orders Over $50',
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
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="caption">
                            <h5>{slide.caption}</h5>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Slide;