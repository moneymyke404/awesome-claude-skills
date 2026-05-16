# Lovable Prompt — Rebuild & Optimize mpeconsultinggroup.com

> Paste the prompt in the next section into Lovable (lovable.dev) as a single message to generate a fully optimized rebuild of the MPE Consulting Group website. Replace every `[CUSTOMIZE: ...]` placeholder with real content before submitting — the rest of the prompt is production-ready and enforces SEO, performance, accessibility (WCAG 2.2 AA), and conversion best practices.
>
> **Assumed industry:** MEP (Mechanical/Electrical/Plumbing) engineering consulting. The prompt below is pre-tuned with MEP-specific services, project types, deliverables, codes, and lead-form fields (license-state targeting, RFP/drawing uploads, etc.). If MPE Consulting Group does **financial / management / IT / strategy** consulting instead, search-and-replace the MEP terminology in Sections 1, 4.1, 4.2, 4.3, and 4.5 before pasting.

---

## How to use this prompt

1. Open https://lovable.dev and start a new project.
2. Replace each `[CUSTOMIZE: ...]` block with your real services, bios, case studies, contact details, and brand assets.
3. Paste the entire prompt below (everything between the `BEGIN PROMPT` and `END PROMPT` markers) as the first message.
4. After the first generation, use follow-up prompts like "regenerate the hero with a stronger value proposition" or "swap the color palette to navy + warm gold" to iterate.
5. Before publishing, run Lighthouse, axe DevTools, and Google Rich Results Test against the preview URL — all four scores should be ≥95.

---

## ===== BEGIN PROMPT =====

Build a high-conversion, accessible, fast-loading marketing website for **MPE Consulting Group**, a professional services consultancy. Use **React + Vite + TypeScript + Tailwind CSS + shadcn/ui**, deploy as a static site, and follow every requirement below. Do not skip any section — if information is missing, use the sensible default I provide and add a clearly marked `TODO` comment in the code.

---

### 1. Business Context

- **Company:** MPE Consulting Group
- **Industry:** MEP (Mechanical, Electrical, Plumbing) engineering consulting for commercial, industrial, life-science, data-center, hospitality, high-rise residential, and corporate-campus projects. *[CUSTOMIZE if your firm does something different — financial consulting, management consulting, etc.]*
- **Audience:** architects, general contractors, developers, facility owners, and design-build teams selecting an MEP engineer of record. Decision-makers are principals, project executives, and PMs evaluating credentials, licensure footprint, and past performance.
- **Primary outcome the site must drive:** project inquiries (RFP/RFQ submissions) and booked introductory calls.
- **Secondary outcomes:** recruiting interest from licensed engineers/EITs, repeat-client retention, referral capture.
- **Tone:** technically credible, plainspoken, evidence-led. Lead with project types, licensure states, and software stack — not adjectives. No buzzwords ("synergy," "leverage," "best-in-class"). Short sentences. Concrete numbers wherever possible (sq ft delivered, states licensed, years in practice).

---

### 2. Brand & Visual Direction

- **Palette (default — swap if a brand guide exists):**
  - Primary: deep navy `#0B2545`
  - Accent: warm gold `#D6A14C`
  - Neutrals: `#0F172A` text on `#FFFFFF` and `#F8FAFC` backgrounds
  - Success/CTA: `#0F766E`
  - Verify every text/background pair hits **WCAG 2.2 AA** (4.5:1 body, 3:1 large text). Adjust shades if any pair fails.
- **Typography:** Inter for body (400/500/600), Fraunces or Source Serif 4 for display headings. Load via `next/font`-style self-hosting (no runtime Google Fonts request). `font-display: swap`.
- **Imagery:** abstract geometric illustrations or restrained photography of professionals in real settings. No stock-photo-handshake clichés. Use SVG for icons (lucide-react).
- **Motion:** subtle. Fade-in on scroll (IntersectionObserver, not heavy libraries). Respect `prefers-reduced-motion` — disable all non-essential animation when set.
- **Layout:** generous whitespace, 1280px max content width, 8-pt spacing scale, rounded-2xl cards, soft shadows only on interactive surfaces.

---

### 3. Information Architecture

Build these pages with React Router. Every page has a unique `<title>`, meta description, OG image, and JSON-LD.

