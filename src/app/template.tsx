// Components //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <>
      <Header />

      <main className=" flex flex-col items-center w-full min-h-screen h-[calc(100vh-9rem)] grow shrink-0 pt-[2rem] lg:pt-[9rem]  bg-background">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Template;
