import Reveal from "./Reveal";

const services = [
  {
    letter: "A",
    title: "LLC formation",
    body: "Articles of Organization prepared and filed in any of the 50 states, with same-day submission once documents are approved.",
    icon: (
      <path d="M9 4h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z M12 9h5 M12 13h5 M12 17h3" />
    ),
  },
  {
    letter: "B",
    title: "EIN & IRS registration",
    body: "Federal tax ID obtained on your behalf, including the SS-4 process for founders without a US Social Security Number.",
    icon: <path d="M6 8h16v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Z M6 8l3-4h10l3 4 M14 13v6 M11 16h6" />,
  },
  {
    letter: "C",
    title: "Registered agent",
    body: "A physical US address for service of process, renewed annually, with legal mail scanned and forwarded within 24 hours.",
    icon: <path d="M14 4 4 10v14h20V10L14 4Z M11 24v-7h6v7 M4 10h20" />,
  },
  {
    letter: "D",
    title: "Operating agreement",
    body: "Drafted to your ownership structure — single-member, multi-member, or manager-managed — and ready to sign on day one.",
    icon: <path d="M8 5h9l5 5v15a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M17 5v5h5 M11 16l2 2 4-5" />,
  },
  {
    letter: "E",
    title: "Business banking & Wise setup",
    body: "We open your Wise Business account alongside the LLC, so you can hold and send USD, EUR, and 40+ currencies from week one.",
    icon: <path d="M14 4a10 10 0 1 0 0.001 0Z M14 4v20 M4 14h20 M7 8a13 13 0 0 0 0 12 M21 8a13 13 0 0 1 0 12" />,
  },
  {
    letter: "F",
    title: "Annual compliance",
    body: "State franchise filings, BOI reporting, and registered agent renewals tracked on a calendar we maintain, not you.",
    icon: <path d="M6 6h16v18H6Z M6 10h16 M10 4v4 M18 4v4 M10 15h3 M10 19h7" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead
          tag="01 — Services"
          heading="Everything a new US entity needs, in one filing."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} className={`transition-delay-${i}`}>
              <div className="group h-full rounded-std border border-rule bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <svg
                  viewBox="0 0 28 28"
                  className="mb-4 h-8 w-8 text-green transition-colors group-hover:text-greenDeep"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
                <div className="mb-1 font-mono text-[0.7rem] text-gold">{s.letter}</div>
                <h3 className="mb-2 font-serif text-[1.1rem] font-semibold">{s.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ tag, heading }: { tag: string; heading: string }) {
  return (
    <div className="mb-10 grid gap-4 lg:mb-12 lg:grid-cols-[1fr_1.3fr] lg:items-end lg:gap-10">
      <div className="font-mono text-[0.75rem] text-greenDeep">{tag}</div>
      <h2 className="font-serif text-[1.6rem] font-semibold leading-tight sm:text-[1.9rem] lg:text-[2.2rem]">
        {heading}
      </h2>
    </div>
  );
}
