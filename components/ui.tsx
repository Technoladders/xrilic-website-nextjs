import type { ReactNode } from "react";
import { site } from "@/lib/content";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Purple wordmark on light backgrounds. `dark` switches to the white wordmark for dark backgrounds. */
export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dark ? "/xrilic-logo-white.webp" : "/xrilic-logo.webp"}
      alt={site.name}
      width={900}
      height={371}
      className={cn("w-auto object-contain", className)}
    />
  );
}

const btnBase =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-normal tracking-[-0.13px] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-black/30 [&_svg]:size-4 [&_svg]:shrink-0";

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
}: {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md";
  children: ReactNode;
  className?: string;
}) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-elevated text-foreground hover:bg-active/60",
    outline: "border border-strong bg-background text-foreground hover:bg-elevated",
  };
  const sizes = { sm: "h-9 px-4 text-sm", md: "h-10 px-4 text-sm" };
  return (
    <a href={href} className={cn(btnBase, variants[variant], sizes[size], className)}>
      {children}
    </a>
  );
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-elevated font-semibold text-secondary-text",
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Small grey pill used above section titles. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex rounded-full bg-elevated px-3 py-1.5 font-medium text-foreground text-xs", className)}>{children}</span>;
}

export function SectionHeading({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div data-reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="text-balance text-4xl text-foreground md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-balance text-lg text-secondary-text">{subtitle}</p>}
    </div>
  );
}

/** Hairline between sections, as in the reference. */
export function Divider() {
  return <div aria-hidden className="border-border border-t" />;
}
