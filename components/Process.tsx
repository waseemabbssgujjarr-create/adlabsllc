import Reveal from "./Reveal";
import { SectionHead } from "./Services";

const steps = [
  {
    title: "Intake & structure review",
    body: "Tell us what the business does and who owns it. Our formation specialists confirm the right state and structure before anything is drafted.",
  },
  {
    title: "Documents drafted",
    body: "Articles of Organization and your operating agreement are prepared and sent for your review within one business day.",
  },
  {
    title: "State filing",
    body: "Once you approve, we file with the Secretary of State and track the submission until it's accepted.",
  },
  {
    title: "EIN & banking",
    body: "We request your EIN from the IRS and open your Wise Business account so the LLC can send and receive funds immediately.",
  },
  {
    title: "Ongoing compliance",
    body: "Your renewal dates go on our calendar, not yours — we file annual reports and flag anything that needs your signature.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead tag="02 — Process" heading="From intake to incorporated, in five steps." />
        <div className="border-t border-rule">
          {steps.map((step, i) => (
            <Reveal key={step.title}>
              <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-rule py-6 sm:grid-cols-[64px_1fr] sm:gap-7">
                <div className="font-serif text-[1.7rem] font-medium text-gold sm:text-[2rem]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.05rem] font-semibold">{step.title}</h3>
                  <p className="max-w-[60ch] text-[0.94rem] leading-relaxed text-muted">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
