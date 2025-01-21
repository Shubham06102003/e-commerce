"use client"

import { useCart } from '../context/CartContext';

const TotalShoppingCartPrice = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <>
      {cartItems.length > 0 && (
        <div className="mt-4">
          <hr className="border-t-2 border-gray-200 dark:border-gray-700" />
          <div className="mt-4">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Total Cost: ${cartTotal.toFixed(2)}
            </p>
          </div>
          <div className="mt-4 mb-6">
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-300 dark:hover:text-black">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalShoppingCartPrice;
