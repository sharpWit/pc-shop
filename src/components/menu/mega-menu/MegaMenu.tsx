// Components //
import MainMenu from "./MainMenu";
import ExtraMenu from "./ExtraMenu";

const MegaMenu = () => {
  return (
    <div className="flex items-center flex-grow">
      <MainMenu />
      <ExtraMenu />
    </div>
  );
};

export default MegaMenu;
