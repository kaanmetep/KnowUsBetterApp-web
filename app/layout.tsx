import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KnowUsBetter - Test Your Connection Together",
  description: "KnowUsBetter - Test Your Connection Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.className} antialiased`}>
        <div className="flex flex-col lg:min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
