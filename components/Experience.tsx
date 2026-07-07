import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experiences, skillGroups } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="05" title="Experience & skills" />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          {experiences.map((e) => (
            <Reveal
              as="article"
              key={e.company}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <span className="text-xs text-muted">{e.location}</span>
              </div>
              <p className="text-sm text-accent-2">{e.company}</p>
              <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal
              as="article"
              key={g.title}
              delay={(i % 2) * 60}
              className="rounded-xl border border-line bg-surface p-4"
            >
              <h4 className="mb-2 text-sm font-semibold text-accent">{g.title}</h4>
              <p className="text-sm text-muted">{g.items.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
