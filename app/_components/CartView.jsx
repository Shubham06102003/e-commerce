"use client"

import React from 'react';
import ShoppingCartList from './ShoppingCartList';
import TotalShoppingCartPrice from './TotalShoppingCartPrice';

const CartView = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 h-screen">
      {/* Cart Title */}
      <h3 className="text-3xl font-bold text-center mb-6">
        Shopping Cart
      </h3>

      {/* Cart List */}
      <ShoppingCartList />

      {/* Total Price */}
      <TotalShoppingCartPrice />
    </div>
  );
};

export default CartView;
