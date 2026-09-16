export default function Hero() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-container gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
        <div className="animate-fadeUp">
          <div className="mb-5 flex items-center gap-2 font-mono text-[0.75rem] text-greenDeep">
            <span>§</span> Filing No. AL-2026-0917 · Delaware, Wyoming &amp; 48 more
          </div>
          <h1 className="font-serif text-[2.1rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.6rem] lg:text-[3.1rem]">
            A US LLC, filed and running — reviewed by people, handled by AI.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-inkSoft">
            AdEra Labs AI LLC forms and maintains US companies for founders anywhere.
            Our filing agents draft the paperwork; licensed formation specialists sign
            off before anything reaches a Secretary of State.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded-std bg-green px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-greenDeep hover:shadow-lg"
            >
              See pricing
            </a>
            <a
              href="#payments"
              className="rounded-std border border-ink px-6 py-3.5 text-[0.95rem] font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-parchment"
            >
              How payments work
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <HeroIllustration />
          <div className="rounded-std border border-rule bg-paper p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-dashed border-rule pb-3 font-mono text-[0.72rem] text-muted">
              <span>Formation ledger — live</span>
              <span className="flex h-10 w-10 rotate-[-8deg] items-center justify-center rounded-full border border-gold text-center font-mono text-[0.58rem] leading-tight text-gold animate-floatSlow">
                FILED
                <br />
                OK
              </span>
            </div>
            {[
              ["Average time to EIN", "6 days"],
              ["States supported", "50"],
              ["Companies formed to date", "3,412"],
              ["Founders outside the US", "71%"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-rule py-2.5 text-[0.92rem] last:border-none">
                <span className="text-muted">{label}</span>
                <span className="font-serif text-[1.05rem] font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full rounded-std border border-rule bg-paper"
      role="img"
      aria-label="Illustration of a filed formation document beside a globe representing founders worldwide"
    >
      <rect width="400" height="220" fill="#FFFFFF" />
      <circle cx="290" cy="110" r="72" fill="none" stroke="#1F6F5C" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="290" cy="110" r="72" fill="none" stroke="#1F6F5C" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 5" />
      <path d="M 290 38 A 72 72 0 0 1 290 182" fill="none" stroke="#1F6F5C" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M 220 110 A 70 40 0 0 1 360 110" fill="none" stroke="#1F6F5C" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M 222 128 A 70 34 0 0 0 358 128" fill="none" stroke="#1F6F5C" strokeWidth="1" strokeOpacity="0.3" />
      {[
        [255, 92], [318, 78], [340, 132], [268, 148], [300, 118], [232, 118],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill="#B98B3E" />
      ))}
      <g transform="translate(38, 42)">
        <rect width="132" height="150" rx="6" fill="#EFECE3" stroke="#12161C" strokeOpacity="0.15" />
        <rect x="14" y="20" width="80" height="8" rx="2" fill="#12161C" fillOpacity="0.75" />
        <rect x="14" y="38" width="104" height="4" rx="2" fill="#12161C" fillOpacity="0.2" />
        <rect x="14" y="48" width="104" height="4" rx="2" fill="#12161C" fillOpacity="0.2" />
        <rect x="14" y="58" width="70" height="4" rx="2" fill="#12161C" fillOpacity="0.2" />
        <rect x="14" y="78" width="104" height="4" rx="2" fill="#12161C" fillOpacity="0.14" />
        <rect x="14" y="88" width="104" height="4" rx="2" fill="#12161C" fillOpacity="0.14" />
        <rect x="14" y="98" width="60" height="4" rx="2" fill="#12161C" fillOpacity="0.14" />
        <circle cx="98" cy="126" r="18" fill="none" stroke="#B98B3E" strokeWidth="2" />
        <path d="M 90 126 l 5 6 l 11 -13" fill="none" stroke="#B98B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
