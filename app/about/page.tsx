import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Art } from "@/components/Art";
import {
  IconTarget,
  IconCompass,
  IconHandshake,
  IconGlobe,
  IconUsers,
  IconBridge,
  IconArrowRight,
} from "@/components/Icons";

const values = [
  {
    icon: IconTarget,
    title: "Founder-First",
    desc: "Every program, filing, and event is built around what actually moves a founder's business forward — not vanity metrics.",
  },
  {
    icon: IconCompass,
    title: "Cross-Border Fluency",
    desc: "We operate comfortably across Pakistani and US/EU systems — regulatory, financial, and cultural — so you don't have to learn both.",
  },
  {
    icon: IconHandshake,
    title: "Relationships Over Transactions",
    desc: "From government liaisons to Silicon Valley operators, our network is built on trust earned over a decade of delivery.",
  },
  {
    icon: IconGlobe,
    title: "Long-Term Access",
    desc: "We measure success in the years after a program ends: the deals closed, the visas approved, the companies still standing.",
  },
];

const milestones = [
  { year: "2018", text: "AdEra Labs founded in Lahore to connect Pakistani founders to global markets." },
  { year: "2020", text: "Launched our USA Company Formation service with integrated banking support." },
  { year: "2022", text: "First Silicon Valley Tech Exchange cohort — immersion across San Francisco & LA." },
  { year: "2023", text: "Pakistan Tech Summit and Future Fest launched as flagship national events." },
  { year: "2025", text: "Crossed 900+ entrepreneurs supported and $300M+ in investment facilitated." },
  { year: "2026", text: "Expanded visa consultation to cover US, EU, UK and Japan destinations." },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About AdEra Labs"
      title="Building Pakistan's bridge to global business."
      intro="We're a Lahore-born, globally-minded team helping Pakistani entrepreneurs access the capital, connections, and credentials they need to compete on a world stage."
      wide
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <Reveal>
            <h2 className="font-display text-[1.4rem] font-bold text-ink">Our Story</h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-4 space-y-4 text-[0.98rem] leading-relaxed text-inkSoft">
              <p>
                AdEra Labs was founded in 2018 on a simple observation: Pakistan produces exceptional
                entrepreneurial talent, but the infrastructure connecting that talent to global capital,
                markets, and mentorship simply didn&rsquo;t exist yet.
              </p>
              <p>
                What began as a small advisory practice helping founders incorporate their first US
                company has grown into Pakistan&rsquo;s leading platform for global business access —
                spanning immersive Silicon Valley exchange programs, streamlined company formation,
                visa consultation, and some of the country&rsquo;s largest tech gatherings.
              </p>
              <p>
                Today, our team works across two continents to make sure every founder we support has
                what they need to compete internationally: the right legal structure, the right
                relationships, and the right documentation to move freely between markets.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <Art icon={IconBridge} tone="rose" pattern="waves" className="h-72 w-full rounded-lg2 shadow-card lg:h-full" />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-4">
        {[
          { value: 900, suffix: "+", label: "Entrepreneurs Supported" },
          { value: 15, suffix: "+", label: "Countries Reached" },
          { value: 10, suffix: "+", label: "Years of Experience" },
          { value: 500, suffix: "+", label: "Visa Approvals" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4}>
            <div className="rounded-lg2 border border-rule bg-white p-6 text-center shadow-card">
              <div className="font-display text-[1.9rem] font-bold text-brand-600">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[0.85rem] text-muted">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <h2 className="text-center font-display text-[1.5rem] font-bold text-ink">What Drives Us</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4}>
              <div className="card-lift h-full rounded-lg2 border border-rule bg-white p-6 shadow-card hover:border-brand-200 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Reveal>
          <h2 className="text-center font-display text-[1.5rem] font-bold text-ink">Our Journey</h2>
        </Reveal>
        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="absolute bottom-0 left-[10px] top-0 w-px bg-rule sm:left-1/2" />
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={Math.min((i % 5) + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div
                className={`relative mb-8 flex items-start gap-5 sm:mb-10 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-10" : "sm:ml-auto sm:pl-10 sm:text-left"
                }`}
              >
                <span
                  className={`absolute top-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 ring-4 ring-brand-100 ${
                    i % 2 === 0
                      ? "left-0 sm:left-auto sm:right-[-10px]"
                      : "left-0 sm:left-[-10px] sm:right-auto"
                  }`}
                />
                <div className="pl-9 sm:pl-0">
                  <div className="font-display text-[0.95rem] font-bold text-brand-600">{m.year}</div>
                  <div className="mt-1 text-[0.9rem] leading-relaxed text-inkSoft">{m.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-20 rounded-lg2 border border-rule bg-white p-8 text-center shadow-card sm:p-12">
          <IconUsers className="mx-auto h-8 w-8 text-brand-500" />
          <h3 className="mt-4 font-display text-[1.3rem] font-bold text-ink">Want to be part of the story?</h3>
          <p className="mx-auto mt-2 max-w-md text-[0.94rem] leading-relaxed text-muted">
            Whether it&rsquo;s your first US filing or your next Silicon Valley trip, our team is ready
            to help.
          </p>
          <a
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-[0.94rem] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Get in touch
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </PageShell>
  );
}
