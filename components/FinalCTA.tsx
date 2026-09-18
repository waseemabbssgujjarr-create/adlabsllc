import Reveal from "./Reveal";
import { IconArrowRight } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="py-18 sm:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg2 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-[1.9rem] font-bold leading-tight text-white sm:text-[2.3rem]">
                Ready to take your business global?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-white/80">
                Join 900+ Pakistani entrepreneurs who&rsquo;ve expanded internationally with AdEra
                Labs&rsquo; programs, services, and visa support.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.97rem] font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Started Today
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.97rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Learn Our Story
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
