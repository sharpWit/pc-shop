// Instruments //
import axios from "axios";

// Components //
import ProductList from "@/components/products/product-lists/ProductList";

// Types //
import { IProduct } from "@/types/products";

const Offers = async () => {
  const getData = async () => {
    "use server";

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/offers/`
      );

      if (response.status !== 200) {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }

      const products: IProduct[] = response.data;
      return products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching data:", error.message);
      } else {
        console.error("Error fetching data:", error);
      }
      // Handle the error gracefully
    }
  };

  const offersProducts = await getData();

  return (
    <div>
      {offersProducts?.length ? (
        <ProductList productList={offersProducts} />
      ) : null}
    </div>
  );
};

export default Offers;
