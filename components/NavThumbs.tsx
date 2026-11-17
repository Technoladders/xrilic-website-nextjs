import { Check } from "lucide-react";
import { GradientCanvas, type Palette } from "./Gradient";
import { cn } from "./ui";

/* Gradient thumbnails with a small product UI on top, for the Product menu. Fictional names. */

const orb = "size-4 shrink-0 rounded-full bg-black";
const cursor = (
  <svg viewBox="0 0 16 16" className="size-4 text-black" aria-hidden>
    <path d="M2 1.5 14 7l-5 1.6L7.2 14 2 1.5Z" fill="currentColor" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);
const tag = (t: string) => <span className="rounded-full bg-black px-2 py-0.5 font-medium text-[10px] text-white">{t}</span>;

function Recruiter() {
  return (
    <div className="absolute inset-x-[12%] top-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-black/10 shadow-md">
      <p className="flex items-center gap-1.5 font-medium text-[11px]">
        <span className={orb} /> AI Recruiter
      </p>
      <p className="mt-2 w-fit rounded-full bg-elevated px-2.5 py-1.5 text-[10.5px] leading-tight">What were you working on in 2023?</p>
      <p className="mt-2 flex w-fit gap-0.5 rounded-full bg-elevated px-2 py-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-1 rounded-full bg-black/40" />
        ))}
      </p>
    </div>
  );
}

function LinkedIn() {
  return (
    <>
      <div className="absolute inset-x-[10%] top-[16%] rounded-xl bg-white p-3 shadow-black/10 shadow-md">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1.5 rounded-full bg-black/15" />
          ))}
        </div>
        <span className="mt-2.5 block h-1.5 w-16 rounded-full bg-black" />
        <div className="mt-2.5 space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-md bg-elevated px-1.5 py-1">
              <span className="size-3 rounded-full bg-black/20" />
              <span className="h-1 w-14 rounded-full bg-black/20" />
              {i === 0 && <span className="ml-auto h-1 w-5 rounded-full bg-black/40" />}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[18%] bottom-[10%] flex items-end gap-0.5">
        {cursor}
        {tag("Save")}
      </div>
    </>
  );
}

function Ats() {
  const cols = [
    ["Applied", 2],
    ["Interview", 1],
    ["Placed", 1],
  ] as const;
  return (
    <>
      <div className="absolute inset-x-[10%] top-[14%] rounded-xl bg-white p-3 shadow-black/10 shadow-md">
        <p className="font-medium text-[11px]">Java Lead</p>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {cols.map(([t, n]) => (
            <div key={t} className="rounded-md bg-elevated p-1.5">
              <p className="text-[8.5px] text-secondary-text">{t}</p>
              <div className="mt-1.5 space-y-1">
                {Array.from({ length: n }).map((_, i) => (
                  <span key={i} className="block h-2.5 rounded-[3px] bg-white" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[14%] bottom-[10%] flex items-end gap-0.5">
        {cursor}
        {tag("Submit")}
      </div>
    </>
  );
}

function Crm() {
  const rows = ["Reply to Marcus Chen", "Call Greenleaf", "Send proposal"];
  return (
    <>
      <div className="absolute inset-x-[14%] top-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-black/10 shadow-md">
        <p className="font-medium text-[11px]">Today</p>
        <span className="mt-2 block h-[3px] w-full rounded-full bg-black/10">
          <span className="block h-full w-1/3 rounded-full bg-black" />
        </span>
        <ul className="mt-2.5 space-y-1.5">
          {rows.map((r, i) => (
            <li key={r} className="flex items-center gap-1.5 text-[10.5px]">
              <span className={cn("flex size-3 items-center justify-center rounded-[3px] border", i === 0 ? "border-black bg-black text-white" : "border-black/25")}>
                {i === 0 && <Check className="size-2" strokeWidth={3} />}
              </span>
              {r}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute right-[10%] bottom-[14%] flex items-end gap-0.5">
        {cursor}
        {tag("ProspectGPT")}
      </div>
    </>
  );
}

export function Thumb({ kind, palette, seed }: { kind: string; palette: Palette; seed: number }) {
  return (
    <span className="relative block aspect-[1.6] overflow-hidden rounded-2xl">
      <GradientCanvas palette={palette} seed={seed} />
      {kind === "ai-recruiter" ? <Recruiter /> : kind === "linkedin-recruit" ? <LinkedIn /> : kind === "advanced-ats" ? <Ats /> : <Crm />}
    </span>
  );
}
