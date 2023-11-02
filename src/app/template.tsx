// Cores //
import { Suspense } from "react";

// Components //
import Loading from "./loading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="container min-h-screen pt-0 lg:pt-[9rem] relative">
          <section className="flex flex-col items-center w-full my-0 mx-auto">
            {props.children}
          </section>
        </main>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Template;
