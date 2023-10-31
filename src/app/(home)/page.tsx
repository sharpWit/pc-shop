"use client";

// Cores //
import dynamic from "next/dynamic";

// Components //
import Benefits from "@/components/benefits/Benefits";
import Featured from "@/components/featured/Featured";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newestProductsActions } from "@/store/newestProduct-slice";
import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice";
import useOferredProducts from "./useOferredProducts";
import useProducts from "./useProducts";
import { newestProductsFn } from "@/utils/sortByTimeStamp";
import Loading from "../loading";

// Dynamics //
const Offers = dynamic(() => import("@/components/offers/Offers"));
// const Category = dynamic(() => import("../../components/category/Category"));
// const Newest = dynamic(() => import("../../components/newest/Newest"));
// const Brands = dynamic(() => import("../../components/brands/Brands"));
// const Banners = dynamic(() => import("../../components/banners/Banner"), {
//   ssr: false,
// });

const Home = () => {
  const { products: offeredProducts, isLoading: isLoadingOffered } =
    useOferredProducts();
  const { products, isLoading } = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    if (offeredProducts?.length)
      dispatch(specialOfferProductsActions.addProducts(offeredProducts));
    //add products to newest list
    if (products?.length) {
      newestProductsFn(products);
      dispatch(newestProductsActions.addProducts(products));
    }
  }, [dispatch, products, offeredProducts]);

  if (isLoading || isLoadingOffered) return <Loading />;

  return (
    <>
      <Featured />
      <Benefits />
      <Offers />
      {/* <Category /> */}
      {/* <Newest /> */}
      {/* <Banners /> */}
      {/* <Brands /> */}
    </>
  );
};

export default Home;
