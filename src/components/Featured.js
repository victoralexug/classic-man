import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';

const Featured = (props) => {
    const { addItem } = useCart();

   const add = () => (
    toast.success('added to the cart.')
   );
   
    return (
        <div>
        <Toaster/>
            <article className="featured__card">
                <span className="featured__tag">Sale</span>

                <img src={props.img} alt={props.title} className="featured__img"/>

                <div className="featured__data">
                    <h3 className="featured__title">{props.title}</h3>
                    <span className="featured__price">${props.price}</span>
                </div>
                <button className="button featured__button" onClick={() =>addItem(props.item)} onMouseDown={() =>add()}>ADD TO CART</button>
            </article>
        </div>
    );
};

export default Featured;