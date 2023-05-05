import React from 'react';

const ShoppingCart = ({ totalAmount }) => {
  return (
    <div className="shopping-cart">
      <p>購物車總金額：{totalAmount}</p>
    </div>
  );
};

export default ShoppingCart;
