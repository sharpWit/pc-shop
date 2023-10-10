"use client";

// Cores //
import type { NextPage } from "next";

// Components //
import SignInForm from "@/components/login-form/SignInForm";

const Login: NextPage = () => {
  return (
    <section className=" container w-[90%] md:w-[70%] lg:w-[40%] mt-4 lg:mt-12">
      <SignInForm />
    </section>
  );
};

export default Login;
