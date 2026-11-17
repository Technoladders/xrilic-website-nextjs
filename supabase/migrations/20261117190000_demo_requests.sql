-- Demo requests submitted from the xrilic.ai website.
-- Browsers never touch this table directly: RLS is on with no policies, and only the
-- `demo-request` edge function (service role) inserts rows.

create table if not exists public.demo_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null check (char_length(email) between 3 and 254),
  company     text not null check (char_length(company) between 1 and 160),
  source      text,                          -- page the form was sent from, e.g. "/" or "/pricing"
  user_agent  text,
  ip_hash     text,                          -- salted SHA-256, used only for rate limiting
  status      text not null default 'new',   -- new, contacted, closed (edit by hand)
  notified    boolean not null default false -- true once the notification email was sent
);

create index if not exists demo_requests_ip_recent_idx
  on public.demo_requests (ip_hash, created_at desc);

alter table public.demo_requests enable row level security;

revoke all on public.demo_requests from anon, authenticated;

comment on table public.demo_requests is
  'Website demo requests. Written only by the demo-request edge function. Read it in the SQL editor or as service role.';
