
import New from '../home/New';
import data from '../../data';
import Featured from '../home/Featured'

const SupportCenter = () => {
    return (
        <div>

            <section className=" section container" id="">
                <h2 className="section__title">
                Support Center
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

export default SupportCenter;