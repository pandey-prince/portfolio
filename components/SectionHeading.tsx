import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: Props) {
  return (
    <Reveal className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="h-px flex-1 bg-line" />
    </Reveal>
  );
}
