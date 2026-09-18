"use client";

import Reveal from "./Reveal";
import { IconArrowRight, IconUsers, IconGlobe, IconSpark } from "./Icons";

const stats = [
  { icon: IconUsers, label: "900+ Entrepreneurs" },
  { icon: IconGlobe, label: "15+ Countries" },
  { icon: IconSpark, label: "10+ Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
      {/* decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-16 w-16 rounded-2xl border border-brand-200 bg-white/60 shadow-soft backdrop-blur-sm animate-floatSlow" />
        <div
          className="absolute right-[10%] top-[12%] h-12 w-12 rounded-full bg-brand-100 shadow-soft animate-floatSlow"
          style={{ animationDelay: "-2.4s" }}
        />
        <div
          className="absolute bottom-[8%] right-[16%] h-20 w-20 rounded-3xl border border-brand-200/70 bg-blush/70 backdrop-blur-sm animate-floatSlow"
          style={{ animationDelay: "-4.1s" }}
        />
      </div>

      <div className="mx-auto max-w-container px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-600 shadow-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Established 2018 · Pakistan
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[2.4rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[3.1rem] lg:text-[3.7rem]">
            Pakistan&rsquo;s Leading Platform
            <br className="hidden sm:block" /> for{" "}
            <span className="text-gradient">Global Business Access</span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-[1.03rem] leading-relaxed text-muted">
            Empowering Pakistani entrepreneurs with Silicon Valley connections, US company
            formation, and visa solutions &mdash; so your business can operate on a global stage.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[0.97rem] font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Apply to Silicon Valley Program
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/#programs"
              className="inline-flex items-center gap-2 rounded-full border border-rule bg-white/70 px-7 py-3.5 text-[0.97rem] font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
              Explore All Programs
            </a>
          </div>
        </Reveal>

        <Reveal delay={4}>
          <div className="mx-auto mt-11 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.88rem] font-medium text-inkSoft">
            {stats.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2">
                <s.icon className="h-4 w-4 text-brand-500" />
                {s.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
