// Types //
import { IProduct } from "@/types/products";

export const sortByPoPularity = (
  product1: IProduct,
  product2: IProduct
): number => {
  return product2.rate - product1.rate;
};
