import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Fasieh M.",
    role: "Founder, SaaS Startup",
    quote:
      "AdEra Labs made the entire process quick and stress-free for me. The Silicon Valley exchange opened doors I didn't know existed.",
    tone: "from-brand-500 to-brand-700",
  },
  {
    name: "Habib Ullah K.",
    role: "Fintech Entrepreneur",
    quote:
      "The AdEra Labs visa desk made my visa application process incredibly straightforward and stress-free from start to finish.",
    tone: "from-[#5A1140] to-brand-600",
  },
  {
    name: "Roshaan S.",
    role: "Founder, E-commerce",
    quote:
      "The team at AdEra Labs guided us every step of the way, ensuring our company formation was smooth and successful.",
    tone: "from-gold to-brand-600",
  },
  {
    name: "Yasir S.",
    role: "Tech Founder",
    quote:
      "AdEra Labs Visa Desk handled everything efficiently and smoothly. I couldn't have asked for a better experience.",
    tone: "from-brand-400 to-brand-700",
  },
  {
    name: "Haseeb K.",
    role: "Founder, D2C Brand",
    quote:
      "Thanks to AdEra Labs, my visa process was seamless and hassle-free. Professional, responsive, and reliable throughout.",
    tone: "from-[#5A1140] to-brand-500",
  },
  {
    name: "Muhammad U.",
    role: "Operations Lead",
    quote:
      "Quick, professional, and reliable — the AdEra Labs visa desk experience genuinely exceeded our expectations.",
    tone: "from-brand-600 to-gold",
  },
  {
    name: "Mohsin Q.",
    role: "Founder, Retail Tech",
    quote:
      "Exceptional service. AdEra Labs took care of all the details, affordably and without a single missed deadline.",
    tone: "from-brand-500 to-[#5A1140]",
  },
  {
    name: "Muhammad H.",
    role: "Startup Founder",
    quote:
      "I couldn't have asked for an easier visa experience. AdEra Labs' team communicated clearly at every stage.",
    tone: "from-gold to-brand-500",
  },
  {
    name: "Asif C.",
    role: "Founder, Logistics Startup",
    quote:
      "With AdEra Labs, the visa process was fast and easy from start to finish. Highly recommended for founders.",
    tone: "from-brand-700 to-brand-400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Real Stories, Real Results"
          intro="We're proud to have helped countless professionals successfully navigate the U.S. and EU visa and business formation processes"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={Math.min((i % 5) + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <figure className="card-lift h-full rounded-lg2 border border-rule bg-white p-6 shadow-card hover:border-brand-200 hover:shadow-lift">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.tone} font-display text-[0.85rem] font-bold text-white`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <figcaption className="font-display text-[0.92rem] font-semibold text-ink">
                      {t.name}
                    </figcaption>
                    <div className="text-[0.78rem] text-muted">{t.role}</div>
                  </div>
                </div>
                <blockquote className="text-[0.9rem] leading-relaxed text-inkSoft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
