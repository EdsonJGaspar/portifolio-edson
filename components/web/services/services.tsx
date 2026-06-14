import { HeaderComponents } from "./header-components";
import { ServiceCard } from "./service-card";

const servicosPrestados = [
  {
    icon: "/images/s1.png",
    tile: "UI/UX",
    description:
      "Crio prototipos de alta fidelidade do teu projecto ou sistema.",
  },
  {
    icon: "/images/s2.png",
    tile: "Web & Mobile",
    description:
      "Crio prototipos de alta fidelidade do teu projecto ou sistema.",
  },
  {
    icon: "/images/s3.png",
    tile: "Desigmer Criativo",
    description:
      "Crio prototipos de alta fidelidade do teu projecto ou sistema.",
  },
  {
    icon: "/images/s4.png",
    tile: "Development",
    description:
      "Crio prototipos de alta fidelidade do teu projecto ou sistema.",
  },
];

export function Services() {
  return (
    <section id="services">
      <HeaderComponents title="Serviços que eu ofereço" />
      <div className="sm:w-[80%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        {servicosPrestados.map((servico) => (
          <ServiceCard
            key={servico.tile}
            icon={servico.icon}
            title={servico.tile}
            description={servico.description}
          />
        ))}
      </div>
    </section>
  );
}
