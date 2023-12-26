"use client";

// Cores //
import { FC, useEffect, useRef, useState } from "react";

// Instruments //
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

// Styles //
import "./images.scss";

// Components //
import ProductPageActions from "./ProductPageActions";

// Types //
import { IProduct } from "@/types/products";

interface Props {
  product: IProduct;
}

const Images: FC<Props> = ({ product }) => {
  const imageGalleryRef = useRef(null);
  //   const [fullscreen, setFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const images: ReactImageGalleryItem[] = product.img.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  // console.log("PRODUCT: ", product);

  useEffect(() => {
    // Set initial state based on window.innerWidth
    setShowNav(window.innerWidth < 1000);
    // Add an event listener for window resize
    const handleResize = () => {
      setShowNav(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={imageGalleryRef}
      className="flex-1 p-4 flex flex-col lg:flex-row lg:items-start justify-between h-full min-h-full rounded-lg relative"
    >
      <ProductPageActions product={product} />
      <ImageGallery
        items={images}
        infinite={true}
        showPlayButton={false}
        showFullscreenButton={false}
        lazyLoad={true}
        showNav={showNav}
        slideDuration={300}
        isRTL
      />
    </div>
  );
};
export default Images;
