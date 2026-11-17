"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { home, site } from "@/lib/content";

/** Floating "ask" bar at the bottom of every page, as on the reference. It cycles example questions and opens the demo form. */
export default function ChatBar() {
  const qs = home.chatbar.questions;
  const [i, setI] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % qs.length), 3200);
    return () => clearInterval(t);
  }, [qs.length]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3">
      <form
        action={site.links.demo}
        className="pointer-events-auto flex w-full max-w-[34rem] items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = site.links.demo;
        }}
      >
        <label className="relative flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-full border border-border bg-background pr-1.5 pl-2.5 shadow-black/10 shadow-lg">
          <span aria-hidden className="size-7 shrink-0 rounded-full bg-[conic-gradient(from_200deg,#f4d99a,#2f6cf5,#35d69a,#ff8a5c,#f4d99a)] opacity-90" />
          <span className="relative flex-1 overflow-hidden">
            <input
              aria-label="Ask a question"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="relative z-10 w-full bg-transparent text-sm outline-none"
            />
            {value === "" && (
              <span key={i} className="pointer-events-none absolute inset-0 flex animate-fade-swap items-center truncate text-secondary-text text-sm">
                {qs[i]}
              </span>
            )}
          </span>
          <button type="submit" aria-label="Send" className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary-hover">
            <ArrowUp className="size-4" />
          </button>
        </label>
        <a
          href="/ai-recruiter"
          className="hidden h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-5 font-medium text-primary-foreground text-sm shadow-black/10 shadow-lg transition-colors hover:bg-primary-hover sm:inline-flex"
        >
          <Sparkles className="size-4" />
          {home.chatbar.button}
        </a>
      </form>
    </div>
  );
}
