import Image from "next/image";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
}

export function ProjectCard({
  imagePath,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div>
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
