// Instruments //
import { useQuery } from "@tanstack/react-query";

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
        const response = await fetch("http://localhost:3000/api/categories");
        if (!response.ok) {
          throw new Error("Categories could not be loaded");
        }
        const data: ICategoryTitle[] = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { categories, error, isLoading };
};

export default useCategories;
