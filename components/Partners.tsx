import Reveal from "./Reveal";

const partners = [
  "Tango", "Spotify", "US Bank", "Chase", "Coinbase",
  "Bank of Punjab", "Zindigi", "S&P Global", "Shorooq", "MetLife",
];

export default function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-rule bg-white/60 py-14 backdrop-blur-sm">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="mx-auto max-w-md text-center font-display text-[1.3rem] font-bold leading-snug text-ink sm:text-[1.5rem]">
            We&rsquo;ve worked with the world&rsquo;s biggest brands and the most innovative
            companies.
          </h3>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-28" />
        <div className="marquee-track gap-4">
          {loop.map((p, i) => (
            <span
              key={i}
              className="mx-2 flex-shrink-0 rounded-full border border-rule bg-white px-6 py-3 font-display text-[0.95rem] font-semibold text-inkSoft/80 shadow-card"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
