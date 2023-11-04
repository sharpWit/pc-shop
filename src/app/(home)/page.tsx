"use client";

// Cores //
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

// Instruments //
import { useDispatch } from "react-redux";

// Hooks //
import useProducts from "./useProducts";
import useOferredProducts from "./useOferredProducts";

// Components //
import { newestProductsActions } from "@/store/newestProduct-slice";
import { specialOfferProductsActions } from "@/store/specialOfferProducts-slice";
import Loading from "../loading";
import Featured from "@/components/featured/Featured";
import Benefits from "@/components/benefits/Benefits";
import { newestProductsFn } from "@/utils/sortByTimeStamp";

// Dynamics //
const Offers = dynamic(() => import("@/components/offers/Offers"));
const Category = dynamic(() => import("../../components/category/Category"));
const Newest = dynamic(() => import("../../components/newest/Newest"));
const Banners = dynamic(() => import("../../components/banners/Banner"), {
  ssr: false,
});
const Brands = dynamic(() => import("../../components/brands/Brands"));

const Home = () => {
  const { products: offeredProducts } = useOferredProducts();
  const { products, isLoading } = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    if (offeredProducts && offeredProducts.length > 0)
      dispatch(specialOfferProductsActions.addProducts(offeredProducts));
    //add products to newest list
    if (products && products.length > 0) {
      newestProductsFn(products);
      dispatch(newestProductsActions.addProducts(products));
    }
  }, [dispatch, products, offeredProducts]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Offers />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Category />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Newest />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Banners />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Brands />
      </Suspense>
    </>
  );
};

export default Home;
