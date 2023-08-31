
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const New = (props) => {
    const { addItem } = useCart();

    const add = () => (
     toast.success('added to the cart.')
    );

    return (
        <div>
        <Toaster/>
            <article className="new__card">
                <span className="new__tag">New</span>
                <Link to="/productdetails">
                <   img src={props.img} alt={props.title} className="new__img" />
                </Link>
                <div className="new__data">
                    <h3 className="new__title">{props.title}</h3>
                    <span className="new__price">${props.price}</span>
                </div>

                <button className="button new__button" onClick={() =>addItem(props.item)} onMouseDown={() =>add()}>ADD TO CART</button>
            </article> 

        </div>
    );
};

export default New;