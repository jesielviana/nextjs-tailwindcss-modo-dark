import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Oswald, Poppins } from "@next/font/google";

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const popins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-popins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${oswald.variable}  ${popins.variable}`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
