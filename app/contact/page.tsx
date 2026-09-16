"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to a formation specialist."
      intro="Questions about which state to file in, what a plan includes, or where your order stands — reach us any of these ways."
    >
      <div className="mb-10 grid gap-3.5 sm:grid-cols-2">
        <ContactCard label="Email" value="hello@aderalabsllc.com" href="mailto:hello@aderalabsllc.com" />
        <ContactCard
          label="WhatsApp"
          value="+1 (302) 555-0148"
          href="https://wa.me/13025550148"
        />
        <ContactCard label="Office hours" value="Mon–Fri, 9am–6pm EST" />
        <ContactCard label="Mailing address" value="8 The Green, Suite A, Dover, DE 19901" />
      </div>

      {!sent ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-std border border-rule bg-paper p-6"
        >
          <div className="mb-3.5">
            <label className="mb-1.5 block text-[0.82rem] text-muted">Name</label>
            <input
              required
              type="text"
              placeholder="Full name"
              className="w-full rounded-std border border-rule bg-parchment px-3 py-2.5 text-[0.94rem] text-ink outline-none focus-visible:border-green"
            />
          </div>
          <div className="mb-3.5">
            <label className="mb-1.5 block text-[0.82rem] text-muted">Email</label>
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-std border border-rule bg-parchment px-3 py-2.5 text-[0.94rem] text-ink outline-none focus-visible:border-green"
            />
          </div>
          <div className="mb-3.5">
            <label className="mb-1.5 block text-[0.82rem] text-muted">Message</label>
            <textarea
              required
              rows={4}
              placeholder="What are you trying to do?"
              className="w-full resize-none rounded-std border border-rule bg-parchment px-3 py-2.5 text-[0.94rem] text-ink outline-none focus-visible:border-green"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-std bg-green py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-greenDeep"
          >
            Send message
          </button>
          <p className="mt-4 rounded-std border border-gold px-2.5 py-1.5 text-[0.72rem] text-gold">
            Demo form — nothing is sent yet. A live build wires this to our support inbox.
          </p>
        </form>
      ) : (
        <div className="rounded-std border border-rule bg-paper p-8 text-center">
          <div className="text-4xl text-green">✓</div>
          <h3 className="mt-3 font-serif text-[1.1rem] font-semibold">Message received</h3>
          <p className="mt-2 text-[0.92rem] text-muted">
            A formation specialist will reply by email within one business day.
          </p>
        </div>
      )}
    </PageShell>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="rounded-std border border-rule bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-md">
      <div className="mb-1 font-mono text-[0.7rem] text-muted">{label}</div>
      <div className="font-serif text-[1.02rem] font-semibold">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
