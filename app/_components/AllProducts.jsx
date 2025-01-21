"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";
import ProductList from "./ProductList";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "priceLowToHigh":
          return a.price - b.price;
        case "priceHighToLow":
          return b.price - a.price;
        case "ratingHighToLow":
          return (b.rating?.rate || 0) - (a.rating?.rate || 0); // Accessing rating.rate
        case "ratingLowToHigh":
          return (a.rating?.rate || 0) - (b.rating?.rate || 0); // Accessing rating.rate
        default:
          return 0;
      }
    });
  };

  return (
    <div className="bg-background text-foreground p-4 dark:bg-background-dark dark:text-foreground-dark">
      {/* Sort Options */}
      <div className="mb-6 flex justify-end">
        <select
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
          className="p-2 border rounded-md shadow-sm bg-foreground text-background dark:bg-slate-400 dark:text-background-dark"
        >
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="ratingHighToLow">Rating: High to Low</option>
          <option value="ratingLowToHigh">Rating: Low to High</option>
        </select>
      </div>

      {/* Sorted Product List */}
      <ProductList products={sortProducts(products)} />
    </div>
  );
};

export default AllProducts;
