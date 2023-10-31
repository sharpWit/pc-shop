export interface IProduct {
  id: string;
  created_at?: string;
  modified_at?: string;
  deleted_at?: string;
  title: string;
  enTitle: string;
  desc?: string;
  img: string[];
  price: number;
  isOffer?: boolean;
  discount?: number;
  rate: number;
  slug: string;
  subSlug: string;
  groupTitle: string;
  brand: IBrand;
  details?: IProductDetails[];
}

export interface IImage {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface IProductDetails {
  size?: string;
  weight?: string;
  color?: string;
  ports?: string;
  wireless?: boolean;
  bluetooth?: boolean;
}

export interface IBrand {
  id: number;
  name: string;
  desc?: string;
  logo: string;
  slug: string;
}
