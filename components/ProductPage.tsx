import {
  ArrowRight, Bell, Bookmark, Bot, Briefcase, Building2, CalendarDays, Check, Clock, Database, FolderKanban, Gauge, Globe, Handshake, Inbox, Kanban,
  Layers, ListOrdered, Mail, MessageCircle, Mic, Phone, Pin, Puzzle, ScanText, Search, Send, Shield, Sparkles, User, UserSearch, Users,
} from "lucide-react";
import { products, productOrder, productsUi, site, type Product } from "@/lib/content";
import Cta from "./Cta";
import Footer from "./Footer";
import { GradientCanvas, type Palette } from "./Gradient";
import { Faq } from "./HomeClient";
import Navbar from "./Navbar";
import CrmSearchFlow from "./CrmSearchFlow";
import TelephonyVisual from "./TelephonyVisual";
import ProductVisual from "./ProductVisuals";
import { Button, LinkedInIcon, cn } from "./ui";

const wrap = "mx-auto w-full max-w-[1536px] px-4 md:px-5";
const palettes: Record<string, Palette> = { "advanced-ats": "blue", "ai-recruiter": "warm", "linkedin-recruit": "green", "prospecting-crm": "orange" };
const secondPalette: Record<string, Palette> = { "advanced-ats": "warm", "ai-recruiter": "green", "linkedin-recruit": "warm", "prospecting-crm": "warm" };

const icons: Record<string, React.ReactNode> = {
  scan: <ScanText />, clock: <Clock />, message: <MessageCircle />, mic: <Mic />, gauge: <Gauge />, user: <User />,
  puzzle: <Puzzle />, bookmark: <Bookmark />, folder: <FolderKanban />, list: <ListOrdered />, search: <Search />, users: <Users />,
  building: <Building2 />, usersearch: <UserSearch />, kanban: <Kanban />, layers: <Layers />, bot: <Bot />,
  briefcase: <Briefcase />, pin: <Pin />, send: <Send />, mail: <Mail />, calendar: <CalendarDays />, handshake: <Handshake />,
  inbox: <Inbox />, globe: <Globe />, database: <Database />, phone: <Phone />, linkedin: <LinkedInIcon />, bell: <Bell />, shield: <Shield />,
};

const chip = "rounded-full bg-white/80 px-2 py-0.5 font-medium text-[10.5px] backdrop-blur";

