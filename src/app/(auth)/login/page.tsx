// Cores //
import type { NextPage } from "next";

// Libraries //
import supabase from "@/lib/supabase";

// Components //
import SignInForm from "@/components/login-form/SignInForm";

const Login: NextPage = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="min-h-screen w-full md:w-2/3 lg:w-2/5 mt-8 mx-auto">
      <SignInForm session={session} />
    </section>
  );
};

export default Login;
