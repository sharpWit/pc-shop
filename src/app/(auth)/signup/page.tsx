// Cores //
import type { NextPage } from "next";

// Components //
import SignUpForm from "@/components/login-form/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <section className="container w-full md:w-[80%] lg:w-[40%] mt-0 lg:mt-6">
      <SignUpForm />
    </section>
  );
};

export default SignUp;
