"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SectionHead } from "./Services";
import PaymentModal, { Plan } from "./PaymentModal";

const plans: (Plan & { blurb: string; features: string[]; featured?: boolean })[] = [
  {
    name: "Starter",
    price: 249,
    blurb: "For a single-member LLC that just needs to exist on paper.",
    features: ["LLC formation, any state", "Registered agent, year one", "Operating agreement", "EIN filing"],
  },
  {
    name: "Growth",
    price: 549,
    blurb: "For founders opening their first US business bank account.",
    features: [
      "Everything in Starter",
      "Wise Business account setup",
      "BOI & compliance calendar",
      "Priority filing, 48-hour draft",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: 1190,
    blurb: "For multi-member LLCs or founders forming more than one entity.",
    features: [
      "Everything in Growth",
      "Multi-member operating agreement",
      "Dedicated formation specialist",
      "Annual report filing, year one included",
    ],
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState<Plan | null>(null);

  return (
    <section id="pricing" className="border-b border-rule py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <SectionHead tag="03 — Pricing" heading="One filing fee. No renewal surprises." />
        <p className="-mt-6 mb-10 max-w-[62ch] text-[0.9rem] text-muted lg:-mt-8">
          Every plan includes a shared registered address by default. A dedicated physical
          address and a dedicated WhatsApp Business number are available as add-ons at checkout.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={`flex h-full flex-col rounded-std border bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  plan.featured ? "relative border-green shadow-md" : "border-rule hover:border-green"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-std bg-green px-2.5 py-1 font-mono text-[0.68rem] text-white">
                    Most chosen
                  </span>
                )}
                <h3 className="font-serif text-[1.15rem] font-semibold">{plan.name}</h3>
                <div className="mt-3 font-serif text-[2.1rem] font-semibold">
                  ${plan.price}
                  <span className="ml-1 font-sans text-[0.9rem] font-normal text-muted">one-time</span>
                </div>
                <p className="mt-2 text-[0.9rem] text-muted">{plan.blurb}</p>
                <ul className="my-5 flex-1 text-[0.9rem] text-inkSoft">
                  {plan.features.map((f) => (
                    <li key={f} className="border-b border-rule py-1.5 last:border-none">
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelected({ name: plan.name, price: plan.price })}
                  className={`mt-auto rounded-std border px-4 py-3 text-[0.92rem] font-medium transition-all hover:-translate-y-0.5 hover:bg-green hover:text-white hover:border-green ${
                    plan.featured ? "border-ink bg-ink text-parchment" : "border-ink text-ink"
                  }`}
                >
                  Select {plan.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <PaymentModal plan={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
