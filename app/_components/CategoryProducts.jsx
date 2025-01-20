import React from 'react';
import ProductList from './ProductList';
import { getCategoryProducts } from '../services/productServices';
import { unslugify } from '../lib/utils';

const CategoryProducts = async ({ categoryName }) => {
  const products = await getCategoryProducts(unslugify(categoryName));
  console.log(products)
  return <ProductList products={products} />;
};

export default CategoryProducts;
