"use client";

import Image from "next/image";

export default function SolutionCard({ title, icon, services, index = 0 }) {
  return (
    <div className="md:h-96 sm:w-[280px] w-[100%]">
      <article
        key={title}
        className="px-5 py-7 shadow-lg rounded-xl w-full h-full flex flex-col items-center z-20 bg-white"
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
      </article>
    </div>
  );
}
