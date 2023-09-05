import React from 'react';
import Home from './Home';
import Featured from './Featured';
import Story from './Story';
import Products from './Products';
import Testimonials from './Testimonials';
import New from './New';
import Newsletter from './Newsletter';
import Scroll from './Scroll';
import data from '../../data';

const Main = () => {
   
    return (
      <div>
          <section className="home" id="home">  
            {data.homeData.map((item, index) => {
              return(
                  <Home img={item.img} first={item.first} title={item.title} link={item.link} desc={item.desc} price={item.price} item={item} key={index}/>
              )
            })}
          </section>
              
          <section className="featured section container" id="featured">
            <h2 className="section__title">
                Featured
            </h2>
            
            <div className="products__container grid">
              {data.featuredProducts.map((item, index) => {
                return(
                    <Featured img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
              })}
            </div>
          </section>

          <Testimonials />
          
          <Products />

          <Story />

              
          <section className="new section container" id="new">
            <h2 className="section__title">
                New Arrivals
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
          </section>

          <Newsletter />
          <Scroll/>
      </div>
    );
};

export default Main;