"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";
import { motion } from "framer-motion";
import "./styles.css";

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
  const [isOnTopOfPage, setIsOnTopOfPage] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [fixedOnTop, setFixedOnTop] = useState(false);

  const navbarClasses = useMemo(() => {
    if (isOnTopOfPage) return "";

    let classes = "";

    const userScrolledPast = !isOnTopOfPage;
    if (userScrolledPast) classes += "scrolled-past";

    const userIsScrollingUp = fixedOnTop && !isOnTopOfPage;
    if (userIsScrollingUp) classes += " fixed-on-top";

    return classes;
  }, [isOnTopOfPage, fixedOnTop]);

  const renderOptions = (options = []) => {
    return options.map((item, index) => (
      <li className="font-medium text-white hover:underline" key={index}>
        <a href={item.url}>{item.name}</a>
      </li>
    ));
  };

  const handleScroll = useCallback(() => {
    setLastScrollTop(window.scrollY);

    const onTopOfPage = window.scrollY < 20;
    setIsOnTopOfPage(onTopOfPage);

    const userIsScrollingUp = window.scrollY < lastScrollTop;
    setFixedOnTop(userIsScrollingUp);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll]);

  return (
    <nav
      className={`flex justify-center py-4 xl:py-5 w-full z-20 navbar 
      ${navbarClasses}`}
    >
      <div className="flex justify-between items-center h-full w-content max-w-full px-5 xl:px-0">
        <Link href="/">
          <Image
            src="/logo-full-dark.webp"
            alt="Iban Digital"
            width={108}
            height={64}
          />
        </Link>
        <ul className="inline-flex gap-8 sm:flex hidden">
          {renderOptions(DEFAULT_MENU_OPTIONS)}
        </ul>

        <div className="flex items-center gap-4 sm:hidden block">
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
