import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import StickyMenu from "../components/StickyMenu";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const SITE_URL = "https://boda-valeriayadrian.netlify.app";

export const metadata = {
  title: "Valeria & Adrián · Boda 21 Enero 2028",
  description:
    "Acompáñanos a celebrar un día lleno de amor, familia y momentos inolvidables. Córdoba, 21 de Enero de 2028.",
  openGraph: {
    title: "Valeria & Adrián · Boda 21 Enero 2028",
    description:
      "Acompáñanos a celebrar un día lleno de amor, familia y momentos inolvidables.",
    url: SITE_URL,
    siteName: "Valeria & Adrián",
    images: [
      {
        url: `${SITE_URL}/gallery3.jpg`,
        width: 1200,
        height: 800,
        alt: "Valeria & Adrián — Boda 2028",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <StickyMenu />
        <BackToTop />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
