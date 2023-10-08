import { BiMenu } from "react-icons/bi";

const MainMenu = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <BiMenu style={{ fontSize: "2em" }} />
      <h3 className=" mr-1 text-2xl font-bold font-iranyekan">
        دسته‌بندی کالا‌ها
      </h3>
    </div>
  );
};

export default MainMenu;
