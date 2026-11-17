import { Sparkles } from "lucide-react";
import { home } from "@/lib/content";
import { GradientCanvas, RibbonCanvas } from "./Gradient";
import Cta from "./Cta";
import Journey from "./Journey";
import Modules from "./Modules";
import { Faq, Testimonials } from "./HomeClient";
import DemoForm from "./DemoForm";
import { Button, LinkedInIcon, cn } from "./ui";

const wrap = "mx-auto w-full max-w-[1536px] px-4 md:px-5";

function LogoItem({ i }: { i: { name: string; icon: string } }) {
  return (
    <li className="flex items-center gap-2.5 text-black">
      {i.icon === "linkedin" ? (
        <LinkedInIcon className="size-6" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={i.icon} alt="" className="size-6 object-contain brightness-0" />
      )}
      <span className="whitespace-nowrap font-medium text-lg tracking-tight">{i.name}</span>
    </li>
  );
}

/** Full-height hero: headline on top, the animated wave in the middle row, logos at the bottom. */
function Hero() {
  const h = home.hero;
  const items = home.works.items;
  return (
    <section className="relative grid min-h-[calc(100svh-72px)] w-full grid-cols-1 grid-rows-[minmax(max-content,1fr)_minmax(150px,1fr)_max-content] place-items-center overflow-hidden lg:grid-rows-[minmax(max-content,1fr)_minmax(0px,1fr)_max-content]">
      <div className="z-10 mx-auto flex w-full max-w-[94.5rem] flex-col items-center justify-center gap-6 px-4 py-16 md:py-12 lg:px-8">
        <h1 className="max-w-[22rem] text-balance text-center font-extralight text-[44px] leading-[44px] tracking-[-1.32px] md:max-w-[56rem] md:text-[72px] md:leading-[72px] md:tracking-[-2.16px]">
          {h.title}
        </h1>
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-[42rem] text-balance text-center text-base leading-6 tracking-[-0.18px]">{h.subtitle}</p>
          <div className="flex items-center gap-3">
            <Button href={h.primary.href}>
              <Sparkles />
              {h.primary.label}
            </Button>
            <Button href={h.secondary.href} variant="secondary">
              {h.secondary.label}
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative -z-10 min-h-0 w-full flex-1">
        <RibbonCanvas className="absolute top-1/2 left-1/2 aspect-[3024/1592] min-h-[calc(1440px*1592/3024)] w-full -translate-x-1/2 -translate-y-1/2 animate-hero-wave-enter motion-reduce:animate-none" />
      </div>

      <div className="z-10 w-full animate-marketing-fade-in px-4 py-8 motion-reduce:animate-none md:py-14">
        <p className="sr-only">{home.works.label}</p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] xl:hidden">
          <ul className="flex w-max flex-none animate-marquee items-center *:mx-6 motion-reduce:animate-none">
            {[...items, ...items].map((i, k) => (
              <LogoItem key={`${i.name}-${k}`} i={i} />
            ))}
          </ul>
        </div>
        <ul className="hidden items-center justify-center gap-x-14 xl:flex">
          {items.map((i) => (
            <LogoItem key={i.name} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Proof() {
  const p = home.proof;
  return (
    <section className={cn(wrap, "mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:items-center")} data-reveal>
      <div className="flex flex-wrap gap-x-10 gap-y-6">
        {p.stats.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="text-4xl tracking-tight md:text-5xl">{s.value}</span>
            <span className="max-w-[9rem] text-secondary-text text-xs leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="md:ml-auto md:max-w-lg">
        <p className="text-secondary-text text-xs leading-relaxed md:text-[13px]">{p.quote}</p>
        <div className="mt-4 flex items-center gap-2.5 md:justify-end">
          <span className="flex size-8 items-center justify-center rounded-full bg-elevated font-semibold text-xs">{p.name.slice(0, 1)}</span>
          <div>
            <p className="font-medium text-xs">{p.name}</p>
            <p className="text-[11px] text-secondary-text">{p.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scale() {
  const s = home.scale;
  const orbs = [
    { p: "orange" as const, seed: 2, bars: ["w-6", "w-4", "w-5"] },
    { p: "warm" as const, seed: 4, bars: ["w-9", "w-9"] },
    { p: "green" as const, seed: 6, bars: ["w-5", "w-7", "w-3"] },
  ];
  return (
    <section className={cn(wrap, "mt-24 border-border border-t pt-16 md:mt-36")}>
      <div data-reveal className="max-w-xl">
        <h2 className="text-balance text-4xl md:text-[2.6rem]">{s.title}</h2>
        <p className="mt-4 text-secondary-text text-sm leading-relaxed">{s.desc}</p>
      </div>
      <div className="mt-12 grid gap-3 lg:grid-cols-[1.7fr_1fr]">
        <div id="demo" data-reveal className="flex scroll-mt-24 flex-col items-center justify-center rounded-[2rem] bg-elevated px-6 py-12 text-center md:min-h-[420px]">
          <h3 className="font-serif font-light text-3xl tracking-tight md:text-4xl">{s.cardTitle}</h3>
          <p className="mt-2 text-secondary-text text-xs">{s.cardDesc}</p>
          <div className="my-7 flex items-center">
            {orbs.map((o, i) => (
              <span key={i} className={cn("relative flex size-24 items-center justify-center overflow-hidden rounded-full md:size-28", i > 0 && "-ml-3")}>
                <GradientCanvas palette={o.p} seed={o.seed} />
                <span className="relative flex flex-col items-center gap-1.5">
                  {o.bars.map((w, k) => (
                    <span key={k} className={cn("h-[3px] rounded-full bg-black", w)} />
                  ))}
                </span>
              </span>
            ))}
          </div>
          <DemoForm />
        </div>
        <div className="grid gap-3">
          {s.cards.map((c, i) => (
            <div key={c.title} data-reveal={i * 100} className="flex min-h-[8.5rem] flex-col justify-between rounded-[2rem] bg-elevated p-6 md:min-h-[8.5rem] md:p-7">
              <h3 className="font-serif font-light text-2xl tracking-tight md:text-[1.7rem]">{c.title}</h3>
              <p className="max-w-[14rem] text-secondary-text text-xs">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Journey />
      <Modules />
      <Scale />
      <Testimonials />
      <section className={cn(wrap, "mt-16 border-border border-t pt-12 md:mt-24")}>
        <Faq id="faq" label={home.faq.label} items={home.faq.items} />
      </section>
      <Cta />
    </>
  );
}
