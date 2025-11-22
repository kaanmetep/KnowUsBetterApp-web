"use client";

import { motion } from "framer-motion";

interface AppStoreButtonProps {
  size?: "small" | "medium" | "large";
  text?: string;
  showIcon?: boolean;
  showArrow?: boolean;
  className?: string;
}

export default function AppStoreButton({
  size = "medium",
  text,
  showIcon = true,
  showArrow = false,
  className = "",
}: AppStoreButtonProps) {
  const sizeClasses = {
    small: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm gap-2",
    medium: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg gap-2 md:gap-3",
    large: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg gap-2 md:gap-3",
  };

  const iconSizes = {
    small: "h-4 w-4 md:h-5 md:w-5",
    medium: "h-5 w-5 md:h-7 md:w-7",
    large: "h-5 w-5 md:h-7 md:w-7",
  };

  const defaultTexts = {
    small: "Download",
    medium: "Download on the App Store",
    large: "Get the App Now",
  };

  const displayText = text || defaultTexts[size];

  return (
    <motion.a
      href="https://apps.apple.com/us/app/knowusbetter/id6754946265"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex w-fit items-center ${sizeClasses[size]} overflow-hidden rounded-full bg-gradient-to-r from-[#ffc8ae] via-[#e5d5d0] to-[#c2ecfb] font-semibold text-slate-700 shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-blue-300/30 ${className}`}
      whileHover={{ scale: size === "small" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {showIcon && !showArrow && (
        <svg
          className={`${iconSizes[size]} transition-transform duration-200 group-hover:scale-110`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      )}
      <span>{displayText}</span>
      {showArrow && (
        <svg
          className={`${iconSizes[size]} transition-transform duration-200 group-hover:translate-x-1`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </motion.a>
  );
}
