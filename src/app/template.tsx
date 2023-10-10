// Components //
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <>
      <Header />

      <main className=" flex flex-col flex-grow shrink-0 max-w-[1676px] w-full min-h-screen pt-[2rem] lg:pt-[9rem] mx-auto">
        {props.children}
      </main>
    </>
  );
};

export default Template;
