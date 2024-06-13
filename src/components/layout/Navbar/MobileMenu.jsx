"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({
  open = false,
  options = [],
  onClose = () => {},
}) {
  const renderMobileOptions = (options = []) => {
    return options.map((item, index) => (
      <li className="text-black flex h-16 items-center" key={index}>
        <a href={item.url}>{item.name}</a>
      </li>
    ));
  };

  return (
    <AnimatePresence>
      {open && (
        <div onClick={onClose} className="fixed inset-0 w-screen h-screen">
          <motion.ul
            initial={{
              clipPath: "inset(0% 0% 100% 100% round 10px 0px 10px 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
              },
            }}
            animate={{
              clipPath: "inset(0% 0% 0% 0% round 10px 0px 10px 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
              },
            }}
            exit={{
              clipPath: "inset(0% 0% 100% 100% round 10px 0px 10px 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.4,
              },
              opacity: 0,
            }}
            className="mobile-menu absolute right-[24px] top-[80px] w-[180px] bg-white text-black rounded-l-xl rounded-br-xl px-4 flex flex-col divide-y"
          >
            {renderMobileOptions(options)}
          </motion.ul>
        </div>
      )}
    </AnimatePresence>
  );
}