1. `/` — Home
2. `/services` — Services overview + anchored sub-sections per service
3. `/services/[slug]` — Service detail page (one per service)
4. `/industries` — Industries served (grid + drill-downs)
5. `/case-studies` — Index of case studies (filterable by industry/service)
6. `/case-studies/[slug]` — Individual case study
7. `/about` — Firm story, principles, leadership bios
8. `/insights` — Blog/articles index (MDX-driven)
9. `/insights/[slug]` — Article detail
10. `/contact` — Form + Calendly embed + office info
11. `/careers` — Open roles + culture (optional, hide if empty)
12. `/privacy`, `/terms`, `/accessibility` — Legal & a11y statement
13. `/404` — Helpful 404 with search + top links

---

### 4. Page-by-Page Content

#### 4.1 Home (`/`)

**Hero**
- H1: "MEP engineering that gets your project permitted, built, and commissioned on schedule." *[CUSTOMIZE]*
- Subhead (1 sentence, ≤25 words): "Licensed mechanical, electrical, and plumbing design for life-science, data-center, industrial, hospitality, and high-rise projects in [N] states." *[CUSTOMIZE state count]*
- Primary CTA: "Request a proposal" → `/contact#rfp`
- Secondary CTA: "See past projects" → `/case-studies`
- Trust strip below the fold: 5–7 client/partner logos (architects, GCs, developers) in grayscale, captioned "Selected by". Use `<img alt>` with the client name, not just "logo".

**Outcomes band (replaces generic "Why us")**
Three stat cards with real numbers:
- "[CUSTOMIZE: e.g., 25+ states licensed]"
- "[CUSTOMIZE: e.g., 5M+ sq ft of MEP design delivered]"
- "[CUSTOMIZE: e.g., 20+ years average principal experience]"

**Services preview**
4 service cards (Mechanical, Electrical, Plumbing, Lighting), each with: icon, name, one-sentence outcome (not feature), link to detail page. Cards must be `<a>` elements with full-card click targets and visible focus rings.

**How we work (4-step engagement flow for engineering projects)**
1. Programming & schematic design — load calcs, system selection, narrative
2. Design development — coordinated REVIT models, equipment cut sheets
3. Construction documents — stamped drawings, specifications, energy-code compliance
4. Construction administration — submittal review, RFIs, site visits, commissioning support
Include a small timeline graphic that is decorative (`aria-hidden="true"`) — the text carries the meaning.

**Featured project**
Pull the latest case study with: project type (e.g., 120k sq ft biotech lab), challenge in 1 sentence, result in a single bold number (e.g., "30% reduction in chilled-water energy use"), "See the project" link.

**Social proof**
2 testimonials from architects, GCs, or owners with name, title, firm, and headshot. Mark quotes as `<blockquote><p>...</p><cite>...</cite></blockquote>`.

**Lead magnet (engineering-firm specific)**
Gated PDF: "[CUSTOMIZE: e.g., MEP coordination checklist for life-science tenant improvements]" or a downloadable capability statement / project sheet. Email + firm-name form, single opt-in is fine for B2B, HubSpot/Formspree endpoint as a `<form action>` (no JS-only submission — must work without JavaScript).

**Final CTA band**
Repeat the primary CTA with a one-sentence reassurance ("Send us your drawings or RFP — we'll respond in one business day").

---

#### 4.2 Services (`/services` + detail pages)

Default service slugs (MEP-engineering defaults — rename if your firm offers different services):
- `mechanical-engineering` — HVAC, hydronics, ventilation, energy modeling
- `electrical-engineering` — power distribution, gear sizing, short-circuit/arc-flash, low-voltage
- `plumbing-engineering` — domestic water, sanitary, storm, medical gas, lab waste
- `lighting-design` — photometric layouts, controls, daylighting, Title 24 / IECC compliance
- `commissioning-and-energy` — Cx, retro-commissioning, LEED/WELL/Title 24 documentation
- `sustainability-and-electrification` — decarbonization, heat-pump retrofits, PV/storage integration

