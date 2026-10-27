import Landing from "../components/Landing";
import StructuredData from "../components/StructuredData";
import { COPY, questionOfTheDay } from "../content";
import { homeMetadata } from "../seo";

export const revalidate = 3600;

export const metadata = homeMetadata("en");

export default function Home() {
  return (
    <>
      <StructuredData lang="en" />
      <Landing lang="en" tonightIndex={questionOfTheDay(COPY.en.tonight.questions.length)} />
    </>
  );
}
