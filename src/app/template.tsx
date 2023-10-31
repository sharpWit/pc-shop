// Components //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="container min-h-screen pt-0 lg:pt-[9rem] relative">
        <section className="flex flex-col items-center w-full my-0 mx-auto">
          {props.children}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Template;
