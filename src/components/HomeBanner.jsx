import Image from "next/image";
import PlaceOrderButton from "./common/PlaceOrderButton/PlaceOrderButton";

export default function HomeBanner() {
  return (
    <section className="flex w-full h-[92vh] justify-center bg-black/75 bg-[url('/home-banner-background.webp')] bg-cover after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-black/75 after:w-full after:h-[92vh]">
      <div className="flex flex-col justify-center items-start h-full w-content max-w-full z-10 xl:p-0 p-6">
        <h1
          className="text-white font-bold text-3xl md:text-4xl mb-6 w-[640px] max-w-full leading-normal"
          key="banner-title"
        >
          <span className="text-blue-500">Iban</span>, o caminho para
          profissionalizar o seu{" "}
          <span className="inline-block relative">
            negócio.
            <Image
              alt="Risco de lápis sublinhando a palavra negócio"
              className="absolute md:bottom-[-12px] bottom-[-4px] rotate-180 z-[-1] pointer-events-none"
              src="/pencil-underline.png"
              width={161}
              height={20}
            />
          </span>
        </h1>

        <div className="w-full flex justify-center mt-6 md:hidden">
          <PlaceOrderButton />
        </div>
      </div>
    </section>
  );
}
