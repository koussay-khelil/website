import ProductsList from "../../components/ProductsList";
import CategoryButtons from "../../components/CategoryButtons";
import { getProducts, getCategories } from "../../utils/api";

const Products = ({ products, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <div>
          <CategoryButtons categories={categories} />
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}

export default Products;
