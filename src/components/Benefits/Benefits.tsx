// Cores //
import Image from "next/image";

// Constants //
import { benefitContent } from "@/constants/benefits";

// Components //
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog/Dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card/Card";
import { AspectRatio } from "../ui/AspectRetio";

const Benefits = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-8 lg:my-6 max-w-[1200px] w-full flex-wrap lg:flex-nowrap">
      {benefitContent.map((benefitItem) => {
        return (
          <Card
            className=" basis-[90%] md:basis-[45%] lg:basis-1/4 p-4 max-h-[8rem] h-full overflow-hidden"
            key={benefitItem.title}
          >
            <Dialog>
              <DialogTrigger asChild>
                <CardHeader className="flex-row justify-between cursor-pointer p-1">
                  <CardTitle className="font-titles font-semibold text-[1.1em] ">
                    {benefitItem.title}
                  </CardTitle>
                  <CardContent className="w-[8rem]">
                    <AspectRatio ratio={1 / 1}>
                      <Image
                        fill
                        src={benefitItem.imgSrc}
                        alt={benefitItem.title}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </CardContent>
                </CardHeader>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className=" font-titles">
                  <DialogTitle>{benefitItem.title}</DialogTitle>
                  <DialogDescription className=" font-main">
                    {benefitItem.disc}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </Card>
        );
      })}
    </div>
  );
};

export default Benefits;
