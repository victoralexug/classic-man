import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from '../Login/Login';
import './header.css';


const Header = (props) => {
    const [showMenu, setshowMenu] = useState(false)
    const [showLogin, setshowLogin] = useState(false)

    const { totalUniqueItems } = useCart()

    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = (query) => {
        // Perform the search using the query (e.g., fetch data from an API)
        // Update the searchResults state with the search results
        // For simplicity, let's just log the query for now
        console.log('Searching for:', query);
    };


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const changeNavbar = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', changeNavbar);
        return () => {
            window.removeEventListener('resize', changeNavbar);
        };
    }, []);

    return (
        <div>                      
            <header className={props.darkMode ? "dark header": "header"} id="header">
                <nav className="nav container">
                    <a href="/classic-man" className="nav__logo">
                        The Classic Man
                    </a>

                    {windowWidth >= 767 && <SearchBar onSearch={handleSearch} />}

                    <div className={showMenu ? "nav__menu show-menu": "nav__menu"} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to ="/classic-man"
                                    className= "nav__link" onClick={() => setshowMenu(false)}>Home
                                </Link>
                            </li>
                            
                            <li className="nav__item">
                                <Link to ="/aboutUs"
                                    className="nav__link" onClick={() => setshowMenu(false)}>About Us
                                </Link>
                            </li>
                            
                            <li className="nav__item">
                                <Link to ="/supportCenter"
                                    className="nav__link" onClick={() => setshowMenu(false)}>Support Center
                                </Link>
                            </li>
                        </ul> 

                        <div className="nav__close" id="nav-close">
                            <i className='bx bx-x' onClick={() => setshowMenu(false)}></i>
                        </div>
                    </div>

                    <div className="nav__btns">
                        
                        <div className="nav__shop" id="cart-shop">
                            <Link to ="/cart" className="nav__shop">
                                <i className='bx bxs-cart-alt'>
                                    <span className="cart-item-qty">{totalUniqueItems}</span>
                                </i>
                            </Link>
                        </div>

                        <div className="nav__login">
                            <i className='bx bx-user-circle' onClick={() => setshowLogin(true)}></i>
                        </div>

                        <div className="nav__login">
                            <i className={props.darkMode ? "bx bx-sun change-theme": "bx bx-moon change-theme"} id="theme-button" onClick={props.toggleDarkMode}></i>
                        </div>
                        
                        <div className="nav__toggle" id="nav-toggle">
                            <i className='bx bx-grid-alt' onClick={() => setshowMenu(true)}></i>
                        </div>

                    </div>
                </nav>
                
                {windowWidth < 767 && <SearchBar onSearch={handleSearch} />}
            </header>
            {showLogin && <Login setshowLogin={setshowLogin}/>}
        </div>
    );
};

export default Header;