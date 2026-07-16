# Kalpanaaaa Software Solutions — Website Rebuild PRD (v2.0)
**Reference benchmark:** dotstark.com | **Current site:** kalpana-software.vercel.app
**Prepared for:** Vibe-coding execution (Antigravity / Cursor / Lovable)

> **v2.0 note:** This revision adds the layer that separates a "good clone" from a site that actually reads as enterprise-grade at first glance — the technical trust signals a CTO/founder notices even if they can't name them, plus a full old-site → new-site content migration map so nothing gets lost in the rebuild.

---

## 1. Executive Summary

Your founder isn't asking for a prettier site. He's asking for a site that **feels like an enterprise player**, not a single-page template. DotStark reads as "established B2B tech company with 15+ years of case studies and global offices" because of its **information architecture**, not its color palette. The current Kalpanaaaa site has decent visual bones (dark theme, good type scale, real service descriptions) but undermines itself with:

1. **No real navigation depth** — one scrolling page instead of a proper site with distinct pages per Industry/Service/Product.
2. **Fake trust signals** — the client logo marquee uses fictional companies (Acme Corp, Stark Industries, Wayne Enterprises, Umbrella Corp, Cyberdyne Systems — these are comic-book/movie company names). This is the single most damaging thing on the site to a founder's credibility. It must be replaced with real logos, a "logos coming soon" honest placeholder, or removed entirely.
3. **Weak mobile navigation** — this is what your founder explicitly flagged. DotStark's desktop mega-menu degrades gracefully into a clean, categorized, expandable mobile menu. Your current site's mobile nav is a flat list with no hierarchy.
4. **No proof-of-work depth** — no case studies with metrics, no blog/insights, no real testimonials with names/photos, no "why us" trust section.

This PRD gives you the exact structure to close that gap, adapted to Kalpanaaaa's real business (not copy-pasted DotStark content — DotStark sells Kentico CMS migrations, you sell full-stack engineering/automation).

---

## 2. Reference Site Teardown — dotstark.com

### 2.1 Global Navigation (the part your founder cares about most)
- **Sticky header**, two-tier: a thin **urgency/utility bar** on top (countdown + CTA), then the **main nav bar** below it (logo left, mega-menu items center, primary CTA button right).
- **Desktop mega-menu**: each top-level nav item (Kentico, DXP, Microsoft, Data & AI, Insights, Our Company) opens a **full-width dropdown panel** containing:
  - 3–4 clickable sub-links, each with a **bold title + one-line description** (not just a bare link)
  - One **featured promo card** on the right (icon + headline + "Learn More" CTA) — this is what makes it feel premium, not just a link list
- **Mobile version** (this is the exact feature your founder wants): the mega-menu collapses into a **full-screen slide-out drawer**. Each top-level item becomes an **accordion row** — tap to expand and reveal the same sub-links stacked vertically, with a persistent CTA button pinned at the bottom of the drawer. Nothing is hidden or requires horizontal scrolling; every option is reachable in 1–2 taps.

