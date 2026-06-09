-- Stores workflow inquiries submitted from the static site via the Supabase Edge Function.
create table if not exists public.workflow_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  intent text,
  workflow_type text not null,
  messy_workflow text not null,
  desired_output text not null,
  human_approval_required text not null,
  tools text,
  timeline text not null,
  budget_range text,
  page_url text,
  referrer text,
  user_agent text,
  status text not null default 'new',
  created_at timestamptz not null default now(),

  constraint workflow_inquiries_email_format
    check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  constraint workflow_inquiries_workflow_type_allowed
    check (workflow_type in (
      'AI Workflow Audit',
      'CRM Hygiene Agent',
      'Pre-CRM Research Agent',
      'Long-form Blog Content Generator',
      'Custom AI Automation MVP'
    )),
  constraint workflow_inquiries_human_approval_required_allowed
    check (human_approval_required in ('Yes', 'No', 'Not sure')),
  constraint workflow_inquiries_name_length
    check (char_length(btrim(name)) between 2 and 120),
  constraint workflow_inquiries_messy_workflow_length
    check (char_length(btrim(messy_workflow)) between 25 and 4000),
  constraint workflow_inquiries_desired_output_length
    check (char_length(btrim(desired_output)) between 10 and 2500),
  constraint workflow_inquiries_human_approval_required_length
    check (char_length(human_approval_required) <= 20),
  constraint workflow_inquiries_company_length
    check (company is null or char_length(company) <= 180),
  constraint workflow_inquiries_intent_length
    check (intent is null or char_length(intent) <= 120),
  constraint workflow_inquiries_tools_length
    check (tools is null or char_length(tools) <= 1000),
  constraint workflow_inquiries_timeline_length
    check (char_length(btrim(timeline)) between 2 and 80),
  constraint workflow_inquiries_budget_range_length
    check (budget_range is null or char_length(budget_range) <= 80),
  constraint workflow_inquiries_page_url_length
    check (page_url is null or char_length(page_url) <= 2048),
  constraint workflow_inquiries_referrer_length
    check (referrer is null or char_length(referrer) <= 2048),
  constraint workflow_inquiries_user_agent_length
    check (user_agent is null or char_length(user_agent) <= 512),
  constraint workflow_inquiries_status_length
    check (char_length(btrim(status)) between 1 and 80)
);

comment on table public.workflow_inquiries is 'Human-approved AI workflow inquiry submissions from the static site.';

alter table public.workflow_inquiries enable row level security;

-- No anon insert policy is created on purpose. The static site posts to the Edge Function,
-- which inserts with SUPABASE_SERVICE_ROLE_KEY after server-side validation.
