import type { Metadata } from "next";
import { Fira_Code, Poppins, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "../components/web/header/header";
import { poppins } from "./data/fonts";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
      className={cn(
        "h-full",
        "antialiased",
        poppins.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col dark">
        <Header />
        {children}
      </body>
    </html>
  );
}
