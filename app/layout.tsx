import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Merriweather_Sans } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://knowusbetter.app"),
  title: "KnowUsBetter: How well do you really know them?",
  description:
    "A real-time quiz for couples. Two phones, one question, answered at the same time. Then see where you matched.",
  openGraph: {
    title: "How well do you really know them?",
    description: "A real-time quiz for couples. Free on iPhone.",
    siteName: "KnowUsBetter",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  appleWebApp: { title: "KnowUsBetter" },
  other: { "apple-itunes-app": "app-id=6754946265" },
};

export const viewport: Viewport = {
  themeColor: "#f3eae3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${merriweatherSans.variable}`}>
      <body className="antialiased">
        <div className="flex flex-col lg:min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
