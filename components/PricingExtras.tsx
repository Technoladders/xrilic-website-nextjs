"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, PhoneCall, Sparkles } from "lucide-react";
import { pricing, site } from "@/lib/content";
import { Logo, cn } from "./ui";

const money = (n: number) => pricing.currency + Math.round(n).toLocaleString("en-IN");
const eyebrow = "font-mono text-secondary-text text-xs uppercase tracking-wider";

/* ---------- Add-ons ---------- */
const addonArt: Record<string, React.ReactNode> = {
  credits: (
    <div className="w-56 rounded-xl bg-white p-3 text-neutral-900 shadow-lg">
      <div className="flex justify-between font-medium text-xs">
        <span>AI Credits</span>
        <span className="tabular-nums">10,000</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-neutral-200">
        <div className="h-full w-3/5 rounded-full bg-brand" />
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-neutral-500">
        <span>Shared across your team</span>
        <span>Auto top-up on</span>
      </div>
    </div>
  ),
  calls: (
    <div className="w-56 rounded-xl bg-white p-3 text-neutral-900 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-neutral-900 text-white">
          <PhoneCall className="size-3.5" />
        </span>
        <div>
          <p className="font-semibold text-xs">AI Recruiter</p>
          <p className="text-[10px] text-neutral-500">Java Lead · Northwind Bank</p>
        </div>
        <span className="ml-auto rounded bg-emerald-100 px-1.5 py-0.5 font-medium text-[10px] text-emerald-700">Live</span>
      </div>
      <p className="mt-2 text-[10px] text-neutral-600">Screened 412 applicants this week</p>
      <p className="text-[10px] text-neutral-600">68 shortlisted for interview</p>
    </div>
  ),
  onboarding: (
    <div className="w-56 divide-y divide-neutral-200 rounded-xl bg-white px-3 text-neutral-900 shadow-lg">
      {[
        ["Tue 10:00", "Data migration review"],
        ["Thu 2:30", "Recruiter training"],
        ["Weekly", "Office hours"],
      ].map(([t, l]) => (
        <div key={t} className="flex gap-3 py-2 text-[11px]">
          <span className="w-14 font-semibold">{t}</span>
          <span className="text-neutral-600">{l}</span>
        </div>
      ))}
    </div>
  ),
};

