// Cores //
import Link from "next/link";
import Image from "next/image";

// Instruments //
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

// Components //
import { Button } from "@/components/ui/button";
import DiscountFlipCountdown from "@/components/ui/counter/DiscountCountdown";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  numberOfDiscountDate: number;
  buttonText: string;
  href: string;
}
const BannerBox: React.FC<Props> = ({
  title,
  description,
  imgSrc,
  imgWidth,
  numberOfDiscountDate,
  buttonText,
  href,
}) => {
  return (
    <div className="col-span-6 flex items-center justify-center shadow-2xl relative rounded-lg overflow-hidden dark:bg-gray-500/70 !dark:bg-blend-multiply">
      <div style={{ width: `${imgWidth}px` }} className="h-full">
        <AspectRatio ratio={16 / 9}>
          <Image
            fill
            src={imgSrc}
            alt={title}
            className="rounded-md object-cover drop-shadow-lg hover:scale-110 transition duration-1000"
          />
        </AspectRatio>
      </div>

      <div className="flex justify-between items-center gap-2 sm:block absolute top-[25%] sm:top-3 md:top-8 lg:top-2 2xl:top-6 sm:left-[35%] sm:w-[55%] md:w-1/2 lg:w-[60%] xl:w-1/2">
        <h3 className="text-popover dark:text-white text-lg lg:text-xl xl:text-2xl font-titles font-semibold  sm:pt-4 lg:pt-2 xl:pt-4">
          {title}
        </h3>
        <p className="hidden sm:block text-popover/80 dark:text-white/70 leading-6 text-xs lg:text-sm xl:text-base my-2 sm:my-4 lg:my-2 2xl:my-4 2xl:mt-6 font-main">
          {description}
        </p>
        <Link href={href}>
          <Button
            size={"sm"}
            className="bg-primary/90 hover:bg-primary/100 transition-all duration-300 2xl:mt-4 font-main"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
      <DiscountFlipCountdown targetDate={numberOfDiscountDate} />
    </div>
  );
};

export default BannerBox;
