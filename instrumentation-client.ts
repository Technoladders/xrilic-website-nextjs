// Runs once in the browser before the app hydrates. Starts PostHog on every visit (no cookie banner).
// Set NEXT_PUBLIC_POSTHOG_KEY (and NEXT_PUBLIC_POSTHOG_HOST for EU cloud) in .env.local and the build environment.
import { startAnalytics } from "@/lib/analytics";

startAnalytics();
