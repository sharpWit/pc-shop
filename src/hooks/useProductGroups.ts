// Instruments //
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Types //
interface IProductGroups {
  id: string;
  name: string;
  icon?: string;
  href: string;
  subSlug: string;
}

const useProductGroups = () => {
  const {
    data: productGroups,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["productGroups"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          ` ${process.env.NEXT_PUBLIC_BASE_URL}/api/productGroups`
        );

        if (response.status !== 200) {
          throw new Error("ProductGroups could not be loaded");
        }

        const data: IProductGroups[] = response.data;

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { productGroups, error, isLoading };
};

export default useProductGroups;
