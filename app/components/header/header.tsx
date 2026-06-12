import { Logo } from "./logo/logo";

export function Header() {
  return (
    <header className="h-20 fixed z-50 w-full ">
      <div className="h-full bg-red-500 w-[90%] mx-auto flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
}
