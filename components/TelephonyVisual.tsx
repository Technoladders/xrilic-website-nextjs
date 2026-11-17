"use client";

import { useEffect, useState } from "react";
import { Mic, MicOff, Pause, Phone, PhoneForwarded, PhoneMissed, Voicemail } from "lucide-react";
import { cn } from "./ui";

/* Animated call panel for the Telephony add-on: ringing, connected, a few controls pressed, ended, logged.
   Fictional names. */

const card = "rounded-2xl bg-white shadow-black/10 shadow-lg";
const LOG: [string, string, "answered" | "missed" | "voicemail", string][] = [
  ["Marcus Chen", "Helix · Data Platform", "answered", "04:12"],
  ["Unknown number", "After hours", "missed", "-"],
  ["Aisha Khan", "Bloom Studio", "voicemail", "00:41"],
];
const tone = {
  answered: "bg-emerald-100 text-emerald-800",
  missed: "bg-red-100 text-red-700",
  voicemail: "bg-blue-100 text-blue-800",
};

export default function TelephonyVisual() {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(7);
      return;
    }
    const id = setInterval(() => setT((n) => (n + 1) % 18), 700);
    return () => clearInterval(id);
  }, []);

  const ringing = t < 3;
  const connected = t >= 3 && t < 12;
  const ended = t >= 12;
  const seconds = Math.max(0, (t - 3) * 2 + 3);
  const mm = `00:${String(Math.min(seconds, 59)).padStart(2, "0")}`;
  const muted = t >= 6 && t < 8;
  const hold = t >= 8 && t < 10;
  const transfer = t >= 10 && t < 12;
  const logged = t >= 13;

  const Ctl = ({ on, label, icon }: { on: boolean; label: string; icon: React.ReactNode }) => (
    <span className={cn("flex flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10.5px] transition-all duration-300 [&_svg]:size-4", on ? "scale-95 bg-black text-white" : "bg-elevated")}>
      {icon}
      {label}
    </span>
  );

  return (
    <div className="mx-auto w-full max-w-md space-y-3">
      <div className={cn(card, "p-4")}>
        <div className="flex items-center gap-3">
          <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-elevated font-semibold text-sm">
            PN
            {ringing && <span className="absolute inset-0 animate-ping rounded-full border border-black/40" />}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-[14px]">Priya Nair</p>
            <p className="truncate text-[11.5px] text-secondary-text">Java Lead · Northwind Bank</p>
          </div>
          <span className={cn("rounded-full px-2.5 py-1 font-medium text-[11px] tabular-nums transition-colors", ringing ? "bg-amber-100 text-amber-900" : connected ? "bg-emerald-100 text-emerald-800" : "bg-elevated text-secondary-text")}>
            {ringing ? "Ringing" : connected ? `Connected ${mm}` : "Call ended"}
          </span>
        </div>
        <div className="mt-4 flex h-8 items-center justify-center gap-[3px]">
          {[3, 6, 10, 5, 12, 8, 14, 6, 9, 4, 11, 7, 13, 5, 8, 3, 9, 6].map((h, i) => (
            <span
              key={i}
              className={cn("w-1 rounded-full bg-black transition-all duration-500", connected && !hold ? "animate-pulse opacity-70" : "opacity-15")}
              style={{ height: connected && !hold ? h * 2 : 4, animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Ctl on={muted} label={muted ? "Muted" : "Mute"} icon={muted ? <MicOff /> : <Mic />} />
          <Ctl on={hold} label={hold ? "On hold" : "Hold"} icon={<Pause />} />
          <Ctl on={transfer} label="Transfer" icon={<PhoneForwarded />} />
          <span className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-red-500 py-2 text-[10.5px] text-white [&_svg]:size-4">
            <Phone className="rotate-[135deg]" />
            End
          </span>
        </div>
      </div>

      <div className={cn(card, "p-3")}>
        <div className="flex items-center justify-between px-1.5 pb-2">
          <p className="font-medium text-[12px]">Call logs</p>
          <span className="rounded-full bg-elevated px-2 py-0.5 text-[10.5px] text-secondary-text">Today</span>
        </div>
        <ul className="space-y-1.5">
          {logged && (
            <li key="new" className="flex animate-fade-swap items-center gap-2.5 rounded-xl bg-black p-2.5 text-white">
              <span className="flex size-7 items-center justify-center rounded-full bg-white/15">
                <Phone className="size-3.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-[12px]">Priya Nair</p>
                <p className="truncate text-[10.5px] text-white/60">Northwind Bank · recorded</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-medium text-[10.5px] text-emerald-800">Answered</span>
              <span className="w-9 text-right text-[11px] tabular-nums text-white/70">{mm === "00:00" ? "00:19" : "00:19"}</span>
            </li>
          )}
          {LOG.slice(0, logged ? 2 : 3).map(([n, s, st, d]) => (
            <li key={n} className="flex items-center gap-2.5 rounded-xl bg-elevated p-2.5">
              <span className="flex size-7 items-center justify-center rounded-full bg-white">
                {st === "missed" ? <PhoneMissed className="size-3.5" /> : st === "voicemail" ? <Voicemail className="size-3.5" /> : <Phone className="size-3.5" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-[12px]">{n}</p>
                <p className="truncate text-[10.5px] text-secondary-text">{s}</p>
              </div>
              <span className={cn("rounded-full px-2 py-0.5 font-medium text-[10.5px] capitalize", tone[st])}>{st}</span>
              <span className="w-9 text-right text-[11px] tabular-nums text-secondary-text">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
