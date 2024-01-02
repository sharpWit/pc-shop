// Cores //
import type { NextPage } from "next";

// Components //
import SignUpForm from "@/components/login-form/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <section className="min-h-screen w-full md:w-2/3 lg:w-2/5 mt-8 mx-auto">
      <SignUpForm />
    </section>
  );
};

export default SignUp;
