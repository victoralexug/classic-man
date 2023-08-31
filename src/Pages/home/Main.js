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

const Main = (props) => {

  
//   const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
//     //reset: true
// });

    // sr.reveal('.section-title, .home__data, .success',{delay: 100}); 
    // sr.reveal('.skill-item, .contact-info-item,.logos img, .service-item',{ interval: 100}); 
    // sr.reveal('.project-button, .contact__input',{interval: 300});
    // sr.reveal('.home__img, .contact__form',{delay: 500});

   
    return (
      <div>
          <section className="home" id="home">
                {/* <Home img={data.img} /> */}
              
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
            
            <div className="featured__container grid">
              {data.featuredProducts.map((item, index) => {
                return(
                    <Featured img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
              })}
            </div>
          </section>

          <Testimonials />
          
          <section className="products section container" id="products">
            <h2 className="section__title">
                Products
            </h2>

            <div className="products__container grid">
              {data.productData.map((item, index) => {
                return(
                    <Products img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
              })}
            </div>
          </section>

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
          <Scroll darkMode={props.darkMode} />
      </div>
    );
};

export default Main;