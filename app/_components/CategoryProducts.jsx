import React from 'react';
import ProductList from './ProductList';
import { getCategoryProducts } from '../services/productServices';
import { unslugify } from '../lib/utils';

const CategoryProducts = async ({ categoryName }) => {
  const products = await getCategoryProducts(unslugify(categoryName));
  console.log(products);

  return (
    <div className="bg-white dark:bg-gray-900">
      <ProductList products={products} />
    </div>
  );
};

export default CategoryProducts;
