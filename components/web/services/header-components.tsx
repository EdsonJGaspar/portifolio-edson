interface HeaderComponProps {
  title: string;
  as?: "h1" | "h2";
}

export function HeaderComponents({ title, as: Tag = "h1" }: HeaderComponProps) {
  const sizeClasses = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl",
  };
  return (
    <div className="py-14 md:py-20">
      <Tag
        className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 ${sizeClasses[Tag]} text-center`}
      >
        {title}
      </Tag>
    </div>
  );
}
