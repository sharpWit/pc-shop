// Types //
import { IProduct } from "@/types/products";

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: IProduct,
  product2: IProduct
): number => {
  if (product2?.created_at && product1?.created_at) {
    return Number(product2?.created_at) - Number(product1?.created_at);
  }
  return 0;
};

export const newestProductsFn = (products: IProduct[]) => {
  const productsWithTimeStamp = products?.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.created_at!),
    };
  });
  return productsWithTimeStamp?.sort(sortByTimeStamp);
};
