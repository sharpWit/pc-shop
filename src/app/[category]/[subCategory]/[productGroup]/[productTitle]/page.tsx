// Cores //
import { Suspense } from "react";
import Loading from "@/app/loading";

// Components //
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductDetails from "@/components/products/product-details/ProductDetails";

// Types //
import { IProduct } from "@/types/products";
import axios from "axios";

const getData = async (
  category: string,
  subCategory: string,
  productGroup: string,
  productTitle: string
): Promise<IProduct | undefined> => {
  try {
    const response = await axios.get<IProduct[]>(
      `http://localhost:3000/api/products/${category}/${subCategory}/${productGroup}/${productTitle}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    if (response.status === 200 && response.data.length > 0) {
      const data: IProduct = response.data[0];
      return data;
    } else {
      throw new Error("Invalid request!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return undefined or handle this case based on your requirements
    return undefined;
  }
};
const getDataProducts = async (
  category: string,
  subCategory: string,
  productGroup: string
) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/${category}/${subCategory}/${productGroup}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed!");
    }

    return res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(`Error: ${error}`);
    }
  }
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
  const singleProduct: IProduct | undefined = await getData(
    params.category,
    params.subCategory,
    params.productGroup,
    params.productTitle
  );

  const product: IProduct = singleProduct || getEmptyProduct();

  const products: IProduct[] = await getDataProducts(
    params.category,
    params.subCategory,
    params.productGroup
  );

  return (
    <>
      <Breadcrumb />
      <Suspense fallback={<Loading />}>
        <ProductDetails product={product} products={products} />
      </Suspense>
    </>
  );
};

// Function to provide an empty IProduct object as a default value
const getEmptyProduct = (): IProduct => ({
  id: "clqk2bj2h002mumuoctdtt1ps",
  createdAt: "2023-12-24T22:30:07.433",
  title: "اس اس دی سامسونگ s900",
  enTitle: "samsung-ssd-s900",
  desc: "اس اس دی سامسونگ s900",
  img: [
    "/images/products/samsung-ssd.jpg",
    "/images/products/970pro-plus.webp",
    "/images/products/970pro-plus1.webp",
    "/images/products/970pro-plus2.webp",
  ],
  price: 980,
  isOffer: false,
  discount: 10,
  rate: 5,
  slug: "peripherals",
  subSlug: "storage",
  groupTitle: "ssd",
  details: [],
});

export default SubCategoryPage;
