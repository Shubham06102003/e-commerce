import NextLink from 'next/link';
import { getCategories } from '../services/productServices';
import { capitalizeFirstLetter, slugify } from '../lib/utils';

const ProductsCategories = async () => {
  const categories = await getCategories();

  return (
    <div className="w-full bg-transparent py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-start space-x-4 sm:space-x-6 overflow-x-auto">
          {categories.map((category, index) => (
            <NextLink
              key={category}
              href={`/categories/${slugify(category)}/products`}
              className={`text-lg font-medium text-black hover:text-blue-400 transition-colors whitespace-nowrap ${
                index === 0 ? 'ml-0' : ''
              }`}
            >
              {capitalizeFirstLetter(category)}
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
