import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 rounded-std bg-ink px-6 py-12 text-parchment sm:px-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-14">
            <div>
              <h2 className="font-serif text-[1.7rem] font-semibold leading-tight sm:text-[2rem]">
                Your LLC can be filed this week.
              </h2>
              <p className="mt-3 max-w-[50ch] text-[#B9B6AA]">
                Start with intake, and a formation specialist will confirm your state and
                structure within one business day.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-block w-fit rounded-std bg-green px-7 py-3.5 text-center font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-greenDeep"
            >
              Start formation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
