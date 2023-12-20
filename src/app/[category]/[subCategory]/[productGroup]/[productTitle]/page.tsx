// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Components //
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductDetails from "@/components/products/product-details/ProductDetails";

// Types //
import { IProduct } from "@/types/products";

const getData = async (
  category: string,
  subCategory: string,
  productGroup: string,
  productTitle: string
) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${category}/${subCategory}/${productGroup}/${productTitle}`,
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
  params: {
    category: string;
    subCategory: string;
    productGroup: string;
    productTitle: string;
  };
};

const SubCategoryPage = async ({ params }: Props) => {
  const product: IProduct = await getData(
    params.category,
    params.subCategory,
    params.productGroup,
    params.productTitle
  );

  return (
    <>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <ProductDetails product={product} />
      </Suspense>
    </>
  );
};

export default SubCategoryPage;
