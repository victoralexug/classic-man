// import React from 'react';
//  import { useCart } from "react-use-cart";
//  import toast, { Toaster } from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Products = ({ img, title, price, item }) => {
//    const { addItem } = useCart();

//    const add = () => (
//     toast.success('added to the cart.')
//    );

//     return (
//         <div>
//         <Toaster/>
//             <article className="products__card">
//                 <Link to={`/product/${item.id}`}>
//                 {/* <Link to={`/product/${item.title}`}> */}
//                     <img src={img} alt={title} className="products__img" />
                
//                     <h3 className="products__title">{title}</h3>
//                     <span className="products__price">${price}</span>
//                 </Link>
//                 <button className="products__button">
//                     <i onClick={() =>addItem(item)} onMouseDown={() =>add()} className='bx bx-shopping-bag'></i>
//                 </button>
//             </article>
//         </div>
//     );
// };

// export default Products;

/* {data.productData.map((item, index) => {
                return(
                    <Products img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
              })} */

import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";
 import { useCart } from "react-use-cart";
 import toast, { Toaster } from 'react-hot-toast';
const Products = () => {
    const { addItem } = useCart();
    const add = () => (
            toast.success('added to the cart.')
           );

    const products = data.productData.map(item => {
    return (
      <div key={item.id}>
        <article className="products__card">
            <a href={`/product/${item.id}`}>
                <img src={item.img} alt={item.title} className="products__img" />
        
                <h3 className="products__title">{item.title}</h3>
                <span className="products__price">${item.price}</span>
            </a>
            <button className="products__button">
                <i onClick={() =>addItem(item)} onMouseDown={() =>add()} className='bx bx-shopping-bag'></i>
            </button>
        </article>
      </div>
    );
  });

  return (
    <>
    <Toaster/>
    <section className="products section container" id="products">
            <h2 className="section__title">
                Products
            </h2>

            <div className="products__container grid">
                {products}
            </div>
    </section>
    </>
  );
};

export default Products;
