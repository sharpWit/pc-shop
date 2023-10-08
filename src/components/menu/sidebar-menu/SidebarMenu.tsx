import { BiMenu } from "react-icons/bi";

const SidebarMenu = () => {
  return (
    <div className="flex md:hidden items-center cursor-pointer">
      <BiMenu style={{ fontSize: "2em" }} />
    </div>
  );
};

export default SidebarMenu;
