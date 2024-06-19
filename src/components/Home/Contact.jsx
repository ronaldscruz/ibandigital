export default function Contact() {
  return (
    <section className="relative flex w-full w-full flex justify-center py-20 pb-32">
      <div className="w-content max-w-full flex flex-col items-center h-full z-10 md:px-0 px-6">
        <h1 className="font-light md:text-2xl text-2xl">Entre em contato</h1>
        <h2 className="font-medium md:text-5xl text-4xl my-20 w-[800px] max-w-full text-center md:leading-normal leading-normal">
          Quero transformar meu negócio
        </h2>
        <form className="flex flex-col gap-4 w-full justify-center items-center">
          <input
            type="text"
            placeholder="Nome"
            className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
          />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
          />
          <textarea
            placeholder="Mensagem"
            className="w-full max-w-[480px] py-4 px-6 bg-gray-100 rounded-lg"
          />
          <button className="w-full max-w-[480px] py-4 px-6 bg-blue-500 text-white rounded-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
