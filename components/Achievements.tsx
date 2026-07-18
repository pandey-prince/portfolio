import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

const badgeClass = {
  fill: "hb-fill",
  out: "hb-out",
  mute: "hb-mute",
} as const;

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <Reveal>
          <div className="sec-eye">Achievements</div>
        </Reveal>
        <div className="hack-list">
          {achievements.map((a, i) => (
            <Reveal
              key={a.name}
              delayClass={i === 0 ? "" : i === 1 ? "d1" : "d2"}
            >
              <div className="hack-row">
                <div>
                  <div className="hack-icon">{a.icon}</div>
                  <div className="hack-date">{a.date}</div>
                  <div className="hack-name">{a.name}</div>
                  <div className="hack-loc">📍 {a.location}</div>
                  <p className="hack-desc">{a.description}</p>
                </div>
                <span className={`hbadge ${badgeClass[a.badgeVariant]}`}>
                  {a.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
