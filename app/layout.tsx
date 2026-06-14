import type { Metadata } from "next";
import { Fira_Code, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/web/header/header";
import { poppins } from "./data/fonts";

export const metadata: Metadata = {
  title: "EdsonJGaspar",
  description: "Portifolio Edson João Gaspar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${poppins.className} h-full antialiased bg-slate-950`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
