"use client";
import { LuArrowRight } from "react-icons/lu";
import { LinkButtom } from "../link-buttom/link-buttom";
import { AnimateIntro } from "./animate-intro/animate-intro";
import { ImageHero } from "./image-hero";
import { TituloOcupacao } from "./title-h1";
import PixelBlast from "@/components/PixelBlast";

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen  bg-slate-950 shadow-lg relative flex justify-center items-center overflow-hidden flex-col"
    >
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#314158"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      />

      <div className="absolute z-10 flex  items-center justify-between w-full max-w-6xl mx-auto px-5">
        <div>
          <TituloOcupacao />
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
        <div>
          {" "}
          <ImageHero />
        </div>
      </div>
    </section>
  );
}
