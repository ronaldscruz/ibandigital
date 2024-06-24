import WhatsappSvg from "./assets/whatsapp.svg";
import Image from "next/image";

export default function FloatingWhatsappButton() {
  return (
    <div className="fixed bottom-[18px] right-[18px] z-30">
      <a href="https://wa.me/551151960569?text=Ol%C3%A1%21%20Venho%20atrav%C3%A9s%20do%20site%20da%20Iban%20Digital%20e%20gostaria%20de%20receber%20atendimento%20especializado.">
        <button className="bg-green-500 text-white p-4 rounded-full">
          <Image src={WhatsappSvg} alt="Whatsapp" width={28} height={28} />
        </button>
      </a>
    </div>
  );
}
