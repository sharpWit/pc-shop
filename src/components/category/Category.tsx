// Instruments //
import axios from "axios";

// Components //
import CategorySmBox from "./CategorySmBox";
import CategoryLgBox from "./CategoryLgBox";
import SectionTitle from "../ui/section-title";

// Types //
import { ICategories } from "@/types/categories";

const getData = async () => {
  try {
    const response = await axios.get(
      ` ${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
    );

    if (response.status !== 200) {
      throw new Error("Failed!");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const Category = async () => {
  const categories: ICategories[] = await getData();

  return (
    <>
      <div className="flex flex-col items-center my-4 md:my-8">
        <SectionTitle title={"دسته‌بندی کالا‌ها"} />
        {/* 📱 sm and md break point */}
        <div className="flex flex-wrap justify-between items-center p-4 max-w-[700px] w-full lg:hidden">
          {categories.map((cat) => {
            return (
              <CategorySmBox
                key={cat.id}
                title={cat.title}
                imgSrc={cat.imgSrc}
                href={cat.href}
              />
            );
          })}
        </div>

        {/* 💻lg break point */}
        <div className="hidden lg:grid grid-cols-6 grid-rows-2 gap-4 justify-items-end w-full">
          {categories.map((cat) => {
            return (
              <CategoryLgBox
                key={cat.id}
                title={cat.title}
                desc={cat.desc}
                imgSrc={cat.imgSrc}
                styles={cat.styles}
                href={cat.href}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
