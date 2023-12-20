// Cores //
import Link from "next/link";
import Image from "next/image";

// Components //
import { AspectRatio } from "../ui/AspectRetio";

interface Props {
  title: string;
  imgSrc: string;
  href: string;
}
const CategorySmBox: React.FC<Props> = ({ title, imgSrc, href }) => {
  return (
    <Link href={`${href}`} className="w-full md:w-1/2 my-4">
      <div className="flex flex-col items-center justify-between">
        <div className="w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              fill
              src={imgSrc}
              alt={title}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="rounded-md object-contain p-4"
            />
          </AspectRatio>
        </div>
        <h3 className="text-sm md:text-base font-semibold mt-4 font-titles">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default CategorySmBox;
