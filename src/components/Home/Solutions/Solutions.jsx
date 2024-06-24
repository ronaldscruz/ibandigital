import SolutionSection from "./SolutionSection";

import AdsLottie from "./assets/lottie/ads.json";
import SocialMediaLottie from "./assets/lottie/social-media.json";
import WebLottie from "./assets/lottie/web.json";
import BusinessLottie from "./assets/lottie/business.json";
import ContentLottie from "./assets/lottie/content.json";

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
    illustration: WebLottie,
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
    illustration: AdsLottie,
  },
  {
    title: "Mídias Sociais",
    details: [
      "Comunidade leal em torno da marca",
      "Crescimento do engajamento online",
      "Estratégias personalizadas para cada plataforma",
      "Maior presença digital",
    ],
    illustration: SocialMediaLottie,
  },
  {
    title: "Business Intelligence",
    details: [
      "Insights valiosos para o crescimento",
      "Estratégias mais eficientes",
      "Melhoria contínua de desempenho",
      "Decisões baseadas em dados",
    ],
    illustration: BusinessLottie,
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
    illustration: ContentLottie,
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
    <section className="flex w-full w-full flex justify-center items-center py-20">
      <div
        id="solutions"
        className="w-content flex flex-col items-center relative md:px-0 px-8"
      >
        <h1 className="mb-2 font-medium md:text-5xl text-4xl text-center text-transparent py-2 bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 leading-normal">
          Soluções que fazem a diferença
        </h1>

        {renderSolutions(solutionsData)}
      </div>
    </section>
  );
}
