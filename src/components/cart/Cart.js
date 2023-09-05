import React, { useRef } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import New from '../../Pages/home/New';
import data from '../../data';
import './cart.css';

const Cart = () => {
    
    const cartRef = useRef();

    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

  return (
    <div>
        <div className="cart-container" ref={cartRef}>
            {isEmpty && (
                <div className="empty-cart">
                    <i className='bx bx-cart empty-cart-icon'></i>
                    <h1>Your Cart is Empty</h1>
                    <Link to="/classic-man">
                        <button className="shop-button">Start Shopping!</button>
                    </Link>
                </div>
            )}

           
            {items.length >= 1 && items.map((item, index) => (
            <div className='cart-content'> 
            <p>Items : <span>({totalItems})</span></p>   
            {items.length >= 1 && items.map((item, index) => (
                <div className="cart-items" key={index}>
                <br />
                    <div className="cart-item">
                        <img src={item.img} alt={item.title} />
                        <div className="item-details">
                            <div className='item-title'>
                                <h2>{item.title}</h2>
                                <p>Price: ${item.price}</p>
                            </div>
                            
                            <div>
                                <div className="cart__amount-content">
                                    <span className="cart__amount-box">                                    
                                    <i className='bx bx-minus' onClick={() => {item.quantity > 1 ? updateItemQuantity(item.id,item.quantity -1) : updateItemQuantity(item.id,item.quantity)}}></i>
                                    </span>

                                    <span className="cart__amount-number">{item.quantity}</span>
                                    <span className="cart__amount-box">
                                        <i className='bx bx-plus' onClick={() => updateItemQuantity(item.id,item.quantity +1)}></i>
                                    </span>
                                </div>
                                <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div> 
            ))}
            </div>
            ))}


            {items.length >= 1 && (
            <div className="cart-summary">
                <div >
                    <p>Subtotal : <span>${cartTotal.toFixed(2)}</span></p>
                
                    <div className="promo-section">
                        <h2><i className='bx bx-tag'></i> Coupon</h2>
                        <div className="promo-coupon">
                            <input type="text" placeholder="Enter Coupon Code" className="promo-input" />
                            <button className="promo-button">Apply Coupon</button>
                        </div>
                    </div>
                </div>
            
                <div className="shipping-info">
                    <h2>Shipping Information</h2>
                    <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required /><br />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required /><br />

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required /><br />

                    <label htmlFor="zip">Zip Code:</label>
                    <input type="text" id="zip" name="zip" required /><br />

                    <button className="checkout-button">Proceed to Checkout</button>
                    </form>
                </div>
            </div>
            )}
        </div>

        <br />
        <br /><br /><br />

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
        
  );
}

export default Cart;