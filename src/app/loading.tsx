// Components //
import { Icons } from "@/components/ui/icons/icons";

const Loading = () => {
  return (
    <div className="container">
      <Icons.spinner className="h-12 md:h-18 lg:h-24 w-12 md:w-18 lg:w-24 animate-spin text-ring my-0 mx-auto" />
    </div>
  );
};

export default Loading;
