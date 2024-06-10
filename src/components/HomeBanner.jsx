import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="flex w-screen h-screen justify-center bg-black/75 bg-[url('/home-banner-background.jpg')] bg-cover after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-black/75 after:w-screen after:h-screen">
      <div className="flex flex-col justify-center items-start h-full w-content z-10">
        <h1 className="text-white font-bold text-4xl mb-6 w-[640px] leading-normal">
          <span className="text-blue-500">Iban</span>, o caminho para
          profissionalizar o seu{" "}
          <span className="inline-block relative">
            negócio.
            <Image
              alt="Risco de lápis sublinhando a palavra negócio"
              className="absolute bottom-0 rotate-180 z-[-1]"
              src="/pencil-underline.png"
              width={161}
              height={44}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}
