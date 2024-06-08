import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Iban Digital - Em breve...",
  description: "Em breve, a Iban Digital dará início à revolução no mercado digital. Aguarde!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/iban-favicon.png" sizes="any" />
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
