import React from 'react';
import './index.css';
import { CartProvider } from "react-use-cart";

import Main from './components/Main';
import Footer from './components/Footer'
import Scroll from './components/Scroll';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }



  return (
    <div className="App">
      <CartProvider>
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> 
      <Footer darkMode={darkMode} />
      <Scroll darkMode={darkMode} />
      </CartProvider>
    </div>
  );
}

export default App;
