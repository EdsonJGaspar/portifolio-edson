"use client";
import { DiJavascript, DiReact } from "react-icons/di";
import { HeaderComponents } from "../services/header-components";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

const skills = [
  { name: "JavaScript", node: <DiJavascript /> },
  { name: "Typescript", node: <SiTypescript /> },
  { name: "ReactJs", node: <DiReact /> },
  { name: "TailwindCss", node: <RiTailwindCssFill /> },
  { name: "NextJs", node: <RiNextjsFill /> },
  { name: "NodeJS", node: <FaNode /> },
];

export function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <HeaderComponents title="Minhas habilidades" />
      <LogoLoop
        logos={skills}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut={false}
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
        className="text-blue-200"
      />
    </section>
  );
}
