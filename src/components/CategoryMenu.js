import React from 'react';
import Product from './Product';

const CategoryMenu = ({ categories, onColorButtonClick, onAddToCart }) => {
  return (
    <div className="category-menu">
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <div className="products">
            {category.products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onColorButtonClick={onColorButtonClick}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
