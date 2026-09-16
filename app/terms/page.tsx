import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service — AdEra Labs AI LLC",
  description: "The terms that govern using AdEra Labs AI LLC's formation and compliance services.",
};

const sections = [
  {
    title: "1. What we provide",
    body: "AdEra Labs AI LLC prepares and files US LLC formation paperwork, EIN registration, registered agent service, operating agreements, and related compliance filings on your behalf, as described in the plan you purchase. Add-ons such as a dedicated registered address or a dedicated WhatsApp Business number are billed as shown at checkout and are not included unless selected.",
  },
  {
    title: "2. Not legal or tax advice",
    body: "AdEra Labs AI LLC is a formation service, not a law firm, and nothing we provide is legal, tax, or immigration advice. Where your situation needs advice specific to your state or country, we'll tell you, and recommend you consult a licensed attorney or accountant there.",
  },
  {
    title: "3. Accuracy of information",
    body: "You're responsible for the accuracy of the information you give us for filing. Delays or rejections caused by inaccurate information you provided are not covered by any turnaround-time guarantee we quote.",
  },
  {
    title: "4. Fees and payment",
    body: "Plan fees are one-time filing fees for the scope described in your plan. State filing fees, registered agent renewals, and annual report fees after year one are billed separately at the rates in effect at the time, and we notify you before filing anything on your behalf. Add-on costs (dedicated address, dedicated WhatsApp number) are shown before you confirm payment.",
  },
  {
    title: "5. Refunds",
    body: "Before we've filed anything with a state, you can cancel for a full refund of our service fee. Once Articles of Organization or another filing has been submitted to a state, state filing fees are non-refundable, though our service fee may be refundable in part depending on how much work has been completed — contact us and we'll tell you exactly where your order stands.",
  },
  {
    title: "6. Registered agent service",
    body: "Where your plan includes registered agent service, we'll scan and forward legal mail to the email on file within 24 hours of receipt. You're responsible for keeping your contact details current so mail reaches you.",
  },
  {
    title: "7. Limitation of liability",
    body: "Our liability for any claim relating to our services is limited to the amount you paid us for the plan giving rise to the claim. We're not liable for indirect, incidental, or consequential damages, including lost profits or lost business opportunities.",
  },
  {
    title: "8. Termination",
    body: "You can stop using our ongoing services (registered agent, compliance calendar) at any time by naming a successor registered agent with your state and notifying us. We may decline or discontinue service for accounts used for unlawful purposes.",
  },
  {
    title: "9. Changes to these terms",
    body: "We may update these terms as our services change. We'll post the effective date below, and continued use after an update means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      intro="Effective date: January 1, 2026. Please read these terms before purchasing a formation plan or add-on from AdEra Labs AI LLC."
    >
      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-2 font-serif text-[1.1rem] font-semibold text-ink">{s.title}</h2>
            <p className="text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
        <p className="border-t border-rule pt-6 text-[0.86rem] text-muted">
          Questions about these terms? Contact us at{" "}
          <a href="mailto:hello@aderalabsllc.com" className="text-greenDeep underline">
            hello@aderalabsllc.com
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
