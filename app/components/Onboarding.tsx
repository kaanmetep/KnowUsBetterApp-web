"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import AppStoreButton from "./AppStoreButton";

export default function Onboarding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const steps = [
    {
      number: "01",
      title: "Create a Room",
      description:
        "Create a room and share the code with your partner or friend",
    },
    {
      number: "02",
      title: "Choose Category",
      description:
        "Pick from four categories that match your relationship stage",
    },
    {
      number: "03",
      title: "Get Results",
      description:
        "Answer 10 questions together and see your compatibility instantly",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-zinc-50 to-white dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md dark:border-gray-800/50 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="small" />
          </motion.div>

          <nav className="hidden items-center gap-6 md:flex">
            <motion.a
              href="/privacy-policy"
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms-of-service"
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
            <AppStoreButton size="small" />
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md dark:border-gray-800/50 dark:bg-zinc-900/95 md:hidden"
            >
              <nav className="flex flex-col gap-4 px-4 py-6">
                <motion.a
                  href="/privacy-policy"
                  className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/terms-of-service"
                  className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms of Service
                </motion.a>
                <div className="pt-2">
                  <AppStoreButton size="small" />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section - Two Column Layout on Desktop */}
      <section className="flex flex-1 items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12">
          <motion.div
            className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="flex flex-col">
              {/* Headline */}
              <h1 className="mb-6 text-3xl font-bold leading-tight text-red-950 dark:text-red-200 md:text-4xl lg:text-5xl">
                Test Your Connection Together
              </h1>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
                Play fun, real-time quizzes with your partner or friends. Create
                a room, answer questions together, and reveal your compatibility
                instantly!
              </p>

              {/* App Store Button */}
              <AppStoreButton size="medium" />
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <Image
                  src="/images/girl-and-boy-web-landing.png"
                  alt="KnowUsBetter - Couple Quiz"
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="border-t border-gray-200 bg-gradient-to-b from-white via-zinc-50 to-white px-4 py-20 dark:border-gray-800 dark:from-black dark:via-zinc-950 dark:to-black md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap items-start justify-center gap-6 md:gap-8"
          >
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                variants={itemVariants}
                className="group relative flex-shrink-0"
                style={{
                  marginTop: index % 2 === 1 ? "3rem" : "0",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-200 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                  whileHover={{ y: -12, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[9/19.5] w-[280px] md:w-[320px]">
                    <Image
                      src={`/images/apple-photo-${num}.png`}
                      alt={`KnowUsBetter App Screenshot ${num}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-t border-gray-200 bg-gradient-to-b from-white via-zinc-50 to-white px-4 py-20 dark:border-gray-800 dark:from-black dark:via-zinc-950 dark:to-black md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple steps to discover your compatibility
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const stepColors = [
                {
                  numberBg: "bg-gradient-to-br from-[#ffc8ae] to-[#ffd4c1]",
                  numberText: "text-slate-700",
                  border: "border-[#ffc8ae]/20",
                },
                {
                  numberBg: "bg-gradient-to-br from-[#c2ecfb] to-[#d4f1fc]",
                  numberText: "text-slate-700",
                  border: "border-[#c2ecfb]/20",
                },
                {
                  numberBg: "bg-gradient-to-br from-[#e5d5d0] to-[#f0e4e0]",
                  numberText: "text-slate-700",
                  border: "border-[#e5d5d0]/20",
                },
              ];
              const colors = stepColors[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg dark:bg-zinc-900/50`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative z-10 text-center">
                      <div
                        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${colors.numberBg} text-2xl font-bold ${colors.numberText}`}
                      >
                        {step.number}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white px-4 py-16 dark:border-gray-800 dark:bg-zinc-900 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-red-950 dark:text-red-200 md:text-4xl">
              Ready to Discover Your Connection?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Perfect for couples, new matches, best friends, or just for fun!
            </p>
            <AppStoreButton
              size="large"
              text="Get the App Now"
              showIcon={false}
              showArrow={true}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
