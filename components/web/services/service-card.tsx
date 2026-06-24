import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  //Animation
  animate?: boolean;
  aosType?: string;
  aosDelay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  animate = false,
  aosType = "fade-up",
  aosDelay = 0,
}: ServiceCardProps) {
  return (
    <div
      className="px-4 md:px-1"
      {...(animate && {
        "data-aos": aosType,
        "data-aos-delay": aosDelay,
      })}
    >
      <Image
        src={icon}
        alt={`Imagem do serviço ${title}`}
        width={60}
        height={60}
      />
      <h3 className="my-4 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-100">
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
