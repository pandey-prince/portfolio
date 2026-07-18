import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="sec-eye">Projects</div>
        </Reveal>
        <div className="proj-list">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delayClass={i === 0 ? "" : i === 1 ? "d1" : i === 2 ? "d2" : "d3"}
            >
              <div className="proj-row">
                <div className="proj-n">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-desc">{p.description}</div>
                  <div className="proj-stack">
                    {p.tags.map((t) => (
                      <span className="pt" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.caseStudy && (
                    <details className="proj-case">
                      <summary>Case study</summary>
                      <div className="proj-case-body">
                        <p>
                          <strong>The problem. </strong>
                          {p.caseStudy.problem}
                        </p>
                        <p>
                          <strong>What I built. </strong>
                          {p.caseStudy.built}
                        </p>
                        <p>
                          <strong>The result. </strong>
                          {p.caseStudy.result}
                        </p>
                      </div>
                    </details>
                  )}
                </div>
                <div className="proj-links-col">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-lnk"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-lnk"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 6.268c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 22.297 24 17.8 24 12.5 24 5.87 18.627.5 12 .5z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
