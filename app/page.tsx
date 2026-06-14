import Image from "next/image";
import { HeroSection } from "../components/web/hero-section/hero-setcion";
import { Services } from "@/components/web/services/services";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
    </div>
  );
}
