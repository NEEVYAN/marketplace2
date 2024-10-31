import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

export const openSans = Open_Sans({ subsets: ["latin"] });
import ThemeProvider from "theme/theme-provider";
import CartProvider from "contexts/CartContext";
import SettingsProvider from "contexts/SettingContext";
import RTL from "components/rtl";
import ProgressBar from "components/progress";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
        <GoogleAnalytics gaId="G-XKPD36JXY0" />
      </body>
    </html>
  );
}
