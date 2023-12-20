// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Components //
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductList from "@/components/products/product-lists/ProductList";

// Types //
import { IProduct } from "@/types/products";

const getData = async (
  category: string,
  subCategory: string,
  productGroup: string
) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${category}/${subCategory}/${productGroup}/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

type Props = {
  params: { category: string; subCategory: string; productGroup: string };
};

const SubCategoryPage = async ({ params }: Props) => {
  const products: IProduct[] = await getData(
    params.category,
    params.subCategory,
    params.productGroup
  );

  return (
    <>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <ProductList productList={products} />
      </Suspense>
    </>
  );
};

export default SubCategoryPage;
