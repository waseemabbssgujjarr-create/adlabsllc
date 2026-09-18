import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";

const sections = [
  {
    title: "1. Introduction",
    body: `AdEra Labs ("AdEra Labs," "we," "us," or "our") provides Silicon Valley exchange programs, US company formation services, visa consultation, and related events and services for entrepreneurs based primarily in Pakistan. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply to a program, or otherwise interact with us.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect the following categories of information:
• Contact details — name, email address, phone number, and mailing address.
• Application & program information — passport details, employment/business information, and documents you submit as part of a company formation, visa consultation, or program application.
• Communications — messages you send us via our contact form, email, or WhatsApp.
• Technical data — IP address, browser type, device information, and usage data collected through cookies or similar technologies when you browse our website.
• Payment information — where applicable, processed by our third-party payment providers; we do not store full card numbers on our own servers.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to:
• Evaluate and process applications for our programs and services.
• Communicate with you about your application, event registration, or inquiry.
• Facilitate company formation, banking introductions, and visa consultation services.
• Improve our website, programs, and services.
• Comply with legal, regulatory, and government-relations obligations.
• Send you updates about programs and events, where you have opted in.`,
  },
  {
    title: "4. Sharing of Information",
    body: `We do not sell your personal information. We may share information with:
• Trusted service providers who help us operate (e.g., email delivery, payment processing, cloud hosting), under confidentiality obligations.
• Government agencies, consulates, or financial institutions where necessary to complete a company formation or visa application you have requested.
• Professional advisors (legal, accounting) as needed to deliver our services.
• Authorities where required by law or to protect our legal rights.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Application documents related to company formation or visa consultation may be retained for the periods required by applicable regulatory bodies.`,
  },
  {
    title: "6. Your Rights",
    body: `Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to withdraw consent to marketing communications at any time. To exercise any of these rights, contact us at hello@aderalabs.com.`,
  },
  {
    title: "7. Data Security",
    body: `We use reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "8. Cookies",
    body: `Our website may use cookies and similar technologies to remember your preferences and understand how visitors use our site. You can control cookies through your browser settings; disabling cookies may affect some site functionality.`,
  },
  {
    title: "9. Children's Privacy",
    body: `Our services are intended for individuals who are at least 18 years old or the age of majority in their jurisdiction. We do not knowingly collect personal information from children.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated effective date. Continued use of our website or services after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your information, contact us at hello@aderalabs.com or write to our regional office in Johar Town, Lahore, Pakistan.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Effective date: September 18, 2026. This policy describes how AdEra Labs collects, uses, and protects your information."
    >
      <div className="space-y-9">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={Math.min((i % 5) + 1, 5) as 1 | 2 | 3 | 4 | 5}>
            <div>
              <h2 className="font-display text-[1.05rem] font-semibold text-ink">{s.title}</h2>
              <p className="mt-2.5 whitespace-pre-line text-[0.92rem] leading-relaxed text-inkSoft">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
