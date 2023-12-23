"use client";

// Cores //
import Link from "next/link";

// Instruments //
import jsCookie from "js-cookie";
import { useDispatch } from "react-redux";

// Icons //
import { User, LogOut } from "lucide-react";

// State //
import { userInfoActions } from "@/store/user-slice";

const UserAccountBox = () => {
  const dispatch = useDispatch();
  function onLogoutClickHandler() {
    dispatch(userInfoActions.userLogout());
    jsCookie.remove("userInfo");
  }
  return (
    <div>
      <ul>
        <li className="my-1 py-1">
          <Link href={"/user"} className="flex items-center hover:text-primary">
            <User />
            <span className="mr-1">پنل کاربری</span>
          </Link>
        </li>
        <li className="my-1 py-1" onClick={onLogoutClickHandler}>
          <Link href={`/`} className="flex items-center hover:text-primary">
            <LogOut />
            <span className="mr-1">خروج</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountBox;
