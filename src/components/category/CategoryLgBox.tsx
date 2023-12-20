// Cores //
import Link from "next/link";
import Image from "next/image";

// Components //
import { AspectRatio } from "../ui/AspectRetio";
import { Button } from "../ui/button";

interface Props {
  title: string;
  desc?: string;
  styles: {
    gridRow?: string;
    gridColumn?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    paddingBlock?: string;
    paddingInline?: string;
    backgroundColor: string;
  };
  href: string;
  imgSrc: string;
}
const CategoryLgBox: React.FC<Props> = ({
  title,
  desc,
  styles,
  href,
  imgSrc,
}) => {
  return (
    <div
      className="w-full flex gap-2 rounded-md shadow-lg overflow-hidden"
      style={styles as React.CSSProperties}
    >
      <div className="flex flex-col justify-between gap-2 mx-[0.5rem]">
        <h3 className="text-lg font-semibold font-titles text-category dark:text-category">
          {title}
        </h3>
        <p className="text-xs mt-2 font-main text-category">{desc}</p>
        <Link
          href={href}
          className="mt-4 hover:scale-105 transition-all duration-300"
        >
          <Button size={"sm"} className="text-xs font-main">
            دیدن همه محصولات
          </Button>
        </Link>
      </div>
      <div className="w-full">
        <AspectRatio ratio={1 / 1}>
          <Image
            fill
            src={imgSrc}
            alt={title}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="p-2 rounded-md object-contain drop-shadow-lg hover:scale-95 transition-transform duration-300"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default CategoryLgBox;
