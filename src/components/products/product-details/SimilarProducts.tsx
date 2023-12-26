// Components //
import CarouselBoxCard from "@/components/carouselBox/CarouselBoxCard";
import { Card, CardTitle } from "@/components/ui/card/Card";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  products: IProduct[];
}
const SimilarProducts: React.FC<Props> = ({ products }) => {
  return (
    <section className="flex flex-col sm:flex-row">
      <Card className="ml-4 p-4 flex items-center justify-center bg-card-foreground">
        <CardTitle className="font-titles text-card">محصولات مشابه</CardTitle>
      </Card>
      <div className="p-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0">
        {products.map((product) => (
          <CarouselBoxCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
