import React, { useState } from 'react';

const Product = ({ product, onColorButtonClick, onAddToCart, onRemoveFromCart }) => {
  const [selectedImage, setSelectedImage] = useState(product.colorOptions[0].imageUrl);
  const [inCart, setInCart] = useState(false);

  const handleColorButtonClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    onColorButtonClick(imageUrl);
  };

  const handleCartButtonClick = () => {
    if (inCart) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
    setInCart(!inCart);
  };

  return (
    <div>
      <img src={selectedImage} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      {product.colorOptions.map((colorOption) => (
        <button
          key={colorOption.id}
          onClick={() => handleColorButtonClick(colorOption.imageUrl)}
        >
          {colorOption.name}
        </button>
      ))}
      <button onClick={handleCartButtonClick}>{inCart ? '取消' : '加入購物車'}</button>
    </div>
  );
};

export default Product;
