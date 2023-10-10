// Components //
import { Icons } from "@/components/ui/icons/icons";

const Loading = () => {
  return (
    <div className=" container my-auto ">
      <Icons.spinner className="h-24 w-24 animate-spin text-primary/70 mx-auto" />
    </div>
  );
};

export default Loading;
