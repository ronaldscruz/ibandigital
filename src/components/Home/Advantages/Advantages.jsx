"use client";

import Image from "next/image";

import ChatIcon from "./assets/chat.svg";
import MoneyIcon from "./assets/money.svg";
import LinkIcon from "./assets/link.svg";
import TechIcon from "./assets/tech.svg";
import TeamIcon from "./assets/team.svg";
import ClockIcon from "./assets/clock.svg";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

const advantages = [
  {
    icon: MoneyIcon,
    title: "Foco no Retorno",
    description:
      "Nossa missão é o sucesso do seu negócio. Estamos focados em gerar resultados para você.",
  },
  {
    icon: TechIcon,
    title: "Tecnologia",
    description:
      "Trabalhamos com tecnologia de ponta, para garantir que seu negócio saia na frente.",
  },
  {
    icon: ClockIcon,
    title: "Prazos",
    description:
      "O tempo é o bem mais valioso de todos. Por isso, cumprimos nossos prazos com agilidade.",
  },

  {
    icon: ChatIcon,
    title: "Atendimento",
    description: "Estamos sempre disponíveis para atender suas necessidades.",
  },
  {
    icon: LinkIcon,
    title: "Flexibilidade",
    description:
      "Cada negócio é único. Por isso, oferecemos soluções personalizadas de acordo com suas necessidades.",
  },

  {
    icon: TeamIcon,
    title: "Time especializado",
    description:
      "Contamos com profissionais de diversas áreas, carregando conhecimento e experiência para o seu projeto.",
  },
];

const staggerAdvantages = stagger(0.2, { startDelay: 0.2 });

function useSectionAnimation(inView) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      inView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.4,
        delay: inView ? staggerAdvantages : 0,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return scope;
}

export default function Advantages() {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });
  const scope = useSectionAnimation(inView);

  const renderAdvantages = () => {
    return advantages.map((advantage, index) => (
      <li key={index} className="text-white md:w-[280px] w-full md:pb-0 pb-4">
        <div className="inline-flex items-center mb-3">
          <Image
            src={advantage.icon}
            width={26}
            height={26}
            alt="Ícone de checado"
            className="mr-3"
          />
          <h3 className="md:text-xl text-lg font-medium">{advantage.title}</h3>
        </div>

        <p className="md:text-lg text-md font-light">{advantage.description}</p>
      </li>
    ));
  };

  return (
    <section className="relative flex w-full w-full flex justify-center py-14 pb-[132px] bg-[url('/team.webp')] bg-cover bg-left after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-blue-800/90 after:w-full after:h-full">
      <div
        id="why-iban"
        className="w-content max-w-full flex flex-col items-center h-full z-10 md:px-0 px-6"
      >
        <h1 className="font-light md:text-2xl text-2xl text-white">
          Nossos diferenciais
        </h1>
        <h2 className="font-medium md:text-5xl text-4xl my-12 text-white w-[800px] max-w-full text-center md:leading-normal leading-normal">
          Por que a Iban é a melhor escolha para o seu negócio?
        </h2>
        <div
          ref={ref}
          className="flex justify-center lg:w-[920px] md:w-[640px] max-w-full pb-8"
        >
          <ul
            ref={scope}
            className="inline-flex w-full lg:justify-between justify-center flex-wrap gap-8"
          >
            {renderAdvantages()}
          </ul>
        </div>
      </div>
    </section>
  );
}
