
import React, { useState, useEffect } from 'react';

function ProductDetail({ match }) {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <p>{product.description}</p>
      <div>Price: ${product.price}</div>
    </div>
  );
}

export default ProductDetail;
