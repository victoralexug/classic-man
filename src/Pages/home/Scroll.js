import React, { useState } from 'react';

const Scroll = () => {
    const [scrollup, setScrollup] = useState(false)

   const changeNavbar = () => {
    if(window.scrollY >= 10){
        setScrollup(true)
    }else{
        setScrollup(false)
    }
   };

   window.addEventListener('scroll',changeNavbar)

    return (
        <div>
            <a href="#home" className={ scrollup ? "scrollup show-scroll" : "scrollup"} id="scroll-up"> 
                <i className='bx bx-up-arrow-alt scrollup__icon' ></i>
            </a>
        </div>
    );
};

export default Scroll;