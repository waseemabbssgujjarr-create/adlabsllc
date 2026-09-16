import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — AdEra Labs AI LLC",
  description: "How AdEra Labs AI LLC collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. What we collect",
    body: "When you request a formation, we collect the information needed to prepare and file your paperwork: your legal name, contact details, country of residence, chosen business name and state, ownership structure, and, where required for EIN registration, identification details for each member. When you use our checkout, we collect the billing details needed to process payment; we do not store full card numbers ourselves.",
  },
  {
    title: "2. How we use it",
    body: "Your information is used to prepare Articles of Organization, operating agreements, EIN applications, and registered agent filings; to communicate with you about the status of your order; to meet our own recordkeeping and compliance obligations as a formation agent; and to open a Wise Business account on your behalf where that service is included in your plan.",
  },
  {
    title: "3. Who we share it with",
    body: "We share the minimum necessary information with the Secretary of State of your chosen state, the IRS for EIN registration, our registered agent partners, and Wise, when a Wise Business account is part of your order. We do not sell your information, and we do not share it with advertisers.",
  },
  {
    title: "4. How long we keep it",
    body: "We retain formation records for as long as we serve as your registered agent or compliance contact, and for a reasonable period afterward to meet recordkeeping obligations. You can request deletion of information we're not required to retain by contacting us.",
  },
  {
    title: "5. Your choices",
    body: "You can ask us what information we hold about you, correct inaccuracies, or request deletion where we're not legally required to keep it, by emailing hello@aderalabsllc.com. If you're in a jurisdiction with a statutory right of access or portability, we'll honor it on request.",
  },
  {
    title: "6. Cookies and analytics",
    body: "This site uses minimal, functional cookies and standard web analytics to understand which pages are useful. We don't use third-party ad-tracking cookies.",
  },
  {
    title: "7. Security",
    body: "We use standard technical and organizational safeguards to protect the information you share with us. No method of transmission or storage is completely secure, and we can't guarantee absolute security.",
  },
  {
    title: "8. Changes to this policy",
    body: "We'll update this page when our practices change and note the effective date below. Continued use of the site after an update means you accept the revised policy.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Effective date: January 1, 2026. This explains what we collect when you use AdEra Labs AI LLC to form and maintain a US company, and how we use it."
    >
      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-2 font-serif text-[1.1rem] font-semibold text-ink">{s.title}</h2>
            <p className="text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
        <p className="border-t border-rule pt-6 text-[0.86rem] text-muted">
          Questions about this policy? Contact us at{" "}
          <a href="mailto:hello@aderalabsllc.com" className="text-greenDeep underline">
            hello@aderalabsllc.com
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
