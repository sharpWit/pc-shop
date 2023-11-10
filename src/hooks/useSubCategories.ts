// Instruments //
import { useQuery } from "@tanstack/react-query";

// Types //
interface ISubCategoryTitle {
  id: string;
  name: string;
  icon?: string;
  href: string;
  slug: string;
  productGroup: IProductGroups[];
}

interface IProductGroups {
  id: string;
  name: String;
  icon?: String;
  href: String;
}

const useSubCategories = () => {
  const {
    data: subCategories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["subCategories"],
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:3000/api/subCategories");
        if (!response.ok) {
          throw new Error("Categories could not be loaded");
        }
        const data: ISubCategoryTitle[] = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { subCategories, error, isLoading };
};

export default useSubCategories;
