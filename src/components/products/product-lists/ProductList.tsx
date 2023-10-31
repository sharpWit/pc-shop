"use client";

// Cores //
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

// Instruments //
import { useDispatch, useSelector } from "react-redux";

// States //
import { SortedProductsListActions } from "@/store/sortedProductList-slice";

// Components //
import Sort from "./Sort";
import Card from "../cards/Card";

// Types //
import { IProduct } from "@/types/products";
import { IProductListRootState } from "@/types/productList";

type Props = {
  productList: IProduct[];
};

const ProductList: React.FC<Props> = ({ productList: products }) => {
  const pathName = usePathname();
  let isInNewestProductsPage = pathName === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: products,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, products, selectedRadioBtn]);

  const sortedProductList = useSelector(
    (state: IProductListRootState) => state.sortedProductsList?.productsList
  );

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  return (
    <div className="max-w-full w-full mx-auto">
      {isInNewestProductsPage && products?.length ? (
        <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
          {products
            ? products.map((product: IProduct) => {
                return <Card key={product.id} product={product} />;
              })
            : null}
        </div>
      ) : sortedProductList && sortedProductList.length ? (
        <div>
          <Sort
            selectedBtn={selectedRadioBtn}
            onChangeSelectedBtn={onChangeHandler}
          />
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
            {sortedProductList.map((product: IProduct) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </div>
      ) : products ? (
        <Loading />
      ) : (
        <p className="text-muted text-center mt-8 font-main">
          هنوز هیچ محصولی در این دسته وجود ندارد. محصولات جدید به زودی اضافه
          خواهند شد.
        </p>
      )}
    </div>
  );
};

export default ProductList;
