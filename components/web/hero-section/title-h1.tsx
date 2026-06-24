import GradientText from "@/components/GradientText";

export function TituloOcupacao() {
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <GradientText
        colors={["#2b7fff", "#9810fa", "#ffffFf"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-2 font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 pb-1.5"
      >
        Engenheiro Informático
      </GradientText>
    </div>
  );
}
