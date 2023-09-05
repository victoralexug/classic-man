import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Featured = ({ img, title, price, item }) => {
    const { addItem } = useCart();

   const add = () => (
    toast.success('added to the cart.')
   );
   
    return (
        <div>
        <Toaster/>
            <article className="featured__card">
                <span className="featured__tag">Sale</span>
                <Link to={`/productDetails/${item.id}`}>
                    <img src={img} alt={title} className="featured__img"/>
                </Link>
                <div className="featured__data">
                    <h3 className="featured__title">{title}</h3>
                    <span className="featured__price">${price}</span>
                </div>
                <button className="button featured__button" onClick={() =>addItem(item)} onMouseDown={() =>add()}>ADD TO CART</button>
            </article>
        </div>
    );
};

export default Featured;