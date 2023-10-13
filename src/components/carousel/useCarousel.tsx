// Instruments //
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type TSliders = {
  id: number;
  title: String;
  desc: String;
  img: String;
  slug: String;
};

const useCarousel = () => {
  const {
    data: sliders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["sliders"],
    queryFn: async () => {
      const data: TSliders[] = await axios
        .get("http://localhost:3000/api/carousel")
        .then((res) => res.data);
      if (error) {
        console.error(error);
        throw new Error("Sliders could not be loaded");
      }
      return data;
    },
  });
  return { sliders, isLoading, error };
};

export default useCarousel;
