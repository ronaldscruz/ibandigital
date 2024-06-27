import SolutionSection from "./components/SolutionSection";

import AdsSvg from "./assets/ad.svg";
import SocialMediaSvg from "./assets/social-media.svg";
import WebSvg from "./assets/web.svg";
import ContentSvg from "./assets/content.svg";

const solutionsData = [
  {
    title: "Criação de Sites",
    details: [
      "Melhor colocação nos mecanismos de busca",
      "Suporte em diversos dispositivos",
      "Alta performance e velocidade",
      "Maior conversão de visitantes em clientes",
      "Design atrativo e funcional",
    ],
    illustration: WebSvg,
  },
  {
    title: "Tráfego Pago",
    details: [
      "Aumento imediato de visibilidade",
      "Resultados rápidos e mensuráveis",
      "Retorno otimizado sobre o investimento",
      "Alvo preciso nos clientes certos",
      "Google, Instagram, Facebook e outras plataformas",
    ],
    illustration: AdsSvg,
  },
  {
    title: "Mídias Sociais",
    details: [
      "Comunidade leal em torno da marca",
      "Crescimento do engajamento online",
      "Estratégias personalizadas para cada plataforma",
      "Maior presença digital",
    ],
    illustration: SocialMediaSvg,
  },
  {
    title: "Marketing de Conteúdo",
    details: [
      "Criação de blogs, e-books e posts em rede sociais",
      "Geração de leads qualificados",
      "Aumento da autoridade da marca",
      "Engajamento efetivo com o público",
      "Fortalecimento da imagem da empresa",
    ],
    illustration: ContentSvg,
  },
];

export default function Solutions() {
  const renderSolutions = (solutions = []) => {
    return solutions.map((solution, index) => (
      <SolutionSection
        key={solution.title}
        reverse={!index % 2 === 0}
        {...solution}
      />
    ));
  };

  return (
    <section className="flex w-full w-full flex justify-center items-center py-14">
      <div
        id="solutions"
        className="w-content flex flex-col items-center relative md:px-0 px-8"
      >
        <h1 className="mb-16 font-medium md:text-5xl text-4xl text-center text-transparent py-2 bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-700 sm:leading-normal leading-normal">
          Soluções que fazem a diferença
        </h1>

        {renderSolutions(solutionsData)}
      </div>
    </section>
  );
}
