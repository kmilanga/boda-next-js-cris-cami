import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Playfair_Display, Inter } from "next/font/google";
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

export const metadata = {
  title: "Cristina & Camilo, Boda 2028",
  description:
    "Acompáñanos a celebrar un día lleno de amor, familia y momentos inolvidables.",
  openGraph: {
    title: "Cristina & Camilo, Boda 2028",
    description:
      "Acompáñanos a celebrar un día lleno de amor, familia y momentos inolvidables.",
    url: "https://pendiente.com",
    siteName: "Cristina & Camilo, Boda 2028",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 800,
        alt: "Cristina & Camilo",
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link 
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' 
          rel='stylesheet' 
        />
      </head>
      <body>
        <StickyMenu />
        <BackToTop />

        <header className="site-header reveal">
          Cristina & Camilo — 21 Enero 2028
        </header>

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}