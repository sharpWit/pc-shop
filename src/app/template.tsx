import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="">{props.children}</main>
    </>
  );
};

export default Template;
