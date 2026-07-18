import Reveal from "./Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="sec-eye">Experience</div>
        </Reveal>
        <div className="exp-list">
          {experiences.map((e, i) => (
            <Reveal
              key={e.company}
              delayClass={i === 0 ? "" : i === 1 ? "d1" : "d2"}
            >
              <div className="exp-row">
                <div className="exp-left-wrap">
                  <div className="exp-logo">{e.logo}</div>
                  <div className="exp-date">{e.period}</div>
                </div>
                <div>
                  <div className="exp-role">{e.role}</div>
                  <span className="exp-co">
                    {e.company} · {e.location}
                  </span>
                  <p className="exp-desc">{e.points.join(" ")}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
