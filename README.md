# AdEra Labs — Website

A Next.js 14 (App Router) + Tailwind CSS site for AdEra Labs, rebuilt with a more
polished visual design, scroll animations, and four new pages: About, Contact,
Privacy Policy and Terms & Conditions.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Wiring up the contact form to your email

The contact form on `/contact` posts to `app/api/contact/route.ts`, which sends
the message to your inbox using [Resend](https://resend.com) (a simple
transactional email API with a generous free tier).

1. Create a free account at https://resend.com
2. Create an API key (Dashboard → API Keys)
3. Copy `.env.example` to `.env.local` and paste your key:

   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_TO_EMAIL=hello@aderalabs.com
   CONTACT_FROM_EMAIL=AdEra Labs Website <onboarding@resend.dev>
   ```

4. That's it — `onboarding@resend.dev` is Resend's shared sending address, so
   mail will start flowing immediately, even before you have a domain.
5. **Once your domain is live**, verify it in Resend (Dashboard → Domains) and
   change `CONTACT_FROM_EMAIL` to something like
   `AdEra Labs Website <notifications@aderalabs.com>` for better deliverability.

If `RESEND_API_KEY` isn't set, the form will show a friendly error and point
visitors to email `hello@aderalabs.com` directly instead of failing silently.

## Domain name — currently pending

You mentioned the domain isn't decided yet, so nothing in this codebase hardcodes
one. A few things to update once you pick a domain:

- `app/layout.tsx` — uncomment and set `metadataBase: new URL("https://yourdomain.com")`
  for correct social-share previews.
- Update the `CONTACT_FROM_EMAIL` sender once the domain's DNS is verified in Resend.
- Point your domain registrar/DNS at wherever you deploy (see below).

## Deploying

The fastest path is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this project to a GitHub repo.
2. Import it in Vercel.
3. Add the three environment variables from `.env.local` in the Vercel project settings.
4. Deploy. Once you have a domain, attach it in Vercel → Domains.

## Project structure

```
app/
  page.tsx            → homepage (Hero, Programs, Events, Services, Impact, ...)
  about/page.tsx       → About Us
  contact/page.tsx      → Contact page with working form
  privacy/page.tsx      → Privacy Policy
  terms/page.tsx        → Terms & Conditions
  api/contact/route.ts   → Server route that emails form submissions
components/            → All UI building blocks (Navbar, Footer, Hero, cards, etc.)
```

## Notes on imagery

All program/event/service "photos" are currently elegant abstract gradient
panels (`components/Art.tsx`) rather than real photography, so the site ships
fully self-contained with no placeholder stock photos or copyrighted images.
Swap any `<Art .../>` usage for a real `<img>`/`next/image` once you have
photography from your programs and events — the surrounding card styling will
keep working as-is.

Similarly, the testimonial names/quotes and the "worked with" partner
wordmarks are placeholders reconstructed from your existing site — please
replace them with verified, real client testimonials and confirmed partner
names before publishing.
