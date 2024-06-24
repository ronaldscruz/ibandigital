import Image from "next/image";
import PlaceOrderButton from "../../common/PlaceOrderButton/PlaceOrderButton";

import BannerBackgroundImage from "./assets/home-banner-background.webp";
import PencilUnderlineImage from "./assets/pencil-underline.png";

export default function HomeBanner() {
  return (
    <section className="flex w-full h-[92vh] justify-center bg-black">
      <div className="flex flex-col justify-center items-center h-full w-content max-w-full z-10 xl:p-0 p-6">
        <h1
          className="text-white font-bold text-3xl md:text-5xl mb-6 w-[800px] max-w-full leading-normal text-center leading-normal md:leading-normal"
          key="banner-title"
        >
          <span className="text-blue-500">Iban</span>, a revolução digital que
          seu negócio precisa
        </h1>

        <div className="w-full flex justify-center mt-6 md:hidden">
          <PlaceOrderButton />
        </div>
      </div>

      <div className="absolute top-0 left-0 h-[92vh] w-full opacity-25">
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
