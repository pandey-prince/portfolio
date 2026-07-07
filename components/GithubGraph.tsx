"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "@/lib/config";

export default function GithubGraph() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const read = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setColorScheme(t === "light" ? "light" : "dark");
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-medium text-muted">GitHub contributions</h3>
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-accent hover:underline"
        >
          @{siteConfig.handles.github}
        </a>
      </div>
      <div className="overflow-x-auto">
        <GitHubCalendar
          username={siteConfig.handles.github}
          colorScheme={colorScheme}
          fontSize={12}
          blockSize={11}
          theme={{
            light: ["#edf1f8", "#9be5cd", "#5fd7b3", "#2bbf93", "#047d69"],
            dark: ["#131b29", "#1f4a45", "#2e7d6e", "#4fc7a5", "#76f7cf"],
          }}
        />
      </div>
    </div>
  );
}
