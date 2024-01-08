// Styles //
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Cores //
import type { Metadata } from "next";

// Providers //
import QueryProvider from "@/providers/QueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Components //
import { Toaster } from "@/components/ui/toasts/toaster";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "فروشگاه بست‌ستاپز",
  description:
    "فروشگاه آنلاین بست‌ستاپز خرید انواع کامپیوترهای گیمینگ، اداری و خانگی، و انواع لوارم جانبی کامپیوتر را برای مشتریان فراهم کرده است",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className="min-h-screen antialiased">
        <QueryProvider>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className="min-h-screen h-full w-full px-1">
                <div className="container flex flex-col space-y-4 pt-32 lg:pt-36 overflow-x-hidden relative">
                  {props.children}
                </div>
              </main>
              <Footer />
            </ThemeProvider>
          </ReduxProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
