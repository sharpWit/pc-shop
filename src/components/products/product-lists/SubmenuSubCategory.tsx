"use client";

// Cores //
import { useRouter } from "next/navigation";

// Instruments //
import { useQuery } from "@tanstack/react-query";

// Icons //
import { Computer } from "lucide-react";

interface Props {
  cat: string;
  subCat: string;
}

interface ISubCat {
  id: number;
  name: string;
  href: string;
  icon: string;
}

const SubmenuSubCategory = ({ cat, subCat }: Props) => {
  const { data: subCats, error } = useQuery({
    queryKey: ["subCats"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:3000/api/productGroups?subCat=${subCat}`
      );
      if (!data.ok) {
        throw new Error("Failed!");
      }

      return data.json();
    },
  });

  const router = useRouter();

  function onClickHandler(subCategory: string) {
    if (subCats) {
      router.push(`/${cat}/${subCat}/${subCategory}`);
    }
  }

  return subCats ? (
    <div className="flex md:items-center flex-col mb-6 font-nav">
      <h3 className="font-titles text-center md:text-2xl mb-3 md:mb-6">
        دسته‌بندی‌ها
      </h3>
      <div className="flex justify-center flex-wrap">
        {subCats?.map((subCat: ISubCat) => (
          <div
            key={subCat.id}
            onClick={() => onClickHandler(subCat.href)}
            className="flex flex-col items-center py-2 md:py-4 px-2 sm:px-3 md:px-6 bg-muted shadow-lg rounded-lg mx-1 my-1 md:mx-3 w-[5rem] sm:w-auto flex-grow cursor-pointer"
          >
            <div className="md:text-[1.5rem] text-[2.5rem]">
              <Computer />
            </div>
            <h4 className="text-center text-xs md:text-base md:pt-3">
              {subCat.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default SubmenuSubCategory;
