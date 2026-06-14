import { LuArrowRight } from "react-icons/lu";
import { LinkButtom } from "../link-buttom/link-buttom";
import { AnimateIntro } from "./animate-intro/animate-intro";
import { ImageHero } from "./image-hero";

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <div className="absolute z-10 flex flex-col items-center ">
        <ImageHero />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 pb-1.5">
          Olá, sou um Engenheiro Informático
        </h1>
        <AnimateIntro />
        <LinkButtom
          href="#projects"
          text="Conheça meus projectos"
          icon={LuArrowRight}
          rounded
        />
      </div>
    </section>
  );
}
