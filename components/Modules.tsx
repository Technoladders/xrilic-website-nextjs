import {
  Award, BarChart3, Bell, Bookmark, Bot, Briefcase, Building2, CalendarDays, Coins, Database, Eye, FileText, Flame,
  FolderKanban, Gauge, Handshake, Kanban, Layers, LayoutDashboard, LifeBuoy, ListChecks, ListOrdered, Mail, MailOpen,
  MessageCircle, Mic, Newspaper, Phone, PhoneCall, PhoneForwarded, Puzzle, Radio, Reply, ScanText, ScrollText, Search,
  Send, ShieldCheck, Smartphone, Sparkles, Target, Trophy, Upload, UserSearch, Users,
} from "lucide-react";
import { modules } from "@/lib/content";
import { GradientCanvas, type Palette } from "./Gradient";
import { LinkedInIcon, cn } from "./ui";

const icons: Record<string, React.ReactNode> = {
  upload: <Upload />, bookmark: <Bookmark />, briefcase: <Briefcase />, users: <Users />, scan: <ScanText />,
  sparkles: <Sparkles />, calendar: <CalendarDays />, send: <Send />, handshake: <Handshake />, file: <FileText />,
  bell: <Bell />, chart: <BarChart3 />, trophy: <Trophy />, folder: <FolderKanban />, list: <ListOrdered />, bot: <Bot />,
  radio: <Radio />, reply: <Reply />, target: <Target />, check: <ListChecks />, eye: <Eye />, transcript: <ScrollText />,
  newspaper: <Newspaper />, flame: <Flame />, building: <Building2 />, phone: <Phone />, message: <MessageCircle />, mail: <Mail />,
  callback: <PhoneForwarded />, gauge: <Gauge />, usersearch: <UserSearch />, kanban: <Kanban />, mailopen: <MailOpen />, mic: <Mic />,
  coins: <Coins />, lifebuoy: <LifeBuoy />, layers: <Layers />, search: <Search />, database: <Database />,
  award: <Award />, dashboard: <LayoutDashboard />, puzzle: <Puzzle />, smartphone: <Smartphone />, shield: <ShieldCheck />,
};

/* Mini illustrations inside the four large tiles */
const bar = "h-1.5 rounded-full bg-foreground/10";
const card = "rounded-lg bg-background/90 shadow-black/5 shadow-md ring-1 ring-foreground/5";

