import ExtraMenu from "./ExtraMenu";
import MainMenu from "./MainMenu";

const MegaMenu = () => {
  return (
    <div className="hidden md:flex items-center flex-grow">
      <MainMenu />
      <ExtraMenu />
    </div>
  );
};

export default MegaMenu;
