// Cores //
import { Suspense } from "react";

// Components //
import Loading from "./loading";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const Template = (props: React.PropsWithChildren) => {
  return (
    <div className="flex-1 flex-grow flex-shrink-0">
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
