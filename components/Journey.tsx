"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Mail, Phone, Sparkles } from "lucide-react";
import { home } from "@/lib/content";
import { GradientCanvas, type Palette } from "./Gradient";
import { LinkedInIcon, cn } from "./ui";

/* ---------- product UI compositions (fictional data) ---------- */
const card = "rounded-2xl bg-white shadow-black/10 shadow-xl";
const chip = "rounded-full px-2 py-0.5 text-[10.5px] font-medium";

function RecruiterUI() {
  const wave = [3, 6, 10, 5, 12, 8, 14, 6, 9, 4, 11, 7, 13, 5, 8, 3, 9, 6];
  return (
    <div className="flex w-full flex-col gap-3 md:relative md:block md:h-[500px]">
      <div className={cn(card, "md:absolute md:top-4 md:left-0 md:w-[68%] p-4")}>
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-black text-white">
            <Phone className="size-3.5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-[13px]">Calling Priya Nair</p>
            <p className="truncate text-[11px] text-secondary-text">Senior Java Developer · Northwind Bank</p>
          </div>
          <span className="text-[11px] text-secondary-text tabular-nums">02:14</span>
        </div>
        <div className="mt-4 flex h-9 items-center justify-center gap-[3px]">
          {wave.map((h, i) => (
            <span key={i} className="w-1 animate-pulse rounded-full bg-black/70" style={{ height: h * 2, animationDelay: `${i * 90}ms` }} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-secondary-text">Gaps to ask about</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          <span className={cn(chip, "bg-emerald-100 text-emerald-800")}>Kafka: covered</span>
          <span className={cn(chip, "bg-amber-100 text-amber-900")}>2023 gap: asking</span>
          <span className={cn(chip, "bg-elevated text-secondary-text")}>Notice period</span>
        </div>
      </div>
      <div className={cn(card, "md:absolute md:right-0 md:bottom-2 md:w-[70%] p-4")}>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[13px]">Call summary</p>
          <span className="flex items-center gap-1.5 rounded-full bg-black px-2.5 py-1 font-medium text-[11px] text-white">
            <Sparkles className="size-3" /> Score 8.4
          </span>
        </div>
        <div className="mt-3 space-y-2 text-[12px]">
          <p className="w-fit max-w-[85%] rounded-2xl bg-elevated px-3 py-2">Your resume shows a gap in 2023. What were you working on?</p>
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl bg-black px-3 py-2 text-white">A contract role on a payments platform, mostly Spring Boot and Kafka.</p>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-black px-4 py-1.5 font-medium text-[12px] text-white">Shortlist</span>
          <span className="rounded-full bg-elevated px-4 py-1.5 text-[12px]">Skip</span>
        </div>
      </div>
    </div>
  );
}

function LinkedInUI() {
  const people = [
    ["MC", "Marcus Chen", "VP Engineering · Helix", "Open to work"],
    ["AK", "Aisha Khan", "Data Lead · Bloom Studio", "Saved"],
    ["RS", "Rahul Shah", "Staff Engineer · Northwind", "Revealed"],
  ];
  const steps = [
    ["Intro email", "Sent 2 days ago", "done"],
    ["Follow-up email", "Due today", "due"],
    ["WhatsApp nudge", "In 3 days", "next"],
  ];
  return (
    <div className="flex w-full flex-col gap-3 md:relative md:block md:h-[500px]">
      <div className={cn(card, "md:absolute md:top-4 md:left-0 md:w-[70%] p-4")}>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 font-medium text-[13px]">
            <LinkedInIcon className="size-4 text-[#0a66c2]" /> Data Platform
          </p>
          <span className={cn(chip, "bg-elevated text-secondary-text")}>38 profiles</span>
        </div>
        <ul className="mt-3 divide-y divide-border">
          {people.map(([i, n, r, b]) => (
            <li key={n} className="flex items-center gap-2.5 py-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-elevated font-semibold text-[10px]">{i}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-[12px]">{n}</p>
                <p className="truncate text-[11px] text-secondary-text">{r}</p>
              </div>
              <span className={cn(chip, b === "Open to work" ? "bg-emerald-100 text-emerald-800" : b === "Revealed" ? "bg-black text-white" : "bg-elevated text-secondary-text")}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn(card, "md:absolute md:right-0 md:bottom-2 md:w-[62%] p-4")}>
        <p className="font-medium text-[13px]">First outreach · Marcus Chen</p>
        <ol className="mt-3 space-y-2.5">
          {steps.map(([t, s, st]) => (
            <li key={t} className="flex items-center gap-2.5">
              <span className={cn("flex size-6 items-center justify-center rounded-full border", st === "done" && "border-black bg-black text-white", st === "due" && "border-black text-black", st === "next" && "border-black/20 text-black/30")}>
                {st === "done" ? <Check className="size-3" /> : st === "due" ? <Mail className="size-3" /> : <span className="size-1.5 rounded-full bg-current" />}
              </span>
              <div>
                <p className="text-[12px]">{t}</p>
                <p className={cn("text-[11px]", st === "due" ? "font-medium text-black" : "text-secondary-text")}>{s}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-black px-4 py-1.5 font-medium text-[12px] text-white">Send follow-up</span>
          <span className="rounded-full bg-elevated px-4 py-1.5 text-[12px]">Later</span>
        </div>
      </div>
      <span className="flex w-fit items-center gap-2 rounded-full bg-black px-3.5 py-2 md:absolute md:bottom-10 md:left-2 font-medium text-[12px] text-white shadow-lg">
        <span className="size-2 rounded-full bg-emerald-400" /> Reply received · Marcus Chen
      </span>
    </div>
  );
}

function AtsUI() {
  const cols = [
    ["Applied", ["Marcus Chen", "Aisha Khan"]],
    ["Screened", ["Priya Nair"]],
    ["Interview", ["Rahul Shah"]],
  ] as const;
  return (
    <div className="flex w-full flex-col gap-3 md:relative md:block md:h-[500px]">
      <div className={cn(card, "md:absolute md:top-4 md:left-0 md:w-[92%] p-3")}>
        <div className="flex items-center justify-between px-1 pb-2.5">
          <p className="font-medium text-[13px]">Java Lead · Northwind Bank</p>
          <span className={cn(chip, "bg-elevated text-secondary-text")}>12 candidates</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {cols.map(([t, names]) => (
            <div key={t} className="rounded-xl bg-elevated p-2">
              <p className="px-1 pb-2 font-medium text-[11px]">{t}</p>
              <div className="space-y-2">
                {names.map((n) => (
                  <div key={n} className="flex items-center gap-1.5 rounded-lg bg-white p-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-elevated font-semibold text-[8px]">{n.split(" ").map((x) => x[0]).join("")}</span>
                    <p className="truncate text-[11px]">{n}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(card, "md:absolute md:right-0 md:bottom-2 md:w-[58%] p-4")}>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[13px]">Priya Nair</p>
          <span className="flex items-center gap-1 rounded-full bg-black px-2.5 py-1 font-medium text-[11px] text-white">
            <Sparkles className="size-3" /> Score 8.4
          </span>
        </div>
        <p className="mt-1 text-[11px] text-secondary-text">Screened by AI Recruiter · 7 yrs Java</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-black px-4 py-1.5 font-medium text-[12px] text-white">Submit to client</span>
          <span className="rounded-full bg-elevated px-4 py-1.5 text-[12px]">Later</span>
        </div>
      </div>
    </div>
  );
}

function CrmUI() {
  const cols = [
    ["Hiring now", [["Greenleaf", "14 open roles", 92], ["Orbit Health", "9 open roles", 81]]],
    ["Contacted", [["Northwind Bank", "Intro sent", 88]]],
    ["Meeting set", [["Helix Labs", "Call Fri 3:30 PM", 95]]],
  ] as const;
  return (
    <div className="flex w-full flex-col gap-3 md:relative md:block md:h-[500px]">
      <div className={cn(card, "md:absolute md:top-4 md:left-0 md:w-[92%] p-3")}>
        <div className="grid grid-cols-3 gap-2">
          {cols.map(([t, items]) => (
            <div key={t} className="rounded-xl bg-elevated p-2">
              <p className="px-1 pb-2 font-medium text-[11px]">{t}</p>
              <div className="space-y-2">
                {items.map(([n, s, f]) => (
                  <div key={n} className="rounded-lg bg-white p-2.5">
                    <p className="truncate font-medium text-[12px]">{n}</p>
                    <p className="truncate text-[10.5px] text-secondary-text">{s}</p>
                    <div className="mt-2 h-1 rounded-full bg-black/10">
                      <div className="h-full rounded-full bg-black" style={{ width: `${f}%` }} />
                    </div>
                    <p className="mt-1 text-[10px] text-secondary-text">Fit {f}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(card, "md:absolute md:right-0 md:bottom-2 md:w-[58%] p-4")}>
        <div className="flex items-center justify-between">
          <p className="font-medium text-[13px]">Greenleaf</p>
          <span className="rounded-full bg-black px-2.5 py-1 font-medium text-[11px] text-white">Fit 92</span>
        </div>
        <p className="mt-1 text-[11px] text-secondary-text">Pune · 800 staff · 14 open roles</p>
        <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-elevated p-2.5">
          <span className="flex size-7 items-center justify-center rounded-full bg-white font-semibold text-[10px]">SJ</span>
          <div>
            <p className="font-medium text-[12px]">Sarah Johnson</p>
            <p className="text-[11px] text-secondary-text">Head of Talent</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-black px-4 py-1.5 font-medium text-[12px] text-white">Add to list</span>
          <span className="rounded-full bg-elevated px-4 py-1.5 text-[12px]">Skip</span>
        </div>
      </div>
    </div>
  );
}

const UI: Record<string, () => React.ReactElement> = { "advanced-ats": AtsUI, "ai-recruiter": RecruiterUI, "linkedin-recruit": LinkedInUI, "prospecting-crm": CrmUI };


/** Three product segments in one tabbed stage. The gradient and the product window change with the tab. */
export default function Journey() {
  const j = home.journey;
  const [i, setI] = useState(0);

  // Open the right tab when the URL has #ai-recruiter, #linkedin-recruit or #prospecting-crm
  useEffect(() => {
    const sync = () => {
      const k = j.blocks.findIndex((b) => `#${b.key}` === window.location.hash);
      if (k >= 0) setI(k);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [j.blocks]);

  const s = j.blocks[i];
  const Comp = UI[s.key];
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setI((i + 1) % j.blocks.length);
    if (e.key === "ArrowLeft") setI((i - 1 + j.blocks.length) % j.blocks.length);
  };

  return (
    <section id="journey" className="mx-auto mt-24 w-full max-w-[1536px] scroll-mt-24 px-4 md:mt-36 md:px-5">
      <div data-reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl md:text-[2.6rem]">{j.title}</h2>
        <p className="mt-4 text-secondary-text text-sm leading-relaxed">{j.desc}</p>
      </div>

      <div data-reveal className="mt-8 flex justify-center">
        <div role="tablist" aria-label="Xrilic products" onKeyDown={onKey} className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-elevated p-1">
          {j.blocks.map((b, k) => (
            <button
              key={b.key}
              id={`tab-${b.key}`}
              role="tab"
              aria-selected={k === i}
              aria-controls="journey-panel"
              tabIndex={k === i ? 0 : -1}
              onClick={() => setI(k)}
              className={cn("shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm transition-colors", k === i ? "bg-white shadow-sm" : "text-secondary-text hover:text-foreground")}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      <article id="journey-panel" role="tabpanel" aria-labelledby={`tab-${s.key}`} data-reveal="100" className="relative mt-5 grid min-h-[600px] items-center gap-8 overflow-hidden rounded-[2rem] p-6 md:p-14 lg:grid-cols-2">
        <GradientCanvas palette={s.palette as Palette} seed={i * 4 + 1} />
        <div key={`t-${s.key}`} className="relative animate-fade-swap">
          <p className="w-fit rounded-full bg-white/70 px-3 py-1.5 font-medium text-xs backdrop-blur">
            {s.group} · {s.name}
          </p>
          <h3 className="mt-6 max-w-md text-balance font-serif font-light text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.25rem]">{s.title}</h3>
          <p className="mt-4 max-w-md text-black/65 text-sm leading-relaxed">{s.lead}</p>
          <ul className="mt-6 max-w-md divide-y divide-black/10 border-black/10 border-y">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-3 py-3 text-sm">
                <Check className="size-4 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <a href={s.href} className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-black px-4 font-normal text-sm text-white tracking-[-0.13px] transition-colors hover:bg-primary-hover">
            {j.learn} <ArrowRight className="size-4" />
          </a>
        </div>
        <div key={`u-${s.key}`} className="relative animate-fade-swap">
          <Comp />
        </div>
      </article>
    </section>
  );
}