export function AddOns() {
  const a = pricing.addons;
  return (
    <section className="px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <p className={eyebrow}>{a.eyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-balance font-semibold text-3xl md:text-4xl">{a.title}</h2>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">{a.subtitle}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {a.items.map((it, i) => (
          <div key={it.key} data-reveal={i * 120} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[translate,box-shadow] hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,#f4d99a,#fbf1dc_50%,#9db9ff)]">
              {addonArt[it.key]}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-medium text-secondary-text text-xs">{it.tag}</p>
              <h3 className="mt-2 font-semibold text-xl tracking-tight">{it.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground text-sm">{it.desc}</p>
              <div className="mt-5 flex items-end justify-between border-border border-t pt-4">
                <div>
                  <p className="font-semibold text-xl tracking-tight">{it.price}</p>
                  <p className="text-muted-foreground text-xs">{it.unit}</p>
                </div>
                <a href={site.links.demo} className="inline-flex h-9 items-center rounded-full bg-muted px-4 font-medium text-sm hover:bg-accent">
                  {it.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Savings calculator ---------- */
export function Calculator() {
  const c = pricing.calculator;
  const options = pricing.plans.filter((p) => p.yearly !== null);
  const [on, setOn] = useState(() => c.tools.map((t) => t.on));
  const [seats, setSeats] = useState(50);
  const [planId, setPlanId] = useState("engine");

  const plan = options.find((p) => p.id === planId) ?? options[0];
  const picked = c.tools.filter((_, i) => on[i]);
  const current = picked.reduce((s, t) => s + t.cost, 0) * seats * 12;
  const ours = (plan.yearly ?? 0) * seats * 12;
  const saving = current - ours;

  return (
    <section className="px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <p className={eyebrow}>{c.eyebrow}</p>
      <h2 className="mt-4 border-border border-t pt-6 text-balance font-semibold text-3xl md:text-5xl">{c.title}</h2>

      <div className="mt-10 grid gap-8 rounded-3xl bg-muted p-5 sm:p-8 lg:grid-cols-2 lg:p-12">
        <div>
          <p className="font-medium text-sm">{c.pick}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {c.tools.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-pressed={on[i]}
                title={t.name}
                onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}
                className={cn(
                  "relative flex h-16 cursor-pointer items-center justify-center rounded-xl bg-background px-2 text-center font-medium text-xs transition-all",
                  on[i] ? "text-foreground ring-2 ring-brand" : "text-muted-foreground ring-1 ring-border hover:text-foreground",
                )}
              >
                {t.short}
                {on[i] && (
                  <span className="-top-1.5 -right-1.5 absolute flex size-4 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="size-2.5" />
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-background p-4 shadow-sm ring-1 ring-border">
            <label htmlFor="seats" className="flex justify-between font-medium text-sm">
              {c.seatsLabel}
              <span className="text-brand tabular-nums">
                {seats} {c.seatsUnit}
              </span>
            </label>
            <input
              id="seats"
              type="range"
              min={5}
              max={200}
              step={5}
              value={seats}
              onChange={(e) => setSeats(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--brand)]"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-border border-t pt-3">
              <span className="font-medium text-sm">{c.compareWith}</span>
              <div className="flex flex-wrap gap-1.5">
                {options.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    aria-pressed={planId === o.id}
                    onClick={() => setPlanId(o.id)}
                    className={cn(
                      "cursor-pointer rounded-full px-2.5 py-1 font-medium text-xs ring-1 transition-colors",
                      planId === o.id ? "bg-foreground text-background ring-foreground" : "text-muted-foreground ring-border hover:text-foreground",
                    )}
                  >
                    {o.name} {money(o.yearly ?? 0)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-background p-5 shadow-sm ring-1 ring-border sm:p-6">
          <p className="text-muted-foreground text-xs">{c.replace}</p>
          {picked.length === 0 ? (
            <p className="py-8 text-muted-foreground text-sm">{c.empty}</p>
          ) : (
            <ul className="mt-2 divide-y divide-border text-sm">
              {picked.map((t) => (
                <li key={t.name} className="flex justify-between py-2.5">
                  <span>{t.name}</span>
                  <span className="tabular-nums">
                    {money(t.cost)} {c.perUser}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-2 flex justify-between border-border border-t pt-4 font-semibold">
            <span>{c.total}</span>
            <span className="tabular-nums">
              {money(current)} {c.year}
            </span>
          </div>
          <p className="mt-2 font-medium text-brand text-xs">
            Xrilic {plan.name} for {seats} users = {money(ours)} {c.year}
          </p>
          <div className="mt-5 rounded-xl bg-muted p-4">
            <div className="flex justify-between font-semibold">
              <span>{c.savings}</span>
              <span className={cn("tabular-nums", saving > 0 && "text-emerald-600")}>{saving > 0 ? money(saving) : "—"}</span>
            </div>
            <p className="mt-1 text-muted-foreground text-xs">{c.savingsLine}</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <a href={site.links.demo} className="flex h-10 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-sm">
              {c.quote}
            </a>
            <a href={site.links.demo} className="flex h-10 items-center justify-center rounded-full bg-muted font-medium text-sm hover:bg-accent">
              {c.start}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Fair billing ---------- */
export function FairBilling() {
  const f = pricing.fair;
  return (
    <section className="px-6 pb-16 sm:px-8 md:pb-24 lg:px-12">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-muted p-6 sm:p-10 md:grid-cols-2">
        <div>
          <p className={eyebrow}>{f.eyebrow}</p>
          <h2 className="mt-4 text-balance font-semibold text-3xl md:text-4xl">
            {f.title[0]}
            <br />
            {f.title[1]}
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">{f.desc}</p>
        </div>
        <div className="md:-mr-16 md:-mb-20 md:rotate-[-6deg] rounded-2xl bg-neutral-950 p-6 text-white shadow-2xl sm:p-8">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="size-4 text-white" />
            {f.cardBrand}
          </div>
          <p className="mt-16 font-mono text-[11px] text-white/50 uppercase tracking-wider">{f.cardLabel}</p>
          <p className="font-mono font-semibold text-6xl tracking-tight sm:text-7xl">{f.cardValue}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function PricingFaq() {
  const f = pricing.faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-semibold text-3xl md:text-4xl">
          {f.title} <span className="text-secondary-text">{f.muted}</span>
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">{f.subtitle}</p>
        <a href={site.links.demo} className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-medium text-primary-foreground text-sm">
          {f.cta}
          <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        {f.items.map((it, i) => (
          <div key={it.q} className="border-border border-b">
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-medium"
            >
              {it.q}
              <ChevronDown className={cn("size-4 shrink-0 transition-transform", open === i && "rotate-180")} />
            </button>
            <div className={cn("grid transition-[grid-template-rows] duration-300", open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="pb-5 text-muted-foreground text-sm">{it.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Gradient CTA ---------- */
export function GradientCta() {
  const c = pricing.cta;
  return (
    <section className="px-6 pb-16 sm:px-8 md:pb-24 lg:px-12">
      <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] text-black bg-[radial-gradient(120%_120%_at_0%_100%,#7da2ff_0%,transparent_55%),radial-gradient(120%_120%_at_100%_0%,#f4d99a_0%,transparent_55%),linear-gradient(135deg,#fbf1dc,#f7e2ad)] px-6 py-20 text-center md:py-28">
        <Logo className="relative h-10" />
        <p className="mt-6 font-mono text-xs uppercase tracking-wider">{c.eyebrow}</p>
        <h2 className="mt-4 text-balance font-semibold text-3xl md:text-5xl">
          {c.title[0]}
          <br />
          {c.title[1]}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a href={site.links.demo} className="inline-flex h-11 items-center rounded-full bg-primary px-5 font-medium text-primary-foreground text-sm">
            {c.primary}
          </a>
          <a href={site.links.demo} className="inline-flex items-center gap-2 font-medium text-sm">
            {c.secondary} <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
