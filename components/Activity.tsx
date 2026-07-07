import SectionHeading from "./SectionHeading";
import GithubGraph from "./GithubGraph";
import { DsaProfiles } from "./DsaProfiles";
import type { LeetCodeStats } from "@/lib/leetcode";
import type { CodeforcesStats } from "@/lib/codeforces";

export default function Activity({
  leetcode,
  codeforces,
}: {
  leetcode: LeetCodeStats;
  codeforces: CodeforcesStats;
}) {
  return (
    <section id="activity" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="03" title="Coding activity" />
      <div className="flex flex-col gap-4">
        <GithubGraph />
        <DsaProfiles leetcode={leetcode} codeforces={codeforces} />
      </div>
    </section>
  );
}
