import React from 'react';

const Canvas = ({ images }) => {
  return (
    <div className="canvas">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="選擇的產品"
          style={{ position: 'absolute' }}
        />
      ))}
    </div>
  );
};

export default Canvas;
