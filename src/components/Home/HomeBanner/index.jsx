import Image from "next/image";
import PlaceOrderButton from "../../common/PlaceOrderButton";

import BannerBackgroundImage from "./assets/home-banner-background.webp";

export default function HomeBanner() {
  return (
    <section
      id="home-banner"
      className="flex w-full h-[94vh] justify-center bg-black"
    >
      <div className="flex flex-col justify-center items-center h-full w-content max-w-full z-10 xl:p-0 p-6">
        <h1
          className="text-white font-bold text-3xl md:text-5xl w-[800px] max-w-full leading-normal text-center leading-normal md:leading-normal"
          key="banner-title"
        >
          <span className="text-blue-500">Iban</span>, a revolução digital que
          seu negócio precisa.
        </h1>

        <p className="w-[800px] max-w-full text-center text-white text-lg my-14 sm:leading-normal leading-normal">
          Não fique para trás! Oferecemos soluções descomplicadas que realmente
          funcionam, com resultados altamente{" "}
          <span className="font-semibold">mensuráveis</span>.{" "}
        </p>

        <div className="w-full flex justify-center">
          <PlaceOrderButton />
        </div>
      </div>

      <div className="absolute top-0 left-0 h-[94vh] w-full opacity-25">
        <Image
          src={BannerBackgroundImage}
          priority
          fill
          className="object-cover"
          alt="Equipe em escritório planejando um projeto"
        />
      </div>
    </section>
  );
}
