// Instruments //
import axios from "axios";
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
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/subCategories`
        );

        if (response.status !== 200) {
          throw new Error("Categories could not be loaded");
        }

        const data: ISubCategoryTitle[] = response.data;

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { subCategories, error, isLoading };
};

export default useSubCategories;
