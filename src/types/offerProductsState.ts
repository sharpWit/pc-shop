import { IProduct } from "./products";

export interface IOfferProducts {
  specialOfferProducts: IProduct[] | [];
}

export interface IOfferRootState {
  specialOfferProductsList: IOfferProducts;
}
