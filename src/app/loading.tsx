// Components //
import { Icons } from "@/components/ui/icons/icons";

const Loading = () => {
  return (
    <div className="container">
      <Icons.spinner className="h-12 md:h-24 w-12 md:w-24 animate-spin text-ring mx-auto" />
    </div>
  );
};

export default Loading;