Each detail page contains:
- H1 = service name as an outcome ("Electrical design that clears AHJ review on the first submittal")
- Who it's for (3 bullets, named roles — Architect, Developer, GC, Owner)
- Project types we design for (life science, data center, hospitality, high-rise, industrial, etc.)
- Software & deliverables we standardize on (REVIT MEP, AutoCAD, SKM PowerTools, IES VE, Trane TRACE 3D Plus, photometric tools — list what applies)
- Codes & standards we work in (IBC, IECC, ASHRAE 90.1/62.1, NEC, NFPA 13/14/72, UPC/IPC, Title 24, local amendments)
- Licensure footprint (list of states with active PE registrations)
- 1 featured project card
- FAQ (4–6 items) using `<details>`/`<summary>` for native a11y
- CTA block

---

#### 4.3 Case Studies / Projects (`/case-studies/[slug]` — call this section "Projects" in the nav)

Each project page uses this structure (also encode as `Article` JSON-LD with a `CreativeWork` for the project):
- Project name, location, year delivered
- Project type + size (e.g., "120,000 sq ft Class A office TI, San Diego, 2025")
- Client + project team (architect, GC, owner — anonymize only if required)
- Our scope (Mechanical / Electrical / Plumbing / Lighting / Cx — checkmark grid)
- Challenge (1 paragraph — what was technically hard: tight ceiling space, redundant power, lab exhaust, etc.)
- Approach (3–5 bullets)
- Result (one hero metric — e.g., "permitted in 6 weeks", "12% under energy code", "$1.4M equipment savings")
- Quote from the architect/GC/owner
- Gallery: 3–6 project photos with descriptive `alt` text + 1–2 sample drawing snippets if shareable
- Services used (links to service pages)
- "Discuss a similar project" CTA

---

#### 4.4 About (`/about`)

- Origin story (3 short paragraphs, not corporate boilerplate)
- Operating principles (5 bullets that sound like an actual person wrote them)
- Leadership grid: photo, name, role, 50-word bio, LinkedIn icon link with `aria-label="LinkedIn profile of [Name]"`
- Where we work (offices/remote, time zones)

---

#### 4.5 Contact (`/contact`)

- Two tabs/anchors: **#rfp** (Request a proposal) and **#book** (Book an intro call)
- RFP form fields: Project name, Project location (state — drives licensure check), Project type (select: Life science / Data center / Hospitality / High-rise residential / Office TI / Industrial / Healthcare / Other), Square footage, Target permit/CD date, Scope needed (multi-select: Mechanical / Electrical / Plumbing / Lighting / Commissioning), Your name + firm + role, Email, Phone, Brief description (textarea), Attach RFP/drawings (file upload, accept `.pdf,.dwg,.rvt,.zip`, max 25MB)
- Intro-call tab: Calendly/HubSpot embed (lazy-loaded with `loading="lazy"` iframe, only initialized on user interaction or after main thread idle)
- Form must submit via `<form action>` to a real endpoint (Formspree, Web3Forms, or HubSpot) — no JS-only handler
- Honeypot field + Cloudflare Turnstile (not reCAPTCHA, faster + more accessible)
- Office address, phone (as `tel:` link), general email (as `mailto:` link)
- Inline map: static image from a map provider, NOT an interactive iframe (saves ~500KB)

---

### 5. SEO Requirements (non-negotiable)

- Every page: unique `<title>` ≤60 chars, `<meta name="description">` ≤155 chars, canonical URL, `<meta name="robots" content="index,follow">`.
- OpenGraph + Twitter Card tags on every page with a unique `og:image` (1200×630, <100KB WebP with PNG fallback).
- JSON-LD structured data:
  - Home + About: `Organization` + `ProfessionalService` (use `@type: ["ProfessionalService","Organization"]`), with `sameAs` (LinkedIn, etc.), `address` (PostalAddress), `contactPoint`, `areaServed` (list of states with active PE licenses), `knowsAbout` (MEP disciplines + codes: ASHRAE 90.1, NEC, IECC, Title 24, NFPA, etc.).
  - Services: `Service` for each, with `serviceType`, `provider`, `areaServed`.
  - Case studies: `Article` with `headline`, `author`, `datePublished`, `image`.
  - Insights: `BlogPosting`.
  - Contact: `Organization` + `ContactPoint`.
  - Global: `BreadcrumbList`.
