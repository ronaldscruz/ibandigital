import Image from "next/image";

const DEFAULT_MENU_OPTIONS = [
  {
    name: "Mídias Sociais",
    url: "/social-media",
  },
  {
    name: "Dados & BI",
    url: "/data-analytics",
  },
  {
    name: "Criação de Sites",
    url: "/web-development",
  },
];

export default function Navbar() {
  const renderOptions = (options = []) => {
    return options.map((item, index) => (
      <li className="font-medium text-white" key={index}>
        <a href={item.url}>{item.name}</a>
      </li>
    ));
  };

  return (
    <nav className="flex justify-center h-menu w-screen z-10 absolute">
      <div className="flex justify-between items-center h-full py-4 w-content">
        <Image
          src="/logo-full-dark.png"
          alt="Iban Digital"
          width={120}
          height={80}
        />
        <ul className="inline-flex gap-8">
          {renderOptions(DEFAULT_MENU_OPTIONS)}
        </ul>
        <button className="bg-blue-500 h-12 px-6 border-radius text-white font-medium rounded-full">
          Solicite um orçamento
        </button>
      </div>
    </nav>
  );
}
