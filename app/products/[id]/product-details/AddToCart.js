
"use client"

import { useCart } from '../../../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true); // Update state to show "Go to Cart"
  };

  const handleGoToCart = () => {
    router.push('/cart'); // Redirect to the cart page
  };

  return (
    <button
      onClick={addedToCart ? handleGoToCart : handleAddToCart}
      className={`px-6 py-3 font-semibold rounded-lg transition ${
        addedToCart
          ? 'bg-green-600 text-white hover:bg-green-700'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {addedToCart ? 'Go to Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
