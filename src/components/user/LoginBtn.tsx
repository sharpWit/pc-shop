// Cores //
import Link from "next/link";

// Icons //
import { LogIn } from "lucide-react";

const LoginBtn = () => {
  return (
    <Link href={"/login"} aria-label="User actions">
      <div className="hidden lg:flex items-center rounded-lg py-1 px-2 ml-3 border-border border-2 border-solid shadow-sm ">
        <LogIn />
        <p className=" mr-2 text-base">ورود | ثبت‌نام</p>
      </div>
      <div className="lg:hidden ml-3 mr-1 ">
        <LogIn />
      </div>
    </Link>
  );
};

export default LoginBtn;
