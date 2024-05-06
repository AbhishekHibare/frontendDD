
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductSearch from './Components/ProductSearch';

const App = () => {
  return (
    
    <Router>
      <div>
        
        <Navbar />

        <Routes>
          <Route path="/" exact component={<ProductSearch/>} />
          <Route path="/products" component={() => <div>Products Page</div>} />
          <Route path="/about" component={() => <div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
        </Routes>
      </div>
      <div> 
        <ProductSearch />
      </div>
    </Router>
  );
};

export default App;
