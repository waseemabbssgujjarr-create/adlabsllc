import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Art } from "./Art";
import { IconUsers, IconMic, IconArrowRight, IconCalendar } from "./Icons";

const events = [
  {
    icon: IconUsers,
    tone: "rose" as const,
    pattern: "waves" as const,
    title: "Future Fest",
    desc: "Pakistan's premier technology and innovation festival",
    date: "2026",
  },
  {
    icon: IconMic,
    tone: "ink" as const,
    pattern: "dots" as const,
    title: "Pakistan Tech Summit",
    desc: "Annual gathering of Pakistan's tech leaders and innovators",
    date: "2026",
  },
];

export default function Events() {
  return (
    <section id="events" className="scroll-mt-20 py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="On The Calendar"
          title="Events"
          intro="Large-scale events connecting Pakistan's tech ecosystem"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={Math.min(i + 1, 5) as 1 | 2}>
              <article className="card-lift group h-full overflow-hidden rounded-lg2 border border-rule bg-white shadow-card hover:border-brand-200 hover:shadow-lift">
                <Art icon={e.icon} tone={e.tone} pattern={e.pattern} className="h-52 w-full" />
                <div className="p-6">
                  <div className="mb-2 inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-brand-600">
                    <IconCalendar className="h-3.5 w-3.5" /> {e.date}
                  </div>
                  <h3 className="font-display text-[1.15rem] font-semibold text-ink">{e.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{e.desc}</p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-[0.88rem] font-semibold text-white transition-all duration-300 group-hover:bg-brand-700"
                  >
                    Learn More
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
