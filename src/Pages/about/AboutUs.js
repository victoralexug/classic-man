
import data from '../../data';
import New from '../home/New';
import Featured from '../home/Featured'

const AboutUs = () => {
    return (
        <div>

            <section className=" section container" id="">
                <h2 className="section__title">
                    AboutUs
                </h2>
                <div>
                    <Featured />
                </div>
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

export default AboutUs;