import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface LinkButtomProps extends ComponentProps<"a"> {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "right" | "left";
  rounded?: boolean;
  dwonload?: boolean;

  /** AOS Animations */
  animate?: boolean;
  aosType?: string;
  aosDelay?: number;
}
//Animacao no componente nao esta a funcionar
export function LinkButtom({
  href,
  text,
  icon: Icon,
  iconPosition = "right",
  rounded,
  dwonload = false,
  className,
  animate = false,
  aosType = "fade-up",
  aosDelay = 0,
  ...props
}: LinkButtomProps) {
  return (
    <Link
      {...(animate && {
        "data-aos": aosType,
        "data-aos-delay": aosDelay,
      })}
      href={href}
      download={dwonload}
      className={cn(
        `px-8 py-3 bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 ${rounded ? "rounded-full" : "rounded-lg"}`,
        className,
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {text}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </Link>
  );
}
