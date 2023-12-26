// Instruments //
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
        const response = await fetch("http://localhost:3000/api/productGroups");
        if (!response.ok) {
          throw new Error("ProductGroups could not be loaded");
        }
        const data: IProductGroups[] = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { productGroups, error, isLoading };
};

export default useProductGroups;
