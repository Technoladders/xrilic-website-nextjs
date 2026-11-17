"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, CirclePlus, Minus, Plus, ShieldCheck, Sparkles } from "lucide-react";
import { pricing, site, type PlanValue } from "@/lib/content";
import { cn } from "./ui";

const money = (n: number) => pricing.currency + n.toLocaleString("en-IN");

function Band({ text }: { text: string }) {
  // "Everything in |Plan|, plus:" -> the part between pipes is bold
  const parts = text.split("|");
  if (parts.length === 1) return <span className="font-semibold">{text}</span>;
  return (
    <span className="flex items-center gap-2">
      <CirclePlus className="size-4 shrink-0" />
      <span>
        {parts[0]}
        <b className="font-semibold">{parts[1]}</b>
        {parts[2]}
      </span>
    </span>
  );
}

function Value({ v }: { v: PlanValue }) {
  if (v === true) return <Check className="mx-auto size-4 text-emerald-600" aria-label="Included" />;
  if (v === false) return <Minus className="mx-auto size-4 text-muted-foreground/50" aria-label="Not included" />;
  return <span className="text-foreground text-sm">{v}</span>;
}

export default function PricingPlans({ full = false }: { full?: boolean }) {
  const [yearly, setYearly] = useState(true);
  const [compare, setCompare] = useState(false);
  const p = pricing;

  return (
    <div>
      {/* Guarantee pill + billing toggle */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 font-medium text-sm">
          <ShieldCheck className="size-4 text-emerald-600" />
          {p.guarantee}
        </span>
        <div className="flex flex-col items-end gap-2">
          <span className="font-medium text-secondary-text text-xs">{p.saveNote}</span>
          <div className="relative grid grid-cols-2 rounded-full bg-muted p-1">
            <span
              aria-hidden
              className={cn(
                "absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-background shadow-sm transition-transform duration-300",
                yearly && "translate-x-full",
              )}
            />
            {p.cycles.map((c, i) => (
              <button
                key={c}
                type="button"
                aria-pressed={yearly === (i === 1)}
                onClick={() => setYearly(i === 1)}
                className={cn(
                  "relative cursor-pointer rounded-full px-5 py-1.5 font-medium text-sm transition-colors",
                  yearly === (i === 1) ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plan cards */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {p.plans.map((plan) => {
          const dark = plan.popular;
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <div
              key={plan.id}
              data-reveal
              className={cn(
                "flex flex-col overflow-hidden rounded-[1.75rem] border",
                dark
                  ? "border-neutral-900 bg-neutral-950 text-white shadow-2xl shadow-black/25 xl:-my-2"
                  : "border-transparent bg-elevated",
              )}
            >
              <div className="p-5">
                <h3 className="flex items-center gap-2 font-sans font-medium text-lg tracking-tight">
                  {plan.name}
                  {plan.popular && (
                    <span className="rounded-full bg-white/15 px-2 py-0.5 font-medium text-[11px] tracking-normal">Most Popular</span>
                  )}
                </h3>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="font-semibold text-4xl tracking-tight">{price === null ? "Custom" : money(price)}</span>
                  {price !== null && yearly && plan.monthly !== null && (
                    <span className={cn("font-medium text-lg line-through", dark ? "text-white/50" : "text-muted-foreground")}>
                      {money(plan.monthly)}
                    </span>
                  )}
                </p>
                <p className={cn("mt-1 text-xs", dark ? "text-white/60" : "text-muted-foreground")}>
                  {price === null ? plan.note : `${plan.unit} · billed ${yearly ? "yearly" : "monthly"}`}
                </p>
                <a
                  href={site.links.demo}
                  data-ph-capture-attribute-plan={plan.id}
                  data-ph-capture-attribute-billing={yearly ? "yearly" : "monthly"}
                  className={cn(
                    "mt-4 flex h-10 items-center justify-center rounded-full font-medium text-sm transition-colors",
                    dark ? "bg-white text-neutral-950 hover:bg-white/90" : "bg-muted text-foreground hover:bg-accent",
                  )}
                >
                  {plan.cta}
                </a>
              </div>

              <ul className={cn("space-y-2 border-t px-5 py-4 text-sm empty:hidden", dark ? "border-white/10" : "border-border")}>
                {plan.ai.map((a) => (
                  <li key={a.text} className="flex items-start gap-2.5">
                    {a.strong ? (
                      <Sparkles className="mt-0.5 size-4 shrink-0 opacity-70" />
                    ) : (a as { plus?: boolean }).plus ? (
                      <Plus className="mt-0.5 size-4 shrink-0 opacity-70" />
                    ) : (
                      <Check className="mt-0.5 size-4 shrink-0 opacity-70" />
                    )}
                    <span className={cn(a.strong && "font-semibold")}>{a.text}</span>
                  </li>
                ))}
              </ul>

              <div className={cn("px-5 py-2.5 text-sm", dark ? "bg-white/10" : "bg-muted")}>
                <Band text={plan.band} />
              </div>

              <ul className="flex-1 space-y-2.5 px-5 py-4 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={cn("mt-0.5 size-4 shrink-0", dark ? "text-white/70" : "text-muted-foreground")} />
                    {f}
                  </li>
                ))}
                <li className={cn("pl-6 text-xs italic", dark ? "text-white/50" : "text-muted-foreground")}>{p.more}</li>
              </ul>
            </div>
          );
        })}
      </div>

      {full && (
        <>
          {/* Compare all features */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-expanded={compare}
              onClick={() => setCompare(!compare)}
              className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-muted px-5 font-medium text-sm transition-colors hover:bg-accent"
            >
              {p.compareLabel}
              <ChevronDown className={cn("size-4 transition-transform", compare && "rotate-180")} />
            </button>
          </div>
          {compare && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-border border-b">
                    <th className="w-[32%] py-3" />
                    {p.plans.map((plan) => (
                      <th key={plan.id} className="py-3 text-center font-medium text-base">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                {p.compare.map((g) => (
                  <tbody key={g.name}>
                    <tr>
                      <th colSpan={5} className="pt-8 pb-2 font-semibold text-foreground text-lg">
                        {g.name}
                      </th>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={r.label} className="border-border border-b">
                        <th scope="row" className="py-3.5 pr-4 font-normal text-muted-foreground text-sm">
                          {r.label}
                        </th>
                        {r.values.map((v, i) => (
                          <td key={i} className={cn("py-3.5 text-center", i === 2 && "bg-muted/50")}>
                            <Value v={v} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </>
      )}

      {!full && (
        <div className="mt-8 flex justify-center">
          <a href="/pricing" className="group inline-flex items-center gap-1.5 font-medium text-sm">
            {p.homeLink}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </div>
  );
}
