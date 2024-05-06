import React, { useState } from 'react';
import './ProductSearch.css'; // Import the CSS file

const ProductSearch = () => {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
    { id: 5, name: 'Product E' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="product-search">
       <div className="search-container">
       
        <input 
          type="text"
          className="search-input"
          placeholder="Search for a product... "
          
          value={searchTerm}
          onChange={handleSearchChange}
          
        />
      </div>

      
      {/* Only render the product list if there's a search term */}
      {searchTerm && (
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearch;

