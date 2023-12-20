// Cores //
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

interface Props {
  brandName: string;
  imageSrc: string;
}
const BrandBox: React.FC<Props> = ({ brandName, imageSrc }) => {
  return (
    <div className="relative flex items-center p-3 lg:p-2 shadow-md lg:shadow-xl max-w-[300] bg-border">
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          src={imageSrc}
          alt={brandName}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
          className="rounded-md object-contain p-2 bg-white"
        />
      </AspectRatio>
    </div>
  );
};

export default BrandBox;
