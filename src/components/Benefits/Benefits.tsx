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
    <div className="flex items-center justify-center gap-4 my-12 lg:my-8 max-w-[1400px] w-full flex-wrap lg:flex-nowrap">
      {benefitContent.map((benefitItem) => {
        return (
          <Card
            className=" basis-[90%] md:basis-[45%] lg:basis-1/4 p-4 "
            key={benefitItem.title}
          >
            <Dialog>
              <DialogTrigger className="cursor-pointer">
                <CardContent>
                  <Image
                    height={48}
                    width={48}
                    src={benefitItem.imgSrc}
                    alt={benefitItem.title}
                  />
                </CardContent>

                <CardHeader className="font-titles">
                  {benefitItem.title}
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
