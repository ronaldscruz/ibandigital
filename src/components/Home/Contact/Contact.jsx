"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import CheckIcon from "./assets/check.svg";
import Image from "next/image";

export default function Contact() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 1 });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.current.checkValidity();

    e.preventDefault();

    const form = document.querySelector("form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const response = await fetch("https://formspree.io/f/xleqqqkk", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex w-full w-full flex justify-center py-20 pb-32 bg-white md:rounded-[64px] rounded-[32px] mt-[-64px]">
      <div
        ref={ref}
        className="w-content max-w-full flex flex-col items-center h-full z-10 md:px-0 px-6"
      >
        <AnimatePresence>
          {inView && (
            <motion.div
              className="w-full flex flex-col items-center h-full z-10 md:px-0 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="font-light md:text-2xl text-2xl">
                Entre em contato
              </h1>
              <h2 className="font-medium md:text-5xl text-4xl my-20 w-[800px] max-w-full text-center md:leading-normal leading-normal">
                Quero transformar meu negócio
              </h2>
              <form
                id="contact-form"
                className="flex flex-col gap-4 w-full justify-center items-center relative"
                onSubmit={handleSubmit}
              >
                <input
                  disabled={formSubmitted}
                  type="text"
                  name="name"
                  placeholder="Nome"
                  className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  disabled={formSubmitted}
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
                  required
                />
                <input
                  disabled={formSubmitted}
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
                  required
                />
                {/* select field that has 2 options: Telefone or E-mail, where user selects the method of answer that he prefers */}
                <select
                  disabled={formSubmitted}
                  name="contact-method"
                  className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
                  required
                >
                  <option value="" disabled selected hidden>
                    Método de contato
                  </option>
                  <option value="phone">Receber contato via ligação</option>
                  <option value="whatsapp">Receber contato via WhatsApp</option>
                  <option value="email">Receber contato via e-mail</option>
                </select>
                <textarea
                  disabled={formSubmitted}
                  name="message"
                  placeholder="Mensagem"
                  className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
                  required
                />
                <button
                  disabled={formSubmitted || loading}
                  className="w-full max-w-[480px] py-4 px-6 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar
                </button>
              </form>
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-90 z-20 flex flex-col pointer-events-none"
                  >
                    <Image
                      src={CheckIcon}
                      width={72}
                      height={72}
                      alt='Ícone de "check" confirmando que o formulário foi submetido'
                    />
                    <p className="text-green-500 mt-8 text-lg font-medium text-center">
                      Mensagem enviada com sucesso! <br />
                      Retornaremos em breve.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {error && (
                <p className="text-red-500 mt-8 text-lg font-medium text-center">
                  Ocorreu um erro ao enviar a mensagem. <br />
                  Por favor, tente novamente.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
