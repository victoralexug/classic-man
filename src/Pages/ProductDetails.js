import React from 'react';
import Products from './home/Products';
import data from '../data';
 

const ProductDetails = () => {

    return (
        <div>
            <section className="products section container" id="products">
                <h2 className="section__title">
                    Products details
                </h2>

                <div className="">
                    <div className="products__container grid">
                        {data.productData.map((item, index) => {
                            return(
                                <Products img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;