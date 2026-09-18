import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `These Terms & Conditions ("Terms") govern your access to and use of the AdEra Labs website and services, including our Silicon Valley Tech Exchange program, USA Company Formation service, visa consultation, events, and related offerings (collectively, the "Services"). By accessing our website or engaging our Services, you agree to be bound by these Terms.`,
  },
  {
    title: "2. Eligibility",
    body: `Our Services are intended for individuals who are at least 18 years old and legally able to enter into binding contracts. By using our Services, you represent that you meet these requirements.`,
  },
  {
    title: "3. Our Services",
    body: `AdEra Labs provides advisory and facilitation services, including:
• Silicon Valley Tech Exchange — organized immersion programs including travel logistics, meetings, and event access.
• USA Company Formation — assistance with entity formation and connecting clients with banking partners.
• Visa Consultation — guidance on visa applications for the US, EU, UK, and Japan.
• Events — organization of and participation in industry events such as Future Fest and Pakistan Tech Summit.
• Government Relations & Event Planning services for partner organizations.
We act as a facilitator and advisor. We do not guarantee approval of any visa, company filing, or program outcome, as these are ultimately determined by the relevant government authority, bank, or third party.`,
  },
  {
    title: "4. Applications & Program Selection",
    body: `Acceptance into any AdEra Labs program is at our sole discretion and may be based on eligibility criteria we determine from time to time. Submitting an application does not guarantee acceptance. We reserve the right to modify program dates, locations, and itineraries where necessary.`,
  },
  {
    title: "5. Fees & Payments",
    body: `Fees for our programs and services will be communicated to you prior to purchase or engagement. Unless otherwise stated in writing, fees are non-refundable once a program has commenced or a filing/application has been submitted to a third party (e.g., a government agency or bank). Any refund policy specific to a program will be shared with participants at the time of enrollment.`,
  },
  {
    title: "6. Client Responsibilities",
    body: `You agree to provide accurate, complete, and truthful information and documentation. Delays, denials, or additional costs arising from inaccurate or incomplete information you provide are your responsibility. You are responsible for complying with all applicable laws, including immigration and tax obligations, in your home country and any destination country.`,
  },
  {
    title: "7. Third-Party Services",
    body: `Our Services may involve coordination with third parties, including banks, government agencies, consulates, event venues, and travel providers. We are not responsible for the acts, omissions, fees, or policies of these third parties.`,
  },
  {
    title: "8. Intellectual Property",
    body: `All content on our website — including text, graphics, logos, and design — is the property of AdEra Labs or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.`,
  },
  {
    title: "9. Limitation of Liability",
    body: `To the maximum extent permitted by law, AdEra Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Services, including but not limited to visa denials, travel disruptions, or business losses. Our total liability for any claim shall not exceed the amount you paid us for the specific service giving rise to the claim.`,
  },
  {
    title: "10. Termination",
    body: `We may suspend or terminate your access to our Services if you violate these Terms or engage in conduct that we determine, in our sole discretion, to be harmful to AdEra Labs, other participants, or third parties.`,
  },
  {
    title: "11. Governing Law",
    body: `These Terms are governed by the laws of Pakistan, without regard to conflict-of-law principles, without prejudice to any mandatory consumer-protection laws that may apply in your jurisdiction. Any disputes shall first be addressed through good-faith negotiation between the parties.`,
  },
  {
    title: "12. Changes to These Terms",
    body: `We may revise these Terms from time to time. Updated Terms will be posted on this page with a new effective date. Your continued use of our Services after changes take effect constitutes acceptance of the revised Terms.`,
  },
  {
    title: "13. Contact Us",
    body: `Questions about these Terms can be directed to hello@aderalabs.com or our regional office in Johar Town, Lahore, Pakistan.`,
  },
];

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Effective date: September 18, 2026. Please read these terms carefully before using our website or engaging our services."
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
