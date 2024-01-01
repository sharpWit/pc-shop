// Components //
import ProductList from "@/components/products/product-lists/ProductList";

// Instruments //
import axios from "axios";

// Types //
import { IProduct } from "@/types/products";

const getData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/products/offers/",
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
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

const Offers = async () => {
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
