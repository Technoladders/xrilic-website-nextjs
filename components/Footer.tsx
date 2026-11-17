import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1400px] px-5 pt-24 pb-36 md:px-8">
      <div className="grid gap-12 border-border border-t pt-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="max-w-xl space-y-4 text-[11px] text-secondary-text leading-relaxed">
          {footer.disclaimer.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footer.columns.map((c) => (
            <div key={c.title}>
              <h3 className="font-medium text-secondary-text text-xs">{c.title}</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <a href={l.href} className="transition-opacity hover:opacity-60">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
