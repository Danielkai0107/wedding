import React, { useState, useEffect } from 'react';

const CategoryMenu = ({ categories, onColorButtonClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  if (!categories) {
    return <div>正在加載分類...</div>;
  }

  return (
    <div className="category-menu">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2 onClick={() => setSelectedCategory(category.id)}>{category.name}</h2>
          {selectedCategory === category.id && (
            <div className="products">
              {category.products.map((product) => (
                <div key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <p>價格：{product.price}</p>
                  <div>
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => onColorButtonClick(product.id, color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryMenu;
