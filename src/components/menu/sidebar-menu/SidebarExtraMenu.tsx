// Cores //
import Link from "next/link";

// Icons //
import { Gift, Zap, ScrollText } from "lucide-react";

const SidebarExtraMenu = () => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="flex items-center ml-1 hover:text-primary/70 transition-colors">
        <Gift className="text-primary" />
        <Link href="/offers" className=" mr-1">
          پیشنهادات ویژه
        </Link>
      </li>
      <li className="flex items-center ml-1 hover:text-primary/70 transition-colors">
        <Zap className="text-primary" />
        <Link href="/newest" className=" mr-1">
          محصولات جدید
        </Link>
      </li>
      <li className="flex items-center ml-1 hover:text-primary/70 transition-colors">
        <ScrollText className="text-primary" />
        <Link href="/about" className=" mr-1">
          درباره‌ی ما
        </Link>
      </li>
    </ul>
  );
};
export default SidebarExtraMenu;
