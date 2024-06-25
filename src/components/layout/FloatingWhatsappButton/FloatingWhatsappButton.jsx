import "./FloatingWhatsappButton.styles.css";

import WhatsappSvg from "./assets/whatsapp.svg";
import Image from "next/image";

export default function FloatingWhatsappButton() {
  return (
    <div
      id="floating-whatsapp-button"
      className="fixed right-[26px] bottom-[26px] w-[64px] h-[64px] 2xl:w-[84px] 2xl:h-[84px] bg-green-500 rounded-full z-30"
    >
      <a href="https://wa.me/551151960569?text=Ol%C3%A1%21%20Venho%20atrav%C3%A9s%20do%20site%20da%20Iban%20Digital%20e%20gostaria%20de%20receber%20atendimento%20especializado.">
        <button className="flex items-center justify-center">
          <Image
            src={WhatsappSvg}
            alt="Ícone do WhatsApp: clique para entrar em contato"
            layout="fill"
            className="p-4 2xl:p-5"
          />
        </button>
      </a>
    </div>
  );
}
