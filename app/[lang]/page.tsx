import { notFound } from "next/navigation";
import Landing from "../components/Landing";
import StructuredData from "../components/StructuredData";
import { COPY, questionOfTheDay } from "../content";
import { isLang } from "../i18n";
import { homeMetadata } from "../seo";

export const revalidate = 3600;

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLang(lang) ? homeMetadata(lang) : {};
}

export default async function LangHome({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <StructuredData lang={lang} />
      <Landing lang={lang} tonightIndex={questionOfTheDay(COPY[lang].tonight.questions.length)} />
    </>
  );
}
