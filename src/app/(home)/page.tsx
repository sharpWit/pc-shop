// "use client";

// Components //
// import Carousel from "@/components/carousel/Carousel";
import Benefits from "@/components/benefits/Benefits";
import Featured from "@/components/featured/Featured";
// import dynamic from "next/dynamic";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { newestProductsActions } from "@/store/newestProduct-slice ";
// import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice ";
// import useOferredProducts from "./useOferredProducts";
// import useProducts from "./useProducts";
// import Spinner from "@/components/UI/Spinner ";
// import { newestProductsFn } from "@/utilities/sortByTimeStamp ";

// const Offers = dynamic(() => import("../../components/Offers/Offers"));
// const Category = dynamic(() => import("../../components/category/Category"));
// const Newest = dynamic(() => import("../../components/newest/Newest"));
// const Brands = dynamic(() => import("../../components/brands/Brands"));
// const Banners = dynamic(() => import("../../components/banners/Banner"), {
//   ssr: false,
// });

const Home = () => {
  //   const { products: offeredProducts, isLoading: isLoadingOffered } =
  //     useOferredProducts();
  //   const { products, isLoading } = useProducts();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     //add products to offers list
  //     if (offeredProducts?.length)
  //       dispatch(specialOfferProductsActions.addProducts(offeredProducts));
  //     //add products to newest list
  //     if (products?.length) {
  //       newestProductsFn(products);
  //       dispatch(newestProductsActions.addProducts(products));
  //     }
  //   }, [dispatch, products, offeredProducts]);

  //   if (isLoading || isLoadingOffered) return <Spinner />;

  return (
    <>
      <Featured />
      <Benefits />
      {/* <Carousel /> */}
      {/* <Offers /> */}
      {/* <Category /> */}
      {/* <Newest /> */}
      {/* <Banners /> */}
      {/* <Brands /> */}
    </>
  );
};

export default Home;
