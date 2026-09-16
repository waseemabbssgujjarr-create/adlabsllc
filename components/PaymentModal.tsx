"use client";

import { useState } from "react";

export type Plan = { name: string; price: number };

type AddressOption = "shared" | "dedicated";

const ADDRESS_OPTIONS: { id: AddressOption; label: string; price: number; body: string }[] = [
  {
    id: "shared",
    label: "Shared business address",
    price: 0,
    body: "Included with your registered agent service — shared with other AdEra Labs clients, standard for most states.",
  },
  {
    id: "dedicated",
    label: "Dedicated physical address",
    price: 149,
    body: "A unique mailing address used only by your business — better for bank KYC checks and mail privacy. Billed annually.",
  },
];

const WHATSAPP_ADDON_PRICE = 59;

export default function PaymentModal({
  plan,
  onClose,
}: {
  plan: Plan;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"wise" | "card">("wise");
  const [submitted, setSubmitted] = useState(false);
  const [address, setAddress] = useState<AddressOption>("shared");
  const [whatsapp, setWhatsapp] = useState(false);
  const [ref] = useState(() => `AL-ORD-${Math.floor(10000 + Math.random() * 89999)}`);

  const addressAddon = ADDRESS_OPTIONS.find((a) => a.id === address)!;
  const dueToday = plan.price + addressAddon.price + (whatsapp ? WHATSAPP_ADDON_PRICE : 0);

  const copy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/55 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-h-[88vh] w-full max-w-[480px] overflow-y-auto rounded-std bg-paper p-7 shadow-2xl animate-fadeUp">
        <div className="mb-1 flex items-start justify-between">
          <h3 className="font-serif text-[1.25rem] font-semibold">{plan.name} plan</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="rounded-std p-1 text-xl leading-none text-muted hover:text-ink"
          >
            ×
          </button>
        </div>
        <p className="mb-5 text-[0.88rem] text-muted">${plan.price} — one-time filing fee</p>

        {!submitted && (
          <>
            <div className="mb-5">
              <h4 className="mb-2.5 font-mono text-[0.72rem] text-muted">Registered address</h4>
              <div className="flex flex-col gap-2">
                {ADDRESS_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAddress(opt.id)}
                    className={`flex items-start justify-between gap-4 rounded-std border px-3.5 py-3 text-left transition-colors ${
                      address === opt.id ? "border-green bg-green/10" : "border-rule"
                    }`}
                  >
                    <div>
                      <div className="text-[0.9rem] font-medium text-ink">{opt.label}</div>
                      <div className="mt-0.5 text-[0.78rem] text-muted">{opt.body}</div>
                    </div>
                    <div className="flex-shrink-0 text-[0.88rem] font-medium text-ink">
                      {opt.price === 0 ? "Included" : `+$${opt.price}/yr`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h4 className="mb-2.5 font-mono text-[0.72rem] text-muted">Add-ons</h4>
              <button
                type="button"
                onClick={() => setWhatsapp((v) => !v)}
                className={`flex w-full items-start justify-between gap-4 rounded-std border px-3.5 py-3 text-left transition-colors ${
                  whatsapp ? "border-green bg-green/10" : "border-rule"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-[4px] border text-[0.65rem] text-white ${
                      whatsapp ? "border-green bg-green" : "border-rule bg-transparent"
                    }`}
                  >
                    {whatsapp ? "✓" : ""}
                  </span>
                  <div>
                    <div className="text-[0.9rem] font-medium text-ink">
                      Dedicated WhatsApp Business number
                    </div>
                    <div className="mt-0.5 text-[0.78rem] text-muted">
                      A unique number for your business, provisioned on WhatsApp&rsquo;s Cloud
                      API — separate from your personal or shared line.
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 text-[0.88rem] font-medium text-ink">
                  +${WHATSAPP_ADDON_PRICE}
                </div>
              </button>
            </div>

            <div className="mb-5 flex items-center justify-between rounded-std bg-parchment px-3.5 py-3 text-[0.92rem]">
              <span className="text-muted">Due today</span>
              <span className="font-serif text-[1.15rem] font-semibold">${dueToday}</span>
            </div>

            <div className="mb-5 flex gap-2">
              <button
                onClick={() => setTab("wise")}
                className={`flex-1 rounded-std border px-3 py-2.5 text-[0.88rem] transition-colors ${
                  tab === "wise"
                    ? "border-green bg-green/10 font-medium text-greenDeep"
                    : "border-rule text-inkSoft"
                }`}
              >
                Wise transfer
              </button>
              <button
                onClick={() => setTab("card")}
                className={`flex-1 rounded-std border px-3 py-2.5 text-[0.88rem] transition-colors ${
                  tab === "card"
                    ? "border-green bg-green/10 font-medium text-greenDeep"
                    : "border-rule text-inkSoft"
                }`}
              >
                Card
              </button>
            </div>

            {tab === "wise" ? (
              <div>
                <div className="rounded-std border border-dashed border-rule bg-parchment p-4 text-[0.88rem]">
                  <Row k="Account holder" v="AdEra Labs AI LLC" />
                  <Row k="Account number" v="8842 0193 771" onCopy={() => copy("884201937712")} />
                  <Row k="Routing (ACH)" v="026073150" />
                  <Row k="Currency" v="USD" />
                  <Row k="Amount" v={`$${dueToday}`} />
                  <Row k="Reference" v={ref} last />
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-4 w-full rounded-std bg-green py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-greenDeep"
                >
                  I&rsquo;ve sent the transfer
                </button>
                <p className="mt-4 rounded-std border border-gold px-2.5 py-1.5 text-[0.72rem] text-gold">
                  Demo checkout — this page does not move real funds. A live build connects to
                  Wise&rsquo;s Business API for account verification and payout matching.
                </p>
              </div>
            ) : (
              <div>
                <Field label="Name on card" placeholder="Full name" />
                <Field label="Card number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry" placeholder="MM / YY" />
                  <Field label="CVC" placeholder="123" />
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-1 w-full rounded-std bg-green py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-greenDeep"
                >
                  Pay now
                </button>
                <p className="mt-4 rounded-std border border-gold px-2.5 py-1.5 text-[0.72rem] text-gold">
                  Demo checkout — no card data is stored or transmitted. A live build processes
                  this through a PCI-compliant gateway, not this page.
                </p>
              </div>
            )}
          </>
        )}

        {submitted && (
          <div className="py-6 text-center">
            <div className="text-4xl text-green">✓</div>
            <h3 className="mt-3 font-serif text-[1.1rem] font-semibold">Order received</h3>
            <p className="mt-2 text-[0.92rem] text-muted">
              A formation specialist will confirm your details by email and begin intake within
              one business day.
            </p>
            <div className="mt-5 rounded-std border border-rule bg-parchment p-4 text-left text-[0.85rem]">
              <Row k="Plan" v={`${plan.name} — $${plan.price}`} />
              <Row k="Address" v={address === "shared" ? "Shared (included)" : "Dedicated (+$149/yr)"} />
              <Row k="WhatsApp add-on" v={whatsapp ? `Yes (+$${WHATSAPP_ADDON_PRICE})` : "No"} />
              <Row k="Total due today" v={`$${dueToday}`} last />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ k, v, onCopy, last }: { k: string; v: string; onCopy?: () => void; last?: boolean }) {
  return (
    <div className={`flex justify-between py-1.5 ${last ? "" : "border-b border-rule"}`}>
      <span className="text-muted">{k}</span>
      <span className="font-mono">
        {v}
        {onCopy && (
          <button onClick={onCopy} className="ml-2 rounded-std border border-rule px-1.5 py-0.5 text-[0.68rem] text-muted">
            Copy
          </button>
        )}
      </span>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="mb-3.5">
      <label className="mb-1.5 block text-[0.82rem] text-muted">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-std border border-rule bg-parchment px-3 py-2.5 text-[0.94rem] text-ink outline-none focus-visible:border-green"
      />
    </div>
  );
}
