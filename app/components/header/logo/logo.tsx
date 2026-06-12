import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

export function Logo() {
  return (
    <Link href={"./"}>
      <div className="h-10 w-10 bg-slate-200 rounded-full grid place-items-center">
        <LuCodeXml className="text-slate-950" />
      </div>
    </Link>
  );
}
