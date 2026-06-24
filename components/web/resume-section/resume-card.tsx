import { IconType } from "react-icons";

interface ResumeCardProps {
  role: string;
  icon: IconType;
  date?: string;
  description: string;

  //Animation
  aosType?: string;
  aosDuration?: number;
  animate?: boolean;
}

export function ResumeCard({
  role,
  icon: Icon,
  date,
  description,
  animate = false,
  aosDuration = 0,
  aosType = "fade-up",
}: ResumeCardProps) {
  return (
    <div
      {...(animate && {
        "data-aos": aosType,
        "data-aos-druarion": aosDuration,
      })}
      className="flex items-start space-x-6 bg-slate-950/90 p-4 sm:p-8 rounded-md"
    >
      <div className="w-10 h-10 sm:h-14 sm:w-14 bg-blue-950 rounded-full grid place-items-center">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 " />
      </div>
      <div className="flex-1 ">
        {date && (
          <p className="mb-2 px-4 py-1 sm:py-1.5 rounded-full text-blue-800 w-fit text-sm sm:text-lg font-bold">
            {date}
          </p>
        )}
        <h4 className="text-xl sm:text-2xl font-semibold tracking-wide">
          {role}
        </h4>
        <p className="text-sm sm:text-base mt-3 tracking-wide">{description}</p>
      </div>
    </div>
  );
}
