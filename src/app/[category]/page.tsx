// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Instruments //
import axios from "axios";

// Components //
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductList from "@/components/products/product-lists/ProductList";
import SubmenuCategory from "@/components/products/product-lists/SubmenuCategory";

// Types //
import { IProduct } from "@/types/products";

const getData = async (category: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/products/${category}`,
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
