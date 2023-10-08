import Link from "next/link";
import { LogIn } from "lucide-react";

const LoginBtn = () => {
  return (
    <Link href={"/login"} aria-label="User actions">
      <div className="hidden md:flex items-center rounded-lg py-1 px-2 ml-3 border-border border-2 border-solid shadow-sm ">
        <LogIn style={{ fontSize: "2em" }} />
        <p className=" mr-2 text-2xl">ورود | ثبت‌نام</p>
      </div>
      <div className="md:hidden ml-3 mr-1 ">
        <LogIn style={{ fontSize: "2em" }} />
      </div>
    </Link>
  );
};

export default LoginBtn;
