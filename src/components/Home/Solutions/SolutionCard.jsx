"use client";

import { AnimatePresence, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SolutionCard({ title, icon, services, index = 0 }) {
  const ref = useRef();
  const cardInView = useInView(ref, {
    once: true,
  });

  return (
    <div ref={ref} className="h-96">
      <AnimatePresence>
        {cardInView && (
          <motion.article
            key={title}
            className="p-5 shadow-lg rounded-xl w-[280px] h-96 flex flex-col items-center z-20 bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.14 * index, duration: 0.6 }}
          >
            <Image
              className="mb-6 flex pointer-events-none"
              src={icon.path}
              alt={icon.alt}
              width={80}
              height={80}
            />
            <h2 className="text-lg font-medium mb-4">{title}</h2>
            <ul className="w-full">
              {services.map((service) => (
                <li key={title + service.name} title={service.description}>
                  <span className="text-2xl font-bold text-blue-500 mr-2">
                    &rsaquo;
                  </span>
                  {service.name}
                </li>
              ))}
            </ul>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
