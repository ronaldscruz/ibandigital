"use client";

import PlaceOrderButton from "@/components/common/PlaceOrderButton";
import { stagger, useInView, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

const staggerDetails = stagger(0.6, { startDelay: 0.4 });

function useAnimateSection(inView) {
  const [scope, animate] = useAnimate(inView);

  useEffect(() => {
    animate("h1", inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, {
      duration: 0.4,
      delay: 0.6,
    });
    animate("h2", inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, {
      duration: 0.4,
      delay: 0.4,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return scope;
}

function useAnimateData(inView) {
  const [scope, animate] = useAnimate(inView);

  useEffect(() => {
    animate("li", inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, {
      duration: 0.4,
      delay: inView ? staggerDetails : 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return scope;
}

function useAnimateButton(inView) {
  const [scope, animate] = useAnimate(inView);

  useEffect(() => {
    animate(
      "button",
      inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 },
      {
        delay: 0.4,
        duration: 0.4,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return scope;
}

export default function Advantages() {
  const sectionRef = useRef();
  const sectionInView = useInView(sectionRef, {
    once: true,
  });
  const sectionScope = useAnimateSection(sectionInView);

  const dataRef = useRef();
  const dataInView = useInView(dataRef, {
    once: true,
  });
  const dataScope = useAnimateData(dataInView);

  const buttonRef = useRef();
  const buttonInView = useInView(buttonRef, {
    once: true,
  });
  const buttonScope = useAnimateButton(buttonInView);

  return (
    <section className="relative flex w-full w-full flex justify-center text-white py-16 pb-[132px] bg-[url('/failure.webp')] bg-center bg-cover after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-blue-800/70 after:w-full after:h-full">
      <div
        ref={sectionRef}
        className="w-content max-w-full flex flex-col items-center h-full z-10 md:px-0 px-6"
      >
        <div ref={sectionScope} className=" flex flex-col items-center w-full">
          <h1 className="font-light md:text-2xl text-2xl">Você sabia?</h1>
          <h2 className="font-medium md:text-5xl text-4xl my-12 w-[800px] max-w-full text-center md:leading-normal leading-normal">
            A cada minuto, 4 empresas fecharam no Brasil em 2023
          </h2>
        </div>

        <div ref={dataRef}>
          <ul ref={dataScope} className="flex flex-col">
            <li className="flex flex-col items-center mb-14">
              <span className="font-bold text-5xl">
                <CountUp
                  end={dataInView ? 2153840 : 0}
                  decimal={"."}
                  duration={3}
                />
              </span>
              negócios extintos
            </li>
            <li className="flex flex-col items-center mb-14">
              <span className="font-bold text-5xl">
                <CountUp
                  end={dataInView ? 25.7 : 0}
                  duration={3}
                  decimal="."
                  decimals={1}
                />
                %
              </span>
              mais falências do que 2022
            </li>
          </ul>
        </div>

        <p className="text-2xl flex flex-col items-center text-center gap-6 mb-14">
          <span>Não deixe sua empresa se tornar estatística.</span>
          <span>
            Conte com a <span className="font-medium">Iban</span> para
            transformar seu futuro digital!
          </span>
        </p>

        <div ref={buttonRef}>
          <div ref={buttonScope}>
            <PlaceOrderButton reversed={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
