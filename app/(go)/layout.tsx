import { headers } from "next/headers";
import RootShell from "../components/RootShell";
import { goLang } from "./lang";

export { viewport } from "../seo";

export default async function GoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang = goLang(await headers());
  return (
    <RootShell lang={lang} footer={false}>
      {children}
    </RootShell>
  );
}
