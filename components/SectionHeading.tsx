import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${
            light ? "text-brand-300" : "text-brand-600"
          }`}
        >
          <span className={`h-px w-6 ${light ? "bg-brand-300" : "bg-brand-500"}`} />
          {eyebrow}
          <span className={`h-px w-6 ${light ? "bg-brand-300" : "bg-brand-500"}`} />
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={`mt-3 font-display text-[1.8rem] font-bold tracking-tight sm:text-[2.2rem] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className={`mt-3.5 text-[0.98rem] leading-relaxed ${light ? "text-white/60" : "text-muted"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
