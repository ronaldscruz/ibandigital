import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image className="pointer-events-none" src={'/logo-full.png'} alt="Logo Iban Digital" width={380} height={200} />
      <h1 className="text-lg font-medium">Em breve...</h1>
    </main>
  );
}
