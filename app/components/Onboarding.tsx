"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AppStoreButton from "./AppStoreButton";

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalImages = 6;
  const images = Array.from(
    { length: totalImages },
    (_, i) => `/images/apple-photo-${i + 1}.jpeg`
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen w-full bg-[#FFF0E5] text-[#2D1810] overflow-x-hidden font-sans">
      {/* --- HEADER --- */}
      <header className="w-full px-6 py-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="KnowUsBetter Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5D4037]">
          <a
            href="https://apps.apple.com/tr/app/knowusbetter/id6754946265?l=tr"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Download
          </a>
          <a
            href="mailto:help@knowusbetter.app"
            className="hover:text-black transition-colors"
          >
            Support
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:text-black transition-colors"
          >
            Terms of Service
          </a>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 py-10 lg:py-20 gap-12 lg:gap-24">
        {/* SOL TAFAR: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* App Icon (Minitature) */}
          <div className="relative w-24 h-24 -ml-4">
            <Image
              src="/images/logo.png"
              alt="App Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#2D1810]">
            Test Your <br />
            Connection.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed max-w-lg mb-10">
            The couples app that connects you through fun quizzes. Create a
            room, answer questions, and see how well you match with your
            partner.
          </p>

          {/* Black App Store Button */}
          <div className="flex flex-col gap-4">
            <a
              href="https://apps.apple.com/tr/app/knowusbetter/id6754946265?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white flex items-center gap-3 px-6 py-3.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-1.23 3.57-1.23.6 0 2.72.16 4.08 2.01-3.85 2.04-3.5 5.17 0 6.14-.98 2.37-2.26 4.21-2.73 5.31zM12.93 5.62c.76-1.12 1.35-2.58 1.16-4.04-1.29.09-2.73.99-3.48 2.09-.69.97-1.38 2.39-1.15 3.86 1.48.16 2.75-.82 3.47-1.91z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium opacity-80">
                  Download on the
                </span>
                <span className="text-xl font-bold">App Store</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* SAĞ TARAF: Phone Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex items-center justify-center w-full max-w-[400px] lg:max-w-none"
        >
          {/* Slider Container */}
          <div className="relative w-full flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-2 lg:left-4 z-20 w-10 h-10 items-center justify-center rounded-full text-[#2D1810] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* THE PHONE FRAME - SABİTLENDİ (rotate/hover silindi) */}
            <div className="relative z-10 bg-[#4A342E] p-3 md:p-4 rounded-[3rem] md:rounded-[3.5rem] shadow-2xl shadow-black/20">
              {/* İç Çerçeve (Ekranın kendisi) */}
              <div className="relative w-[260px] h-[540px] md:w-[280px] md:h-[580px] bg-black rounded-[2.5rem] overflow-hidden border-[4px] border-[#2a1d1a]">
                {/* Dynamic Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-30"></div>

                {/* Status Bar Fake Items */}
                <div className="absolute top-2 left-6 z-30 text-[10px] text-white font-bold">
                  9:41
                </div>
                <div className="absolute top-2 right-6 z-30 flex gap-1">
                  <div className="w-4 h-3 bg-white rounded-sm"></div>
                </div>

                {/* SLIDER IMAGES */}
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 w-full h-full bg-white"
                  >
                    <Image
                      src={images[currentSlide]}
                      alt={`App Screen ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-2 lg:right-4 z-20 w-10 h-10 items-center justify-center rounded-full text-[#2D1810] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "bg-[#2D1810] w-4" : "bg-[#2D1810]/20"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
