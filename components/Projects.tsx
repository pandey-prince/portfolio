import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="04" title="Featured projects" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            delay={(i % 2) * 80}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-accent-2">{p.category}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name} on GitHub`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors group-hover:text-accent"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            <p className="flex-1 text-sm text-muted">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <a
          href="https://github.com/pandey-prince?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <FaGithub size={16} /> View all projects
        </a>
      </Reveal>
    </section>
  );
}
