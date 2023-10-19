// Cores //
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug: string;
};
const Slide: React.FC<Props> = ({ title, src, slug }) => {
  return (
    <>
      <Link href={`/${slug}`} className="block ">
        <Image
          src={src}
          width={1990}
          height={955}
          alt={title}
          priority
          className=" w-full h-[40vh] md:h-[50vh] lg:h-[60vh] "
        />
      </Link>
    </>
  );
};

export default Slide;
