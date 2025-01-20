import { API_URL, getProduct } from '../../../services/productServices';
import { notFound } from 'next/navigation';
import AddToCartButton from './AddToCart'; // Import the AddToCartButton component

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }) {
  const { id } = params;

  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = params;

  if (!id) {
    notFound();
  }

  const product = await getProduct(id);

  // Determine rating color
  const getRatingColor = (rating) => {
    if (rating < 2) return 'text-red-500';
    if (rating >= 2 && rating < 4) return 'text-yellow-500';
    return 'text-green-500';
  };

  const ratingValue = product.rating?.rate || 0; // Safely access rate from the rating object

  return (
    <div className="mx-auto p-4 md:p-8 w-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image and Info */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md h-[400px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-xl font-bold text-gray-700 mb-4">${product.price}</p>

          {/* Product Category */}
          <p className="text-sm font-medium text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {/* Product Rating */}
          <p className={`text-lg font-semibold mb-6 ${getRatingColor(ratingValue)}`}>
            <span className="font-medium">Rating:</span> {ratingValue} / 5
          </p>

          {/* Product Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex justify-between items-center">
            <AddToCartButton product={product} /> {/* Use the AddToCartButton */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
