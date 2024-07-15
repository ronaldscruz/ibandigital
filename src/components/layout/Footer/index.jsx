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

const usefulLinksData = [
  {
    label: "Entre em contato",
    url: "#contact-form",
  },
  {
    label: "Diferenciais",
    url: "#why-iban",
  },
  {
    label: "Voltar para o topo",
    url: "#home-banner",
  },
];

const socialMediaData = {
  instagram: {
    icon: InstagramSvg,
    url: `https://instagram.com/${INSTAGRAM_USERNAME}`,
    label: `@${INSTAGRAM_USERNAME}`,
  },
  email: {
    icon: EmailSvg,
    url: `mailto:${EMAIL}`,
    label: EMAIL,
  },
  whatsapp: {
    icon: WhatsappSvg,
    url: `https://wa.me/${WAPP_NUMBER}`,
    label: FORMATTED_WAPP_NUMBER,
  },
  facebook: {
    icon: FacebookSvg,
    url: `https://facebook.com/profile.php?id=${FACEBOOK_USERNAME}`,
    label: "Iban Digital",
  },
};

export default function Footer() {
  const renderSolutionLinks = (solutions = []) => {
    return solutions.map((solution) => (
      <li key={solution.id} className="text-sm">
        <a href={`#${solution.id}`} className="hover:underline">
          {solution.title}
        </a>
      </li>
    ));
  };

  const renderSocialMediaLinks = (socialMedia = {}) => {
    return Object.keys(socialMedia).map((key) => {
      const { icon, url, label } = socialMedia[key];
      return (
        <li key={key} className="text-sm flex">
          <Image src={icon} width={18} height={18} alt={`Ícone do ${key}`} />
          <a
            className="ml-2 hover:underline"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {label}
          </a>
        </li>
      );
    });
  };

  const renderUsefulLinks = (usefulLinks) => {
    return usefulLinks.map((link) => (
      <li key={link.label} className="text-sm">
        <a href={link.url} className="hover:underline">
          {link.label}
        </a>
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
              {renderUsefulLinks(usefulLinksData)}
            </ul>
          </section>
          <section id="footer-medias" className="md:w-[unset] w-[280px]">
            <h3 className="text-lg font-medium">Mídias e contato</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {renderSocialMediaLinks(socialMediaData)}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
