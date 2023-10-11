// Cores //
import Link from "next/link";

// Icons //
import { Gift, Zap } from "lucide-react";

const ExtraMenu = () => {
  return (
    <div className="flex items-center border-r-2 border-foreground/40 grow mr-4 ">
      <ul className="flex items-center text-lg mr-3 gap-3">
        <li className="flex items-center ml-1 hover:text-primary/70 transition-colors">
          <Gift />
          <Link href="/offers" className=" mr-1 ">
            پیشنهادات ویژه
          </Link>
        </li>
        <li className="flex items-center ml-1 hover:text-primary/70 transition-colors">
          <Zap />
          <Link href="/newest" className=" mr-1 ">
            محصولات جدید
          </Link>
        </li>
        <li className="hover:text-primary/70 transition-colors">
          <Link href="/about">درباره‌ی ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default ExtraMenu;
