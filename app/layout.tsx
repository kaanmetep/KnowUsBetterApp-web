import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KnowUsBetter",
  description: "KnowUsBetter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
