// Cores //
import Link from "next/link";

type Props = {
  id: number;
  title: String;
  desc: String;
  img: String;
  slug: String;
};
const Slide: React.FC<Props> = ({ title, desc, img, slug }) => {
  return (
    <>
      <div
        className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `${img}`,
        }}
      >
        <Link href={`/${slug}`} className="block">
          <div className="backdrop-filter backdrop-blur-[12px] bg-background/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden text-right rounded-md md:w-[45%] lg:w-[30%] md:mt-auto absolute bottom-0 md:top-[50%] md:right-[40%] lg:right-[60%] md:bottom-auto">
            <h3 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] font-semibold font-titles">
              {title}
            </h3>
            <p className="text-[1em] mt-2 md:mt-4 lg:mt-8 font-main">{desc}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Slide;
