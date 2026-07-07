export type CodeforcesStats = {
  handle: string;
  rating: number | null;
  maxRating: number | null;
  rank: string | null;
  maxRank: string | null;
  solved: number | null;
  ok: boolean;
};

export async function getCodeforcesStats(handle: string): Promise<CodeforcesStats> {
  const empty: CodeforcesStats = {
    handle,
    rating: null,
    maxRating: null,
    rank: null,
    maxRank: null,
    solved: null,
    ok: false,
  };

  try {
    const infoRes = await fetch(
      `https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`,
      { next: { revalidate: 3600 } },
    );
    if (!infoRes.ok) return empty;
    const infoJson = await infoRes.json();
    if (infoJson.status !== "OK" || !infoJson.result?.[0]) return empty;
    const user = infoJson.result[0];

    let solved: number | null = null;
    try {
      const subRes = await fetch(
        `https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle)}`,
        { next: { revalidate: 3600 } },
      );
      if (subRes.ok) {
        const subJson = await subRes.json();
        if (subJson.status === "OK" && Array.isArray(subJson.result)) {
          const accepted = new Set<string>();
          for (const s of subJson.result) {
            if (s.verdict === "OK" && s.problem) {
              accepted.add(`${s.problem.contestId}-${s.problem.index}`);
            }
          }
          solved = accepted.size;
        }
      }
    } catch {
      // Non-fatal: keep solved null if the status endpoint is unavailable.
    }

    return {
      handle,
      rating: user.rating ?? null,
      maxRating: user.maxRating ?? null,
      rank: user.rank ?? null,
      maxRank: user.maxRank ?? null,
      solved,
      ok: true,
    };
  } catch {
    return empty;
  }
}
