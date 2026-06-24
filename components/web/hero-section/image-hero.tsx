import Image from "next/image";

export function ImageHero() {
  return (
    <div
      className="h-62.5 w-50 md:h-96 md:w-80 lg:h-125 relative"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pulse opacity-50 lg:rounded-md"></div>
      <Image
        src={"/images/edsonjgaspar.png"}
        fill
        alt="Imagem do Edson João Gaspar"
        className="absolute rounded-full object-cover bg-slate-600/5 lg:hidden"
      />
      <Image
        src={"/images/edson-joao-gaspar.png"}
        fill
        alt="Imagem do Edson João Gaspar"
        className="absolute  bg-slate-600/5 hidden lg:block"
      />
    </div>
  );
}
