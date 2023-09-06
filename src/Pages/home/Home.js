import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import Login from "../../components/Login/Login";
import Slide from "./slide";

const Home = () => {
    const [showLogin, setshowLogin] = useState(false)

    // const gotoSlide = (slideIndex) => {
    //     window.clearInterval(myInterval)
        
    //     setCurrentIndex(slideIndex)
    // }

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
        }, 5000); // Change slide every 5 seconds

        return () => {
        clearInterval(slideInterval);
        };
    }, []);


    return (
        <div>
        {showLogin && <Login setshowLogin={setshowLogin}/>}
            <div className="home__container container">
                <div className="sidebar">
                    <h2>Categories</h2>
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