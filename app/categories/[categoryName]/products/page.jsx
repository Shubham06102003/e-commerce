import { decodeCategoryName, unslugify } from '../../../lib/utils';
import { getCategories } from '../../../services/productServices';
import CategoryProducts from '../../../_components/CategoryProducts';

// Return a list of `params` to populate the [categoryName] dynamic segment
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((categoryName) => ({
    categoryName,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ params }) {
  const { categoryName } = await params;

  const displacedCategoryName = decodeCategoryName(unslugify(categoryName));

  return {
    title: `${displacedCategoryName} Products`,
  };
}

const CategoryProductsPage = async ({ params }) => {
  const { categoryName } = await params;

  const displacedCategoryName = decodeCategoryName(unslugify(categoryName));

  return (
    <div className="mt-[-70px] p-4 dark:bg-gray-900 dark:text-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold mt-2 mb-6 dark:text-gray-200">{displacedCategoryName} Products</h2>

      {/* Category Products Component */}
      <CategoryProducts categoryName={categoryName} />
    </div>
  );
};

export default CategoryProductsPage;
