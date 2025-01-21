import Carousel from "./_components/carousel";
import ProductsCategories from "./_components/ProductsCategories";
import AllProducts from "./_components/AllProducts";

const Home = () => {
  return (
    <div className="mt-[-75px] bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Decorative Box */}
      <div className="w-5 h-5 bg-white dark:bg-gray-900"></div>

      {/* Carousel Section */}
      <Carousel />

      {/* Main Content */}
      <div className="p-4">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Product List
          </h2>

          {/* Categories and Products */}
          <ProductsCategories />
          <AllProducts />
        </section>
      </div>
    </div>
  );
};

export default Home;
