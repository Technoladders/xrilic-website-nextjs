// Public endpoint behind the website demo form. Deploy with JWT verification off:
//   supabase functions deploy demo-request --no-verify-jwt
//
// Optional secrets:
//   ALLOWED_ORIGINS   comma-separated origins allowed to call it (defaults below)
//   DEMO_HASH_SALT    salt for the IP hash used in rate limiting
//   RESEND_API_KEY, DEMO_NOTIFY_TO, DEMO_NOTIFY_FROM   when all three are set, each request also sends an email
import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED = (
  Deno.env.get("ALLOWED_ORIGINS") ??
  "https://xrilic.ai,https://www.xrilic.ai,http://localhost:3210,http://localhost:3000"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_PER_WINDOW = 5; // requests per IP
const WINDOW_MINUTES = 10;

function corsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin && ALLOWED.includes(origin) ? origin : ALLOWED[0],
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

function json(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

async function sha256(text: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "");

export async function handler(req: Request): Promise<Response> {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
  if (req.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405, origin);
  if (origin && !ALLOWED.includes(origin)) return json({ ok: false, error: "forbidden" }, 403, origin);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400, origin);
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots do not retry.
  if (clean(body.website, 200)) return json({ ok: true }, 200, origin);

  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, 160);
  if (!name || !company || !EMAIL_RE.test(email)) return json({ ok: false, error: "validation" }, 422, origin);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const ipHash = await sha256(`${Deno.env.get("DEMO_HASH_SALT") ?? "xrilic-demo"}:${ip}`);

  const since = new Date(Date.now() - WINDOW_MINUTES * 60_000).toISOString();
  const { count } = await supabase
    .from("demo_requests")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);
  if ((count ?? 0) >= MAX_PER_WINDOW) return json({ ok: false, error: "rate_limited" }, 429, origin);

  const { data, error } = await supabase
    .from("demo_requests")
    .insert({
      name,
      email,
      company,
      source: clean(body.source, 200) || null,
      user_agent: clean(req.headers.get("user-agent"), 300) || null,
      ip_hash: ipHash,
    })
    .select("id")
    .single();
  if (error) {
    console.error("demo_requests insert failed", error.message);
    return json({ ok: false, error: "server_error" }, 500, origin);
  }

  // Optional notification email. A failure here never fails the request: the row is already saved.
  const key = Deno.env.get("RESEND_API_KEY");
  const to = Deno.env.get("DEMO_NOTIFY_TO");
  const from = Deno.env.get("DEMO_NOTIFY_FROM");
  if (key && to && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: email,
          subject: `New demo request: ${company}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPage: ${clean(body.source, 200) || "-"}`,
        }),
      });
      if (res.ok) await supabase.from("demo_requests").update({ notified: true }).eq("id", data.id);
      else console.error("notify failed", res.status);
    } catch (e) {
      console.error("notify error", (e as Error).message);
    }
  }

  return json({ ok: true }, 200, origin);
}

Deno.serve(handler);
