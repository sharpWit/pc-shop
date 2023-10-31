// Cores //
import Image from "next/image";
import Link from "next/link";

// Components //
import { AspectRatio } from "../ui/AspectRetio";

type Props = {
  title: string;
  src: string;
  slug: string;
};
const Slide: React.FC<Props> = ({ title, src, slug }) => {
  return (
    <>
      <Link href={`/${slug}`} className="block ">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={src}
            fill
            alt={title}
            priority
            className="rounded-none md:rounded-md object-cover "
          />
        </AspectRatio>
      </Link>
    </>
  );
};

export default Slide;
