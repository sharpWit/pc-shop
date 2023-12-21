// Components //
import DetailsSection from "./DetailsSection";
import Benefits from "@/components/benefits/Benefits";
// import SimilarProducts from "./SimilarProducts";

// Types //
import { IProduct } from "@/types/products";
import Images from "./Images";

interface Props {
  product: IProduct;
  // products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product }) => {
  // const similarProductsList = products
  //   .filter((similarProduct) => similarProduct.id !== product.id)
  //   .slice(0, 10);

  return (
    <section className="flex flex-col space-y-8 w-full p-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 w-full max-h-full lg:max-h-[60vh]">
        <Images product={product} />
        <DetailsSection product={product} />
      </div>

      <div className="mx-auto">
        <Benefits />
      </div>
      {/* <SimilarProducts products={similarProductsList} /> */}
    </section>
  );
};

export default ProductDetails;
