
import { Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <div>
            <footer className={props.darkMode ? "dark footer section" :"footer section"}>
            <div className="footer__container container grid">
                <div className="footer__content">
                    <h3 className="footer__title">Our information</h3>

                    <ul className="footer__list">
                        <li>United Kingdom</li>
                        <li>123-456-789</li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Customer Support</h3>

                    <ul className="footer__links">
                        
                        <li>
                            <Link  className="footer__link" to="/aboutUs">
                                About Us
                            </Link>
                        </li>
                        
                        <li>
                            <Link  className="footer__link" to="/supportCenter">
                                Support Center
                            </Link>
                        </li>
                        <li>
                            <a href="https://victoralexug.github.io/victoralexug/" className="footer__link">Copy Right</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Product</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="https://victoralexug.github.io/victoralexug/" className="footer__link">Watches</a>
                        </li>
                        <li>
                            <a href="https://victoralexug.github.io/victoralexug/" className="footer__link">Shoes</a>
                        </li>
                        <li>
                            <a href="https://victoralexug.github.io/victoralexug/" className="footer__link">Suites</a>
                        </li>
                        <li>
                            <a href="https://victoralexug.github.io/victoralexug/" className="footer__link">Accesories</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Social</h3>

                    <ul className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-facebook'></i>
                        </a>

                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-twitter' ></i>
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social-link">
                            <i className='bx bxl-instagram' ></i>
                        </a>
                    </ul>
                </div>
            </div>

            <span className="footer__copy">&#169; Victor Eze. All rigths reserved</span>
        </footer>

        </div>
    );
};

export default Footer;