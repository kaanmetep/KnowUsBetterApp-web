import type { Metadata } from "next";
import RootShell from "../components/RootShell";
import { COPY } from "../content";
import { siteMetadata } from "../seo";

export { viewport } from "../seo";

export const metadata: Metadata = {
  ...siteMetadata,
  title: { default: "KnowUsBetter", template: "%s | KnowUsBetter" },
  description: COPY.en.meta.description,
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
