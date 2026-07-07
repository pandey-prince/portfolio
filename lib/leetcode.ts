export type LeetCodeStats = {
  handle: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number | null;
  ok: boolean;
};

const LEETCODE_ENDPOINT = "https://leetcode.com/graphql";

const QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      profile { ranking }
      submitStatsGlobal {
        acSubmissionNum { difficulty count }
      }
    }
  }
`;

export async function getLeetCodeStats(handle: string): Promise<LeetCodeStats> {
  const empty: LeetCodeStats = {
    handle,
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: null,
    ok: false,
  };

  try {
    const res = await fetch(LEETCODE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query: QUERY, variables: { username: handle } }),
      // Revalidate roughly hourly so cards stay fresh without hammering the API.
      next: { revalidate: 3600 },
    });

    if (!res.ok) return empty;
    const json = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) return empty;

    const nums: Array<{ difficulty: string; count: number }> =
      user.submitStatsGlobal?.acSubmissionNum ?? [];
    const by = (d: string) => nums.find((n) => n.difficulty === d)?.count ?? 0;

    return {
      handle,
      totalSolved: by("All"),
      easy: by("Easy"),
      medium: by("Medium"),
      hard: by("Hard"),
      ranking: user.profile?.ranking ?? null,
      ok: true,
    };
  } catch {
    return empty;
  }
}
