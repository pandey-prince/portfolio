import Effects from "@/components/Effects";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Activity from "@/components/Activity";
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
      <Effects />
      <Sidebar />
      <TopNav />
      <div className="main-wrap" id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Activity leetcode={leetcode} codeforces={codeforces} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
