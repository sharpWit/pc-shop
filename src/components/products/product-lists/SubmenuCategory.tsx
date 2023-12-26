"use client";

// Cores //
import { FC } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton/Skeleton";

// Hooks //
import useSubCategories from "@/hooks/useSubCategories";

// Icons //
import * as LucideIcons from "lucide-react";

interface Props {
  cat: string;
}

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;

const SubmenuCategory: FC<Props> = ({ cat }) => {
  const { subCategories, isLoading } = useSubCategories();

  const subMenu = subCategories?.filter((subCats) => subCats.slug === cat);

  const router = useRouter();

  function onClickHandler(subCategory: string) {
    if (subMenu) {
      router.push(`/${cat}/${subCategory}`);
    }
  }

  return (
    <div className="flex md:items-center flex-col mb-6 font-nav">
      <h3 className="font-titles text-center md:text-2xl mb-3 md:mb-6">
        دسته‌بندی‌ها
      </h3>

      {isLoading && <Skeleton />}

      {subMenu && !isLoading && (
        <div className="flex justify-center flex-wrap">
          {subMenu.map((subCat) => {
            const iconKey = subCat.icon as keyof typeof LucideIcons;
            const IconComponent = LucideIcons[iconKey] as IconComponentType;

            return (
              <div
                key={subCat.id}
                onClick={() => onClickHandler(subCat.href)}
                className={`flex flex-col items-center py-2 md:py-4 px-2 sm:px-3 md:px-6 bg-muted shadow-lg rounded-lg mx-1 my-1 md:mx-3 w-[5rem] sm:w-auto flex-grow cursor-pointer`}
              >
                <div className={`md:text-[1.5rem] text-[2.5rem]`}>
                  {IconComponent && <IconComponent />}
                </div>
                <h4 className="text-center text-xs md:text-base md:pt-3">
                  {subCat.name}
                </h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SubmenuCategory;
