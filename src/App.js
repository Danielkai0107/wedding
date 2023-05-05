import React, { useState } from 'react';
import CategoryMenu from './components/CategoryMenu';
import ProductCanvas from './components/ProductCanvas';

const initialCategories = [
  // 在此插入先前提供的初始類別和產品資料
  {
    id: 1,
    name: "桌布",
    products: [
      {
        id: "tablecloth-1",
        name: "桌布1",
        image: "https://example.com/tablecloth1.jpg",
        price: 100,
        colors: ["紅", "藍", "綠"],
      },
      {
        id: "tablecloth-2",
        name: "桌布2",
        image: "https://example.com/tablecloth2.jpg",
        price: 120,
        colors: ["金", "銀", "青"],
      },
    ],
  },
  {
    id: 2,
    name: "花瓶",
    products: [
      {
        id: "vase-1",
        name: "花瓶1",
        image: "https://example.com/vase1.jpg",
        price: 200,
        colors: ["紅", "黃", "藍"],
      },
      {
        id: "vase-2",
        name: "花瓶2",
        image: "https://example.com/vase2.jpg",
        price: 250,
        colors: ["金", "銀", "青"],
      },
    ],
  },
  // 更多類別和產品...

];

const initialProducts = initialCategories.reduce((acc, category) => {
  return [...acc, ...category.products.map((product) => ({ ...product, visible: false }))];
}, []);

const App = () => {
  const [categories] = useState(initialCategories);
  const [products, setProducts] = useState(initialProducts);

  const onColorButtonClick = (productId, color) => {
    console.log(`Product ID: ${productId}, Color: ${color}`);
  };

  return (
    <div className="app">
      <div className="header" style={{ height: '80px', background: 'lightgray' }}>
        <h1>婚禮佈置購物網站</h1>
      </div>
      <div className="main" style={{ display: 'flex' }}>
        <div className="category-menu" style={{ flex: '1' }}>
          <CategoryMenu categories={categories} onColorButtonClick={onColorButtonClick} />
        </div>
        <div className="product-canvas" style={{ flex: '1' }}>
          <ProductCanvas products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
