"use client";

import { useCallback, useRef } from "react";
import Reveal from "./Reveal";
import { aboutChips, aboutStats } from "@/lib/data";
import { siteConfig } from "@/lib/config";

function startCount(el: HTMLElement) {
  if (el.dataset.done === "1") return;
  el.dataset.done = "1";
  const to = Number(el.dataset.to || 0);
  const suffix = el.dataset.suffix || "";
  const dur = 900;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = `${Math.round(e * to)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function About() {
  const countersRef = useRef<HTMLDivElement>(null);

  const onReveal = useCallback(() => {
    countersRef.current
      ?.querySelectorAll<HTMLElement>(".counter")
      .forEach(startCount);
  }, []);

  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="sec-eye">About</div>
        </Reveal>
        <div className="about-grid">
          <div>
            <Reveal delayClass="d1">
              <h2 className="about-h">
                Building things <em>that ship.</em>
              </h2>
            </Reveal>
            <Reveal delayClass="d2">
              <p className="about-p">
                Hey, I&apos;m <strong>{siteConfig.shortName}</strong> — a
                full-stack developer and Computer Science student from{" "}
                {siteConfig.location}. I turn ideas into clean, maintainable web
                products end to end.
              </p>
            </Reveal>
            <Reveal delayClass="d3">
              <p className="about-p">
                My work spans responsive React interfaces, REST APIs,
                authentication, role-based access, cloud media workflows, and
                relational/document databases. I care about practical
                engineering: clear architecture, thoughtful UX, and products that
                solve a real problem.
              </p>
            </Reveal>
            <Reveal delayClass="d4">
              <p className="about-p">
                Currently finishing <strong>B.Tech CSE (2026)</strong> at Goel
                Institute of Technology and Management — open to full-time roles
                and freelance projects.
              </p>
            </Reveal>
            <Reveal delayClass="d5">
              <div className="chips">
                {aboutChips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delayClass="d2" onReveal={onReveal}>
            <div className="stats" ref={countersRef}>
              {aboutStats.map((s) => (
                <div className="st" key={s.label}>
                  <div className="st-n">
                    {s.static ? (
                      <span>
                        {s.to}
                        {s.suffix || ""}
                      </span>
                    ) : (
                      <span
                        className="counter"
                        data-to={s.to}
                        data-suffix={s.suffix || ""}
                      >
                        0
                      </span>
                    )}
                  </div>
                  <div className="st-l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
