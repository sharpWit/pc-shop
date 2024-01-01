// Instruments //
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Types //
interface ICategoryTitle {
  id: string;
  name: string;
  icon?: string;
  href: string;
}

const useCategories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          ` ${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
        );

        if (response.status !== 200) {
          throw new Error("Categories could not be loaded");
        }

        const data: ICategoryTitle[] = response.data;

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { categories, error, isLoading };
};

export default useCategories;
