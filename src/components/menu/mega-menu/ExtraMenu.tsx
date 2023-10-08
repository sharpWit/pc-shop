import Link from "next/link";
import { MdCampaign, MdDiscount } from "react-icons/md";

const ExtraMenu = () => {
  return (
    <div className="flex items-center border-r-2 border-foreground/40 grow mr-5 ">
      <ul className="flex items-center text-2xl mr-3 gap-4">
        <li className="flex items-center ml-1 hover:text-primary/80 transition-colors">
          <MdDiscount />
          <Link href="/offers" className=" mr-1 ">
            پیشنهادات ویژه
          </Link>
        </li>
        <li className="flex items-center ml-1 hover:text-primary/80 transition-colors">
          <MdCampaign />
          <Link href="/newest" className=" mr-1 ">
            محصولات جدید
          </Link>
        </li>
        <li className="hover:text-primary/80 transition-colors">
          <Link href="/about">درباره‌ی ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default ExtraMenu;
