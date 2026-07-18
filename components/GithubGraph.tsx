"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { siteConfig } from "@/lib/config";

export default function GithubGraph() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const read = () => {
      setColorScheme(
        document.documentElement.classList.contains("dark-mode")
          ? "dark"
          : "light",
      );
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gh-calendar-wrap">
      <GitHubCalendar
        username={siteConfig.handles.github}
        colorScheme={colorScheme}
        fontSize={12}
        blockSize={11}
        theme={{
          light: ["#f0ebda", "#d4c0a0", "#c09060", "#b06530", "#111111"],
          dark: ["#141414", "#3a342c", "#6a5a48", "#a08060", "#ffffff"],
        }}
      />
    </div>
  );
}
