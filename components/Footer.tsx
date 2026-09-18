import { IconMail, IconMapPin, IconPhone, IconLinkedin, IconInstagram, IconTwitter, IconFacebook, IconYoutube } from "./Icons";

const programs = [
  { label: "Silicon Valley Tech Exchange", href: "/#programs" },
  { label: "USA Company Formation", href: "/#programs" },
  { label: "Visa Consultation", href: "/#programs" },
];
const events = [
  { label: "Future Fest", href: "/#events" },
  { label: "Pakistan Tech Summit", href: "/#events" },
];
const services = [
  { label: "Full-Service Event Planning", href: "/#services" },
  { label: "Government Relations", href: "/#services" },
];
const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-rule bg-ink text-white/80">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" className="h-9 w-9">
                <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" className="fill-brand-500" />
                <polygon points="20,9 29,14.5 29,25.5 20,31 11,25.5 11,14.5" className="fill-ink" />
                <circle cx="20" cy="20" r="4.2" className="fill-brand-500" />
              </svg>
              <span className="font-display text-[1.05rem] font-bold text-white">
                AdEra <span className="text-brand-400">Labs</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-white/55">
              Empowering entrepreneurs through immersive tech experiences and global business
              services.
            </p>
            <div className="mt-6 flex gap-3">
              {[IconFacebook, IconTwitter, IconInstagram, IconLinkedin, IconYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500/20 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Contact">
            <li className="flex gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
              <span className="text-[0.87rem] leading-relaxed">
                Registered Office (USA)
                <br />
                254 Broadkill Rd #603, Milton, DE 19968
              </span>
            </li>
            <li className="flex gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
              <span className="text-[0.87rem] leading-relaxed">
                Regional Office (Pakistan)
                <br />
                MapCosm Studio, 5th &amp; 6th Floor, Firdousi Road, Block 8, Phase 1, Johar Town, Lahore
              </span>
            </li>
            <li className="flex gap-2.5">
              <IconMail className="h-4 w-4 flex-shrink-0 text-brand-400" />
              <a href="mailto:hello@aderalabs.com" className="text-[0.87rem] hover:text-brand-300">
                hello@aderalabs.com
              </a>
            </li>
            <li className="flex gap-2.5">
              <IconPhone className="h-4 w-4 flex-shrink-0 text-brand-400" />
              <span className="text-[0.87rem]">+92 420 230 0334 &nbsp;·&nbsp; 0304 111 9292</span>
            </li>
          </FooterCol>

          <FooterCol title="Programs">
            {programs.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[0.87rem] hover:text-brand-300">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Events &amp; Services">
            {[...events, ...services].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[0.87rem] hover:text-brand-300">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {company.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[0.87rem] hover:text-brand-300">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[0.8rem] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} AdEra Labs. All rights reserved.</p>
          <p className="flex gap-5">
            <a href="/privacy" className="hover:text-brand-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-brand-300">Terms &amp; Conditions</a>
            <a href="/contact" className="hover:text-brand-300">Contact Us</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-[0.82rem] font-semibold uppercase tracking-wide text-white/50">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}
