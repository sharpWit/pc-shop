// Instruments //
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Types //
import { IProduct } from "@/types/products";

const useOferredProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["offeredProducts"],
    queryFn: async () => {
      const data: IProduct[] = await axios
        .get("http://localhost:3000/api/products/offers")
        .then((res) => res.data);
      if (error) {
        console.error(error);
        throw new Error("OfferedProducts could not be loaded");
      }
      return data;
    },
  });
  return { products, isLoading, error };
};

export default useOferredProducts;
