"use client";
import { Logo } from "./nav-bar/logo";
import { LinkButtom } from "../link-buttom/link-buttom";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { MobileNav } from "./nav-bar/menu-mobile";
import { useEffect, useState } from "react";
import { DesktopNav } from "./nav-bar/menu-desktop";

export function Header() {
  const [navOPen, setNavOPen] = useState(false);
  const [navBackGround, setNavBackGround] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackGround(true);
      if (window.scrollY < 90) setNavBackGround(false);
    };

    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <header
      className={`h-20 fixed z-20 w-full transition-all duration-300 ${navBackGround ? "bg-slate-900 shadow-md" : ""}`}
    >
      <nav className="h-full w-[90%] mx-auto flex items-center justify-between">
        <Logo />
        <DesktopNav />
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

        <button
          onClick={() => setNavOPen(!navOPen)}
          className="w-8 h-8 cursor-pointer text-white z-50 lg:hidden "
        >
          {navOPen ? <LuX size={30} /> : <LuMenu size={30} />}
        </button>

        <MobileNav navOpen={navOPen} setNavOPen={setNavOPen} />
      </nav>
    </header>
  );
}
