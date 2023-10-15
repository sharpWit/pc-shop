// Components //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <>
      <Header />

      <main className=" flex flex-col items-center flex-grow shrink-0 w-full min-h-screen pt-[1rem] lg:pt-[9rem] bg-background text-foreground">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Template;
