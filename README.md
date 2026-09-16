# AdEra Labs AI LLC — Next.js site

A mobile-first, TypeScript + Tailwind CSS Next.js (App Router) build of the AdEra Labs AI LLC
formation website, with a working mobile nav, an original SVG hero illustration and section
icons (no stock photos, so there's nothing to license), a professional footer, About/Contact/
Privacy/Terms pages, and a demo payment flow (Wise transfer + card tabs) with selectable
address and WhatsApp-number add-ons.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

This project is configured for **static export** (`output: "export"` in `next.config.js`), so
`npm run build` produces a plain `out/` folder deployable to any static host — including cPanel
shared hosting with no Node.js runtime. See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full
git-push and cPanel walkthrough. It also deploys as-is to Vercel or Netlify.

```bash
npm run build   # → out/
```

## What's a demo vs. production-ready

- **Payments**: `components/PaymentModal.tsx` shows Wise transfer details and a card form, but
  no real transfer or charge happens — it's a UI shell. For production, wire the Wise tab to the
  [Wise Business API](https://docs.wise.com/api-docs) (to generate a real account and match
  incoming transfers) and the card tab to a PCI-compliant gateway such as Stripe, from a server
  route (`app/api/...`) — never process card data on the client. Note: adding a server route
  means removing `output: "export"` and hosting on a Node runtime (see DEPLOYMENT.md Option B).
- **Add-ons**: the dedicated address (+$149/yr) and dedicated WhatsApp number (+$59) choices in
  `PaymentModal.tsx` correctly compute the running total and flow into the Wise transfer amount
  and order summary, but nothing is provisioned automatically — a live build should trigger
  actual registered-agent and WhatsApp Cloud API provisioning after payment confirms.
- **Contact form**: `app/contact/page.tsx` is a demo — it shows a success state on submit but
  doesn't send anything. Wire it to your support inbox or a form service before launch.
- **Copy and numbers**: pricing, stats, testimonials, and the Privacy/Terms boilerplate are
  reasonable starting points, not reviewed legal text — have a lawyer check Privacy/Terms before
  relying on them.
- **Fonts**: Fraunces, IBM Plex Sans, and IBM Plex Mono load via `next/font/google` **at build
  time only** — the built site needs no external font requests at runtime, but the machine
  running `npm run build` does need internet access to fonts.googleapis.com.

## Structure

```
app/
  layout.tsx      — fonts, metadata, global shell
  page.tsx        — assembles all homepage sections
  about/page.tsx        — company/mission page
  contact/page.tsx      — contact details + demo form
  privacy/page.tsx      — privacy policy
  terms/page.tsx        — terms of service
  globals.css     — Tailwind entry + reveal-on-scroll utility
components/
  PageShell.tsx     — shared header/footer wrapper for About/Contact/Privacy/Terms
  Navbar.tsx        — sticky nav with a working mobile menu (hamburger → panel)
  Hero.tsx          — headline + original SVG illustration + live-stats card
  Services.tsx      — 6 services, custom line icons
  Process.tsx       — 5-step numbered sequence
  Pricing.tsx       — 3 plans, opens PaymentModal
  PaymentModal.tsx  — Wise transfer / card demo checkout, with address + WhatsApp add-ons
  Payments.tsx      — payment methods + supported currencies
  Testimonials.tsx  — 3 founder quotes
  FAQ.tsx           — accordion
  FinalCTA.tsx      — closing banner
  Footer.tsx        — 5-column professional footer, linked to About/Contact/Privacy/Terms
  BackgroundPattern.tsx — subtle fixed blueprint-grid background
  Reveal.tsx        — scroll-reveal wrapper (IntersectionObserver)
```

