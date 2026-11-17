# CLAUDE.md

Marketing site for **xrilic.ai**: one engine for recruitment (TalentGPT) and customer acquisition (ProspectGPT) for staffing and recruitment firms.

- Lead with AI Recruiter, LinkedIn Recruit and the Prospecting CRM. Other features are secondary.
- Do not mention the Verification, Finance or Payroll suites.
- The previous purple/Vertex-style version is backed up in `~/xrilic-ai-site-purple-backup`.

## Stack
Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, `output: "standalone"` (Docker image built by the GitHub Action on push to main). Icons: lucide-react.

## Design (follows https://handhold.io/)
- Monochrome: white page, warm grey cards (`--surface-elevated` #f1f0ed), black pill buttons, text at 55% black for secondary. Tokens are in `app/globals.css`. Do not add accent colours; colour comes only from the gradient art.
- Type: Inter for UI; light serif for h1/h2 and big numbers (Newsreader Light, a free stand-in for the reference's licensed Bureau Serif). h1/h2 styles are unlayered in `globals.css`.
- Gradient art is drawn with WebGL2 in `components/Gradient.tsx`: `RibbonCanvas` is the hero wave (a tilted ribbon mesh with the same geometry and colour field as the reference) and `GradientCanvas` fills cards and orbs (palettes: warm, green, orange, pearl). One shared offscreen GL context renders every visible gradient into 2D canvases, because browsers cap WebGL contexts. No image assets from the reference are used.
- Header and hero follow the reference exactly: header is not sticky, py-4, 40px pill items; hero is a full-height grid (headline, wave row, logo row) with the 72px light serif h1.
- Shapes: cards `rounded-[2rem]`, pills `rounded-full`, hairline dividers.
- Floating "ask" bar on every page: `components/ChatBar.tsx`.
- Logo: wordmark recoloured with the hero wave palette: blue #2C8BFF letters, warm yellow #FFAF39 dots (`public/xrilic-logo.webp`; `xrilic-logo-white.webp` is the old white version). Favicon `app/icon.png` uses the same colours.

## Conventions
- **Copy goes in `lib/content.ts` only.** Items marked `SAMPLE` are placeholders to replace before launch (prices, stats, testimonials, quote, nav "latest update", links).
- Scroll reveal: add `data-reveal` (or `data-reveal="120"` for a delay in ms). `components/ScrollReveal.tsx` handles it; content stays visible without JS or with reduced motion.
- Check mobile at 390px: no horizontal scroll.

## Pages
- `/` homepage: `components/Home.tsx` (sections) with `HomeClient.tsx` (testimonials, FAQ) and `Journey.tsx` (the three product segments in one tabbed gradient stage; tab copy is `home.journey`; `/#ai-recruiter`, `/#linkedin-recruit` and `/#prospecting-crm` open the matching tab) and `Modules.tsx` (the ClickUp-style "All modules, AI agents, and humans in Xrilic" grid; copy is the `modules` block in `lib/content.ts`; featured tiles use gradient cards).
- `/advanced-ats`, `/ai-recruiter`, `/linkedin-recruit`, `/prospecting-crm`: one template (`components/ProductPage.tsx`, route `app/[slug]/page.tsx`), copy in the `products` record. Only claim what the product does today. Layout (chosen from two mockups): timeline for the steps, a bento for the features (1st and 4th cards are gradient and use `accents`), a black plus gradient spotlight (`spotlight.sample` is the chat on the gradient card), divided benefits, FAQ in a grey card.
- `/pricing`: `PricingPlans.tsx` and `PricingExtras.tsx`.

## Commands
`npm run dev` (port 3210), `npm run build`

## Analytics
PostHog (`posthog-js`) starts on every visit from `instrumentation-client.ts` (there is no cookie banner or consent gating) and only when `NEXT_PUBLIC_POSTHOG_KEY` is set (see `.env.example`). Start logic is in `lib/analytics.ts`.

## Demo form
`components/DemoForm.tsx` (name, work email, company) posts to the `demo-request` Supabase edge function (`supabase/functions/demo-request`), which saves rows to `public.demo_requests` (`supabase/migrations/20261117190000_demo_requests.sql`). The endpoint defaults to the production project and can be overridden with `NEXT_PUBLIC_DEMO_ENDPOINT`. The function has a honeypot, an origin allow-list and a per-IP rate limit; it emails a notification only if `RESEND_API_KEY`, `DEMO_NOTIFY_TO` and `DEMO_NOTIFY_FROM` secrets are set. All "Book a demo" links go to `/#demo` (the form card on the homepage). The `supabase/` folder is excluded from the site's TypeScript check because it is Deno code.

## Advanced ATS
`/advanced-ats` is the fourth product (group "Hiring suite", palette "blue"). Besides the usual sections its product page has a `modules` list that covers every module in the app's Hiring suite (Jobs, Talent Pool, Bench Pool, My Submissions, My Invites, Interviews, Conversations, Clients, Projects, Careers Applied, Job Boards, Profile Hub, Recruiter-X and Zive-X (beta), plus AI Recruiter and LinkedIn Recruit). Module descriptions were written from the app's menu names and page titles, so confirm them against the real screens. Payroll, Finance and Verification suites stay off the site.

### Prospecting CRM hero and Telephony add-on
- `/prospecting-crm` hero uses `components/CrmSearchFlow.tsx`: a typewriter search (monospace prompt with block caret, scored company results, "Add all to list"). Data is fictional. Reduced motion shows the final state. Caret animation is `animate-caret` in `globals.css`.
- The ATS page has an optional `addon` block (content `products["advanced-ats"].addon`) rendered as a green gradient segment (`#telephony`) between the modules list and the spotlight, with `components/TelephonyVisual.tsx` (animated call panel + call logs). The Telephony module card carries an "Add-on" badge and links to it. No prices are stated; call recording needs a recording subscription with the telephony provider.

## Deployment and carried-over pages
Pushing to `main` runs `.github/workflows/docker.yml` (Docker build, then SSH deploy). `next.config.mjs` uses `output: "standalone"` for that Dockerfile. Pages carried over from the previous site: `/privacy`, `/terms`, `/data-deletion` (policy text in `lib/privacy-html.ts` and `lib/legal-html.ts`, shared layout `components/LegalPage.tsx`) and `/hrumbles` (demo scheduler, unchanged, uses Supabase and `components/ui-legacy`). Google Analytics (G-8TJNLNBP29) and the Apollo tracker are in `app/layout.tsx`. The legal text still mentions Google Analytics only, not PostHog.
