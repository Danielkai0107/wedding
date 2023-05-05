import { useState } from 'react';
import { categories } from './data';
import CategoryMenu from './components/CategoryMenu';
import Canvas from './components/Canvas';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleColorButtonClick = (imageUrl) => {
    setSelectedImages((prevImages) => [...prevImages, imageUrl]);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return (
    <div className="app">
      <div className="app-navbar">導航欄</div>
      <div className="app-main">
        <CategoryMenu
          categories={categories}
          onColorButtonClick={handleColorButtonClick}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
        <Canvas images={selectedImages} />
      </div>
    </div>
  );
}

export default App;