- `sitemap.xml` auto-generated at build time. `robots.txt` referencing the sitemap, allowing all by default.
- Semantic HTML: one `<h1>` per page, sequential heading levels, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`.
- Internal linking: every service detail links to ≥2 related case studies and ≥1 related article.
- Friendly URLs in kebab-case; no query strings for content pages.
- 301 redirects map (provide as `_redirects` for Netlify or `vercel.json` rewrites) — leave a stub mapping old URLs so I can fill in legacy paths.
- `hreflang` only if multiple locales — skip for now.
- Image SEO: descriptive filenames, meaningful `alt` text (empty `alt=""` only for decorative).

---

### 6. Performance Requirements (Lighthouse ≥95 on mobile)

- **Core Web Vitals targets:** LCP <2.0s, CLS <0.05, INP <150ms on a 4G/Moto-G4 profile.
- Static-generate every page (`vite-ssg` or equivalent). No client-side data fetching for above-the-fold content.
- **Images:** all `<img>` and background images served as AVIF with WebP fallback, responsive `srcset`+`sizes`, explicit `width`/`height` to prevent CLS, `loading="lazy"` except for the LCP image which uses `fetchpriority="high"` and `loading="eager"`.
- **Fonts:** self-hosted, subset to Latin, `font-display: swap`, preload only the hero display weight.
- **JS budget:** keep initial JS ≤90KB gzipped. Code-split per route. No `moment`, `lodash` (full), or `axios` — use native `fetch`, `date-fns/format` only.
- **CSS:** Tailwind with `content` configured tightly so unused classes are purged. No global CSS-in-JS runtime.
- **Third parties:** load Calendly, analytics, and chat widgets via `requestIdleCallback` or after first user interaction (Partytown-style). Never block the main thread.
- **Caching:** `Cache-Control: public, max-age=31536000, immutable` on hashed assets; `Cache-Control: public, max-age=0, must-revalidate` on HTML.
- **Compression:** Brotli at the edge (Netlify/Vercel/Cloudflare Pages default — confirm enabled).
- **HTTP/2 or HTTP/3** at the edge.
- Preconnect/dns-prefetch only to origins that are actually used.
- No render-blocking third-party scripts in `<head>`.

---

### 7. Accessibility Requirements (WCAG 2.2 AA)

- Color contrast verified on every text/background pair (≥4.5:1 body, ≥3:1 large text and UI components).
- Visible focus indicators on every interactive element (2px outline, not `outline: none`).
- Keyboard operable: tab order matches visual order, no keyboard traps, skip-to-main-content link as first focusable element.
- Form fields: `<label>` for every input, `aria-describedby` for help/error text, errors announced via `role="alert"`, never color-only.
- Icons that convey meaning have `aria-label`; purely decorative icons use `aria-hidden="true"`.
- Images: meaningful `alt` for content, `alt=""` for decoration. Never `alt="image"` or filename.
- Headings sequential — no skipping levels.
- Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, with one `<main>` per page.
- Lang attribute on `<html>` (`lang="en"` default).
- `prefers-reduced-motion: reduce` disables non-essential motion.
- All interactive elements ≥44×44px touch target on mobile.
- Live regions only when actually announcing changes.
- Run axe-core in dev mode and fail the build on any new violation (`@axe-core/react` in dev only).
- Publish an `/accessibility` statement page declaring conformance target, known issues, and contact for accessibility feedback.

---

### 8. Conversion Optimization Requirements

- One primary CTA repeated 3+ times per long page (above the fold, mid-page, end-of-page).
- CTAs use outcome language ("Book a discovery call"), never "Submit" or "Click here".
- Trust signals visible on every page: client logos in footer, certifications, total client outcomes counter.
- Lead form is **3 fields max** above the fold; expanded form only on `/contact`.
- Microcopy under CTAs ("30 min · no slides · no pitch deck").
- Exit-intent or scroll-90% offer for the lead magnet (single time per session, dismissible, focus-trapped).
- Phone number in header and footer as `tel:` link.
- "What happens next" expectation-setting on the contact page (3 steps: you book → 30-min call → we send a written diagnostic).
- A/B test scaffolding: wrap the hero H1, primary CTA label, and lead magnet title in a tiny config object so they can be swapped without code changes.

---

### 9. Tech Stack & Implementation Notes

- React 18 + Vite + TypeScript (strict mode on)
- Tailwind CSS + shadcn/ui components
- React Router v6 for client routing
- Static generation via `vite-ssg` (or build to static HTML files per route — every page must be crawlable without JS)
- MDX for `/insights` content; frontmatter for title, description, date, ogImage, tags
- `react-helmet-async` (or built-in `<head>` management) for per-page meta
- ESLint + Prettier configured; `pnpm` for installs
- Analytics: Plausible or Fathom (cookieless), loaded with `defer`
- Forms: HubSpot/Formspree/Web3Forms — endpoint as env var `VITE_FORM_ENDPOINT`
- Deploy target: Cloudflare Pages or Netlify (provide config file for whichever you pick)
- Generate `sitemap.xml`, `robots.txt`, and a `_headers` file with strict CSP, HSTS, Referrer-Policy, Permissions-Policy, X-Content-Type-Options.

---

### 10. Deliverables Checklist

Before declaring done, confirm:

- [ ] Lighthouse mobile scores: Performance ≥95, Accessibility ≥100, Best Practices ≥100, SEO ≥100
- [ ] axe DevTools: zero violations on every route
- [ ] Google Rich Results Test passes for Organization, Service, Article, BreadcrumbList
- [ ] All pages render meaningful content with JavaScript disabled
- [ ] All forms work without JavaScript
- [ ] CLS = 0 on every route (Chrome DevTools Performance panel)
- [ ] Total page weight <500KB on the home page (HTML + CSS + JS + above-the-fold images)
- [ ] No console errors or warnings
- [ ] Responsive at 320px, 375px, 768px, 1024px, 1440px
- [ ] Color contrast verified with a contrast checker for every text/background pair
- [ ] 404 page returns HTTP 404, not 200
- [ ] `sitemap.xml` and `robots.txt` reachable and valid
- [ ] Open Graph image renders correctly in the Facebook Sharing Debugger and Twitter Card Validator

Build the site now. After generating, list every `[CUSTOMIZE: ...]` placeholder you left in the code so I know exactly what to fill in.

## ===== END PROMPT =====

---

## Follow-up prompts (paste after the first generation)

Use these to iterate after Lovable produces the initial build:

- **Tighten the hero:** "Rewrite the home hero H1 and subhead. Goal: a CFO at a $200M manufacturer reads it in 3 seconds and books a call. Lead with the dollar outcome, not the methodology."
- **Add a real case study:** "Replace case study #1 with this: [paste real client story]. Keep the same Article JSON-LD structure."
- **Swap palette:** "Change accent color from gold `#D6A14C` to forest `#1F6B4A`. Re-verify all contrast ratios."
- **Audit pass:** "Run a self-audit against sections 5, 6, and 7 of the original prompt and report any gaps with file paths and line numbers."
- **Add a service:** "Add a new service page at `/services/data-and-analytics` following the same template as the existing service pages."
- **Localize:** "Add an `/es` locale with translated home, services, and contact pages. Wire `hreflang` tags."

---

## What still needs your input before pasting

Search the prompt for `[CUSTOMIZE: ...]` and fill in:

1. **Confirm the industry assumption (MEP engineering)** — Section 1. If your firm does something different, also revise Sections 4.1 hero/lead-magnet, 4.2 service slugs, 4.3 project schema, and 4.5 RFP form fields.
2. The three outcome stats — licensure-state count, sq-ft delivered, years of principal experience (Section 4.1).
3. Confirmed service list + slugs — drop services you don't offer, add any missing (Section 4.2).
4. Real project list for `/case-studies` index plus 3–5 featured project write-ups (Section 4.3).
5. Lead magnet — capability statement PDF, MEP coordination checklist, or similar download (Section 4.1).
6. Principal/leadership bios + headshots + state PE numbers if you display them (Section 4.4).
7. Office address, phone, general email, Calendly link, RFP intake email (Section 4.5).
8. List of states with active PE licenses (used in JSON-LD `areaServed` and in the services section).
9. Brand palette if you have an existing brand guide — otherwise the navy + warm-gold default in Section 2 is fine.
10. Client/partner logos for the hero trust strip and footer (Section 4.1).

Once filled in, the prompt is self-contained and Lovable should produce a publish-ready site on the first generation.
