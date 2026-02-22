import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const stockClass = product.inStock ? '' : 'outOfStockClass';

  return (
    <div className={`${styles.productCard} ${styles[stockClass] || ''} ${stockClass}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button type="button" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default ProductCard;
