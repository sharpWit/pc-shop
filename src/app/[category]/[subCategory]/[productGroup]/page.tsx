// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Instruments //
import axios from "axios";

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
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${category}/${subCategory}/${productGroup}/`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed!");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    } else {
      console.error(`Error: ${error}`);
    }
  }
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
