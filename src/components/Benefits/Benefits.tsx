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
import { Card, CardContent, CardHeader } from "../ui/card/Card";

const Benefits = () => {
  return (
    <div className="flex items-center justify-center gap-4 my-12 lg:my-8 max-w-[1200px] w-full flex-wrap lg:flex-nowrap">
      {benefitContent.map((benefitItem) => {
        return (
          <Card
            className=" basis-[90%] md:basis-[45%] lg:basis-1/4 p-4 max-h-[8rem] h-full overflow-hidden"
            key={benefitItem.title}
          >
            <Dialog>
              <DialogTrigger className="flex items-center justify-between w-full cursor-pointer pb-2">
                <CardHeader className="basis-1/2 self-start font-titles font-semibold text-[1.1em]">
                  {benefitItem.title}
                </CardHeader>
                <CardContent className="basis-1/2">
                  <Image
                    height={60}
                    width={60}
                    src={benefitItem.imgSrc}
                    alt={benefitItem.title}
                    className=" w-auto h-auto"
                  />
                </CardContent>
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
