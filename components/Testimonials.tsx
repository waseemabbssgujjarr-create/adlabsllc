import Reveal from "./Reveal";
import { SectionHead } from "./Services";

const quotes = [
  {
    quote: "I paid through Wise from my local account and had my EIN before the transfer even fully cleared.",
    who: "M. Odigie — Lagos, e-commerce LLC",
  },
  {
    quote: "No US Social Security Number, no problem. They handled the SS-4 process without me needing to call the IRS once.",
    who: "S. Kowalska — Kraków, consulting LLC",
  },
  {
    quote: "The compliance calendar alone is worth it. I stopped worrying about which state deadline was next.",
    who: "R. Fernandes — São Paulo, two-member LLC",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead tag="05 — From founders" heading="What it's like on the other side of the filing." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <Reveal key={q.who}>
              <div className="border-t-2 border-gold pt-4">
                <p className="mb-4 font-serif text-[1.05rem] italic leading-snug text-ink">&ldquo;{q.quote}&rdquo;</p>
                <div className="font-mono text-[0.82rem] text-muted">{q.who}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
