import React from 'react';
 import { useCart } from "react-use-cart";
 import toast, { Toaster } from 'react-hot-toast';

const Products = (props) => {
   const { addItem } = useCart();

   const add = () => (
    toast.success('added to the cart.')
   );

    return (
        <div>
        <Toaster/>
            <article className="products__card">
                <img src={props.img} alt={props.title} className="products__img" />

                <h3 className="products__title">{props.title}</h3>
                <span className="products__price">${props.price}</span>

                <button className="products__button">
                    <i onClick={() =>addItem(props.item)} onMouseDown={() =>add()} className='bx bx-shopping-bag'></i>
                </button>
            </article>
        </div>
    );
};

export default Products;