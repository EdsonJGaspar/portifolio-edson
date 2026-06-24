import { LuArrowRight } from "react-icons/lu";
import { LinkButtom } from "../link-buttom/link-buttom";
import { AnimateIntro } from "./animate-intro/animate-intro";
import { ImageHero } from "./image-hero";

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen bg-slate-950 shadow-lg relative flex justify-center items-center overflow-hidden flex-col"
    >
      {/** 
      * 
     <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1}
      />
     */}

      <div className="absolute z-10 flex flex-col items-center space-y-2">
        <ImageHero />
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-2 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 pb-1.5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Engenheiro Informático
        </h1>
        <AnimateIntro />
        <LinkButtom
          href="#projects"
          text="Conheça meus projectos"
          icon={LuArrowRight}
          rounded
          animate
          aosDelay={200}
          aosType="fade-right"
        />
      </div>
    </section>
  );
}
