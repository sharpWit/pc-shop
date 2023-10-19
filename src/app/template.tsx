"use client";

// Cores //
import { useEffect, useState } from "react";

// Components //
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Template = (props: React.PropsWithChildren) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Check if window is defined to avoid server-side rendering issues
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const htmlStyle = {
    "--window-inner-height": windowHeight ? `${windowHeight}px` : "100vh",
  } as React.CSSProperties;

  return (
    <>
      <Header />
      <main
        id="root"
        style={htmlStyle}
        className="flex flex-col items-center flex-grow shrink-0 max-w-full w-full relative"
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Template;
