"use client"

import { useCart } from '../context/CartContext';
import CartItemView from './CartItem';

const ShoppingCartList = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id} className="mb-6">
              <CartItemView item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCartList;
