"use client";

// Cores //
import type { NextPage } from "next";

// Components //
import SignInForm from "@/components/login-form/SignInForm";

const Login: NextPage = () => {
  return (
    <section className="min-h-screen w-full md:w-2/3 lg:w-2/5 mt-8">
      <SignInForm />
    </section>
  );
};

export default Login;
