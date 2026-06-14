import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

export function Logo() {
  return (
    <Link href={"./"} className="flex gap-2 items-center">
      <div className="h-10 w-10 bg-slate-200 rounded-full grid place-items-center">
        <LuCodeXml className="text-slate-950" />
      </div>
      <p className="text-slate-200 text-lg font-bold md:text-2xl hidden sm:block">
        webdev
      </p>
    </Link>
  );
}
