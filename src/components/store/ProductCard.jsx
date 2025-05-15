// ProductCard.jsx
import React from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ProductCard = ({ product, onViewDetails }) => {
    console.log(product)
  return (
    <Card
      className="overflow-hidden"
      cover={
        <div className="relative bg-red-500 h-48">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <Button 
            icon={<ShoppingCartOutlined />} 
            className="absolute top-2 right-2 bg-white"
          />
        </div>
      }
      bodyStyle={{ padding: '16px' }}
    >
      <p className="text-gray-600">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
      <h3 className="text-lg font-bold">${product.price}</h3>
      <p className="text-sm text-gray-500 mb-2">
        Description for this item is very important for the user, they have to know in details of the item...
        <button 
          onClick={() => onViewDetails(product)} 
          className="text-blue-500 ml-1"
        >
          see more
        </button>
      </p>
      <Button 
        icon={<ShoppingCartOutlined />} 
        className="float-right"
      />
    </Card>
  );
};

export default ProductCard;