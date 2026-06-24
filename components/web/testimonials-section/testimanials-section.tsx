import { FaStar } from "react-icons/fa";
import { HeaderComponents } from "../services/header-components";
import testimonialss from "@/app/data/constants/testimonials";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="testimonials">
      <HeaderComponents title="Testemunhos dos antigos" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] sm:w-[80%] mx-auto ">
        {testimonialss.map((testimonia, index) => (
          <li
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`h-4 w-4 ${index < testimonia.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} `}
                />
              ))}
            </div>
            <p className="italic text-blue-100 mb-2">
              &ldquo;{testimonia.content}&ldquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border">
                <Image
                  src={testimonia.image}
                  alt={`Imagem do/a ${testimonia.name}`}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="py">
                <h4 className="font-bold text-blue-50">{testimonia.name}</h4>
                <p className="text-blue-200 text-sm">{testimonia.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
