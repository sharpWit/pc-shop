// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Components //
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductList from "@/components/products/product-lists/ProductList";
import SubmenuCategory from "@/components/products/product-lists/SubmenuCategory";

// Types //
import { IProduct } from "@/types/products";

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: IProduct[] = await getData(params.category);

  const category = params.category;

  return (
    <>
      <Breadcrumb />
      <SubmenuCategory cat={category} />
      <Suspense fallback={<Loading />}>
        <ProductList productList={products} />
      </Suspense>
    </>
  );
};

export default CategoryPage;
