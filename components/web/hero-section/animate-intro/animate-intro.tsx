"use client";
import { firaCode } from "@/app/data/fonts";
import TypewriterComponent from "typewriter-effect";

export function AnimateIntro() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-lg sm:text-2xl h-32 px-8 text-center font-medium text-gray-400"
    >
      Meu nome é <strong>Edson João Gaspar</strong>, sou:
      <span className="text-gray-500 font-bold font-">
        <TypewriterComponent
          options={{
            strings: [
              "Fullstack Developer",
              "Nextjs Developer",
              "React Expert",
              "Tech Enthusiast",
              "UI/UX-Designer",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: `inline-block py-6 ${firaCode.className}`,
          }}
        />
      </span>
    </div>
  );
}
