import React from 'react';
import './index.css';
import { CartProvider } from "react-use-cart";

import Header from './components/Header';
// import Cart from './components/Cart';
import Main from './components/Main';
import Footer from './components/Footer'
import Scroll from './components/Scroll';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [scrollTop, setScrollTop] = React.useState(0);
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }


    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop);
    };

  return (
    <div className="App">
      <div style={{ height: '1000px', overflow: 'auto', }} onScroll={handleScroll}>
      <CartProvider>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrollTop={scrollTop}/>
      <Main darkMode={darkMode}/> 
      <Footer darkMode={darkMode} />
      <Scroll scrollTop={scrollTop}/>
      </CartProvider>
    </div>
    </div>
  );
}

export default App;
