// Cores //
import type { NextPage } from "next";

// Components //
import SignUpForm from "@/components/login-form/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <section className="container max-w-2xl w-full md:w-[80%] lg:w-[40%] mt-4 lg:mt-12">
      <SignUpForm />
    </section>
  );
};

export default SignUp;
