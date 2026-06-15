import Image from "next/image";
import { HeroSection } from "../components/web/hero-section/hero-setcion";
import { Services } from "@/components/web/services/services";
import { ResumeSection } from "@/components/web/resume-section/resume-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <ResumeSection />
    </div>
  );
}
