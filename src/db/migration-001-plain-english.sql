-- Migration 001: Add plain-English fields to timeline_events
-- Run this in the Supabase SQL Editor before re-seeding analyses
--
-- Adds:
--   what_changed: Plain English "before vs after" explainer (most important text on page)
--   donations_context: Plain English note explaining the donations table
--
-- The analysis_json column already exists as jsonb and will now include:
--   flag_explanations[]: Array of {label, detail} replacing old flag_reasons format
--   confidence_notes: Now written in plain English explaining what each source IS

alter table timeline_events add column if not exists what_changed text;
alter table timeline_events add column if not exists donations_context text;
