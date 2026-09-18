"use client";

import { useEffect, useState } from "react";
import { IconMenu, IconX } from "./Icons";

const links = [
  { href: "/#programs", label: "Programs" },
  { href: "/#events", label: "Events" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-rule bg-white/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center">
            <svg viewBox="0 0 40 40" className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[18deg]">
              <polygon
                points="20,2 35,11 35,29 20,38 5,29 5,11"
                className="fill-brand-600"
              />
              <polygon
                points="20,9 29,14.5 29,25.5 20,31 11,25.5 11,14.5"
                className="fill-white/90"
              />
              <circle cx="20" cy="20" r="4.2" className="fill-brand-600" />
            </svg>
          </span>
          <span className="font-display text-[1.12rem] font-bold leading-none tracking-tight text-ink">
            AdEra<span className="text-brand-600"> Labs</span>
          </span>
        </a>

        <nav className="hidden gap-8 text-[0.94rem] font-medium md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 text-inkSoft transition-colors hover:text-brand-600 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift md:inline-flex"
        >
          Apply Now
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-std border border-rule text-ink md:hidden"
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-[65px] z-40 origin-top border-b border-rule bg-white shadow-lg transition-all duration-300 md:hidden ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="rounded-std px-3 py-3 text-base text-inkSoft transition-colors hover:bg-blush hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
}
