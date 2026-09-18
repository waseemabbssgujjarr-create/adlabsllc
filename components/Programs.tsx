import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Art } from "./Art";
import { IconBridge, IconBuilding, IconPassport, IconArrowRight } from "./Icons";

const programs = [
  {
    icon: IconBridge,
    tone: "rose" as const,
    pattern: "grid" as const,
    title: "Silicon Valley Tech Exchange",
    desc: "2-week immersion across San Francisco & Los Angeles — 5–18 October 2026",
    cta: "Learn More",
  },
  {
    icon: IconBuilding,
    tone: "plum" as const,
    pattern: "dots" as const,
    title: "USA Company Formation",
    desc: "Complete US company setup with physical bank account",
    cta: "Get Started",
  },
  {
    icon: IconPassport,
    tone: "gold" as const,
    pattern: "rings" as const,
    title: "Visa Consultation",
    desc: "Expert guidance for US, EU, UK and Japan visa applications",
    cta: "See If You Qualify",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Programs"
          intro="Comprehensive solutions for Pakistani entrepreneurs looking to expand globally"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3}>
              <article className="card-lift group h-full overflow-hidden rounded-lg2 border border-rule bg-white shadow-card hover:border-brand-200 hover:shadow-lift">
                <Art icon={p.icon} tone={p.tone} pattern={p.pattern} className="h-44 w-full" />
                <div className="p-6">
                  <h3 className="font-display text-[1.08rem] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{p.desc}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-600 px-5 py-3 text-[0.88rem] font-semibold text-white transition-all duration-300 group-hover:bg-brand-700"
                  >
                    {p.cta}
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
