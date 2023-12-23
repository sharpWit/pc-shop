"use client";

// Cores //
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Components //
import { Skeleton } from "./skeleton/Skeleton";

// Hooks //
import useCategories from "@/hooks/useCategories";
import useSubCategories from "@/hooks/useSubCategories";
import useProductGroups from "@/hooks/useProductGroups";
import useProducts from "@/app/(home)/useProducts";

// Types //
interface IBreadcrumb {
  breadcrumb: string;
  href: string;
}

const convertBreadcrumb = (str: string) => {
  return (
    str
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü") + ""
  );
};

const Breadcrumbs = () => {
  const {
    categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    subCategories,
    isLoading: subCategoriesLoading,
    error: subCategoriesError,
  } = useSubCategories();
  const {
    productGroups,
    isLoading: productGroupsLoading,
    error: productGroupsError,
  } = useProductGroups();
  const {
    products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts();

  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[] | null>(null);

  useEffect(() => {
    if (pathname) {
      const linkPath = pathname.split("/");
      linkPath.shift();

      // Declare variables outside the loop scope
      let category, subCategory, productGroup, product;

      const pathArray = linkPath.map((path, i) => {
        category = categories?.find((cat) => cat.href === path);
        subCategory = subCategories?.find((subCat) => subCat.href === path);
        productGroup = productGroups?.find((group) => group.href === path);
        product = products?.find((prod) => prod.enTitle === path);

        let name: string =
          (
            category?.name ??
            subCategory?.name ??
            productGroup?.name ??
            product?.title ??
            path
          )?.toString() || path;

        return {
          breadcrumb: convertBreadcrumb(name),
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [pathname, categories, subCategories, productGroups, products]);

  if (
    categoriesLoading ||
    subCategoriesLoading ||
    productGroupsLoading ||
    productsLoading
  ) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
  }

  if (
    categoriesError ||
    subCategoriesError ||
    productGroupsError ||
    productsError
  ) {
    console.error(
      "Error fetching data:",
      categoriesError ||
        subCategoriesError ||
        productGroupsError ||
        productsError
    );
    return <div>خطایی دریافت شد، لطفا دوباره تلاش کنید.</div>;
  }

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      aria-label="breadcrumbs"
      className="font-nav max-w-screen-xl mr-0 ml-auto px-4 sm:px-6 lg:px-8 my-4 text-sm "
    >
      <ol className="flex flex-wrap items-center justify-start space-x-reverse p-2">
        <li className="mx-2">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            فروشگاه
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={breadcrumb.href} className="mx-2">
            <span className="hidden sm:inline text-gray-500 px-2">/</span>
            <span className="sm:hidden text-gray-500 px-2">/</span>
            <Link
              href={breadcrumb.href}
              className="text-blue-500 hover:text-blue-700 leading-6"
            >
              {convertBreadcrumb(breadcrumb.breadcrumb)}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
