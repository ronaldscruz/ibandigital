"use client";

import PlaceOrderButton from "@/components/common/PlaceOrderButton/PlaceOrderButton";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

export default function Advantages() {
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef, {
    once: true,
  });

  const dataRef = useRef();
  const dataInView = useInView(dataRef, {
    once: true,
  });

  const buttonRef = useRef();
  const buttonInView = useInView(buttonRef, {
    once: true,
  });

  return (
    <section className="relative flex w-full w-full flex justify-center text-white py-20 pb-[132px] bg-[url('/failure.webp')] bg-cover after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-blue-800/70 after:w-full after:h-full">
      <div
        ref={sectionRef}
        className="w-content max-w-full flex flex-col items-center h-full z-10 md:px-0 px-6"
      >
        <AnimatePresence>
          {sectionInView && (
            <>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                }}
                className="font-light md:text-2xl text-2xl"
              >
                Você sabia?
              </motion.h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="font-medium md:text-5xl text-4xl my-20 w-[800px] max-w-full text-center md:leading-normal leading-normal"
              >
                A cada minuto, 4 empresas fecharam no Brasil em 2023
              </motion.h2>
            </>
          )}
        </AnimatePresence>

        <div ref={dataRef}>
          <AnimatePresence>
            {dataInView && (
              <motion.ul
                className="flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <li className="flex flex-col items-center mb-20">
                  <span className="font-bold text-5xl">
                    <CountUp end={2153840} decimal={"."} duration={3} />
                  </span>
                  negócios extintos
                </li>
                <li className="flex flex-col items-center mb-20">
                  <span className="font-bold text-5xl">
                    <CountUp end={25.7} duration={3} decimal="." decimals={1} />
                    %
                  </span>
                  mais falências do que 2022
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <p className="text-2xl flex flex-col items-center text-center gap-6 mb-20">
          <span>Não deixe sua empresa se tornar estatística.</span>
          <span>
            Conte com a <span className="font-medium">Iban</span> para
            transformar seu futuro digital!
          </span>
        </p>

        <div ref={buttonRef}>
          <AnimatePresence>
            {buttonInView && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [0, 1.2, 1] }}
                transition={{
                  type: "spring",
                  delay: 0.7,
                  duration: [0, 0.2, 0],
                }}
              >
                <PlaceOrderButton reversed={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
