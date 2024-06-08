import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

const PRODUCTION_URL = "https://ibandigital.com.br";
const SITE_NAME = "Iban Digital"; 
const SITE_DESCRIPTION = "O caminho para profissionalizar o seu negócio";

export const metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: PRODUCTION_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${PRODUCTION_URL}/logo-full.png`,
        width: 800,
        height: 800,
      },
      {
        url: `${PRODUCTION_URL}/logo-full.png`,
        width: 1600,
        height: 1600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
