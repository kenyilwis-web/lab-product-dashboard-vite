import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemoveProduct }) => {
  // Conditional rendering for the edge case where no products are available.
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {/* Iteration: render one ProductCard per product object. */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={() => onRemoveProduct(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
