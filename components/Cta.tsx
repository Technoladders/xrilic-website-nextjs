import { home, site } from "@/lib/content";
import { GradientCanvas } from "./Gradient";
import { Button } from "./ui";

export default function Cta() {
  const c = home.cta;
  return (
    <section id="contact" className="relative mt-8 scroll-mt-20 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-10 -left-24 h-64 w-[26rem] -rotate-12 [mask-image:radial-gradient(closest-side,black,transparent)] opacity-90 md:h-80 md:w-[34rem]">
        <GradientCanvas palette="warm" seed={9} />
      </div>
      <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-10 h-64 w-[26rem] -rotate-12 [mask-image:radial-gradient(closest-side,black,transparent)] opacity-90 md:h-80 md:w-[34rem]">
        <GradientCanvas palette="warm" seed={12} />
      </div>
      <div className="relative mx-auto flex min-h-[26rem] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <h2 data-reveal className="text-balance text-3xl md:text-[2.2rem]">
          {c.title}
        </h2>
        <Button href={site.links.demo} size="sm" className="mt-6">
          {c.button}
        </Button>
      </div>
    </section>
  );
}
