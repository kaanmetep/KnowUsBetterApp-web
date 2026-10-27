import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RootShell from "../components/RootShell";
import { COPY } from "../content";
import { isLang } from "../i18n";
import { siteMetadata } from "../seo";

export { viewport } from "../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "es" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { ...siteMetadata, description: isLang(lang) ? COPY[lang].meta.description : undefined };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <RootShell lang={lang}>{children}</RootShell>;
}
