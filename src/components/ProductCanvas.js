import React from 'react';

const ProductCanvas = ({ products }) => {
  return (
    <div className="product-canvas">
      {products.map((product) => (
        <img
          key={product.id}
          src={product.image}
          alt={product.name}
          style={{
            position: 'absolute',
            display: product.visible ? 'block' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export default ProductCanvas;
