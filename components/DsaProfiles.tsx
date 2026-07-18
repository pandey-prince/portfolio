import { SiLeetcode, SiCodeforces } from "react-icons/si";
import type { LeetCodeStats } from "@/lib/leetcode";
import type { CodeforcesStats } from "@/lib/codeforces";
import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="dsa-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function DsaProfiles({
  leetcode,
  codeforces,
}: {
  leetcode: LeetCodeStats;
  codeforces: CodeforcesStats;
}) {
  return (
    <div className="dsa-grid">
      <Reveal className="dsa-card">
        <div className="dsa-head">
          <div className="dsa-title">
            <SiLeetcode color="#ffa116" size={18} />
            LeetCode
          </div>
          <a
            href={siteConfig.social.leetcode}
            target="_blank"
            rel="noreferrer"
            className="dsa-link"
          >
            @{siteConfig.handles.leetcode}
          </a>
        </div>
        {leetcode.ok ? (
          <>
            <div className="dsa-big">{leetcode.totalSolved}</div>
            <div className="dsa-sub">problems solved</div>
            <div className="dsa-stats">
              <Stat value={String(leetcode.easy)} label="Easy" />
              <Stat value={String(leetcode.medium)} label="Medium" />
              <Stat value={String(leetcode.hard)} label="Hard" />
            </div>
            {leetcode.ranking ? (
              <p className="dsa-sub" style={{ marginTop: 12, marginBottom: 0 }}>
                Global ranking · #{leetcode.ranking.toLocaleString()}
              </p>
            ) : null}
          </>
        ) : (
          <p className="dsa-sub">Live stats unavailable — visit the profile.</p>
        )}
      </Reveal>

      <Reveal delayClass="d1" className="dsa-card">
        <div className="dsa-head">
          <div className="dsa-title">
            <SiCodeforces color="#1f8acb" size={18} />
            Codeforces
          </div>
          <a
            href={siteConfig.social.codeforces}
            target="_blank"
            rel="noreferrer"
            className="dsa-link"
          >
            @{siteConfig.handles.codeforces}
          </a>
        </div>
        {codeforces.ok ? (
          <>
            <div className="dsa-big">{codeforces.rating ?? "—"}</div>
            <div className="dsa-sub" style={{ textTransform: "capitalize" }}>
              {codeforces.rank ?? "unrated"}
            </div>
            <div className="dsa-stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <Stat value={String(codeforces.maxRating ?? "—")} label="Max rating" />
              <Stat
                value={codeforces.solved != null ? String(codeforces.solved) : "—"}
                label="Problems"
              />
            </div>
          </>
        ) : (
          <p className="dsa-sub">Live stats unavailable — visit the profile.</p>
        )}
      </Reveal>
    </div>
  );
}
