import Carousel from "./_components/carousel";
import ProductsCategories from "./_components/ProductsCategories";
import AllProducts from "./_components/AllProducts";

const Home = () => {
  return (
    <div className="mt-[-99px]">
      <div className="w-5 h-5 bg-white"></div>
      <Carousel />
      <div className="p-4">
        <section>
          <h2 className="text-3xl font-bold mb-6">Product List</h2>
          <ProductsCategories />
          <AllProducts />
        </section>
      </div>
    </div>
  );
};

export default Home;  // Ensure this is a default export
