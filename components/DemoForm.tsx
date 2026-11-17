"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { home } from "@/lib/content";
import { track } from "@/lib/analytics";
import { cn } from "./ui";

// Public Supabase edge function (see supabase/functions/demo-request). Override per environment if needed.
const ENDPOINT =
  process.env.NEXT_PUBLIC_DEMO_ENDPOINT || "https://kbpeyfietrwlhwcwqhjw.supabase.co/functions/v1/demo-request";

const field =
  "h-11 w-full rounded-full bg-white px-4 text-sm outline-none ring-1 ring-transparent transition-shadow placeholder:text-tertiary-text focus:ring-black/40";

type State = "idle" | "sending" | "done" | "invalid" | "limited" | "error";

export default function DemoForm() {
  const f = home.scale.form;
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      website: String(form.get("website") ?? ""), // honeypot, hidden from people
      source: window.location.pathname,
    };
    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        track("demo_requested", { source: payload.source });
        setState("done");
      } else {
        setState(res.status === 422 ? "invalid" : res.status === 429 ? "limited" : "error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="flex max-w-sm flex-col items-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" />
        </span>
        <p className="mt-4 font-serif font-light text-2xl tracking-tight">{f.successTitle}</p>
        <p className="mt-2 text-secondary-text text-sm">{f.successDesc}</p>
        <button type="button" onClick={() => setState("idle")} className="mt-4 cursor-pointer text-secondary-text text-xs underline underline-offset-4 hover:text-foreground">
          {f.again}
        </button>
      </div>
    );
  }

  const message = state === "invalid" ? f.invalid : state === "limited" ? f.limited : state === "error" ? f.error : null;

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md space-y-2 text-left">
      <div className="grid grid-cols-2 gap-2">
        <input name="name" autoComplete="name" required maxLength={120} placeholder={f.name} aria-label={f.name} className={field} />
        <input name="company" autoComplete="organization" required maxLength={160} placeholder={f.company} aria-label={f.company} className={field} />
      </div>
      <div className="flex gap-2">
        <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder={f.email} aria-label={f.email} className={cn(field, "min-w-0 flex-1")} />
        <button
          type="submit"
          disabled={state === "sending"}
          className="h-11 shrink-0 cursor-pointer rounded-full bg-primary px-5 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary-hover disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? f.sending : f.button}
        </button>
      </div>
      {/* Honeypot: off-screen and skipped by keyboard and assistive tech. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      {message ? (
        <p role="alert" className="px-1 pt-1 text-[12px] text-red-600">
          {message}
        </p>
      ) : (
        <p className="px-1 pt-1 text-[11px] text-secondary-text leading-snug">{f.note}</p>
      )}
    </form>
  );
}
