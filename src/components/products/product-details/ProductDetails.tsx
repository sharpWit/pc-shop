// Components //
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "@/components/benefits/Benefits";
// import SimilarProducts from "./SimilarProducts";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
  // products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product }) => {
  // const similarProductsList = products
  //   .filter((similarProduct) => similarProduct.id !== product.id)
  //   .slice(0, 10);

  return (
    <div className="flex flex-col">
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          <ImageSection imgArray={product.img} product={product} />
          <DetailsSection product={product} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        {/* <SimilarProducts products={similarProductsList} /> */}
      </div>
    </div>
  );
};

export default ProductDetails;
