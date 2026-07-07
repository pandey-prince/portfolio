import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { value: "220+", label: "DSA problems solved" },
  { value: "5+", label: "Full-stack projects" },
  { value: "2026", label: "B.Tech CSE graduate" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-xl leading-relaxed sm:text-2xl">
            I&apos;m a full-stack developer and Computer Science graduate focused on
            turning ideas into clean, maintainable web experiences.
          </p>
          <p className="mt-5 text-muted">
            My work spans responsive React interfaces, REST APIs, authentication,
            role-based access, cloud media workflows, and relational and document
            databases. I care about practical engineering: clear architecture,
            thoughtful UX, and products that solve a real problem — whether I&apos;m
            shipping for a team or a freelance client.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {facts.map((f, i) => (
            <Reveal
              as="article"
              key={f.label}
              delay={i * 80}
              className="rounded-xl border border-line bg-surface p-4"
            >
              <strong className="block text-2xl text-accent">{f.value}</strong>
              <span className="text-xs text-muted sm:text-sm">{f.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
