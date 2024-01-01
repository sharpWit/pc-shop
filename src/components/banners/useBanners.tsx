// Instruments //
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type TBanners = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  numberOfDiscountDate: number;
  href: string;
};

const useBanners = () => {
  const {
    data: bannerContent,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const data: TBanners[] = await axios
        .get(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/banners`)
        .then((res) => res.data);
      if (error) {
        console.error(error);
        throw new Error("Banners could not be loaded");
      }
      return data;
    },
  });
  return { bannerContent, isLoading, error };
};

export default useBanners;
