"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./ui";

export default function ProductFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      {items.map((it, i) => (
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
  );
}
