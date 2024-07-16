import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
     
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-name">{product.title}</div>
            <div>${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
