// Components //
import CarouselBox from "@/components/carouselBox/CarouselBox";
import CarouselBoxCard from "@/components/carouselBox/CarouselBoxCard";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <CarouselBox title="similarProducts" full={true}>
        {products.map((product) => (
          <CarouselBoxCard key={product.slug} product={product} />
        ))}
      </CarouselBox>
    </div>
  );
};

export default SimilarProducts;
