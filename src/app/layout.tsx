// Styles //
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Cores //
import type { Metadata } from "next";

// Providers //
import AuthProvider from "providers/AuthProvider";
import { ThemeProvider } from "providers/ThemeProvider";

// Components //
import { Toaster } from "@/components/ui/toasts/toaster";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "فروشگاه بست‌ستاپز",
  description:
    "فروشگاه آنلاین بست‌ستاپز خرید انواع کامپیوترهای گیمینگ، اداری و خانگی، و انواع لوارم جانبی کامپیوتر را برای مشتریان فراهم کرده است",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="fa">
      <body className="pt-0 lg:pt-[9rem]">
        <AuthProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {props.children}
            </ThemeProvider>
          </QueryProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
