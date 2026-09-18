import Reveal from "./Reveal";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: 300, prefix: "$", suffix: "M+", label: "Investment Brought", sub: "To Pakistan's economy" },
  { value: 100, suffix: "K+", label: "Jobs Created", sub: "Through our initiatives" },
  { value: 700, suffix: "+", label: "International Guests", sub: "Hosted in Pakistan" },
  { value: 500, suffix: "+", label: "Visa Approvals", sub: "To G7/G20 destinations" },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-ink py-18 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-brand-600/25 blur-[100px]" />
        <div className="absolute bottom-0 right-[8%] h-72 w-72 rounded-full bg-brand-500/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Impact"
          title="Trusted by Pakistan's leading entrepreneurs and innovators"
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4}>
              <div className="h-full rounded-lg2 border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:bg-white/[0.07]">
                <div className="font-display text-[2.1rem] font-bold text-brand-300">
                  <Counter target={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </div>
                <div className="mt-1.5 text-[0.92rem] font-semibold text-white">{s.label}</div>
                <div className="mt-1 text-[0.8rem] text-white/45">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
