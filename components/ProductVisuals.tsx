import { Building2, CalendarDays, Check, Mail, Phone, Sparkles } from "lucide-react";
import { Avatar, LinkedInIcon, cn } from "./ui";

const card = "rounded-2xl bg-white shadow-black/5 shadow-sm";
const bar = "h-1.5 rounded-full bg-foreground/10";

function Chip({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "green" | "brand" | "amber" }) {
  const tones = {
    muted: "bg-elevated text-secondary-text",
    green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
    brand: "bg-black text-white",
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  };
  return <span className={cn("rounded-md px-1.5 py-0.5 font-medium text-[11px]", tones[tone])}>{children}</span>;
}

/* Fictional people and companies throughout. */

function AiRecruiterVisual() {
  const wave = [3, 6, 10, 5, 12, 8, 14, 6, 9, 4, 11, 7, 13, 5, 8, 3, 9, 6, 11, 4, 7, 12, 5, 9];
  return (
    <div className="grid gap-4 @2xl:grid-cols-[1fr_1.25fr]">
      <div className={cn(card, "p-5")}>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <Phone className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-sm">Calling Priya Nair</p>
            <p className="text-muted-foreground text-xs">Senior Java Developer · Northwind Bank</p>
          </div>
          <span className="ml-auto text-muted-foreground text-xs tabular-nums">02:14</span>
        </div>
        <div className="mt-5 flex h-12 items-center justify-center gap-[3px]">
          {wave.map((h, i) => (
            <span key={i} className="w-1 origin-center animate-wave rounded-full bg-orange-400/80" style={{ height: h * 2.6, animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
        <p className="mt-4 font-medium text-muted-foreground text-xs">Gaps to ask about</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip tone="green">Kafka: covered</Chip>
          <Chip tone="amber">2023 gap: asking</Chip>
          <Chip>Notice period</Chip>
        </div>
      </div>

      <div className={cn(card, "p-5")}>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm">Call summary</p>
          <Chip tone="green">Score 8.4</Chip>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex gap-2.5">
            <Avatar initials="AI" className="size-6 border-transparent bg-brand text-[9px] text-white" />
            <p className="text-muted-foreground">Your resume shows a gap in 2023. What were you working on?</p>
          </div>
          <div className="flex gap-2.5">
            <Avatar initials="PN" className="size-6 text-[9px]" />
            <p>I took a contract role on a payments platform, mostly Spring Boot and Kafka.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 border-border border-t pt-4 text-center">
          {[
            ["Experience", "7 yrs"],
            ["Notice", "30 days"],
            ["Location", "Bengaluru"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[11px] text-muted-foreground">{k}</p>
              <p className="font-semibold text-sm">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LinkedInVisual() {
  const people = [
    { n: "Marcus Chen", r: "VP Engineering · Helix", i: "MC", tags: [["Open to work", "green"], ["Revealed", "brand"]] },
    { n: "Aisha Khan", r: "Data Lead · Bloom Studio", i: "AK", tags: [["Saved", "muted"]] },
    { n: "Rahul Shah", r: "Staff Engineer · Northwind", i: "RS", tags: [["Revealed", "brand"]] },
  ] as const;
  return (
    <div className="grid gap-4 @2xl:grid-cols-[1.25fr_1fr]">
      <div className={cn(card, "p-4")}>
        <div className="flex items-center justify-between px-1 pb-3">
          <p className="flex items-center gap-2 font-semibold text-sm">
            <LinkedInIcon className="size-4 text-[#0a66c2]" /> Data Platform
          </p>
          <Chip>38 profiles</Chip>
        </div>
        <ul className="divide-y divide-border">
          {people.map((p) => (
            <li key={p.n} className="flex items-center gap-3 px-1 py-3">
              <Avatar initials={p.i} className="size-9 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-sm">{p.n}</p>
                <p className="truncate text-muted-foreground text-xs">{p.r}</p>
              </div>
              <div className="flex gap-1.5">
                {p.tags.map(([t, tone]) => (
                  <Chip key={t} tone={tone}>
                    {t}
                  </Chip>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(card, "p-5")}>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm">Sequence: first outreach</p>
          <Chip>Marcus Chen</Chip>
        </div>
        <ol className="mt-4 space-y-3">
          {[
            ["Intro email", "Sent · 2 days ago", "done"],
            ["Follow-up email", "Due today", "due"],
            ["WhatsApp nudge", "In 3 days", "next"],
          ].map(([t, s, st]) => (
            <li key={t} className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full border",
                  st === "done" && "border-emerald-200 bg-emerald-100 text-emerald-700",
                  st === "due" && "border-brand bg-brand text-white",
                  st === "next" && "border-border text-muted-foreground",
                )}
              >
                {st === "done" ? <Check className="size-3" /> : st === "due" ? <Mail className="size-3" /> : <CalendarDays className="size-3" />}
              </span>
              <div>
                <p className="font-medium text-sm">{t}</p>
                <p className={cn("text-xs", st === "due" ? "font-medium text-brand" : "text-muted-foreground")}>{s}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-lg bg-muted px-3 py-2 text-muted-foreground text-xs">Each step waits for you. Nothing is sent automatically.</p>
      </div>
    </div>
  );
}

function CrmVisual() {
  const cols = [
    { t: "Hiring now", tone: "amber" as const, items: [["Greenleaf", "14 open roles", "92"], ["Orbit Health", "9 open roles", "81"]] },
    { t: "Contacted", tone: "brand" as const, items: [["Northwind Bank", "Intro sent", "88"]] },
    { t: "Meeting set", tone: "green" as const, items: [["Helix Labs", "Call Fri 3:30 PM", "95"], ["Bloom Studio", "Proposal sent", "76"]] },
  ];
  return (
    <div className="grid gap-4 @2xl:grid-cols-3">
      {cols.map((c) => (
        <div key={c.t} className="rounded-xl border border-border bg-muted/50 p-3">
          <div className="flex items-center justify-between px-1 pb-3">
            <Chip tone={c.tone}>{c.t}</Chip>
            <span className="text-muted-foreground text-xs">{c.items.length}</span>
          </div>
          <div className="space-y-2.5">
            {c.items.map(([n, s, fit]) => (
              <div key={n} className={cn(card, "p-3")}>
                <div className="flex items-start gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <Building2 className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-sm">{n}</p>
                    <p className="truncate text-muted-foreground text-xs">{s}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Sparkles className="size-3 text-brand" /> ICP fit
                  </span>
                  <span className="font-semibold text-brand text-xs tabular-nums">{fit}</span>
                </div>
                <div className={cn(bar, "mt-1.5 overflow-hidden")}>
                  <div className="h-full rounded-full bg-brand" style={{ width: `${fit}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AtsVisual() {
  const cols: [string, string[]][] = [
    ["Applied", ["Marcus Chen", "Aisha Khan"]],
    ["Screened", ["Priya Nair"]],
    ["Interview", ["Rahul Shah"]],
    ["Placed", ["Devon Park"]],
  ];
  return (
    <div className="space-y-3">
      <div className={cn(card, "flex flex-wrap items-center justify-between gap-2 p-4")}>
        <div>
          <p className="font-semibold text-sm">Java Lead</p>
          <p className="text-secondary-text text-xs">Northwind Bank · Pune</p>
        </div>
        <div className="flex gap-1.5">
          <Chip>12 candidates</Chip>
          <Chip tone="green">3 interviews</Chip>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 @2xl:grid-cols-4">
        {cols.map(([t, names]) => (
          <div key={t} className="rounded-xl bg-elevated p-2.5">
            <div className="flex items-center justify-between px-1 pb-2">
              <Chip tone={t === "Placed" ? "green" : t === "Interview" ? "brand" : "muted"}>{t}</Chip>
              <span className="text-secondary-text text-xs">{names.length}</span>
            </div>
            <div className="space-y-2">
              {names.map((n) => (
                <div key={n} className="flex items-center gap-2 rounded-lg bg-white p-2">
                  <Avatar initials={n.split(" ").map((x) => x[0]).join("")} className="size-6 text-[9px]" />
                  <p className="truncate font-medium text-xs">{n}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductVisual({ kind }: { kind: "ai-recruiter" | "linkedin-recruit" | "prospecting-crm" | "advanced-ats" }) {
  return <div className="@container">{kind === "ai-recruiter" ? <AiRecruiterVisual /> : kind === "linkedin-recruit" ? <LinkedInVisual /> : kind === "advanced-ats" ? <AtsVisual /> : <CrmVisual />}</div>;
}
