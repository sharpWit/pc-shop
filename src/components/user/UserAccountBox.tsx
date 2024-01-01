"use client";

// Cores //
import Link from "next/link";
import { useRouter } from "next/navigation";

// Instruments //
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

// Icons //
import { User, LogOut } from "lucide-react";

// State //
import { userInfoActions } from "@/store/user-slice";
import { cartActions } from "@/store/cart-slice";

// Libraries //
import supabase from "@/lib/supabase";

// Components //
import { Button } from "../ui/button";

const UserAccountBox = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  function onLogoutClickHandler() {
    Cookies.remove("userInfo");
    dispatch(userInfoActions.userLogout());
    dispatch(cartActions.clearCart());
    handleSignOut();
    router.push("/");
  }

  return (
    <div>
      <ul>
        <li className="my-1 py-1">
          <Link href={"/user"} className="flex items-center hover:text-primary">
            <Button variant={"secondary"}>
              <User />
              <span className="mr-1">پنل کاربری</span>
            </Button>
          </Link>
        </li>
        <li className="my-1 py-1" onClick={onLogoutClickHandler}>
          <Button variant={"ghost"}>
            <LogOut />
            <span className="mr-1">خروج</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountBox;
