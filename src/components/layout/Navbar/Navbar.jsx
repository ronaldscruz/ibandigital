"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const DEFAULT_MENU_OPTIONS = [
  {
    name: "Soluções",
    url: "#solutions",
  },
  {
    name: "Por que a Iban?",
    url: "#why-iban",
  },
  {
    name: "Contato",
    url: "#contact-form",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderOptions = (options = []) => {
    return options.map((item, index) => (
      <li className="font-medium text-white hover:underline" key={index}>
        <a href={item.url}>{item.name}</a>
      </li>
    ));
  };

  return (
    <nav className="flex justify-center py-6 w-full z-20 absolute">
      <div className="flex justify-between items-center h-full w-content max-w-full xl:p-0 px-6">
        <Link href="/">
          <Image
            src="/logo-full-dark.webp"
            alt="Iban Digital"
            width={120}
            height={80}
          />
        </Link>
        <ul className="inline-flex gap-8 xl:flex hidden">
          {renderOptions(DEFAULT_MENU_OPTIONS)}
        </ul>

        <div className="flex items-center gap-4 xl:hidden block">
          <motion.button
            whileTap={{ scale: 0.87 }}
            className="cursor-pointer border border-white rounded-full p-2"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <Image
              src="/hamburger-menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </motion.button>
          <MobileMenu
            open={mobileMenuOpen}
            options={DEFAULT_MENU_OPTIONS}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}
