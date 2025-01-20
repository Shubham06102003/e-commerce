"use client"

import React from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

const CartItemView = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      {/* Left Section: Product Image and Title */}
      <div className="flex items-center space-x-4 w-1/3">
        <div className="relative w-16 h-16">
          <Image
            src={item.product.image}
            alt={item.product.title}
            width={150}
            height={150}
            className="object-cover rounded"
          />
        </div>
        <div className="text-sm">
          <p className="font-semibold">{item.product.title}</p>
        </div>
      </div>

      {/* Middle Section: Price and Quantity */}
      <div className="flex items-center justify-center space-x-4 w-1/3">
        <div className="text-xl font-semibold">
          ${(item.product.price * item.quantity).toFixed(2)}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            <span className="text-lg font-semibold text-gray-800">-</span>
          </button>
          <span className="text-lg">{item.quantity}</span>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <span className="text-lg font-semibold text-gray-800">+</span>
          </button>
        </div>
      </div>

      {/* Right Section: Remove Button */}
      <div className="w-1/3 text-right">
        <button
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
          onClick={handleRemoveClick}
        >
          <span className="text-lg">🗑️</span>
        </button>
      </div>
    </div>
  );
};

export default CartItemView;
