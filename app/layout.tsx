import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/web/header/header";
import { poppins } from "./data/fonts";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/web/footer/footer";
import { ButtonScrollUp } from "@/components/web/button-scroll-up/button-up";

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
        "scroll-smooth",
        poppins.className,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col dark">
        <Header />
        {children}
        <Footer />
        <ButtonScrollUp />
      </body>
    </html>
  );
}
