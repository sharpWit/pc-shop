// Components //
import MainMenu from "./MainMenu";
import ExtraMenu from "./ExtraMenu";

const MegaMenu = () => {
  return (
    <div className="hidden lg:flex items-center flex-grow">
      <MainMenu />
      <ExtraMenu />
    </div>
  );
};

export default MegaMenu;
