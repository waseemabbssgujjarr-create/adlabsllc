import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PlayArt } from "./Art";
import { IconArrowRight } from "./Icons";

const reels = [
  { year: "2024", tone: "rose" as const },
  { year: "2023", tone: "plum" as const },
  { year: "2019", tone: "ink" as const },
];

export default function Highlights() {
  return (
    <section className="py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Relive The Moments"
          title="Program Highlights"
          intro="Relive the transformative experiences from our Silicon Valley Tech Exchange programs"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.year} delay={Math.min(i + 1, 5) as 1 | 2 | 3}>
              <a href="#" className="card-lift group block overflow-hidden rounded-lg2 border border-rule shadow-card hover:shadow-lift">
                <PlayArt tone={r.tone} label={r.year} className="h-56 w-full" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="mt-8 text-center">
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-brand-600 hover:text-brand-700"
            >
              View More on YouTube
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
