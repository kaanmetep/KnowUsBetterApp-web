import { headers } from "next/headers";
import RootShell from "../components/RootShell";
import { pickLang } from "../i18n";

export { viewport } from "../seo";

export default async function GoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang = pickLang((await headers()).get("accept-language"));
  return (
    <RootShell lang={lang} footer={false}>
      {children}
    </RootShell>
  );
}
