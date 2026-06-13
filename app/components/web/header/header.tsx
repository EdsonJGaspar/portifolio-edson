import navLinks from "@/app/data/constants/nav-links";
import { Logo } from "./logo/logo";
import { LinkButtom } from "../link-buttom/link-buttom";
import { LuDownload } from "react-icons/lu";

export function Header() {
  return (
    <header className="h-20 fixed z-50 w-full ">
      <div className="h-full w-[90%] mx-auto flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((menu) => (
            <li key={menu.url}>
              <a
                href={menu.url}
                className="text-slate-200 hover:text-blue-800 font-medium transition-colors duration-300"
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <LinkButtom
            href="/documents/edson-cv.pdf"
            dwonload
            text="Baixar CV"
            rounded={false}
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
      </div>
    </header>
  );
}
