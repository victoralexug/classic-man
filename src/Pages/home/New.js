
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const New = ({ img, title, price, item }) => {

    return (
        <div>
            <article className="new__card">
                <span className="new__tag">New</span>
                <Link to={`/new/${item.id}`}>
                    <img src={img[0]} alt={title} className="new__img" />
                </Link>
                <div className="new__data">
                    <a href={`/new/${item.id}`}>
                        <h3 className="new__title">{title}</h3>
                    </a>
                    
                    <span className="new__price">${price}</span>
                </div>
            </article> 

        </div>
    );
};

export default New;