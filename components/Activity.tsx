import Reveal from "./Reveal";
import GithubGraph from "./GithubGraph";
import { DsaProfiles } from "./DsaProfiles";
import type { LeetCodeStats } from "@/lib/leetcode";
import type { CodeforcesStats } from "@/lib/codeforces";
import { siteConfig } from "@/lib/config";

export default function Activity({
  leetcode,
  codeforces,
}: {
  leetcode: LeetCodeStats;
  codeforces: CodeforcesStats;
}) {
  return (
    <section id="github">
      <div className="container">
        <div className="gh-top">
          <Reveal>
            <div>
              <div className="sec-eye" style={{ marginBottom: 6 }}>
                Github &amp; DSA
              </div>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--sand2)",
                }}
              >
                Consistent work, shipped publicly.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="gh-link"
            >
              github.com/{siteConfig.handles.github} ↗
            </a>
          </Reveal>
        </div>
        <Reveal delayClass="d2">
          <GithubGraph />
        </Reveal>
        <DsaProfiles leetcode={leetcode} codeforces={codeforces} />
      </div>
    </section>
  );
}
