"use client"
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productServices';
import ProductList from './ProductList';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default AllProducts;
