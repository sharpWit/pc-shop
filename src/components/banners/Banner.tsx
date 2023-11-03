"use client";

// Cores //
import Loading from "@/app/loading";

// Hooks //
import useBanners from "./useBanners";

// Components //
import SectionTitle from "../ui/section-title";
import BannerBox from "./banner-box/BannerBox";

const Banner = () => {
  const { bannerContent, isLoading, error } = useBanners();
  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center w-full my-4 md:my-8 mx-auto">
      <SectionTitle title={"فروش ویژه"} />
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {bannerContent?.length ? (
          bannerContent.map(
            ({
              id,
              title,
              description,
              buttonText,
              imgSrc,
              imgWidth,
              imgHeight,
              numberOfDiscountDate,
              href,
            }) => {
              return (
                <BannerBox
                  title={title}
                  description={description}
                  numberOfDiscountDate={numberOfDiscountDate}
                  href={href}
                  imgSrc={imgSrc}
                  imgWidth={imgWidth}
                  imgHeight={imgHeight}
                  buttonText={buttonText}
                  key={id}
                />
              );
            }
          )
        ) : (
          <p>در حال حاضر هیچ بنری موجود نیست</p>
        )}
      </div>
    </div>
  );
};

export default Banner;
