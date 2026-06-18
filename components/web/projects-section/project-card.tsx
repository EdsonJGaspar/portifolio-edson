import Image from "next/image";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  //Animation
  aosType?: string;
  aosDuration?: Number;
  animate?: boolean;
}

export function ProjectCard({
  imagePath,
  title,
  description,
  aosType = "fade-up",
  aosDuration = 0,
  animate = false,
}: ProjectCardProps) {
  return (
    <div
      {...(animate && {
        "data-aos": aosType,
        "data-aos-duration": aosDuration,
      })}
    >
      <Image
        src={imagePath}
        alt={`Imagen de ${title}`}
        height={800}
        width={600}
        className="rounded-lg"
      />
      <p className="my-4 text-xl sm:text-2xl tracking-wide font-semibold">
        {title}
      </p>
      <p className="font-medium text-blue-100 ">{description}</p>
    </div>
  );
}
