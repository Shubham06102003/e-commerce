"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Use this for navigation
import ProductCard from '../_components/ProductCard';  // Assuming you have a ProductCard component
import { getCategories, getCategoryProducts } from '../services/productServices';  // Assuming these functions exist
import { capitalizeFirstLetter } from '../lib/utils';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Fetch categories on page load
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
      
      // Set the first category as selected by default if categories exist
      if (data.length > 0) {
        setSelectedCategory(data[0]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch products based on selected category
    if (selectedCategory) {
      const fetchProducts = async () => {
        const data = await getCategoryProducts(selectedCategory);
        setProducts(data);
      };
      fetchProducts();
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-4 mt-[-99px]">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Display categories */}
      <div className="flex space-x-5 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'text-blue-500 font-bold'
                : 'text-blue-500 hover:text-slate-600'
            }`}
          >
            {capitalizeFirstLetter(category)}
          </button>
        ))}
      </div>

      {/* Display products for the selected category */}
      {selectedCategory && (
        <>
          <h2 className="text-xl font-semibold mb-4">Products in {selectedCategory} Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.length === 0 ? (
              <p>No products found in this category.</p>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