### 2.2 Homepage Section Flow
1. Hero — headline + subhead + CTA + supporting stat chips, video/image right side
2. Trust logo marquee (auto-scrolling, real client/partner logos)
3. Case study cards — 3 cards, each with a client photo, a headline outcome, and **2–3 hard metrics** (e.g. "3x faster," "40% SEO lift," "0 downtime")
4. Service pillars — numbered 01–04 cards, then a **tabbed deep-dive** section (click a tab, content panel + image swaps)
5. Urgency/authority banner with a live countdown (industry-specific to them; you'd replace with something like a limited free-audit offer or "Q3 slots open")
6. "Why partner with us" — 6 icon+text trust cards
7. Video testimonials (2 thumbnails with play buttons) + rotating quote carousel with named, titled clients
8. Tech stack logo cloud (huge — signals breadth of capability)
9. Latest insights/blog — 3 cards
10. FAQ accordion (9-10 real, SEO-useful questions)
11. Final CTA banner
12. Global office locations as location cards
13. Mega-footer: logo + tagline, social icons, 3 link columns, certification badges, copyright + legal links
14. Cookie consent banner (GDPR-style, bottom-fixed)

### 2.3 What Makes It "Feel Enterprise"
- **Numbers everywhere** — every claim is backed by a stat, not an adjective.
- **Named individuals** on testimonials (title + company), not generic quotes.
- **Multiple proof layers** — logos → case studies → testimonials → tech stack → FAQ. Redundant trust-building, stacked.
- **Every CTA is specific** ("Book a Free Consultation," "Get Free Migration Assessment") — never a bare "Contact Us."

---

## 3. Current Site Audit — What to Fix

| Area | Current State | Problem | Fix |
|---|---|---|---|
| Navigation | Single page, anchor-scroll nav (Industries, Products, Technologies, Services, About Us) | No depth, nothing to click into, mobile menu likely flat | Convert to true multi-page site with mega-menu + accordion mobile drawer |
| Trust logos | Acme Corp, Stark Industries, Umbrella Corp, Wayne Enterprises, Cyberdyne, Tyrell Corp... | These are all fictional movie/comic companies — actively damages credibility | Replace with real client/partner logos, or a small honest "Trusted by teams at" with 3-4 real ones, or remove section until you have real logos |
| Case studies | None | No proof of outcomes | Add 3 real project write-ups (KUCafe, MediChain, RailTrace) framed as case studies with a metric each |
| Testimonials | None | No social proof | Get 2-3 short quotes from hackathon mentors, internship supervisor, or early clients — with name + role |
| Team | Names only, no photos/bios | Feels thin for "Executive Directors" | Add photos + 1-line bios, or downplay title formality if team is early-stage |
| Images | Generic Unsplash stock photos (hands touching screens) | Doesn't say anything about your actual work | Replace with real product screenshots (KUCafe UI, dashboards, etc.) |
| Blog/Insights | None | No SEO surface, no ongoing authority signal | Add even 3 starter posts — can be about your build process, tech choices, hackathon learnings |
| Mobile nav | Flat, unclear per founder feedback | Founder's #1 complaint | See Section 5 — full spec below |

---

## 4. Reading the Founder's Mindset

Based on what he referenced, he is optimizing for **perceived enterprise legitimacy over flash**. Signals he'll likely react to:

- **He compared you to a Kentico/Microsoft partner agency** — he wants the site to look like it belongs to a company that closes six-figure B2B contracts, not a hackathon portfolio.
- **He specifically called out mobile navigation** — assume he opened the site on his phone first (most founders check mobile first now) and got a bad first impression before even seeing desktop. Mobile-first execution isn't optional here — treat it as the primary review surface.
- **He'll likely also (even if unstated) react badly to the fake company logos** the moment he notices them — flag this proactively when you show him the rebuild, don't wait for him to catch it.
- **He wants structure/clarity over cleverness.** DotStark isn't experimental — it's a very conventional, high-trust B2B layout executed cleanly. Don't over-design; execute the fundamentals extremely well.

---

## 5. Proposed Site Architecture (Sitemap)

```
/                           Home
/services                   Services overview (hub)
  /services/web-engineering
  /services/mobile-apps
  /services/cloud-devops
  /services/qa-testing
/industries                 Industries overview (hub)
  /industries/government
  /industries/healthcare
  /industries/finance
  /industries/education
/work                       Case Studies (grid)
  /work/[project-slug]      e.g. /work/kucafe
/technologies                Tech stack deep-dive (or fold into homepage section)
/about                       About Us, team, mission
/careers                     (optional, if hiring)
/blog                        Insights
  /blog/[post-slug]
/contact                     Contact / proposal request form
```

**Why this matters for vibe coding:** generate this as a proper Next.js App Router project with real routes (`/app/services/page.tsx`, `/app/work/[slug]/page.tsx`, etc.), not a single `page.tsx` with anchor scrolling. This alone will make it *feel* multi-page and enterprise the moment your founder clicks around.

---

## 6. Navigation System — Full Spec (this is your founder's #1 ask)

### Desktop (≥1024px)
- Sticky header, white or dark-navy background, subtle shadow on scroll
- Logo left, 5 nav items center (Services, Industries, Work, Technologies, About), primary CTA button right ("Get a Proposal")
- Hover/click on **Services** and **Industries** opens a **mega-menu panel**: 2-column grid of sub-items (icon + title + one-line description) + one featured promo tile

### Mobile (<1024px) — build this first, it's the flagged issue
- Hamburger icon top-right, opens a **full-screen slide-in drawer** (not a small dropdown)
- Drawer header: logo + close (X) button
- Each top-level item is an **accordion row**: tap → chevron rotates, sub-items expand inline below it with slight indent, tap again to collapse
- Only one section open at a time (accordion behavior, not all-expand) to avoid a huge scroll wall
- Sticky **CTA button** ("Get a Proposal") pinned at the bottom of the drawer, always visible
- Large tap targets (min 48px height per row) — this is where most mobile menus fail
- Smooth slide/fade transition (200–300ms), no jank

This single component, done well, will likely be the most noticeable improvement to your founder versus the current site.

---

## 7. Homepage Section Plan (adapted to your real content)

1. **Hero** — "Architecting Digital Transformation" headline (keep — it's good), subhead, CTA, stat chips (100+ Projects, <200ms API Latency, 24/7 Support)
2. **Real trust bar** — remove fictional logos; use "Built with the technologies enterprises trust" tech-logo strip instead until real client logos exist
3. **Case study cards (3)** — KUCafe, MediChain, RailTrace — each with a 1-line outcome + 2 metrics
4. **Services (4 pillars, numbered 01–04)** — Web Engineering, Mobile Apps, Cloud DevOps, QA — link each to its own `/services/[slug]` page
5. **Industries tabbed section** — reuse your existing Government/Healthcare/Finance/Education tab content, but make each tab link out to a full `/industries/[slug]` page
6. **Why Kalpanaaaa** — 6 icon cards (No templates, Zero-defect QA process, Modern stack, Founder-led delivery, Transparent milestones, etc.)
7. **Testimonials** — even 2 real quotes from mentors/supervisors beats 0
8. **Tech stack marquee** — you already have this, keep it, expand it
9. **Insights/Blog preview** — 3 cards, even short posts
10. **FAQ accordion** — 6-8 real questions ("How do you price projects," "What's your process," "Do you work with early-stage startups," etc.)
11. **Final CTA banner**
12. **Footer** — mega-footer with real service/company link columns, team, socials, certifications (CSA, CAD)

---

## 8. Design System

- **Keep** your existing dark theme, accent color, and the "no templates, pure engineering" tone — it's a good differentiator and already on-brand
- **Typography**: maintain a clear H1→H4 scale; DotStark uses tight, confident headline sizing (48–64px desktop H1) with generous line-height on body copy
- **Spacing**: enterprise sites lean on generous whitespace between sections (96–140px vertical padding desktop, 48–64px mobile) — don't crowd sections
- **Motion**: subtle only — fade/slide-in on scroll, accordion easing, marquee auto-scroll. No gimmicky animation; DotStark's confidence comes from restraint, not spectacle
- **Imagery**: replace stock Unsplash "hand touching screen" photos with actual product screenshots wherever possible — this alone reads as far more credible

---

## 9. Tech Stack Recommendation

Given you already show Next.js/TypeScript/Tailwind on the current site, keep that stack — it's genuinely the right choice and matches what most 2026 vibe-coding tools output best:

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **CMS for blog/case studies** (optional but recommended for a founder-impressive touch): a lightweight headless CMS like Sanity or just MDX files if you want zero backend complexity
- **Forms**: a simple serverless form handler (Resend, Formspree, or a Next.js API route + email) for the contact form
- **Hosting**: Vercel (you're already there)
- **Animation**: Framer Motion for scroll-reveals and the mobile drawer transition

This stack is also exactly what local-IDE tools (Antigravity, Cursor) output best by default — static-leaning Next.js performs far better on Core Web Vitals than a heavy client-rendered SPA, which matters if this site will ever run ads or needs to rank on Google for "software development company [your city]."

---

## 10. Vibe-Coding Tool Recommendation (2026, ranked for your exact use case)

Your requirement: **free, best possible frontend quality, able to closely match a reference site's structure/polish, not just a scraper.** Here's how the current field stacks up:

### 🥇 Primary recommendation: **Google Antigravity** (free)
Why it's the best fit for *this specific task*:
- It's a full agentic IDE (VS Code-based) with a **built-in browser agent** — it can actually open dotstark.com and your current site in a real Chrome instance, click through them, take screenshots, and use that as visual grounding while it builds your new site. This is a genuine advantage over chat-only builders for "match this reference's structure."
- **Free tier includes frontier models** — Gemini 3.1 Pro/Flash plus Claude Sonnet 4.6 and Opus 4.6 are selectable inside it at no cost during the current preview.
- It generates real Next.js/TypeScript/Tailwind files on your own machine — full code ownership, no vendor lock-in, easy to push to your existing Vercel project.
- **Multi-agent Manager View** lets you parallelize: one agent builds the mega-menu/mobile drawer component, another builds the case-study cards, another writes the FAQ section — all at once.
- Caveat: free-tier rate limits have been tightened a few times since launch, so build in focused sessions rather than one marathon session, and commit to Git incrementally so you can roll back if an agent goes off track.

### 🥈 Pair it with: **Cursor** (free tier)
Use this for the fine-detail editing pass after Antigravity scaffolds the site — Cursor is faster for small, precise tweaks (spacing, copy edits, color tuning) once the structure exists. Its free tier is genuinely usable, not just a trial.

### 🥉 If you want a pure no-code chat builder instead: **v0 by Vercel**
Since you're already deploying on Vercel, v0 is worth trying for individual component generation (the mega-menu, the case-study card, the FAQ accordion) — it outputs clean, production-ready React/Tailwind and deploys straight to Vercel. Its free tier is more limited than Antigravity's but the component quality is excellent for polished UI pieces specifically.

### Why not Lovable for this task
Lovable is genuinely excellent for fast MVPs and non-technical founders, but two things work against it here: (1) its free tier is credit-capped and burns fast on iterative "make it look exactly like this reference" cycles, and (2) it leans toward React SPA output tuned for its own Supabase backend — more overhead than you need for a marketing site with a contact form. Save Lovable for if you ever need to bolt on a client portal or dashboard with auth/database later.

---

## 11. Execution Roadmap (Prompt Sequence for Antigravity)

Work in this order — structure first, polish last:

1. **Scaffold**: "Set up a Next.js 15 App Router + TypeScript + Tailwind project with routes for /, /services, /services/[slug], /industries, /industries/[slug], /work, /work/[slug], /about, /blog, /blog/[slug], /contact"
2. **Navigation first** (this is the founder's priority): "Build a sticky header with a desktop mega-menu and a mobile full-screen accordion drawer. Use dotstark.com's navigation UX as a structural reference — sub-items with title + description, one featured tile per mega-menu panel, and a bottom-pinned CTA in the mobile drawer." Let the browser agent visually verify this against dotstark.com's mobile view.
3. **Homepage sections**, one prompt per section, in the order from Section 7 above — this keeps each generation focused and reviewable.
4. **Case study template page** (`/work/[slug]`) — build once, reuse for KUCafe/MediChain/RailTrace.
5. **Service detail page template** (`/services/[slug]`) — same pattern.
6. **Contact form + API route**.
7. **Content pass** — replace all placeholder/fictional logos, add real project screenshots, write real FAQ content.
8. **Mobile QA pass** — explicitly ask the agent to browser-test every page at 375px width and fix any overflow/tap-target issues.
9. **Performance pass** — Lighthouse check, image optimization, font loading.

Commit to Git after each numbered step so you can roll back cleanly if any step goes sideways.

---

## 12. Content Migration Map — Old Site → New Structure

Nothing on the current site is wasted; almost everything has a real home in the new architecture. Work through this table top to bottom during your build so no content silently disappears.

| Old Site Content | New Location | Action |
|---|---|---|
| Hero: "Architecting Digital Transformation" + industry tabs (Gov/Health/Finance/Edu) | `/` Home hero | **Migrate as-is**, keep the headline — it's strong. Industry tabs become teaser cards linking to full `/industries/[slug]` pages instead of just expanding inline |
| Hero stat bar (100+ Projects, <200ms API, 24/7 Support, 100% Security) | `/` Home, just below hero | **Migrate as-is** — this is a good, punchy trust strip, keep it near the top |
| 4 Service cards (Web-Eng, Mobile, DevOps, QA) | `/services` hub + 4x `/services/[slug]` detail pages | **Split & expand**: card content becomes the hub summary; each card's full copy becomes the intro of its own detail page, then add scope/process/deliverables/tech-used sections per page |
| Tech stack grid (Next.js, FastAPI, Postgres, AWS/Docker, Tailwind, TypeScript, Redis, CI/CD) | New `/technologies` page + condensed marquee on homepage | **Migrate & expand** — turn each card into a short "why we use this" blurb on the dedicated page; keep a compressed logo-only version on the homepage |
| "Human-Tech Interaction" + "Responsive Command Terminals" stock-photo panels | `/about` or `/services` supporting sections | **Replace imagery, keep concept** — swap the generic Unsplash hand photos for real product screenshots (KUCafe UI, a dashboard shot, etc.); if you have none yet, cut this section rather than ship stock photography |
| "Selected Capability Inspector" (Accela Permitting Suite demo, specs, benchmark) | `/work/[slug]` — becomes its own detailed case study, or a feature on `/industries/government` | **Upgrade into a real case study page** — this is your most detailed piece of content; give it a proper URL, metrics, and a "the challenge / our approach / the result" structure instead of burying it as one homepage widget |
| Fictional trust logo marquee (Acme Corp, Stark Industries, Wayne Enterprises, etc.) | — | **Remove entirely.** Replace with your real tech-stack marquee (already on site) doing double duty, or a small honest "Growing With Real Clients" section once you have 2-3 real logos |
| Contact form + "Response SLA: Under 24 Business Hours" | `/contact` dedicated page | **Migrate as-is**, keep the SLA line — it's a good confidence signal. Also mirror a condensed version of the form at the bottom of every service/industry page |
| Footer: Services list, Executive Directors, Operations Base, security badges (TLS 1.3, AES-256) | Footer (global) + `/about` (team gets full bios here, footer keeps names only) | **Migrate & split** — full director bios + photos go on `/about`; footer keeps the compact list. Security badges stay in the footer, they're a nice, unusual trust signal worth keeping |
| `#privacy`, `#terms`, `#compliance` anchor links | `/privacy`, `/terms`, `/security` real pages | **Must fix** — these currently go nowhere (`#privacy` is a dead anchor). Dead legal links are an instant credibility red flag for anyone who clicks. Even a simple, honest one-page policy is better than a broken anchor |

---

## 13. Enterprise-Grade Add-Ons (the layer that gets you to 10/10)

These are the details that separate "looks like a template" from "looks like a company that's been doing this for a decade." Not all are required for launch — treat Tier 1 as must-have, Tier 2 as what pushes it from good to genuinely impressive.

### Tier 1 — Do these, they're high-impact and low-effort
- **Animated stat counters** — numbers (100+ Projects, <200ms latency, etc.) count up from 0 when scrolled into view. Cheap to build, disproportionately impressive.
- **Scroll progress bar** — thin accent-colored bar at the very top of the viewport that fills as the user scrolls. Subtle, but every enterprise SaaS site has one and its absence is felt subconsciously.
- **Sticky mobile CTA bar** — a slim bar pinned to the bottom of the screen on mobile only ("Get a Proposal" button), always reachable without hunting for the header.
- **Real Open Graph + favicon set** — proper social preview image, favicon, apple-touch-icon. Send the link to yourself on WhatsApp before you send it to the founder — if the preview card looks broken/blank, fix it first.
- **Custom 404 page** — on-brand, with a way back to Home/Contact. A default Vercel/Next.js 404 screen mid-review is an easy way to look unfinished.
- **"Recognition" section** — you already have real, verifiable wins (SIH Internal Hackathon 1st place, Top 25 Google Developers Club Zynex Hackathon, Top 15 GDG Hubli, ServiceNow CSA & CAD certifications). Enterprise sites without a big client roster lean hard on **credentials and recognition** instead — this is a legitimate, honest trust signal you already have and aren't currently using anywhere on the site.

### Tier 2 — Bigger lifts, bigger payoff
- **Interactive service estimator** — a short 3-4 question widget ("What are you building? / Rough timeline? / Rough budget band?") that ends in "Get a Custom Proposal" — this is the single most "wow" feature you can add for a low-code effort, and it's exactly the kind of interactive tool a full-stack team would be expected to be able to build for themselves.
- **Case study filter/tag system** on `/work` — filter by industry or service type. Turns a static grid into something that feels like a real content system.
- **Dark/light mode toggle** — you're dark-theme by default (good, matches DotStark's confident B2B tone), but a toggle signals engineering polish without much dev cost using Tailwind's dark mode utilities.
- **Resource/lead-magnet section** — a downloadable one-pager PDF ("Our Engineering Process," "Tech Stack Rationale") gated behind an email field. Doubles as a lead-gen tool and as proof you think about funnels, not just pages.
- **Live chat widget** (Crisp, Tawk.to free tier, or a simple custom AI FAQ bot) — bottom-right corner, gives an instant "someone's here" feeling that static contact forms don't.
- **Micro-interactions on hover** — service cards lift slightly, buttons have a subtle fill/underline animation, case study cards reveal the metric on hover. Framer Motion handles all of this cheaply.
- **"Our Process" timeline section** — a 4-5 step visual (Discovery → Design → Build → QA → Deploy) somewhere on `/services` or `/about`. Enterprise buyers specifically look for proof of process, not just proof of output.

---

## 14. Technical Excellence Checklist (the invisible 10/10 layer)

A founder may never consciously notice these — but they're what separates sites that *feel* premium from ones that just *look* premium in a screenshot.

**SEO / Structured Data**
- [ ] Unique `<title>` and meta description per page (not just the homepage)
- [ ] `Organization` and `LocalBusiness` JSON-LD schema in the footer/head
- [ ] `FAQPage` schema on the FAQ section (this is exactly what let DotStark's FAQ show up richly in search — visible proof it works)
- [ ] `sitemap.xml` and `robots.txt` generated
- [ ] Semantic HTML — real `<h1>`–`<h3>` hierarchy per page, not all `<div>`s styled to look like headings

**Performance**
- [ ] Lighthouse score 90+ on mobile for Performance, Accessibility, Best Practices, SEO
- [ ] `next/image` for every image (auto WebP, lazy loading, responsive sizes)
- [ ] Font loading via `next/font` (no layout shift on font load)
- [ ] No unused/oversized JS shipped to the client — audit bundle size before launch

**Accessibility**
- [ ] Every interactive element reachable and operable via keyboard alone (tab through the whole site once)
- [ ] Color contrast checked against your dark theme accent color (WCAG AA minimum)
- [ ] Alt text on every meaningful image
- [ ] Mobile drawer menu traps focus correctly and is dismissible via Escape

**Security & Trust**
- [ ] Real `/privacy` and `/terms` pages (fixes the dead `#privacy` anchor issue flagged above)
- [ ] Contact form has basic spam protection (honeypot field or simple rate limit — doesn't need to be complex)
- [ ] HTTPS enforced (Vercel handles this by default, just confirm no mixed-content warnings)
- [ ] Cookie consent banner if you add any analytics/tracking scripts

---

## 15. Founder Review Checklist (before you show him)

- [ ] Mobile hamburger menu opens full-screen with clearly labeled, tappable categories
- [ ] Zero fictional/placeholder company logos anywhere on the site
- [ ] At least 3 case studies with real metrics (KUCafe / MediChain / RailTrace / Accela-style demo, upgraded per Section 12)
- [ ] At least 2 real testimonials with names/titles
- [ ] Every top-level nav item leads to an actual page, not a dead anchor
- [ ] `/privacy`, `/terms` are real pages, not dead `#anchor` links
- [ ] Contact form actually sends/receives a test submission
- [ ] Site loads clean on an actual phone, not just Chrome DevTools mobile view
- [ ] No stock "hand touching screen" imagery left in — replaced with real product shots or removed
- [ ] Recognition/credentials section is live (hackathon wins + certifications)
- [ ] Lighthouse mobile score 90+ across the board
- [ ] Social share preview (Open Graph image) looks correct when the link is pasted in WhatsApp/LinkedIn
- [ ] Custom 404 page exists — try a broken URL on purpose before the founder does
