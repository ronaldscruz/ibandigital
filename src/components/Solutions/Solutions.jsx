import Image from "next/image";

import BrowserIcon from "./assets/browser.svg";
import MobileIcon from "./assets/mobile.svg";
import RocketIcon from "./assets/rocket.svg";
import WritingIcon from "./assets/writing.svg";

import BackgroundElements from "./assets/background-elements.svg";

import PlaceOrderButton from "../common/PlaceOrderButton";

const solutionsData = [
  {
    title: "Tráfego Pago",
    helper: "Impulsione suas vendas",
    icon: { path: RocketIcon, alt: "Ilustração de um foguete" },
    services: [
      {
        name: "Google Ads",
        description:
          "Esteja visível onde seus clientes estão buscando, navegando e assistindo com Google Ads.",
        url: "/google-ads",
      },
      {
        name: "Meta Ads",
        description: "Mantenha sua presença online no Instagram e Facebook.",
        url: "/facebook-ads",
      },
      {
        name: "TikTok Ads",
        description: "Apareça para a nova geração de consumidores.",
        url: "/tiktok-ads",
      },
    ],
  },
  {
    title: "Social Media",
    helper: "Construa sua audiência",
    icon: { path: MobileIcon, alt: "Ilustração de um dispositivo móvel" },
    services: [
      {
        name: "Aumento do Engajamento",
        description: "Atraia e envolva seu público com conteúdos impactantes.",
        url: "",
      },
      {
        name: "Construçao de Marca",
        description: "Fortaleça a identidade da sua marca nas redes sociais.",
        url: "",
      },
      {
        name: "Alcance Global",
        description: "Expanda seu alcance e atinja audiências internacionais.",
        url: "",
      },
      {
        name: "Segmentação precisa",
        description: "Direcione suas campanhas para públicos específicos.",
        url: "",
      },
    ],
  },
  {
    title: "Copywriting",
    helper: "Conquiste seus clientes",
    icon: { path: WritingIcon, alt: "Ilustração de um papel sendo escrito" },
    services: [
      {
        name: "Conversões Elevadas",
        description: "Texto persuasivo que transforma visitantes em clientes.",
        url: "",
      },
      {
        name: "Criação de Artigos",
        description: "Mensagens claras e eficazes para seu público-alvo.",
        url: "",
      },
      {
        name: "Criação de Conteúdo",
        description:
          "Conteúdo que melhora o posicionamento nos motores de busca.",
        url: "",
      },
      {
        name: "SEO",
        description: "Crie conexões duradouras com seus clientes.",
        url: "",
      },
    ],
  },
  {
    title: "Desenvolvimento Web",
    helper: "Seja encontrado na internet",
    icon: {
      path: BrowserIcon,
      alt: 'Ilustração de uma aplicação com a escrita "www", representando um navegador web',
    },
    services: [
      {
        name: "Sites Institucionais",
        description: "Apareça no LinkedIn",
        url: "/sites-institucionais",
      },
      {
        name: "Landing Pages",
        description: "Apareça no Instagram",
        url: "/landing-pages",
      },
      {
        name: "Otimização de SEO",
        description:
          "Apareça em primeiro no Google e outros mecanismos de pesquisa",
        url: "/seo",
      },
      {
        name: "E-commerce",
        description: "Apareça no Facebook",
        url: "/ecommerce",
      },
      {
        name: "Blog",
        description: "Apareça no Twitter",
        url: "/blog",
      },
    ],
  },
];

export default function Solutions() {
  const renderCards = (solutions = []) => {
    return solutions.map(({ title, helper, icon, services = [] }) => (
      <article
        key={title}
        className="p-6 shadow-lg rounded-xl w-[300px] h-96 flex flex-col items-center z-20 bg-white"
      >
        <Image
          className="mb-6 flex"
          src={icon.path}
          alt={icon.alt}
          width={80}
          height={80}
        />
        <h2 className="text-lg font-medium mb-4">{title}</h2>
        <ul className="w-full">
          {services.map((service) => (
            <li key={title + service.name} title={service.description}>
              <span className="text-2xl font-bold text-blue-500 mr-2">
                &rsaquo;
              </span>
              {service.name}
            </li>
          ))}
        </ul>
      </article>
    ));
  };

  return (
    <section className="flex w-full h-[768px] w-full flex justify-center">
      <div className="w-content flex flex-col items-center h-full py-14 relative">
        <Image
          className="absolute top-[80px] left-[-48px] z-10"
          src={BackgroundElements}
          width={204}
          height={188}
          alt="Elementos de fundo: padrão de bolinhas azuis"
        />

        <Image
          className="absolute bottom-[120px] right-[-48px] z-10"
          src={BackgroundElements}
          width={284}
          height={358}
          alt="Elementos de fundo: padrão de bolinhas azuis"
        />

        <h1 className="font-bold text-4xl mb-6 text-blue-500 mb-14 bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          Soluções
        </h1>

        <div className="inline-flex flex-nowrap gap-6 mb-14">
          {renderCards(solutionsData)}
        </div>

        <PlaceOrderButton />
      </div>
    </section>
  );
}
