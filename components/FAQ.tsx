"use client";

import { useState } from "react";
import { SectionHead } from "./Services";

const faqs = [
  {
    q: "Can I form a US LLC if I don't live in the US?",
    a: "Yes — most of our clients file from outside the US. You don't need a Social Security Number, a US address, or to visit in person.",
  },
  {
    q: "Do I need a US bank account before I can pay?",
    a: "No. Pay by Wise transfer from any local bank account in your own currency, or by card — your Wise Business account is set up as part of the formation, not a prerequisite for it.",
  },
  {
    q: "Which state should I choose?",
    a: "Delaware and Wyoming are the most common for founders outside the US, but the right state depends on where you'll do business. This is confirmed during intake before we draft anything.",
  },
  {
    q: "What happens after year one?",
    a: "Registered agent and compliance filings renew annually at published rates — there's no bundled subscription, and you're notified before anything is filed on your behalf.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead tag="06 — Questions" heading="Before you file." />
        <div>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-rule">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left font-serif text-[1.02rem] font-semibold sm:text-[1.08rem]"
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span
                    className={`flex-shrink-0 font-mono text-lg text-greenDeep transition-transform duration-200 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open ? "220px" : "0px" }}
                >
                  <p className="max-w-[68ch] pb-5 text-[0.94rem] leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
