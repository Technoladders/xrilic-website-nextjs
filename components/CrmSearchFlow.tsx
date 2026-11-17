"use client";

import { useEffect, useState } from "react";
import { Building2, Check } from "lucide-react";
import { cn } from "./ui";

/* Hero visual for the Prospecting CRM page: the prompt is typed out like a typewriter, then matching
   companies appear and are scored, then "Add all to list" is pressed. Fictional data. */

const PROMPT = "Fintech and health companies in Pune hiring 10+ engineers";
const RESULTS: [string, string, number][] = [
  ["Greenleaf", "14 open roles · Pune", 92],
  ["Helix Labs", "11 open roles · Pune", 88],
  ["Orbit Health", "9 open roles · Pune", 81],
  ["Northwind Bank", "10 open roles · Pune", 76],
];

const card = "rounded-2xl bg-white shadow-black/10 shadow-lg";
const chip = "rounded-full px-2 py-0.5 text-[10.5px] font-medium";

export default function CrmSearchFlow() {
  const [typed, setTyped] = useState(0);
  const [rows, setRows] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(PROMPT.length);
      setRows(RESULTS.length);
      setAdded(true);
      return;
    }
    let dead = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(setTimeout(r, ms)));

    (async () => {
      while (!dead) {
        // type it out, one character at a time, with a human rhythm
        await wait(700);
        for (let i = 1; i <= PROMPT.length && !dead; i++) {
          setTyped(i);
          const c = PROMPT[i - 1];
          await wait(c === " " ? 85 + Math.random() * 70 : 38 + Math.random() * 62);
        }
        await wait(650);
        for (let r = 1; r <= RESULTS.length && !dead; r++) {
          setRows(r);
          await wait(650);
        }
        await wait(900);
        setPressed(true);
        await wait(180);
        setPressed(false);
        setAdded(true);
        await wait(3200);
        // clear the prompt quickly, like holding backspace, then start again
        setRows(0);
        setAdded(false);
        for (let i = PROMPT.length; i >= 0 && !dead; i--) {
          setTyped(i);
          await wait(14);
        }
      }
    })();

    return () => {
      dead = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  const done = rows === RESULTS.length;

  return (
    <div className="mx-auto w-full max-w-md space-y-3 py-4">
      <div className={cn(card, "flex items-start gap-2.5 p-3")}>
        <span className="mt-0.5 size-7 shrink-0 rounded-full bg-[conic-gradient(from_200deg,#f4d99a,#2f6cf5,#35d69a,#ff8a5c,#f4d99a)]" />
        <p className="min-h-[2.6em] flex-1 font-mono text-[12.5px] leading-snug tracking-tight">
          <span className="text-secondary-text">› </span>
          {PROMPT.slice(0, typed)}
          <span className="ml-px inline-block h-[1.05em] w-[0.55ch] translate-y-[0.18em] animate-caret bg-black" />
        </p>
      </div>

      <div className={cn(card, "p-3")}>
        <div className="flex items-center justify-between px-1.5 pb-2">
          <p className="font-medium text-[12px]">{rows > 0 ? `${rows} of ${RESULTS.length} companies match` : typed > 0 ? "Searching…" : "Ask ProspectGPT"}</p>
          <span className={cn(chip, "bg-elevated text-secondary-text")}>Sorted by fit</span>
        </div>
        <ul className="space-y-1.5">
          {RESULTS.map(([n, s, f], i) => {
            const on = i < rows;
            return (
              <li key={n} className="rounded-xl bg-elevated p-2.5 transition-all duration-500" style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateY(10px)" }}>
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white">
                    <Building2 className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-[12.5px]">{n}</p>
                    <p className="truncate text-[11px] text-secondary-text">{s}</p>
                  </div>
                  <span className="font-semibold text-[13px] tabular-nums">{on ? f : 0}</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/10">
                  <div className="h-full rounded-full bg-black" style={{ width: on ? `${f}%` : "0%", transition: "width 1.2s cubic-bezier(.2,.7,.2,1)" }} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-2 px-1">
        <span className={cn("rounded-full bg-white/80 px-3 py-1.5 text-[11.5px] backdrop-blur transition-opacity duration-500", done ? "opacity-100" : "opacity-0")}>
          ICP fit uses your saved ideal client profile
        </span>
        <span
          className={cn(
            "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-medium text-[12.5px] transition-all duration-300",
            added ? "bg-emerald-600 text-white" : "bg-black text-white",
            done ? "opacity-100" : "opacity-0",
            pressed && "scale-95",
          )}
        >
          {added ? (
            <>
              <Check className="size-3.5" /> 4 added to list
            </>
          ) : (
            "Add all to list"
          )}
        </span>
      </div>
    </div>
  );
}
