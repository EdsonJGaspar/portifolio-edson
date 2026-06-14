import Image from "next/image";

export function ImageHero() {
  return (
    <div className="h-62.5 w-50 relative">
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50"></div>
      <Image
        src={"/images/edsonjgaspar.png"}
        fill
        alt="Imagem do Edson João Gaspar"
        className="rounded-full object-cover bg-slate-600/5"
      />
    </div>
  );
}
