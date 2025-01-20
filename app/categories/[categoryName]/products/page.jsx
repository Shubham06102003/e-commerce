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
    <div className="p-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">{displacedCategoryName} Products</h2>

      {/* Category Products Component */}
      <CategoryProducts categoryName={categoryName} />
    </div>
  );
};

export default CategoryProductsPage;
