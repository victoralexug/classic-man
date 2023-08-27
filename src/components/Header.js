import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import Cart from './Cart';
import { Link, animateScroll as scroll } from "react-scroll";


const Header = (props) => {
    const [showMenu, setshowMenu] = React.useState(false)
    const [showCart, setShowCart] = useState(false);
    const {
    totalUniqueItems,
    } = useCart()

    

    return (
        <div >                      
            <header className={props.darkMode ? "dark header": "header"} id="header">
                <div className={scroll ? "scroll-header": ""}>
                <nav className="nav container">
                    <a href="#home" className="nav__logo">
                        The Classic Man
                    </a>

                    <div className={showMenu ? "nav__menu show-menu": "nav__menu"} id="nav-menu">

                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={100}
                                    className= "nav__link" onClick={() => setshowMenu(false)}>Home
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link activeClass="active" to="featured" spy={true} smooth={true} offset={-70} duration={500}
                                    className= "nav__link" onClick={() => setshowMenu(false)}> Featured
                                </Link>
                            </li>
                            
                            <li className="nav__item">
                                <Link activeClass="active" to="products" spy={true} smooth={true} offset={-70} duration={500}
                                    className="nav__link" onClick={() => setshowMenu(false)}>Products
                                </Link>
                            </li>
                            
                            
                            <li className="nav__item">
                                <Link activeClass="active" to="new" spy={true} smooth={true} offset={-70} duration={500}
                                    className="nav__link" onClick={() => setshowMenu(false)}>New
                                </Link>
                            </li>
                        </ul>

                        <div className="nav__close" id="nav-close">
                            <i className='bx bx-x' onClick={() => setshowMenu(false)}></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        <i className={props.darkMode ? "bx bx-sun change-theme": "bx bx-moon change-theme"} id="theme-button" onClick={props.toggleDarkMode}></i>

                        <div className="nav__shop" id="cart-shop">
                            <i className='bx bx-shopping-bag' onClick={() => setShowCart(true)}>
                            
                            </i>
                            <span className="cart-item-qty">{totalUniqueItems}</span>
                        </div>

                        {showCart && <Cart  showCart={showCart} setShowCart={setShowCart}/> }

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
