import posthog from "posthog-js";

/** Start PostHog. Runs on every visit (no consent banner). No-op without a project key. */
export function startAnalytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key || typeof window === "undefined" || posthog.__loaded) return;
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    defaults: "2025-05-24", // pageviews on route change, pageleave, autocapture
    person_profiles: "identified_only", // anonymous visitors do not create person profiles
  });
}

/** Send a named event to PostHog. Safe to call when PostHog is not running. */
export function track(event: string, props?: Record<string, unknown>) {
  if (posthog.__loaded) posthog.capture(event, props);
}
