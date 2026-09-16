import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About — AdEra Labs AI LLC",
  description:
    "AdEra Labs AI LLC forms and maintains US companies for founders worldwide, with AI-drafted paperwork reviewed and signed off by licensed formation specialists.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Formation software, with a person behind every filing."
      intro="AdEra Labs AI LLC exists because most founders forming a US company from outside the US were choosing between a $50 DIY filing site with no support, or a $2,000 law firm retainer for something that doesn't need one."
    >
      <div className="flex flex-col gap-6 text-[0.98rem] leading-relaxed text-inkSoft">
        <p>
          We sit in between. Our filing agents and AI drafting tools prepare your Articles of
          Organization, operating agreement, and EIN paperwork in the same templates a formation
          attorney would use — then a licensed formation specialist reviews and signs off before
          anything reaches a Secretary of State. Nothing is filed by a model alone.
        </p>
        <h2 className="mt-2 font-serif text-[1.25rem] font-semibold text-ink">What we do</h2>
        <p>
          LLC formation in any US state, EIN and IRS registration for founders without a Social
          Security Number, a registered agent address, an operating agreement drafted to your
          ownership structure, a Wise Business account set up under the new entity, and the
          ongoing compliance calendar that keeps it all in good standing after year one.
        </p>
        <h2 className="mt-2 font-serif text-[1.25rem] font-semibold text-ink">Who it&rsquo;s for</h2>
        <p>
          Most of our clients never set foot in the US. They&rsquo;re founders in Lahore, Lagos,
          Manila, and São Paulo who need a US LLC to invoice clients, open a Wise or Mercury
          account, or list on a US-facing marketplace — and want it handled by people who do this
          every day, not a form they have to figure out alone.
        </p>
        <h2 className="mt-2 font-serif text-[1.25rem] font-semibold text-ink">What we&rsquo;re not</h2>
        <p>
          We&rsquo;re not a law firm, and nothing on this site is legal or tax advice. For
          anything state-specific — multi-state tax exposure, industry licensing, immigration
          questions tied to US business activity — we&rsquo;ll tell you plainly when it&rsquo;s
          time to loop in a licensed attorney or CPA in that state.
        </p>
      </div>
    </PageShell>
  );
}
