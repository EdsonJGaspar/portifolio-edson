import Image from "next/image";
import { HeroSection } from "../components/web/hero-section/hero-setcion";
import { Services } from "@/components/web/services/services";
import { ResumeSection } from "@/components/web/resume-section/resume-section";
import { ProjectSection } from "@/components/web/projects-section/projects-section";
import { SkillSection } from "@/components/web/skill-section/skill-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
}
