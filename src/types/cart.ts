// Types //
import { IBrand } from "./products";

export interface ICartProduct {
  id: string;
  createdAt: string;
  title: string;
  enTitle: string;
  img: string[];
  price: number;
  isOffer?: boolean;
  discount?: number;
  rate: number;
  slug: string;
  subSlug: string;
  groupTitle: string;
  registerDate?: string;
  quantity: number;
  totalPrice: number;
}

export interface ICartUI {
  cartBoxIsVisible: boolean;
}

export interface ICart {
  items: ICartProduct[];
  totalQuantity: number;
  totalAmount: number;
}

//RootState interface => use for state interface in useSelector hook

export interface ICartUiRootState {
  cartUi: ICartUI;
}
export interface ICartRootState {
  cart: ICart;
}
