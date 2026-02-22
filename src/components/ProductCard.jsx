import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  // Apply outOfStockClass only when the product is not in stock.
  const stockClass = product.inStock ? '' : 'outOfStockClass';

  return (
    <div className={`${styles.productCard} ${styles[stockClass] || ''} ${stockClass}`}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      {/* Remove button delegates deletion to the parent state handler. */}
      <button type="button" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default ProductCard;
