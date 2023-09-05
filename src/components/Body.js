import Main from '../Pages/home/Main';
import AboutUs from '../Pages/about/AboutUs';
import SupportCenter from '../Pages/support/SupportCenter';
import Cart from './cart/Cart';
import {  Routes, Route } from 'react-router-dom';
import ProductDetails from '../Pages/productDetails/productDetails';
import featuredProducts from '../Pages/productDetails/featuredProducts';
import NewDetails from '../Pages/productDetails/newDetails';
import ScrollToTop from './ScrollToTop';

const Body = (props) => {

    return (
        <div>    
            <main className={props.darkMode ? "dark main" : "main"}>
                <ScrollToTop />
                <Routes>
                    <Route path='/Cart' Component={Cart} />
                    <Route path='/classic-man' exact Component={Main}/>
                    <Route path='/aboutUs' Component={AboutUs} />
                    <Route path='/supportCenter' Component={SupportCenter} />
                    <Route path="/product/:itemId" Component={ProductDetails} />
                    <Route path="/productDetails/:itemId" Component={featuredProducts} />
                    <Route path="/new/:itemId" Component={NewDetails} />
                </Routes>
            </main>
        </div>
    );
};

export default Body;