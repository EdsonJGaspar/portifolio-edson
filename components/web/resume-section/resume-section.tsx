import {
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from "react-icons/lu";
import { HeaderComponents } from "../services/header-components";
import { ResumeCard } from "./resume-card";
import { RiNextjsFill } from "react-icons/ri";

export function ResumeSection() {
  return (
    <section id="resume" className="my-12 px-5 md:px-0">
      <div className="sm:w-[80%] md:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <HeaderComponents title="Minha Formação" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Engenharia Informática"
              description="Instituto de Tecnologias de Informação e Comunicação(INSTIC) | O curso me preparou para atuar em áreas como desenvolvimento de software, inteligência artificial, redes, sistemas embarcados e segurança informática."
              date="Julho 2026"
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Engenharia Informática"
              description="Instituto de Tecnologias de Informação e Comunicação(INSTIC) | O curso me preparou para atuar em áreas como desenvolvimento de software, inteligência artificial, redes, sistemas embarcados e segurança informática."
              date="Julho 2026"
            />
          </div>
        </div>
        <div>
          <HeaderComponents title="Minha Carreira" as="h2" />
          <div className="space-y-6 ">
            <ResumeCard
              icon={RiNextjsFill}
              role="FrontEnd Developer"
              description="Integração de interfaces responsivas e acessíveis com frameworks modernos como React e Next.js. Foco em desempenho, experiência do usuário e implementação impecável."
              date="Julho 2026"
            />
            <ResumeCard
              icon={LuServer}
              role="BackEnd Developer"
              description="Integração de interfaces responsivas e acessíveis com frameworks modernos como React e Next.js. Foco em desempenho, experiência do usuário e implementação impecável."
              date="Julho 2026"
            />
            <ResumeCard
              icon={LuPackage}
              role="FullStack Developer"
              description="Desenvolvimento de aplicações web de ponta a ponta. Integração de interfaces front-end com sistemas back-end para soluções digitais coesas e completas."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
