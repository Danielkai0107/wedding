export const categories = [
  {
    id: 1,
    name: '類別1',
    products: [
      {
        id: 11,
        name: '產品1',
        price: 100,
        colorOptions: [
          { id: 1, name: '紅色', imageUrl: 'path/to/red-image.jpg' },
          { id: 2, name: '藍色', imageUrl: 'path/to/blue-image.jpg' },
        ],
      },
      {
        id: 12,
        name: '產品2',
        price: 200,
        colorOptions: [
          { id: 1, name: '紅色', imageUrl: 'path/to/red-image.jpg' },
          { id: 2, name: '藍色', imageUrl: 'path/to/blue-image.jpg' },
        ],
      },
    ],
  },
  // ... 更多類別
];
