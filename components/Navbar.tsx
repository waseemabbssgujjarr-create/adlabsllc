"use client";

import { useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#payments", label: "Payments" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 font-serif text-[1.1rem] font-semibold tracking-tight">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-std bg-ink font-mono text-[0.68rem] font-medium text-parchment">
            AL
          </span>
          AdEra Labs
          <span className="hidden text-sm font-normal text-muted sm:inline">AI LLC</span>
        </a>

        <nav className="hidden gap-8 text-[0.95rem] md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-transparent pb-0.5 text-inkSoft transition-colors hover:border-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#pricing"
          className="hidden rounded-std bg-ink px-5 py-2.5 text-sm font-medium text-parchment transition-colors hover:bg-greenDeep md:inline-block"
        >
          Start formation
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-std border border-rule md:hidden"
        >
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-[65px] z-40 origin-top border-b border-rule bg-parchment shadow-lg transition-all duration-200 md:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="rounded-std px-3 py-3 text-base text-inkSoft transition-colors hover:bg-parchmentDeep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#pricing"
            onClick={closeMenu}
            className="mt-2 rounded-std bg-ink px-5 py-3 text-center text-sm font-medium text-parchment"
          >
            Start formation
          </a>
        </nav>
      </div>
    </header>
  );
}
