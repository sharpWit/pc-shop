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
  if (product2?.createdAt && product1?.createdAt) {
    return Number(product2?.createdAt) - Number(product1?.createdAt);
  }
  return 0;
};

export const newestProductsFn = (products: IProduct[]) => {
  const productsWithTimeStamp = products?.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.createdAt!),
    };
  });
  return productsWithTimeStamp?.sort(sortByTimeStamp);
};
