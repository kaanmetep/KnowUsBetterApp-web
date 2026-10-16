import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-[13px] text-faint sm:px-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/images/app-icon.png" alt="" width={22} height={22} className="rounded-[6px] border border-black/5" />
          <span className="font-serif font-bold text-ink">KnowUsBetter</span>
          <span className="ml-1">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-semibold">
          <Link href="/privacy-policy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms-of-service" className="transition-colors hover:text-ink">
            Terms
          </Link>
          <a href="mailto:help@knowusbetter.app" className="transition-colors hover:text-ink">
            help@knowusbetter.app
          </a>
        </nav>
      </div>
    </footer>
  );
}
