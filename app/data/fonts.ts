import { Fira_Code, Poppins } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const firaCode = Fira_Code({
  variable: "--font-firaCode",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
