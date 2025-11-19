import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="KnowUsBetter Logo"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-red-950 dark:text-red-200">
              KnowUsBetter
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy-policy"
              className="text-red-800 transition hover:text-red-950 dark:text-red-400 dark:hover:text-red-200"
            >
              Privacy Policy
            </Link>
            <span className="text-red-300">•</span>
            <Link
              href="/terms-of-service"
              className="text-red-800 transition hover:text-red-950 dark:text-red-400 dark:hover:text-red-200"
            >
              Terms of Service
            </Link>
            <span className="text-red-300">•</span>
            <a
              href="mailto:help@knowusbetter.app"
              className="text-red-800 transition hover:text-red-950 dark:text-red-400 dark:hover:text-red-200"
            >
              help@knowusbetter.app
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-red-800 dark:text-red-400">
            © {new Date().getFullYear()} KnowUsBetter
          </p>
        </div>
      </div>
    </footer>
  );
}
