import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Art } from "./Art";
import { IconHandshake, IconCalendar, IconArrowRight } from "./Icons";

const services = [
  {
    icon: IconCalendar,
    tone: "plum" as const,
    pattern: "grid" as const,
    title: "Full-Service Event Planning",
    desc: "Large-scale tech events connecting Pakistan's innovation ecosystem",
  },
  {
    icon: IconHandshake,
    tone: "gold" as const,
    pattern: "rings" as const,
    title: "Government Relations",
    desc: "Strategic advisory for policy engagement and institutional partnerships",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Help"
          title="Services"
          intro="Professional services to support your global business journey"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i + 1, 5) as 1 | 2}>
              <article className="card-lift group flex h-full flex-col gap-0 overflow-hidden rounded-lg2 border border-rule bg-white shadow-card hover:border-brand-200 hover:shadow-lift sm:flex-row">
                <Art icon={s.icon} tone={s.tone} pattern={s.pattern} className="h-44 w-full flex-shrink-0 sm:h-auto sm:w-48" />
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="font-display text-[1.1rem] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{s.desc}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-all duration-300 group-hover:bg-brand-700"
                  >
                    Get in Touch
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
