"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin, IconCheck, IconArrowRight } from "@/components/Icons";

const programOptions = [
  "Silicon Valley Tech Exchange",
  "USA Company Formation",
  "Visa Consultation",
  "Event Partnership",
  "Government Relations",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: programOptions[0],
    message: "",
    company: "", // honeypot
  });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <PageShell
      eyebrow="Get In Touch"
      title="Let's take your business global."
      intro="Questions about a program, a visa application, or an event partnership? Reach our team any of these ways — we typically reply within one business day."
    >
      <div className="mb-10 grid gap-3.5 sm:grid-cols-2">
        <ContactCard icon={IconMail} label="Email" value="hello@aderalabs.com" href="mailto:hello@aderalabs.com" />
        <ContactCard icon={IconPhone} label="Phone (Pakistan)" value="+92 420 230 0334" href="tel:+924202300334" />
        <ContactCard icon={IconMapPin} label="Regional Office" value="Johar Town, Lahore, Pakistan" />
        <ContactCard icon={IconMapPin} label="Registered Office" value="Milton, DE, USA" />
      </div>

      {status !== "success" ? (
        <Reveal>
          <form onSubmit={onSubmit} className="rounded-lg2 border border-rule bg-white p-6 shadow-card sm:p-8">
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={update("company")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" required>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="input-field"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className="input-field"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+92 3xx xxxxxxx"
                  className="input-field"
                />
              </Field>
              <Field label="I'm interested in">
                <select value={form.program} onChange={update("program")} className="input-field">
                  {programOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us a bit about what you're trying to do..."
                  className="input-field resize-none"
                />
              </Field>
            </div>

            {status === "error" && (
              <p className="mt-4 rounded-std border border-red-200 bg-red-50 px-3.5 py-2.5 text-[0.85rem] text-red-700">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-[0.97rem] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 disabled:pointer-events-none disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message"}
              {status !== "loading" && (
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>

            <p className="mt-4 text-center text-[0.78rem] text-muted">
              Prefer email? Write to us directly at{" "}
              <a href="mailto:hello@aderalabs.com" className="font-medium text-brand-600 hover:underline">
                hello@aderalabs.com
              </a>
            </p>
          </form>
        </Reveal>
      ) : (
        <Reveal>
          <div className="rounded-lg2 border border-rule bg-white p-10 text-center shadow-card">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <IconCheck className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-display text-[1.2rem] font-semibold text-ink">Message sent</h3>
            <p className="mx-auto mt-2 max-w-sm text-[0.92rem] leading-relaxed text-muted">
              Thanks for reaching out — a member of our team will reply to {form.email || "your email"} within
              one business day.
            </p>
            <button
              onClick={() => {
                setForm({ name: "", email: "", phone: "", program: programOptions[0], message: "", company: "" });
                setStatus("idle");
              }}
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-rule px-5 py-2.5 text-[0.88rem] font-semibold text-inkSoft transition-colors hover:border-brand-300 hover:text-brand-600"
            >
              Send another message
            </button>
          </div>
        </Reveal>
      )}
    </PageShell>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.82rem] font-medium text-inkSoft">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="card-lift flex h-full items-start gap-3 rounded-lg2 border border-rule bg-white p-5 hover:border-brand-200 hover:shadow-lift">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div>
        <div className="text-[0.72rem] font-medium uppercase tracking-wide text-muted">{label}</div>
        <div className="mt-0.5 font-display text-[0.98rem] font-semibold text-ink">{value}</div>
      </div>
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
