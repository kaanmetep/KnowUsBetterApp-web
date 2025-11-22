"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface LogoProps {
  marginTop?: number;
  size?: "default" | "small";
}

const Logo = ({ marginTop = 0, size = "default" }: LogoProps) => {
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = [
    "Test Your Connection Together",
    "Get to Know the Real You Two",
    "Answer, Laugh, and Connect",
  ];

  const isSmall = size === "small";
  const logoSize = isSmall
    ? { width: 50, height: 50 }
    : { width: 80, height: 70 };
  const titleSize = isSmall ? "text-xl md:text-3xl" : "text-4xl lg:text-5xl";

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div
      className={`flex justify-center items-center  ${libreBaskerville.className}`}
      style={{ marginTop }}
    >
      <Image
        src="/images/logo.png"
        alt="KnowUsBetter Logo"
        width={logoSize.width}
        height={logoSize.height}
        className={isSmall ? "w-8 h-8 md:w-[50px] md:h-[50px]" : ""}
      />
      <h1 className={`${titleSize} text-red-950 `}>KnowUsBetter</h1>
      {!isSmall && (
        <div className="relative h-6 ">
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className=" inset-0 text-center text-red-900"
            >
              {messages[msgIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Logo;
