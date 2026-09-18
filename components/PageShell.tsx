import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundPattern from "./BackgroundPattern";
import Reveal from "./Reveal";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <BackgroundPattern />
      <Navbar />
      <main>
        <section className="border-b border-rule py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-container px-5 text-center sm:px-6 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
                <span className="h-px w-6 bg-brand-500" />
                {eyebrow}
                <span className="h-px w-6 bg-brand-500" />
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mx-auto mt-4 max-w-3xl font-display text-[2.1rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.6rem] lg:text-[3rem]">
                {title}
              </h1>
            </Reveal>
            {intro && (
              <Reveal delay={2}>
                <p className="mx-auto mt-4 max-w-2xl text-[1rem] leading-relaxed text-muted">{intro}</p>
              </Reveal>
            )}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
            <div className={wide ? "" : "mx-auto max-w-narrow"}>{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
