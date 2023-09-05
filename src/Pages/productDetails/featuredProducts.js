import React from "react"
import {useParams} from "react-router-dom"
import data from "../../data";
import { useCart } from "react-use-cart";
import toast, { Toaster } from 'react-hot-toast';
import New from "../home/New";

function ProductDetail() {
    const {itemId} = useParams()
    const thisProduct = data.featuredProducts.find(item => item.id === itemId)
    
    const { addItem } = useCart();
    const add = () => (
            toast.success('added to the cart.')
        );


    return (
        <div>
            <Toaster/>
            <div className="product-details-container">
                <div className="product-image">
                    <img src={thisProduct.img} alt={thisProduct.title} />
                </div>
                <div className="product-info">
                    <h1>{thisProduct.title}</h1>
                    <p className="product-price">Price: ${thisProduct.price}</p>
                    <p className="product-description">{thisProduct.desc}</p>
                    <button onClick={() =>addItem(thisProduct)} onMouseDown={() =>add()} className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <h2 className="section__title">
            You May Also Like
            </h2>
            <div className="new__container">
                <div className="marquee">
                    <div className="new-container track"> 
                        {data.newProducts.map((item, index) => {
                        return(
                            <New img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                        )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail