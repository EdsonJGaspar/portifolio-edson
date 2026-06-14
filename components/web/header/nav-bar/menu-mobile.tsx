import navLinks from "@/app/data/constants/nav-links";
import { LinkButtom } from "../../link-buttom/link-buttom";
import { LuDownload } from "react-icons/lu";

interface MobileNavProps {
  navOpen: boolean;
}
export function MobileNav({ navOpen }: MobileNavProps) {
  const showMobileNav = navOpen ? "translate-x-0" : "translate-x-[100%]";
  return (
    <>
      <div
        className={`fixed inset-0 transform z-30 bg-black opacity-30 h-screen w-full transition-all duration-500 ${showMobileNav}`}
      ></div>

      <ul
        className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-slate-800 space-y-1 z-40 right-0 top-0 ${showMobileNav}`}
      >
        {navLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="flex justify-center items-center text-xl font-medium text-white py-4 px-6 rounded-lg hover:bg-slate-700/50 hover:text-blue-800 transition-all duration-300 border-b border-slate-700/30 w-full text-center"
            >
              {link.label}
            </a>
          </li>
        ))}
        <LinkButtom
          href="/documents/edson-cv.pdf"
          dwonload
          text="Baixar CV"
          rounded={false}
          icon={LuDownload}
          iconPosition="left"
          className="mt-4"
        />
      </ul>
    </>
  );
}
