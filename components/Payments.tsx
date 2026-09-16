import Reveal from "./Reveal";
import { SectionHead } from "./Services";

const methods = [
  {
    glyph: "W",
    title: "Wise Business transfer",
    body: "Send from your own Wise account, or any bank, straight to AdEra Labs' Wise USD account — no card fees, real exchange rate.",
  },
  {
    glyph: "$",
    title: "Card payment",
    body: "Visa, Mastercard, and Amex, processed in USD. Best for founders who want the receipt on a business card statement.",
  },
  {
    glyph: "↔",
    title: "Local currency transfer",
    body: "Pay from a local bank account in your home currency; Wise converts it on arrival at the mid-market rate.",
  },
];

const currencies = ["USD", "EUR", "GBP", "PKR", "INR", "AED", "CAD", "AUD", "+35 more"];

export default function Payments() {
  return (
    <section id="payments" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead tag="04 — Payments" heading="Pay the way your business already moves money." />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-3.5">
              {methods.map((m) => (
                <div
                  key={m.title}
                  className="flex gap-4 rounded-std border border-rule bg-paper p-5 transition-all duration-300 hover:translate-x-1 hover:border-green hover:shadow-md"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-std bg-parchmentDeep font-mono text-[0.78rem] font-medium text-greenDeep">
                    {m.glyph}
                  </span>
                  <div>
                    <h4 className="mb-1 font-serif text-[1rem] font-semibold">{m.title}</h4>
                    <p className="text-[0.9rem] text-muted">{m.body}</p>
                  </div>
                </div>
              ))}
              <div className="mt-1 flex flex-wrap gap-2">
                {currencies.map((c) => (
                  <span key={c} className="rounded-std border border-rule px-2.5 py-1 font-mono text-[0.7rem] text-muted">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-4 border-l-2 border-gold pl-4 text-[0.88rem] text-muted">
                Every plan includes setting up your own Wise Business account under the new LLC,
                so future client payments land the same way — not just this invoice.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-std border border-rule bg-paper p-6 shadow-sm">
              <div className="mb-4 flex justify-between border-b border-rule pb-3 font-mono text-[0.7rem] text-muted">
                <span>Sample Wise transfer details</span>
                <span>USD account</span>
              </div>
              {[
                ["Account holder", "AdEra Labs AI LLC"],
                ["Account type", "Wise Business, USD"],
                ["Routing method", "ACH / Wire"],
                ["Reference required", "Order ID"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-rule py-2.5 text-[0.92rem] last:border-none">
                  <span className="text-muted">{k}</span>
                  <span className="font-serif font-semibold">{v}</span>
                </div>
              ))}
              <p className="mt-3.5 text-[0.82rem] text-muted">
                Full account and routing numbers are issued per invoice — select a plan above to
                see live details in the payment window.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
