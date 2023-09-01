
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';
// import { Link } from 'react-router-dom';

const New = ({ img, title, price, item }) => {
    const { addItem } = useCart();

    const add = () => (
     toast.success('added to the cart.')
    );

    return (
        <div>
        <Toaster/>
            <article className="new__card">
                <span className="new__tag">New</span>
                <a href={`/new/${item.id}`}>
                    <img src={img} alt={title} className="new__img" />
                </a>
                <div className="new__data">
                    <a href={`/new/${item.id}`}>
                        <h3 className="new__title">{title}</h3>
                    </a>
                    
                    <span className="new__price">${price}</span>
                </div>

                <button className="button new__button" onClick={() =>addItem(item)} onMouseDown={() =>add()}>ADD TO CART</button>
            </article> 

        </div>
    );
};

export default New;