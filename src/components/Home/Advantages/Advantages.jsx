import Image from "next/image";

import ChatIcon from "./assets/chat.svg";
import MoneyIcon from "./assets/money.svg";
import LinkIcon from "./assets/link.svg";
import TechIcon from "./assets/tech.svg";
import TeamIcon from "./assets/team.svg";
import ClockIcon from "./assets/clock.svg";

const advantages = [
  {
    icon: MoneyIcon,
    title: "Foco no Retorno",
    description:
      "Nossa missão é o sucesso do seu negócio. Estamos focados em gerar resultados para você.",
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
    icon: TechIcon,
    title: "Tecnologia",
    description:
      "Temos tecnologias de ponta, para garantir que seu negócio saia na frente.",
  },
  {
    icon: TeamIcon,
    title: "Time especializado",
    description:
      "Contamos com profissionais de diversas áreas, carregando conhecimento e experiência para o seu projeto.",
  },
  {
    icon: ClockIcon,
    title: "Prazos",
    description:
      "O tempo é o bem mais valioso de todos. Por isso, cumprimos nossos prazos com agilidade.",
  },
];

export default function Advantages() {
  const renderAdvantages = () => {
    return advantages.map((advantage, index) => (
      <li key={index} className="text-white md:w-[280px] w-full">
        <div className="inline-flex items-center mb-2">
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
    <section className="relative flex w-full min-h-[768px] w-full flex justify-center bg-[url('/team.webp')] bg-[url('/home-banner-background.webp')] bg-cover after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-blue-800/90 after:w-full after:h-full">
      <div className="w-content max-w-full flex flex-col items-center h-full py-14 z-10 px-6">
        <h1 className="font-light md:text-2xl text-xl mb-6 py-2 text-white">
          Nossos diferenciais
        </h1>
        <h2 className="font-medium md:text-4xl text-2xl mb-14 py-2 text-white w-[768px] max-w-full text-center">
          Por que a Iban é a melhor escolha para o seu negócio?
        </h2>
        <div className="flex justify-center w-[640px] max-w-full">
          <ul className="inline-flex w-full lg:justify-between justify-center flex-wrap gap-8">
            {renderAdvantages()}
          </ul>
        </div>
      </div>
    </section>
  );
}
