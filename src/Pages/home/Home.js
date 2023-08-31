
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';

const Home = (props) => {
    const { addItem } = useCart();

   const add = () => (
    toast.success('added to the cart.')
   );

    return (
        <div>
        <Toaster/>
                <div className="home__container container grid">
                    <div className="home__img-bg">
                        <img src={props.img} alt="" className="home__img" />
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
                        <h1 className="home__title">{props.first} <br/> {props.title}</h1>
                        <p className="home__description">
                            {props.desc}
                        </p>
                        <span className="home__price">${props.price}</span>

                        <div className="home__btns">
                            <a href="https://victoralexug.github.io/victoralexug/" className="button button--gray button--small">
                                {props.link}
                            </a>

                            <button className="button home__button" onClick={() =>addItem(props.item)} onMouseDown={() =>add()}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;