import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemoveProduct }) => {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
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
