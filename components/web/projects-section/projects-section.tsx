import { HeaderComponents } from "../services/header-components";
import { ProjectCard } from "./project-card";

export function ProjectSection() {
  return (
    <section id="projects">
      <HeaderComponents title="Meus projectos recentes" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <ProjectCard
          title="Dashboard Moderno"
          description="Dashboard responsiva criado com a finalidade de facilitar o administrado do projecto a gerir as informacoes mais relevantes do sistema, afim de melhorar a melhor tomada de decisao do negócio"
          imagePath="/images/p1.webp"
        />
        <ProjectCard
          title="Dashboard Moderno"
          description="Dashboard responsiva criado com a finalidade de facilitar o administrado do projecto a gerir as informacoes mais relevantes do sistema, afim de melhorar a melhor tomada de decisao do negócio"
          imagePath="/images/p2.webp"
        />
        <ProjectCard
          title="Dashboard Moderno"
          description="Dashboard responsiva criado com a finalidade de facilitar o administrado do projecto a gerir as informacoes mais relevantes do sistema, afim de melhorar a melhor tomada de decisao do negócio"
          imagePath="/images/p3.webp"
        />
        <ProjectCard
          title="Dashboard Moderno"
          description="Dashboard responsiva criado com a finalidade de facilitar o administrado do projecto a gerir as informacoes mais relevantes do sistema, afim de melhorar a melhor tomada de decisao do negócio"
          imagePath="/images/p4.webp"
        />
      </div>
    </section>
  );
}
