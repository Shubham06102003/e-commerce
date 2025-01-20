const API_URL = 'https://fakestoreapi.com';

// Fetch all products from the Fake Store API
const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`, {
    next: {
      revalidate: 3600, // Re-fetch products every hour
    },
  });
  const data = await res.json();
  return data;
};

// Fetch all categories from the Fake Store API
const getCategories = async () => {
  const res = await fetch(`${API_URL}/products/categories`, {
    cache: 'force-cache', // Force cache the categories data
  });
  const data = await res.json();
  return data;
};

// Fetch all products in a specific category
const getCategoryProducts = async (categoryName) => {
  const res = await fetch(`${API_URL}/products/category/${categoryName}`, {
    next: {
      revalidate: 3600, // Re-fetch products every hour
    },
  });
  const data = await res.json();
  return data;
};

// Fetch a specific product by its ID
const getProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    next: {
      revalidate: 3600, // Re-fetch product every hour
    },
  });
  const data = await res.json();
  return data;
};

// Exporting all functions
export { API_URL, getProducts, getCategories, getCategoryProducts, getProduct };
