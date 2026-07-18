import Reveal from "./Reveal";
import { skillIcons } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="sec-eye">Skills</div>
        </Reveal>
        <Reveal delayClass="d1">
          <div className="skills-grid">
            {skillIcons.map((s) => (
              <div className="sk" key={s.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://skillicons.dev/icons?i=${s.icon}`}
                  alt=""
                  loading="lazy"
                />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
