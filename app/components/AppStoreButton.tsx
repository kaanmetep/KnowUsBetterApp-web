import { APP_STORE_URL } from "../content";

export const APPLE_LOGO =
  "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.29-1.23 3.57-1.23.6 0 2.72.16 4.08 2.01-3.85 2.04-3.5 5.17 0 6.14-.98 2.37-2.26 4.21-2.73 5.31zM12.93 5.62c.76-1.12 1.35-2.58 1.16-4.04-1.29.09-2.73.99-3.48 2.09-.69.97-1.38 2.39-1.15 3.86 1.48.16 2.75-.82 3.47-1.91z";

export default function AppStoreButton({ label }: { label: [string, string] }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-[58px] items-center gap-3 rounded-2xl bg-ink pl-5 pr-6 text-white shadow-[0_18px_36px_-14px_rgba(30,41,59,0.55)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 -translate-y-px" aria-hidden>
        <path d={APPLE_LOGO} />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[11px] font-semibold tracking-wide text-white/75">{label[0]}</span>
        <span className="mt-1 text-[20px] font-bold tracking-tight">{label[1]}</span>
      </span>
    </a>
  );
}
