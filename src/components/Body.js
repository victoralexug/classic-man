
import Main from '../Pages/home/Main';
import ProductDetails from '../Pages/ProductDetails';
import AboutUs from '../Pages/AboutUs';
import SupportCenter from '../Pages/SupportCenter';
import Cart from './Cart';
import {  Routes, Route } from 'react-router-dom';

const Body = (props) => {
    return (
        <div>
                
                <main className={props.darkMode ? "dark main" : "main"}>
                <Routes>
                    <Route path='/Cart' Component={Cart} />
                    <Route path='/' exact Component={Main}/>
                    <Route path='/productdetails' Component={ProductDetails} />
                    <Route path='/aboutUs' Component={AboutUs} />
                    <Route path='/supportCenter' Component={SupportCenter} />
                </Routes>
                </main>
        </div>
    );
};

export default Body;