export default function ProductPage({ p }: { p: Product }) {
  const others = productOrder.filter((s) => s !== p.slug).map((s) => products[s]);
  // Cards 1 and 4 of the feature grid are the wide gradient ones
  const wide = new Set([0, 3]);
  const gradientFor = (i: number): Palette => (i === 0 ? palettes[p.visual] : secondPalette[p.visual]);

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Hero: text left, gradient card with the product on the right */}
        <section className={cn(wrap, "grid items-center gap-10 pt-10 pb-6 lg:grid-cols-[1fr_1.1fr] lg:gap-5 lg:pt-16")}>
          <div className="animate-fade-in-up lg:px-2 lg:pr-10">
            <h1 className="text-balance text-[2.6rem] md:text-6xl lg:text-[3.6rem]">{p.title}</h1>
            <p className="mt-6 max-w-md text-secondary-text text-sm leading-relaxed">{p.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Button href={site.links.demo}>{productsUi.primary}</Button>
              <Button href="/pricing" variant="secondary">
                {productsUi.secondary}
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] p-4 sm:p-8 lg:min-h-[480px]">
            <GradientCanvas palette={palettes[p.visual]} seed={7} />
            <div className="relative flex h-full items-center">
              <div className="w-full rounded-3xl bg-white/45 p-3 backdrop-blur-md sm:p-4">
                {p.visual === "prospecting-crm" ? <CrmSearchFlow /> : <ProductVisual kind={p.visual} />}
              </div>
            </div>
          </div>
        </section>

        {/* How it works: timeline */}
        <section className={cn(wrap, "mt-24 border-border border-t pt-16 md:mt-32")}>
          <h2 data-reveal className="text-4xl md:text-[2.6rem]">
            {productsUi.stepsTitle}
          </h2>
          <div className="relative mt-14">
            <div aria-hidden className="absolute top-[1.15rem] right-0 left-0 hidden h-px bg-gradient-to-r from-black via-black/30 to-black/10 lg:block" />
            <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {p.steps.map((s, i) => (
                <li key={s.title} data-reveal={i * 100} className="relative">
                  <span className="relative flex size-[2.3rem] items-center justify-center rounded-full bg-black font-medium text-sm text-white ring-8 ring-white">{i + 1}</span>
                  <p className="mt-6 w-fit rounded-full bg-elevated px-2.5 py-1 font-medium text-[11px]">{p.stepTags[i]}</p>
                  <h3 className="mt-4 font-serif font-light text-3xl tracking-tight">{s.title}</h3>
                  <p className="mt-2 max-w-[17rem] text-secondary-text text-sm leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What it does: bento */}
        <section className={cn(wrap, "mt-24 grid gap-10 border-border border-t pt-16 md:mt-32 lg:grid-cols-[1fr_1.5fr]")}>
          <div data-reveal className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="max-w-sm text-balance text-4xl md:text-[2.6rem]">{p.featuresTitle}</h2>
            <p className="mt-4 max-w-sm text-secondary-text text-sm leading-relaxed">{p.featuresSubtitle}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.features.map((f, i) => {
              const gradient = wide.has(i);
              return (
                <li
                  key={f.title}
                  data-reveal={(i % 2) * 80}
                  className={cn("relative flex min-h-[13rem] flex-col overflow-hidden rounded-[1.75rem] p-6", gradient ? "min-h-[15rem] sm:col-span-2" : "bg-elevated")}
                >
                  {gradient && <GradientCanvas palette={gradientFor(i)} seed={i + 2} />}
                  <span className={cn("relative flex size-10 items-center justify-center rounded-xl [&_svg]:size-5", gradient ? "bg-white/80 backdrop-blur" : "bg-white")}>{icons[f.icon]}</span>
                  <div className={cn("relative mt-auto", gradient ? "mt-8 w-fit max-w-md rounded-2xl bg-white/65 p-4 backdrop-blur-md" : "pt-8")}>
                    <h3 className="font-serif font-light text-2xl tracking-tight">{f.title}</h3>
                    <p className={cn("mt-1.5 max-w-md text-sm leading-relaxed", gradient ? "text-black/70" : "text-secondary-text")}>{f.desc}</p>
                  </div>
                  {i === 0 && (
                    <div className="absolute top-6 right-6 hidden gap-1.5 sm:flex">
                      {p.accents.chips.map((c) => (
                        <span key={c} className={chip}>
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute top-6 right-6 hidden items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[11px] backdrop-blur sm:flex">
                      <Sparkles className="size-3.5" /> {p.accents.badge}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Every module in a suite (Advanced ATS) */}
        {p.modules && (
          <section className={cn(wrap, "mt-24 border-border border-t pt-16 md:mt-32")}>
            <div data-reveal className="max-w-xl">
              <h2 className="text-balance text-4xl md:text-[2.6rem]">{p.modules.title}</h2>
              <p className="mt-4 text-secondary-text text-sm leading-relaxed">{p.modules.subtitle}</p>
            </div>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {p.modules.items.map((m, i) => {
                const body = (
                  <>
                    <div className="flex items-start justify-between">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white [&_svg]:size-5">{icons[m.icon]}</span>
                      {m.badge && <span className="rounded-full bg-white px-2 py-0.5 font-medium text-[10.5px]">{m.badge}</span>}
                      {m.href && <ArrowRight className="size-4 text-secondary-text transition-transform group-hover:translate-x-0.5" />}
                    </div>
                    <h3 className="mt-8 font-serif font-light text-2xl tracking-tight">{m.title}</h3>
                    <p className="mt-1.5 max-w-xs text-secondary-text text-sm leading-relaxed">{m.desc}</p>
                  </>
                );
                const cls = "group flex min-h-[12.5rem] flex-col rounded-[1.75rem] bg-elevated p-6 transition-colors";
                return (
                  <li key={m.title} data-reveal={(i % 3) * 80}>
                    {m.href ? (
                      <a href={m.href} className={cn(cls, "h-full hover:bg-active/60")}>
                        {body}
                      </a>
                    ) : (
                      <div className={cn(cls, "h-full")}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Paid add-on (Telephony) */}
        {p.addon && (
          <section id={p.addon.id} className={cn(wrap, "mt-24 scroll-mt-24 md:mt-32")}>
            <div data-reveal className="relative overflow-hidden rounded-[2rem]">
              <GradientCanvas palette="green" seed={14} />
              <div className="relative grid grid-cols-1 items-center gap-10 p-6 md:p-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] [&>*]:min-w-0">
                <div>
                  <p className="w-fit rounded-full bg-black px-3 py-1.5 font-medium text-white text-xs">{p.addon.eyebrow}</p>
                  <h2 className="mt-5 max-w-lg text-balance text-4xl md:text-[2.6rem]">{p.addon.title}</h2>
                  <p className="mt-4 max-w-lg text-black/70 text-sm leading-relaxed">{p.addon.desc}</p>
                  <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                    {p.addon.benefits.map((b) => (
                      <li key={b.title} className="rounded-2xl bg-white/65 p-4 backdrop-blur-md">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-white [&_svg]:size-4">{icons[b.icon]}</span>
                        <h3 className="mt-3 font-medium text-sm">{b.title}</h3>
                        <p className="mt-1 text-black/65 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Button href={site.links.demo}>{p.addon.cta}</Button>
                    <p className="max-w-xs text-black/60 text-xs">{p.addon.note}</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/40 p-3 backdrop-blur-md sm:p-5">
                  <TelephonyVisual />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Spotlight + benefits */}
        <section className={cn(wrap, "mt-24 md:mt-32")}>
          <div data-reveal className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-between rounded-[2rem] bg-black p-8 text-white md:p-12">
              <div>
                <p className="text-white/60 text-xs">{p.spotlight.eyebrow}</p>
                <h2 className="mt-3 max-w-md text-balance text-4xl text-white md:text-[2.6rem]">{p.spotlight.title}</h2>
                <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">{p.spotlight.desc}</p>
              </div>
              <ul className="mt-10 space-y-3">
                {p.spotlight.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                      <Check className="size-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex min-h-[360px] items-end overflow-hidden rounded-[2rem] p-6 md:p-8">
              <GradientCanvas palette={palettes[p.visual]} seed={12} />
              <div className="relative w-full space-y-2.5">
                {p.spotlight.sample.lines.map((l) => (
                  <p
                    key={l.text}
                    className={cn(
                      "w-fit max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px]",
                      l.from === "us" ? "ml-auto bg-black text-white" : "bg-white/65 backdrop-blur",
                    )}
                  >
                    {l.text}
                  </p>
                ))}
                <p className="flex w-fit items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 font-medium text-xs backdrop-blur">
                  <Sparkles className="size-3.5" /> {p.spotlight.sample.result}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 border-strong/60 border-t pt-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-strong/60">
            {p.benefits.map((b, i) => (
              <div key={b.title} data-reveal={i * 100} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <h3 className="font-serif font-light text-2xl tracking-tight">{b.title}</h3>
                <p className="mt-2 max-w-xs text-secondary-text text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={cn(wrap, "mt-24 grid gap-10 border-border border-t pt-14 md:mt-32 lg:grid-cols-[1fr_1.6fr]")}>
          <div data-reveal>
            <p className="text-secondary-text text-sm">
              {productsUi.faqTitle} {p.name}
            </p>
            <h2 className="mt-3 max-w-xs text-balance text-4xl">{productsUi.faqHeading}</h2>
            <Button href={site.links.demo} className="mt-6">
              {productsUi.faqCta}
            </Button>
          </div>
          <div className="rounded-[2rem] bg-elevated p-4 md:p-8">
            <Faq items={p.faq} />
          </div>
        </section>

        {/* Related */}
        <section className={cn(wrap, "mt-24 md:mt-32")}>
          <p className="mb-6 text-secondary-text text-sm">{productsUi.relatedTitle}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {others.map((o) => (
              <a key={o.slug} href={`/${o.slug}`} data-reveal className="group relative flex min-h-[14rem] flex-col justify-end overflow-hidden rounded-[2rem] p-7">
                <GradientCanvas palette={palettes[o.visual]} seed={11} />
                <span className="relative w-fit rounded-full bg-white/70 px-3 py-1 font-medium text-xs backdrop-blur">{o.group}</span>
                <h3 className="relative mt-4 font-serif font-light text-3xl tracking-tight">{o.name}</h3>
                <p className="relative mt-2 max-w-sm text-black/65 text-sm">{o.metaDescription}</p>
              </a>
            ))}
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
