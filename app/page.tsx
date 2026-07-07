import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import Activity from "@/components/Activity";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";
import { getLeetCodeStats } from "@/lib/leetcode";
import { getCodeforcesStats } from "@/lib/codeforces";

// Revalidate the page hourly so DSA stats stay fresh.
export const revalidate = 3600;

export default async function Home() {
  const [leetcode, codeforces] = await Promise.all([
    getLeetCodeStats(siteConfig.handles.leetcode),
    getCodeforcesStats(siteConfig.handles.codeforces),
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <TechMarquee />
        <Activity leetcode={leetcode} codeforces={codeforces} />
        <Projects />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