const art: Record<string, React.ReactNode> = {
  "ai-recruiter": (
    <div className={cn(card, "w-44 p-2.5")}>
      <div className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-black text-white"><PhoneCall className="size-3" /></span>
        <span className="font-medium text-[11px]">Calling Priya Nair</span>
        <span className="ml-auto text-[10px] text-secondary-text tabular-nums">02:14</span>
      </div>
      <div className="mt-2.5 flex h-6 items-center gap-[3px]">
        {[3, 6, 10, 5, 12, 8, 14, 6, 9, 4, 11, 7, 13, 5, 8, 3, 9, 6, 11, 4].map((h, i) => (
          <span key={i} className="w-1 origin-center animate-wave rounded-full bg-black/60" style={{ height: h * 1.6, animationDelay: `${i * 70}ms` }} />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className={cn(bar, "w-16")} />
        <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-medium text-[10px] text-emerald-700">Score 8.4</span>
      </div>
    </div>
  ),
  "linkedin-recruit": (
    <div className="relative h-24 w-44">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(card, "absolute inset-x-0 flex items-center gap-2 p-2")}
          style={{ top: i * 30, transform: `scale(${0.9 + i * 0.05})`, opacity: 0.6 + i * 0.2 }}
        >
          <span className="size-6 shrink-0 rounded-full bg-sky-200" />
          <span className="flex flex-1 flex-col gap-1">
            <span className={cn(bar, "w-20 bg-foreground/20")} />
            <span className={cn(bar, "w-12")} />
          </span>
          {i === 2 && <span className="rounded bg-[#0a66c2] px-1.5 py-0.5 font-medium text-[10px] text-white">Save</span>}
        </div>
      ))}
    </div>
  ),
  "prospecting-crm": (
    <div className="flex gap-2">
      {[
        ["Hiring now", "bg-amber-200 text-amber-900", 2],
        ["Meeting set", "bg-emerald-200 text-emerald-900", 1],
      ].map(([label, tone, n]) => (
        <div key={label as string} className={cn(card, "w-[5.25rem] p-2")}>
          <span className={cn("rounded px-1.5 py-0.5 font-medium text-[9px]", tone as string)}>{label}</span>
          {Array.from({ length: n as number }).map((_, i) => (
            <div key={i} className="mt-2 rounded-md border border-border p-1.5">
              <span className={cn(bar, "block w-12 bg-foreground/20")} />
              <span className={cn(bar, "mt-1 block w-8")} />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  "advanced-ats": (
    <div className={cn(card, "w-44 p-2")}>
      <p className="px-1 pb-1.5 font-medium text-[10px]">Java Lead</p>
      <div className="grid grid-cols-3 gap-1.5">
        {[["Applied", 2], ["Interview", 1], ["Placed", 1]].map(([t, n]) => (
          <div key={t as string} className="rounded-md bg-foreground/5 p-1.5">
            <p className="text-[8px] text-secondary-text">{t}</p>
            <div className="mt-1 space-y-1">
              {Array.from({ length: n as number }).map((_, i) => (
                <span key={i} className="block h-2.5 rounded-[3px] bg-background" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

const featuredStyle: Record<string, { palette: Palette; icon: React.ReactNode }> = {
  "ai-recruiter": { palette: "warm", icon: <PhoneCall /> },
  "linkedin-recruit": { palette: "green", icon: <LinkedInIcon /> },
  "prospecting-crm": { palette: "orange", icon: <Building2 /> },
  "advanced-ats": { palette: "blue", icon: <Kanban /> },
};

const COLS = 10;
const cell = "border-strong/60 border-r border-b";

export default function Modules() {
  const m = modules;
  // Featured tiles sit in the middle four columns of rows 3-6 (rows 1 and 8 are empty, faded rows).
  const spots = [
    { col: 4, row: 3 },
    { col: 6, row: 3 },
    { col: 4, row: 5 },
    { col: 6, row: 5 },
  ];
  return (
    <section id="modules" className="mt-24 scroll-mt-20 overflow-hidden border-border border-t pt-16 md:mt-36">
      <div data-reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-4xl md:text-5xl">
          {m.title[0]}
          <br />
          {m.title[1]} <span className="text-secondary-text">{m.titleMuted}</span>
        </h2>
        <p className="mt-4 text-balance text-secondary-text text-sm leading-relaxed">{m.subtitle}</p>
      </div>

      <div data-reveal="100" className="relative mt-10 [--cell:5.5rem] sm:[--cell:6.5rem] lg:[--cell:7.25rem] [mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]">
        <div className="[mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]">
          <ul
            className="relative left-1/2 grid w-max -translate-x-1/2 grid-flow-row-dense border-strong/60 border-t border-l"
            style={{ gridTemplateColumns: `repeat(${COLS}, var(--cell))`, gridAutoRows: "var(--cell)" }}
          >
            {Array.from({ length: COLS }).map((_, i) => (
              <li key={`t${i}`} aria-hidden className={cell} style={{ gridRow: 1 }} />
            ))}

            {m.featured.map((f, i) => {
              const s = featuredStyle[f.key];
              return (
                <li
                  key={f.key}
                  className={cn(cell, "group relative overflow-hidden")}
                  style={{ gridColumn: `${spots[i].col} / span 2`, gridRow: `${spots[i].row} / span 2` }}
                >
                  <a href={f.href} className="flex h-full flex-col items-center justify-end p-3 pb-4 sm:pb-5">
                    <GradientCanvas palette={s.palette} seed={i * 3 + 1} />
                    <span className="relative flex flex-1 scale-[0.8] items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 sm:scale-90 lg:scale-100">
                      {art[f.key]}
                    </span>
                    <span className="relative flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-md bg-black text-white sm:size-6 [&_svg]:size-3 sm:[&_svg]:size-3.5">
                        {s.icon}
                      </span>
                      <span className="whitespace-nowrap font-medium text-sm tracking-tight sm:text-lg lg:text-xl">{f.name}</span>
                    </span>
                    <span className="relative mt-0.5 text-[11px] text-black/60">{f.tag}</span>
                  </a>
                </li>
              );
            })}

            {m.items.map(([name, icon]) => (
              <li
                key={name}
                className={cn(
                  cell,
                  "flex flex-col items-center justify-center gap-2 px-1 text-center text-secondary-text transition-colors hover:bg-elevated hover:text-foreground [&_svg]:size-5 [&_svg]:stroke-[1.75]",
                )}
              >
                {icons[icon]}
                <span className="text-balance text-[11px] leading-tight sm:text-xs">{name}</span>
              </li>
            ))}

            {Array.from({ length: COLS }).map((_, i) => (
              <li key={`b${i}`} aria-hidden className={cell} style={{ gridRow: 8 }} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
