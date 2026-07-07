import { SiLeetcode, SiCodeforces } from "react-icons/si";
import type { LeetCodeStats } from "@/lib/leetcode";
import type { CodeforcesStats } from "@/lib/codeforces";
import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface-2 px-3 py-2 text-center">
      <div className="text-lg font-semibold text-text">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-muted">{label}</div>
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
    <div className="grid gap-4 md:grid-cols-2">
      <Reveal className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiLeetcode className="text-[#ffa116]" size={20} />
            <h3 className="font-medium">LeetCode</h3>
          </div>
          <a
            href={`https://leetcode.com/u/${siteConfig.handles.leetcode}/`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-accent hover:underline"
          >
            @{siteConfig.handles.leetcode}
          </a>
        </div>
        {leetcode.ok ? (
          <>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-accent">{leetcode.totalSolved}</span>
              <span className="text-sm text-muted">problems solved</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Stat value={String(leetcode.easy)} label="Easy" />
              <Stat value={String(leetcode.medium)} label="Medium" />
              <Stat value={String(leetcode.hard)} label="Hard" />
            </div>
            {leetcode.ranking ? (
              <p className="mt-3 text-xs text-muted">
                Global ranking · #{leetcode.ranking.toLocaleString()}
              </p>
            ) : null}
          </>
        ) : (
          <p className="text-sm text-muted">
            Live stats unavailable. Visit the profile directly to view solved problems.
          </p>
        )}
      </Reveal>

      <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiCodeforces className="text-[#1f8acb]" size={20} />
            <h3 className="font-medium">Codeforces</h3>
          </div>
          <a
            href={`https://codeforces.com/profile/${siteConfig.handles.codeforces}`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-accent hover:underline"
          >
            @{siteConfig.handles.codeforces}
          </a>
        </div>
        {codeforces.ok ? (
          <>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-accent">
                {codeforces.rating ?? "—"}
              </span>
              <span className="text-sm capitalize text-muted">
                {codeforces.rank ?? "unrated"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Stat value={String(codeforces.maxRating ?? "—")} label="Max rating" />
              <Stat
                value={codeforces.solved != null ? String(codeforces.solved) : "—"}
                label="Problems"
              />
            </div>
            {codeforces.maxRank ? (
              <p className="mt-3 text-xs capitalize text-muted">
                Best rank · {codeforces.maxRank}
              </p>
            ) : null}
          </>
        ) : (
          <p className="text-sm text-muted">
            Live stats unavailable. Visit the profile directly to view rating and rank.
          </p>
        )}
      </Reveal>
    </div>
  );
}
