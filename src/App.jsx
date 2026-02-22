import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Initial dashboard data used to render product cards.
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  // products stores the current list; filter stores the active availability view.
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  // Derive what should be displayed based on the selected filter button.
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  // Remove a product by id when a ProductCard remove action is triggered.
  const handleRemoveProduct = (productId) => {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button type="button" onClick={() => setFilter('all')}>All</button>
      <button type="button" onClick={() => setFilter('inStock')}>In Stock</button>
      <button type="button" onClick={() => setFilter('outOfStock')}>Out of Stock</button>

      <ProductList products={filteredProducts} onRemoveProduct={handleRemoveProduct} />
    </div>
  );
};

export default App;
