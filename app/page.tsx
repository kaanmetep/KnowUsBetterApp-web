import { headers } from "next/headers";
import Landing from "./components/Landing";
import { COPY, pickLang, questionOfTheDay } from "./content";

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang: override } = await searchParams;
  const lang = pickLang(override, (await headers()).get("accept-language"));
  const tonightIndex = questionOfTheDay(COPY[lang].tonight.questions.length);

  return <Landing lang={lang} tonightIndex={tonightIndex} />;
}
