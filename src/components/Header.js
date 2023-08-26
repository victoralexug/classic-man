import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import Cart from './Cart';


const Header = (props) => {
    const [showMenu, setshowMenu] = React.useState(false)
    const [showCart, setShowCart] = useState(false);
    //const [activeLink, setActiveLink] = useState(false);
    const {
    totalUniqueItems,
    } = useCart()

    // function toggleActiveLink(){
    //     const nav__item = document.querySelector('nav__item')
    //     // href === "#home" ? setActiveLink(true) : setActiveLink(false)
    //     nav__item.href === "#home" ? console.log('clicked') : console.log('nothing')
    // }

    

    return (
        <div >                      
            <header className={props.darkMode ? "dark header": "header"} id="header">
                <div className={props.scrollTop ? "scroll-header": ""}>
                <nav className="nav container">
                    <a href="/" className="nav__logo">
                        The Classic Man
                    </a>

                    <div className={showMenu ? "nav__menu show-menu": "nav__menu"} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className= "nav__link" onClick={() => setshowMenu(false)}>Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#featured" className= "nav__link" onClick={() => setshowMenu(false)}>Featured</a>
                            </li>
                            <li className="nav__item">
                                <a href="#products" className="nav__link" onClick={() => setshowMenu(false)}>Products</a>
                            </li>
                            <li className="nav__item">
                                <a href="#new" className="nav__link" onClick={() => setshowMenu(false)}>New</a>
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
