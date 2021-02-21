import Head from "next/head";
import { useRouter } from "next/router";
import ProductsList from "../../components/ProductsList";
import CategoryButtons from "../../components/CategoryButtons";
import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ({ category, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <div>
          <Head>
            <title>{category.name}</title>
          </Head>
          <CategoryButtons categories={categories} />
          <ProductsList products={category.products} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  const categories = await getCategories();
  return { props: { category, categories } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      };
    }),
    fallback: true,
  };
}
