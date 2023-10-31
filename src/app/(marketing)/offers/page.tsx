// Components //
import ProductList from "@/components/products/product-lists/ProductList";

// Types //
import { IProduct } from "@/types/products";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products/offers/", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const products: IProduct[] = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
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
