"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  // Function to render star ratings using a for loop
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const emptyStars = 5 - fullStars; // Empty stars to make the total count 5

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-star-${i}`} className="text-yellow-400">★</span>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="text-gray-400">☆</span>);
    }

    return stars;
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer h-full flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div
        onClick={() => router.push(`/products/${product.id}/product-details`)}
        className="flex flex-col items-center h-full"
      >
        <div className="relative w-full h-48 mb-4">
          <Image
            priority
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold mt-3 text-center text-black dark:text-white">{product.title}</h3>
        <p className="text-sm text-gray-500 text-center dark:text-gray-400">{product.category}</p>
        <p className="text-lg font-bold text-green-600 text-center dark:text-green-400">
          ${product.price?.toFixed(2)}
        </p>
        <div className="flex justify-center items-center space-x-1 mt-2">
          {/* Display Rating in Stars */}
          {renderStars(product.rating?.rate || 0)}
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => handleAddToCartClick(product)}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
