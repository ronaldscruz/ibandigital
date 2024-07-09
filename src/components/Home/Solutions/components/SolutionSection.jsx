"use client";

import PlaceOrderButton from "@/components/common/PlaceOrderButton";
import { useInView, stagger, useAnimate } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const staggerDetails = stagger(0.2, { startDelay: 0.2 });

function useSectionAnimation(inView) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "h1",
      inView
        ? { opacity: 1, filter: "blur(0px)" }
        : { opacity: 0, filter: "blur(20px)" },
      {
        duration: 0.4,
        delay: 0.2,
      }
    );
    animate("li", inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, {
      duration: 0.4,
      delay: inView ? staggerDetails : 0,
    });
    animate(
      "#solution-illustration",
      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 },
      {
        duration: 0.4,
        delay: 0.4,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return scope;
}

export default function SolutionSection({
  title,
  details = [],
  illustration = "",
  id,
  reverse = false,
}) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const scope = useSectionAnimation(inView);

  return (
    <div id={id} ref={ref}>
      <article
        ref={scope}
        className="lg:w-[900px] max-w-screen lg:inline-flex flex lg:flex-row flex-col-reverse justify-between items-center mb-20"
      >
        <div
          id="solution-details"
          className="flex flex-col flex-1 lg:items-start items-center"
        >
          <h1 className="text-3xl lg:mt-0 mb-8 mt-8 font-medium lg:text-left text-center">
            {title}
          </h1>
          <ul className="mb-8">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="text-blue-600 text-2xl font-bold mr-2 pb-[2px]">
                  •
                </span>{" "}
                {detail}
              </li>
            ))}
          </ul>
          <PlaceOrderButton />
        </div>
        <div
          id="solution-illustration"
          className="flex flex-1 lg:justify-end justify-center"
        >
          <Image
            src={illustration}
            alt={`Ilustração abstrata representando "${title}"`}
            className="max-w-[240px] lg:max-w-[90%] pointer-events-none"
          />
        </div>
      </article>
    </div>
  );
}
