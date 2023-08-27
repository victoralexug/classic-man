import React, { useRef } from 'react';
import { useCart } from 'react-use-cart';

const Cart = ({ setShowCart, darkMode }) => {
    
    const cartRef = useRef();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return (
        <div className="cart-wrapper" ref={cartRef}>       
            <div className={darkMode ? "dark cart": "cart"} id="cart">
                <i className='bx bx-x cart__close' id="cart-close" onClick={() => setShowCart(false)}></i>

                <h2 className="cart__title-center">My Cart</h2>
                <br/>
                {isEmpty && (
                    <div className="empty-cart cart__title-center">
                        <img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA='
                         alt='shopping-bag' 
                         />
                        <h3>Your shopping bag is empty</h3>
                        <br/>
                        <button
                            type="button"
                            onClick={() => setShowCart(false)}
                            className="button button--small"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
                {items.length >= 1 && (    
                    <span className='empty-cart'  onClick={() => emptyCart()}>Empty Cart</span>
                )}
                <br/>
                <br/>
                <div className="cart__container">
                    {items.length >= 1 && items.map((item, index) => (
                        <article className="cart__card" key={index}>
                            <div className="cart__box">
                                <img src={item.img} alt={item.title} className="cart__img" />
                            </div>

                            <div className="cart__details">
                                <h3 className="cart__title">{item.title}</h3>
                                <span className="cart__price">${item.price}</span>

                                <div className="cart__amount">
                                    <div className="cart__amount-content">
                                        <span className="cart__amount-box">
                                            <i className='bx bx-minus' onClick={() => {item.quantity > 1 ? updateItemQuantity(item.id,item.quantity -1) : updateItemQuantity(item.id,item.quantity)}}></i>
                                        </span>

                                        <span className="cart__amount-number">{item.quantity}</span>

                                        <span className="cart__amount-box">
                                            <i className='bx bx-plus' onClick={() => updateItemQuantity(item.id,item.quantity +1)}></i>
                                        </span>
                                    </div>

                                    <i className='bx bx-trash-alt cart__amount-trash' onClick={() => removeItem(item.id)}></i>
                                </div>
                            </div>
                        </article>
                    ))}  
                </div>

                {items.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="cart__prices">
                            
                            
                            <span className="cart__prices-item">{totalItems} Item{totalUniqueItems > 1 && "s"}</span>
                            <span className="cart__prices-total">Total : ${cartTotal}</span>

                        </div>
                        <br/>
                        <div>
                            <button className="button button--small">
                                <span  onClick={null}>Proceed to checkout</span>
                            </button>
                        </div>
                    </div>
                )}    
            </div>
        </div>
    );
};

export default Cart;