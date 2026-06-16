import { link } from "fs";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapMarked,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    value: "contact@jhon.dev",
    link: "mailto:contact@jhon.dev",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Telefone",
    value: "941-11-22-33",
    link: "tel:+244941112233",
  },
  {
    icon: <FaMapMarkedAlt className="w-6 h-6" />,
    title: "Localização",
    value: "Remote . Global",
    link: "#",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32">
      <div className="w-[90%] md:w-[80%] lg:[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        <div>
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600 text-center">
            Conatcte-me agora!
          </h2>
          <p className="text-blue-100  mb-10 text-base lg:text-lg leading-relaxed">
            Atualmente, estou disponível para trabalhos freelance e
            oportunidades de emprego em tempo integral. Se você tem um projeto
            em mente ou apenas quer conversar, fique à vontade para entrar em
            contato.
          </p>
          <div>
            {contactInfo.map((contact, index) => {
              return (
                <Link
                  key={index}
                  href={contact.link}
                  className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-blue-300/5 rounded-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-300/5 text-blue-100 transition-transform group-hover:scale-105 grid place-items-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-blue-50">
                      {contact.title}
                    </h4>
                    <p className="text-blue-200 text-base">{contact.value}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <form className="rounded-lg bg-slate-900 px-4 py-8">
            <input
              type="text"
              className="px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-blue-50 placeholder-slate-600"
              placeholder="Seu nome"
            />
            <input
              type="email"
              className="px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-blue-50 placeholder-slate-600"
              placeholder="Seu email"
            />
            <textarea
              className="px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-blue-50 placeholder-slate-600 resize-none"
              rows={5}
              placeholder="Qual é o serviço ou projecto?"
            />
            <button className="w-full bg-linear-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-purple-800 text-blue-50 font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
              <LuSend size={20} />
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
