import { Libre_Baskerville, Merriweather_Sans } from "next/font/google";
import Footer from "./Footer";
import type { Lang } from "../i18n";
import "../globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  variable: "--font-merriweather-sans",
});

export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${libreBaskerville.variable} ${merriweatherSans.variable}`}>
      <body className="antialiased">
        <div className="flex flex-col lg:min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
