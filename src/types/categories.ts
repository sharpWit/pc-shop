// Types //
import { IProduct } from "./products";

export interface ICategories {
  id: string;
  createdAt: string;
  name: string;
  title: string;
  desc?: string;
  icon?: string;
  imgSrc: string;
  imgWidth: number;
  href: string;
  styles: IStyleCat;
  products: IProduct[];
}

export interface IStyleCat {
  gridRow?: string;
  gridColumn?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  paddingBlock?: string;
  paddingInline?: string;
  backgroundColor: string;
}
