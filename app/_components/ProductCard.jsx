"use client"
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

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
        <h3 className="text-lg font-semibold mt-3 text-center">{product.title}</h3>
        <p className="text-sm text-gray-500 text-center">{product.category}</p>
        <p className="text-lg font-bold text-green-600 text-center">
          ${product.price?.toFixed(2)}
        </p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => handleAddToCartClick(product)}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
