import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PlayArt } from "./Art";
import { IconArrowRight } from "./Icons";

const features = [
  { title: "Arab News Coverage", sub: "Arab News Pakistan feature", tone: "rose" as const },
  { title: "Tech Innovation Feature", sub: "Featured coverage", tone: "gold" as const },
  { title: "Voice of America Feature", sub: "VOA Urdu coverage", tone: "plum" as const },
];

const outlets = ["Express News", "Voice of America", "Arab News", "The Express Tribune"];

export default function Media() {
  return (
    <section className="py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In The Press"
          title="Featured in Media"
          intro="Watch our coverage from leading news outlets and tech conferences"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3}>
              <a href="#" className="card-lift group block overflow-hidden rounded-lg2 border border-rule shadow-card hover:shadow-lift">
                <PlayArt tone={f.tone} className="h-40 w-full" />
                <div className="border-t border-rule bg-white p-4">
                  <div className="text-[0.9rem] font-semibold text-ink">{f.title}</div>
                  <div className="text-[0.78rem] text-muted">{f.sub}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="mt-7 text-center">
            <a href="#" className="group inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-brand-600 hover:text-brand-700">
              View More on YouTube
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={5}>
          <div className="mt-14 rounded-lg2 border border-rule bg-white/70 px-6 py-8 text-center backdrop-blur-sm">
            <p className="mb-6 font-display text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
              Featured by global publications
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {outlets.map((o) => (
                <span key={o} className="font-display text-[1.05rem] font-bold tracking-tight text-inkSoft/70 transition-colors hover:text-brand-600">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
