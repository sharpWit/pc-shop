"use client";

// Components //
import Images from "./Images";
import DetailsSection from "./DetailsSection";
import SimilarProducts from "./SimilarProducts";
import Benefit from "@/components/benefit/Benefit";

// Types //
import { IProduct } from "@/types/products";
import ProductContent from "./ProductContent";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const similarProductsList = products
    .filter((similarProduct) => similarProduct.id !== product.id)
    .slice(0, 10);

  return (
    <section className="flex flex-col space-y-8 w-full p-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 w-full max-h-full lg:max-h-[60vh]">
        <Images product={product} />
        <DetailsSection product={product} />
      </div>

      <div className="mx-auto">
        <Benefit />
      </div>
      <ProductContent />
      {similarProductsList.length > 1 ? (
        <SimilarProducts products={similarProductsList} />
      ) : null}
    </section>
  );
};

export default ProductDetails;
