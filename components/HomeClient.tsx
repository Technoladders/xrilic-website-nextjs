"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { home } from "@/lib/content";
import { Avatar, cn } from "./ui";

export function Testimonials() {
  const items = home.testimonials.items;
  const [i, setI] = useState(0);
  const t = items[i];
  const step = (d: number) => setI((n) => (n + d + items.length) % items.length);
  return (
    <section className="mx-auto w-full max-w-[1536px] px-4 pt-24 md:px-5 md:pt-32">
      <p className="text-secondary-text text-sm">{home.testimonials.label}</p>
      <div className="mt-6 min-h-[15rem] md:min-h-[13rem]">
        <p key={i} className="max-w-5xl animate-fade-swap text-balance font-serif font-light text-3xl leading-[1.15] tracking-tight md:text-[2.5rem]">
          {t.quote}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar initials={t.name.slice(0, 1)} className="size-10" />
          <div>
            <p className="font-medium text-sm">{t.name}</p>
            <p className="text-secondary-text text-xs">{t.role}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              aria-label={d < 0 ? "Previous testimonial" : "Next testimonial"}
              onClick={() => step(d)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-elevated transition-colors hover:bg-active/60"
            >
              {d < 0 ? <ChevronLeft className="size-4" /> : <ChevronRight className="size-4" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq({ id, label, items }: { id?: string; label?: string; items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div id={id} className="scroll-mt-24">
      {label && <p className="mb-6 text-secondary-text text-sm">{label}</p>}
      <ul>
        {items.map((it, i) => (
          <li key={it.q}>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-[0.7rem] text-left"
            >
              <span className="font-serif font-light text-xl tracking-tight md:text-2xl">{it.q}</span>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-elevated">
                <Plus className={cn("size-3.5 transition-transform duration-300", open === i && "rotate-45")} />
              </span>
            </button>
            <div className={cn("grid transition-[grid-template-rows] duration-300", open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="max-w-3xl pt-1 pb-4 text-secondary-text text-sm leading-relaxed">{it.a}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
