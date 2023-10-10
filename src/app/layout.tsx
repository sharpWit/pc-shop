// Styles //
import "@/styles/globals.css";

// Cores //
import type { Metadata } from "next";

// Providers //
import AuthProvider from "providers/AuthProvider";
import { ThemeProvider } from "providers/ThemeProvider";

// Components //
import { Toaster } from "@/components/ui/toasts/toaster";

export const metadata: Metadata = {
  title: "فروشگاه بست‌ستاپز",
  description:
    "فروشگاه آنلاین بست‌ستاپز خرید انواع کامپیوترهای گیمینگ، اداری و خانگی، و انواع لوارم جانبی کامپیوتر را برای مشتریان فراهم کرده است",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="fa">
      <body>
        <AuthProvider>
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
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
