import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { posts } from "@/lib/data";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="06" title="Writing" />
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 2) * 80}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-muted">{p.date}</span>
              {p.draft && (
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-wide text-accent-2">
                  Draft
                </span>
              )}
            </div>
            <h3 className="flex items-start justify-between gap-2 text-lg font-semibold">
              {p.title}
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">{p.excerpt}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="font-mono text-[11px] text-accent-2">
                  #{t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
