// Instruments //
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Types //
import { IProduct } from "@/types/products";

const useProducts = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data: IProduct[] = await axios
        .get("http://localhost:3000/api/products")
        .then((res) => res.data);
      if (error) {
        console.error(error);
        throw new Error("Products could not be loaded");
      }
      return data;
    },
  });
  return { products, error, isLoading };
};

export default useProducts;
