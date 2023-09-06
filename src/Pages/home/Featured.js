import { Link } from 'react-router-dom';
import data from "../../data";

const Featured = () => {
  const scrollLeft = () => {
    const productList = document.querySelector('.featured-list');
    productList.scrollLeft -= 100; // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    const productList = document.querySelector('.featured-list');
    productList.scrollLeft += 100;
  };


    return (
        <div>
            <section className="featured section container" id="featured">
                <h2 className="section__title">
                    Our Best Seller
                </h2>

                <div className="featured-products">
                    {/* <button className="scroll-button left" onClick={scrollLeft}>
                        &lt; 
                    </button> */}
                    <div className="featured-list">

                        {data.featuredProducts.map((item, index,) => {
                            return(
                                <article key={index} className="featured-card">

                                    <span className="featured__tag">Sale</span>

                                    <Link to={`/productDetails/${item.id}`}>
                                        <img src={item.img} alt={item.title} className="featured__img"/>
                                    </Link>

                                    <div>
                                        <h3 className="featured-title">{item.title}</h3>
                                        <span>${item.price}</span>
                                    </div>
                                </article>
                            ) 
                        })}
                    </div>  
                    {/* <button className="scroll-button right" onClick={scrollRight}>
                        &gt; 
                    </button> */}
                </div>
            </section>
        </div> 
    );
};

export default Featured;