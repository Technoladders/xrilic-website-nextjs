"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Building2, ChevronDown, HelpCircle, Phone, Puzzle, Tag } from "lucide-react";
import { nav, site } from "@/lib/content";
import { GradientCanvas, type Palette } from "./Gradient";
import { Thumb } from "./NavThumbs";
import { LinkedInIcon, Logo, cn } from "./ui";

const icons: Record<string, React.ReactNode> = {
  phone: <Phone />,
  linkedin: <LinkedInIcon />,
  building: <Building2 />,
  tag: <Tag />,
  help: <HelpCircle />,
  puzzle: <Puzzle />,
};

// Same pill buttons as the reference header: 40px tall, 14px text, soft grey hover.
const item =
  "inline-flex h-10 cursor-pointer items-center gap-2 rounded-full bg-transparent px-4 py-2 text-foreground text-sm leading-5 tracking-[-0.13px] outline-none transition-all duration-100 hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:scale-95";

export default function Navbar() {
  const [open, setOpen] = useState<"product" | "resources" | null>(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(null), setMobile(false));
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, []);

  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  return (
    <header ref={ref} className="relative z-30 w-full animate-header-enter py-4 motion-reduce:animate-none">
      <div className="mx-auto flex max-w-[94.5rem] items-center justify-between px-4 lg:px-8">
        <a href="/" aria-label="Xrilic home" className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
          <Logo className="h-9 md:h-11" />
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="relative">
            <ul className="m-0 flex list-none items-center gap-1 p-0 md:gap-2">
              {(["product", "resources"] as const).map((key) => (
                <li key={key} className="relative hidden md:block">
                  <button
                    type="button"
                    aria-expanded={open === key}
                    data-state={open === key ? "open" : "closed"}
                    onClick={() => setOpen(open === key ? null : key)}
                    className={cn(item, "data-[state=open]:bg-hover")}
                  >
                    <span>{nav[key].label}</span>
                    <ChevronDown className={cn("size-4 transition-transform duration-150", open === key && "rotate-180")} />
                  </button>

                  {open === key && key === "resources" && (
                    <div className="absolute top-full right-0 z-40 mt-2 animate-fade-swap rounded-2xl border border-border bg-background p-3 shadow-black/10 shadow-xl">
                      <div className="grid w-[30rem] grid-cols-[10rem_1fr] gap-4">
                        <ul>
                          {nav.resources.items.map((i) => (
                            <li key={i.name}>
                              <a href={i.href} onClick={close} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-hover [&_svg]:size-4 [&_svg]:text-secondary-text">
                                {icons[i.icon]}
                                {i.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <a href={nav.resources.update.href} onClick={close} className="block rounded-xl p-2 transition-colors hover:bg-hover">
                          <span className="relative block h-24 overflow-hidden rounded-lg">
                            <GradientCanvas palette="warm" seed={3} />
                            <span className="absolute top-2 left-2 rounded-full bg-background px-2 py-0.5 font-medium text-[11px]">{nav.resources.update.tag}</span>
                          </span>
                          <span className="mt-2 block text-[11px] text-tertiary-text">{nav.resources.update.date}</span>
                          <span className="mt-0.5 block text-sm leading-snug">{nav.resources.update.title}</span>
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <a href={site.links.login} className={cn(item, "whitespace-nowrap max-md:h-9 max-md:px-2.5")}>
                  {nav.signIn}
                </a>
              </li>
              <li>
                <a
                  href={site.links.demo}
                  className="relative inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primary px-4 py-2 font-normal text-primary-foreground text-sm leading-5 tracking-[-0.13px] transition-all duration-150 hover:bg-primary-hover active:scale-95 max-md:h-9 max-md:px-3.5"
                >
                  {nav.cta}
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile(!mobile)}
            className="group relative -mr-2 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-transparent transition-all duration-100 hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:scale-95 md:hidden"
          >
            <span aria-hidden className={cn("absolute top-1/2 left-1/2 -mt-[0.75px] -ml-[7px] h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-150", mobile ? "rotate-45" : "-translate-y-[5px]")} />
            <span aria-hidden className={cn("absolute top-1/2 left-1/2 -mt-[0.75px] -ml-[7px] h-[1.5px] w-3.5 rounded-full bg-current transition-opacity duration-75", mobile && "opacity-0")} />
            <span aria-hidden className={cn("absolute top-1/2 left-1/2 -mt-[0.75px] -ml-[7px] h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-150", mobile ? "-rotate-45" : "translate-y-[5px]")} />
          </button>
        </div>
      </div>

      {open === "product" && (
        <div className="absolute inset-x-0 top-full z-40 hidden px-4 md:block lg:px-8">
          <div className="mx-auto max-w-[94.5rem]">
            <div className="ml-auto max-w-[72rem] animate-fade-swap rounded-3xl border border-border bg-background p-4 shadow-black/10 shadow-xl">
              <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {nav.product.items.map((i, k) => (
                  <li key={i.name}>
                    <a href={i.href} onClick={close} className="group block rounded-2xl outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
                      <Thumb kind={i.kind} palette={i.palette as Palette} seed={k * 3 + 2} />
                      <span className="mt-3 flex items-center gap-1.5 text-base">
                        {i.name}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                      <span className="mt-1 block max-w-[17rem] text-secondary-text text-sm leading-snug">{i.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-border border-t bg-background px-4 pt-3 pb-8 md:hidden">
          <p className="px-2 py-2 text-tertiary-text text-xs">{nav.product.label}</p>
          {nav.product.items.map((i) => (
            <a key={i.name} href={i.href} onClick={close} className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-hover">
              <span className="flex size-9 items-center justify-center rounded-lg bg-elevated [&_svg]:size-4">{icons[i.icon]}</span>
              <span className="text-sm">{i.name}</span>
            </a>
          ))}
          <p className="mt-4 px-2 py-2 text-tertiary-text text-xs">{nav.resources.label}</p>
          {nav.resources.items.map((i) => (
            <a key={i.name} href={i.href} onClick={close} className="block rounded-xl px-2.5 py-2.5 text-sm hover:bg-hover">
              {i.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
