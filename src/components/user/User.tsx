"use client";

// Instruments //
import { useSelector } from "react-redux";

// Components //
import LoginBtn from "./LoginBtn";
import UserAccountBtn from "./UserAccountBtn";

// Types //
import { IUserInfoRootState } from "@/types/user";

const User = () => {
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  return <div>{userInfo ? <UserAccountBtn /> : <LoginBtn />}</div>;
};

export default User;
