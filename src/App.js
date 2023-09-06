import React, { useState } from 'react';
import './index.css';
import { CartProvider } from "react-use-cart";

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Body from './components/Body';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }



  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Body darkMode={darkMode}/>
          <Footer darkMode={darkMode} />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
