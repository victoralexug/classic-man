import React, { useState } from "react";
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
        window.clearInterval(myInterval);
        setCurrentIndex(slideIndex)
    }

   const add = () => (
    toast.success('added to the cart.')
   );

   // set the variable which holds the number of steps/slides you have
var totalSteps = 2;
// set the current selected step, default is the first slide.
var selectedStep = currentIndex; 
// assign this to a variable so you can use later
var myInterval = null;

var start = function(){

    window.clearInterval(myInterval);

    myInterval = window.setInterval(function(){

        // increment the step
        selectedStep++;

        // check that we are not attempting to select a step that doesn't exist
        if ( selectedStep > totalSteps ){
            // reset back to 1
            selectedStep = 0;
        }

        // call the function with the selected step
        setCurrentIndex(selectedStep);

    }, 6000); 
           
};


    return (
        <div>
        <Toaster/>
                <div className="home__container container grid">
                    <div className="home__img-bg">
                        <div>
                            <div style={slideStyles} className="home__img" onLoad={start()}></div>
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



// const Home = ({ slides}) => {
//     const [currentIndex, setCurrentIndex] = useState(0)

//     const sliderStyles = {
//         height: '100%',
//         position: 'relative',
//     }

//     const slideStyles = {
//         width: '100px',
//         height: '100px',
//         borderRaduis: '10px',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundImage: `url(${slides[currentIndex].url})`,
//     }

//     const leftArrow = {
//         position: 'absolute',
//         top: '50%',
//         transform:'translate(0, -50%)',
//         left: '32px',
//         fontSize: '45px',
//         color: '#yellow',
//         zIndex: '1',
//         cursor: 'pointer',
//     }

//     const rightArrow = {
//         position: 'absolute',
//         top: '50%',
//         transform:'translate(0, -50%)',
//         right: '32px',
//         fontSize: '45px',
//         color: 'yellow',
//         zIndex: '1',
//         cursor: 'pointer',
//     }

//     const gotoprev = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     }
//     const gotonext = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     }

//     const dotstylecontainer = {
//         display: 'flex',
//         justifyContent: 'center',
//     }
//     const dotstyle = {
//         margin: '0 3px',
//         cursor: 'pointer',
//         fontSize: '80px',
//     }

//     const gotoSlide = (slideIndex) => {
//         setCurrentIndex(slideIndex)
//     }

//     return (
//         <div style={sliderStyles}>
//             <div style={leftArrow} onClick={gotoprev}>prev</div>
//             <div style={rightArrow} onClick={gotonext}>next</div>
//             <div
//                 style={slideStyles}
//             ></div>
//             <div style={dotstylecontainer}>
//                 {slides.map((slide, slideIndex) => (
//                     <div key={slideIndex} style={dotstyle} onClick={() => gotoSlide(slideIndex)}>.</div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Home;