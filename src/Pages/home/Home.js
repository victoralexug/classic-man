import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';

const Home = ({img, first, title, price, link, item, desc}) => {
    const { addItem } = useCart();
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${img[currentIndex].url})`,
    }

    const gotoSlide = (slideIndex) => {
        window.clearInterval(myInterval)
        
        setCurrentIndex(slideIndex)
    }

   const add = () => (
    toast.success('added to the cart.')
   );

    var totalSteps = 2;
    var selectedStep = currentIndex; 
    var myInterval = null;

    var start = function(){
        window.clearInterval(myInterval);
        myInterval = window.setInterval(function(){
           
        selectedStep++;
        if ( selectedStep > totalSteps ){
            selectedStep = 0;
        }

        setCurrentIndex(selectedStep);

    }, 4000); 
           
};

useEffect(() => {
    start();
}, [])

    return (
        <div>
        <Toaster/>
            <div className="home__container container grid">
                <div className="home__img-bg">
                    <div>
                        <div style={slideStyles} className="home__img"></div>
                        <div className="dotstylecontainer">
                            {img.map((img, slideIndex) => (
                                <div key={slideIndex} className="dotstyle" onClick={() => gotoSlide(slideIndex)}>.</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="home__social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="home__social-link">
                        Facebook
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="home__social-link">
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home__social-link">
                        Instagram
                    </a>
                </div>

                <div className="home__data">
                    <h1 className="home__title">{first} <br/> {title}</h1>
                    <p className="home__description">
                        {desc}
                    </p>
                    <span className="home__price">${price}</span>

                    <div className="home__btns">
                        <a href="https://victoralexug.github.io/victoralexug/" className="button button--gray button--small">
                            {link}
                        </a>

                        <button className="button home__button" onClick={() =>addItem(item)} onMouseDown={() =>add()}>ADD TO CART</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Home;