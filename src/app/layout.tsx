import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "providers/ThemeProvider";

export const metadata: Metadata = {
  title: "فروشگاه بست‌ستاپز",
  description:
    "فروشگاه آنلاین بست‌ستاپز خرید انواع کامپیوترهای گیمینگ، اداری و خانگی، و انواع لوارم جانبی کامپیوتر را برای مشتریان فراهم کرده است",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="fa">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" flex flex-col items-center min-h-screen h-full relative">
            {props.children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
