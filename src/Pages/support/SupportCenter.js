
import New from '../home/New';
import data from '../../data';

const SupportCenter = () => {
    return (
        <div>

            <section className=" section container" id="">
                <h2 className="section__title">
                Support Center
                </h2>

            </section>

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
};

export default SupportCenter;