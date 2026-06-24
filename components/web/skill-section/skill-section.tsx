import { DiJavascript, DiReact } from "react-icons/di";
import { HeaderComponents } from "../services/header-components";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <DiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "ReactJs", icon: <DiReact /> },
  { name: "TailwindCss", icon: <RiTailwindCssFill /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
  { name: "NodeJS", icon: <FaNode /> },
];

export function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <HeaderComponents title="Minhas habilidades" />
      <ul className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <li
            key={skill.name}
            data-aos="flip-right"
            data-aos-delay={index * 100}
            className="bg-slate-900 text-blue-100 text-center w-40 h-40 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform duration-100 hover:scale-110"
          >
            <div className="text-5xl text-blue-200">{skill.icon}</div>
            <p className="text-lg md:text-xl my-4 text-blue-200">
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
