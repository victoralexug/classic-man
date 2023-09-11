import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import Login from "../../components/Login/Login";
import Slide from "./slide";

const Home = () => {
    const [showLogin, setshowLogin] = useState(false)

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
        image: 'https://raw.githubusercontent.com/victoralexug/weather-icons/main/banner/banner-boss.jpg',
        caption: 'Free Shipping on Orders Over $50',
        },
        {
        image: 'https://raw.githubusercontent.com/victoralexug/weather-icons/main/banner/watches.jpg',
        caption: 'Discover Amazing Deals',
        },
        {
        image: 'https://raw.githubusercontent.com/victoralexug/weather-icons/main/banner/Watch-Banner-Sale.jpg',
        caption: 'Shop the Latest Collection',
        },
        {image: 'https://raw.githubusercontent.com/victoralexug/weather-icons/main/banner/banner-watch.jpg',
        caption: 'Best seller products',
        }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        }, 5000);

        return () => {
        clearInterval(slideInterval);
        };
    }, []);

    const handlePrevSlide = () => {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        setCurrentSlide(prevSlide);
    };

    const handleNextSlide = () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        setCurrentSlide(nextSlide);
    };

    return (
        <div>
        {showLogin && <Login setshowLogin={setshowLogin}/>}
            <div className="home__container container">
                <div className="sidebar">
                    <ul className="category-list">
                    <li><i className='bx bxs-watch'></i><a onClick={() => setshowLogin(true)}>Watches</a></li>
                    <li><i className='bx bx-closet'></i><a onClick={() => setshowLogin(true)}>Clothing</a></li>
                    <li><i className='bx bxs-category-alt'></i><a onClick={() => setshowLogin(true)}>Shoes</a></li>
                    <li><i className='bx bx-tag'></i><a onClick={() => setshowLogin(true)}>Brands</a></li>
                    <li><i className='bx bx-gift'></i><a onClick={() => setshowLogin(true)}>Accessories</a></li>
                    <li><i className='bx bx-cut'></i><a onClick={() => setshowLogin(true)}>Grooming</a></li>
                    <li><i className='bx bx-body'></i><a onClick={() => setshowLogin(true)}>Fashion</a></li>
                    </ul>
                </div>

                <div className="hero-slider">
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
                    <button className="prev-button" onClick={handlePrevSlide}>
                        &lt;
                    </button>
                    <button className="next-button" onClick={handleNextSlide}>
                        &gt;
                    </button>
                </div>
                
                

                <div>
                    <div className="hero-sidebar">
                        <div className="sidebar-content">
                            <h2>New Products</h2>
                            <p>Discover our top picks for you</p>
                            <button className="explore-button" onClick={() => setshowLogin(true)}>Explore</button>
                        </div>
                    </div>
                    <div className="hero-sidebar">
                        <Slide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
