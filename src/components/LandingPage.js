import React from 'react';
import './LandingPage.css';

const LandingPage = ({ products, addToCart }) => {
  return (
    <div className="product-area">
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>Manis - {product.category}</span>
            <button onClick={() => addToCart(product)}>Order</button>
          </div>
        ))}
      </div>

      <div className="category-filter">
      </div>
    </div>
  );
};

export default LandingPage;