import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white  container mx-auto px-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
