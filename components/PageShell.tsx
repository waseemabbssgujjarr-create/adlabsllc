import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundPattern from "./BackgroundPattern";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundPattern />
      <Navbar />
      <main>
        <section className="border-b border-rule py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
            <div className="mb-4 font-mono text-[0.75rem] text-greenDeep">{eyebrow}</div>
            <h1 className="font-serif text-[1.9rem] font-semibold leading-tight sm:text-[2.3rem] lg:text-[2.6rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 max-w-[62ch] text-[0.98rem] leading-relaxed text-muted">{intro}</p>
            )}
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
            <div className="max-w-narrow">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
