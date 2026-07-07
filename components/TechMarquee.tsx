import SectionHeading from "./SectionHeading";
import { techStack } from "@/lib/data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...techStack, ...techStack];
  return (
    <div className="marquee-wrap overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className={`marquee-track gap-3 ${reverse ? "marquee-reverse" : ""}`}>
        {items.map((t, i) => (
          <span
            key={`${t.name}-${i}`}
            className="whitespace-nowrap rounded-xl border border-line bg-surface px-5 py-2.5 font-mono text-sm text-muted"
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section id="stack" className="mx-auto w-[min(1120px,calc(100%-48px))] py-20">
      <SectionHeading index="02" title="Technologies & Tools" />
      <div className="flex flex-col gap-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
