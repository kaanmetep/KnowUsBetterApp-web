import { Libre_Baskerville, Merriweather_Sans, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
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

/* Libre Baskerville and Merriweather Sans have no Japanese glyphs, so /ja adds
   Noto as the Japanese fallback (wired up in globals.css under :lang(ja)). */
const notoSerifJp = Noto_Serif_JP({
  weight: "700",
  variable: "--font-noto-serif-jp",
  preload: false,
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  preload: false,
});

export default function RootShell({
  lang,
  footer = true,
  children,
}: {
  lang: Lang;
  footer?: boolean;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      className={`${libreBaskerville.variable} ${merriweatherSans.variable}${
        lang === "ja" ? ` ${notoSerifJp.variable} ${notoSansJp.variable}` : ""
      }`}
    >
      <body className="antialiased">
        <div className="flex flex-col lg:min-h-screen">
          {children}
          {footer && <Footer />}
        </div>
      </body>
    </html>
  );
}
