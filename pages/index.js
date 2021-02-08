import Head from "next/head";
import HomeAbout from "../components/HomeAbout";
import HomeAboutVideoSection from "../components/HomeAboutVideoSection";
import VisitorHomeHero from "../components/VisitorHomeHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Mindverse</title>
      </Head>
      <main>
        <VisitorHomeHero />
        <HomeAbout />
        <HomeAboutVideoSection />
      </main>
    </>
  );
}
