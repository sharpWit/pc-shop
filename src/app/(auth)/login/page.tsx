"use client";

// Cores //
import type { NextPage } from "next";

// Components //
import SignInForm from "@/components/login-form/SignInForm";

const Login: NextPage = () => {
  return (
    <section className=" container max-w-2xl w-full md:w-[80%] lg:w-[40%] mt-4 lg:mt-12">
      <SignInForm />
    </section>
  );
};

export default Login;
