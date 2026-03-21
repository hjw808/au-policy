-- Australian Policy Accountability System — Database Schema
-- Run this once in the Supabase SQL editor (https://supabase.com/dashboard)
-- After running, re-execute: node src/index.js

create table if not exists system_state (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);

create table if not exists members (
  id text primary key,
  name text not null,
  party text,
  electorate text,
  role text,
  raw_json jsonb,
  updated_at timestamptz default now()
);

create table if not exists policies (
  id uuid primary key default gen_random_uuid(),
  external_id text unique not null,
  date date,
  title text not null,
  category text,
  source text,
  source_url text,
  raw_text text,
  matched_keywords jsonb default '[]',
  status text default 'pending',
  flag_score int default 0,
  flag_reasons jsonb default '[]',
  retry_count int default 0,
  ingested_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists votes (
  policy_id uuid references policies(id) on delete cascade,
  member_id text references members(id),
  vote text,
  primary key (policy_id, member_id)
);

create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  external_id text unique,
  donor_name text,
  donor_industry text,
  recipient_party text,
  amount_aud numeric,
  financial_year text,
  source_url text,
  created_at timestamptz default now()
);

create table if not exists member_interests (
  id uuid primary key default gen_random_uuid(),
  member_id text references members(id),
  interest_type text,
  description text,
  company_name text,
  industry text,
  declared_date date,
  created_at timestamptz default now()
);

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  total_income_aud numeric,
  tax_paid_aud numeric,
  effective_tax_rate numeric,
  financial_year text,
  created_at timestamptz default now(),
  unique(name, financial_year)
);

create table if not exists timeline_events (
  id uuid primary key default gen_random_uuid(),
  policy_id uuid references policies(id),
  date date,
  title text,
  category text,
  impact_score numeric,
  confidence_score numeric,
  what_changed text,                -- Plain English "before vs after" explainer
  primary_beneficiaries jsonb,
  disadvantaged_groups jsonb,
  revenue_impact text,
  corporate_advantage boolean,
  conflict_of_interest_flags jsonb,
  linked_donations jsonb,
  donations_context text,           -- Plain English note explaining the donations table
  alternative_policy text,
  comparison_country text,
  comparison_approach text,
  comparison_outcome text,
  analysis_json jsonb,              -- includes flag_explanations[], confidence_notes
  generated_at timestamptz default now()
);

-- Performance indexes
create index if not exists idx_policies_status on policies(status);
create index if not exists idx_policies_flag_score on policies(flag_score desc);
create index if not exists idx_policies_date on policies(date desc);
create index if not exists idx_policies_category on policies(category);
create index if not exists idx_donations_industry on donations(donor_industry);
create index if not exists idx_donations_party on donations(recipient_party);
create index if not exists idx_donations_year on donations(financial_year);
create index if not exists idx_interests_industry on member_interests(industry);
create index if not exists idx_interests_member on member_interests(member_id);
create index if not exists idx_companies_industry on companies(industry);
create index if not exists idx_companies_taxrate on companies(effective_tax_rate);
create index if not exists idx_timeline_date on timeline_events(date desc);
create index if not exists idx_timeline_policy on timeline_events(policy_id);

-- Full-text search on policies (for the website)
alter table policies add column if not exists fts tsvector
  generated always as (to_tsvector('english', coalesce(title, '') || ' ' || coalesce(raw_text, ''))) stored;
create index if not exists idx_policies_fts on policies using gin(fts);

-- Row Level Security: public read, service key write
alter table policies enable row level security;
alter table members enable row level security;
alter table donations enable row level security;
alter table companies enable row level security;
alter table timeline_events enable row level security;
alter table member_interests enable row level security;
alter table votes enable row level security;
alter table system_state enable row level security;

-- Public read access for all tables (website uses anon key)
create policy "Public read policies" on policies for select using (true);
create policy "Public read members" on members for select using (true);
create policy "Public read donations" on donations for select using (true);
create policy "Public read companies" on companies for select using (true);
create policy "Public read timeline" on timeline_events for select using (true);
create policy "Public read interests" on member_interests for select using (true);
create policy "Public read votes" on votes for select using (true);

-- Service role has full access (ingestion pipeline uses service key)
create policy "Service write policies" on policies for all using (true) with check (true);
create policy "Service write members" on members for all using (true) with check (true);
create policy "Service write donations" on donations for all using (true) with check (true);
create policy "Service write companies" on companies for all using (true) with check (true);
create policy "Service write timeline" on timeline_events for all using (true) with check (true);
create policy "Service write interests" on member_interests for all using (true) with check (true);
create policy "Service write votes" on votes for all using (true) with check (true);
create policy "Service write state" on system_state for all using (true) with check (true);
