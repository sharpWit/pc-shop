// Styles //
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Cores //
import type { Metadata } from "next";

// Providers //
import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Components //
import { Toaster } from "@/components/ui/toasts/toaster";

export const metadata: Metadata = {
  title: "فروشگاه بست‌ستاپز",
  description:
    "فروشگاه آنلاین بست‌ستاپز خرید انواع کامپیوترهای گیمینگ، اداری و خانگی، و انواع لوارم جانبی کامپیوتر را برای مشتریان فراهم کرده است",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html
      lang="fa"
      className="scrollbar-thumb-primary scrollbar-track-primary-foreground"
    >
      <body className="min-h-screen min-w-[320px] overflow-y-auto scrollbar-thin antialiased">
        <AuthProvider>
          <QueryProvider>
            <ReduxProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <div className="relative flex min-h-screen flex-col">
                  {props.children}
                </div>
              </ThemeProvider>
            </ReduxProvider>
          </QueryProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
