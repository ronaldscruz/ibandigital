import Image from "next/image";

import FacebookSvg from "./assets/facebook.svg";
import InstagramSvg from "./assets/instagram.svg";
import WhatsappSvg from "./assets/whatsapp.svg";
import EmailSvg from "./assets/email.svg";
import {
  EMAIL,
  FACEBOOK_USERNAME,
  FORMATTED_WAPP_NUMBER,
  INSTAGRAM_USERNAME,
  WAPP_NUMBER,
} from "@/constants";
import { solutionsData } from "@/components/Home/Solutions/constants";

export default function Footer() {
  const renderSolutionLinks = (solutions = []) => {
    return solutions.map((solution) => (
      <li key={solution.id} className="text-sm">
        <a href={`#${solution.id}`}>{solution.title}</a>
      </li>
    ));
  };

  return (
    <footer className="bg-black text-white py-14 flex justify-center px-6">
      <div className="max-w-full md:flex-row flex-col inline-flex justify-center flex-wrap gap-12">
        <section
          id="logo-and-slogan"
          className="min-[700px]:w-[630px] min-[1300px]:w-auto"
        >
          <Image
            src="/logo-full-dark.webp"
            width={202}
            height={76}
            alt="Logomarca da Iban Digital"
          />
          <p className="text-sm mt-4 italic font-light">
            A transformação digital que seu negócio precisa.
          </p>
        </section>
        <div className="inline-flex flex-wrap gap-12">
          <section id="footer-services-list" className="md:w-[unset] w-[280px]">
            <h3 className="text-lg font-medium">Soluções</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {renderSolutionLinks(solutionsData)}
            </ul>
          </section>
          <section id="footer-useful-links" className="md:w-[unset] w-[280px]">
            <h3 className="text-lg font-medium">Links úteis</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm">Sobre nós</li>
              <li className="text-sm">Blog</li>
              <li className="text-sm">Contato</li>
              <li className="text-sm">FAQ</li>
            </ul>
          </section>
          <section id="footer-medias" className="md:w-[unset] w-[280px]">
            <h3 className="text-lg font-medium">Mídias e contato</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm flex">
                <Image
                  src={InstagramSvg}
                  width={18}
                  height={18}
                  alt="Ícone da rede social Instagram"
                />
                <a
                  className="ml-2"
                  href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
                >
                  @{INSTAGRAM_USERNAME}
                </a>
              </li>
              <li className="text-sm flex">
                <Image
                  src={EmailSvg}
                  width={18}
                  height={18}
                  alt="Ícone de correspondência de e-mail"
                />
                <a className="ml-2" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li className="text-sm flex">
                <Image
                  src={WhatsappSvg}
                  width={18}
                  height={18}
                  alt="Ícone do aplicativo WhatsApp"
                />
                <a className="ml-2" href={`https://wa.me/${WAPP_NUMBER}`}>
                  {FORMATTED_WAPP_NUMBER}
                </a>
              </li>
              <li className="text-sm flex">
                <Image
                  src={FacebookSvg}
                  width={18}
                  height={18}
                  alt="Ícone da rede social Facebook"
                />
                <a
                  className="ml-2"
                  href={`https://facebook.com/${FACEBOOK_USERNAME}`}
                >
                  Iban Digital
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
