import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [showMenu, setshowMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const {
    totalUniqueItems,
    } = useCart()

   const changeNavbar = () => {
    if(window.scrollY >= 10){
        setNavbar(true)
    }else{
        setNavbar(false)
    }
   };

   window.addEventListener('scroll',changeNavbar)

    return (
        <div>                      
            <header className={props.darkMode ? "dark header": "header"} id="header">
                <div  className={navbar ? "scroll-header" : ""}>
                <nav className="nav container">
                    <a href="/classic-man" className="nav__logo">
                        The Classic Man
                    </a>

                    <div className={showMenu ? "nav__menu show-menu": "nav__menu"} id="nav-menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="/classic-man"
                                    className= "nav__link" onClick={() => setshowMenu(false)}>Home
                                </a>
                            </li>

                            {/* <li className="nav__item">
                                <Link to="/productdetails"
                                    className= "nav__link" onClick={() => setshowMenu(false)}> Products
                                </Link>
                            </li> */}
                            
                            <li className="nav__item">
                                <a href="/aboutUs"
                                    className="nav__link" onClick={() => setshowMenu(false)}>About Us
                                </a>
                            </li>
                            
                            
                            <li className="nav__item">
                                <a href="/supportCenter"
                                    className="nav__link" onClick={() => setshowMenu(false)}>Support Center
                                </a>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <i className='bx bx-x' onClick={() => setshowMenu(false)}></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        <i className={props.darkMode ? "bx bx-sun change-theme": "bx bx-moon change-theme"} id="theme-button" onClick={props.toggleDarkMode}></i>

                        <div className="nav__shop" id="cart-shop">
                            <a href="/cart" className="nav__shop">
                                <i className='bx bx-shopping-bag'>
                                    <span className="cart-item-qty">{totalUniqueItems}</span>
                                </i>
                            </a>
                        </div>

                        <div className="nav__toggle" id="nav-toggle">
                            <i className='bx bx-grid-alt' onClick={() => setshowMenu(true)}></i>
                        </div>
                    </div>
                </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
