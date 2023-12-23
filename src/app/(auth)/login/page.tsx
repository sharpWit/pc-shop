"use client";

// Cores //
import type { NextPage } from "next";

// Components //
import SignInForm from "@/components/login-form/SignInForm";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { IUser } from "@/types/user";
import { userInfoActions } from "@/store/user-slice";
import jsCookie from "js-cookie";

const Login: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    async function signInHandler() {
      if (session) {
        try {
          const userInfo: IUser = session.user; // Access user information
          dispatch(userInfoActions.userLogin(userInfo));
          jsCookie.set("userInfo", JSON.stringify(userInfo));
          router.push("/");
        } catch (err) {
          console.error(err);
        }
      }
    }

    signInHandler();
  }, [session, dispatch, router]);

  return (
    <section className="min-h-screen w-full md:w-2/3 lg:w-2/5 mt-8">
      <SignInForm />
    </section>
  );
};

export default Login;
