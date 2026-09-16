const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/#process" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "LLC formation", href: "/#services" },
      { label: "EIN registration", href: "/#services" },
      { label: "Registered agent", href: "/#services" },
      { label: "Wise business banking", href: "/#payments" },
      { label: "Annual compliance", href: "/#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "State filing guide", href: "#" },
      { label: "EIN without an SSN", href: "#" },
      { label: "Compliance calendar", href: "#" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-parchmentDeep/40">
      <div className="mx-auto max-w-container px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-[1.05rem] font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-std bg-ink font-mono text-[0.65rem] text-parchment">
                AL
              </span>
              AdEra Labs AI LLC
            </div>
            <p className="mt-4 max-w-[32ch] text-[0.88rem] leading-relaxed text-muted">
              AI-drafted, human-reviewed US company formation for founders anywhere in the world.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-std border border-rule text-[0.72rem] text-muted transition-colors hover:border-green hover:text-greenDeep"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-mono text-[0.72rem] text-muted">{col.title}</h4>
              <ul className="flex flex-col gap-2.5 text-[0.9rem] text-inkSoft">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-greenDeep">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.78rem] text-muted">
            © {new Date().getFullYear()} AdEra Labs AI LLC. All rights reserved.
          </p>
          <p className="max-w-[68ch] text-[0.76rem] text-muted">
            AdEra Labs AI LLC is a company formation service and is not a law firm; nothing on
            this site is legal or tax advice. Wise Business account setup is subject to Wise&rsquo;s
            own approval process.
          </p>
        </div>
      </div>
    </footer>
  );
}
