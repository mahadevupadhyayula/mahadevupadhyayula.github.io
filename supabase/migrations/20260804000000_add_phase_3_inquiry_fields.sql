-- Adds Phase 3 qualification fields without rewriting or removing existing inquiry data.
alter table public.workflow_inquiries
  add column if not exists role text,
  add column if not exists owning_team text,
  add column if not exists volume text,
  add column if not exists cost_risk text;

alter table public.workflow_inquiries
  drop constraint if exists workflow_inquiries_workflow_type_allowed;

alter table public.workflow_inquiries
  add constraint workflow_inquiries_workflow_type_allowed
    check (workflow_type in (
      'AI Workflow Prototype Sprint',
      'Quality / Release Workflow',
      'Implementation / Onboarding Workflow',
      'Product / Customer-Evidence Workflow',
      'Other Internal Workflow',
      'CRM Hygiene Workflow',
      'Pre-CRM Research Workflow',
      'Quote / Proposal Workflow',
      'Content Workflow',
      'Custom Workflow MVP',
      'Revenue Intelligence',
      'Implementation Intelligence',
      'Quality Intelligence',
      'Product Evidence'
    ));

alter table public.workflow_inquiries
  drop constraint if exists workflow_inquiries_role_length,
  drop constraint if exists workflow_inquiries_owning_team_length,
  drop constraint if exists workflow_inquiries_volume_length,
  drop constraint if exists workflow_inquiries_cost_risk_length;

alter table public.workflow_inquiries
  add constraint workflow_inquiries_role_length
    check (role is null or char_length(role) <= 180),
  add constraint workflow_inquiries_owning_team_length
    check (owning_team is null or char_length(owning_team) <= 180),
  add constraint workflow_inquiries_volume_length
    check (volume is null or char_length(volume) <= 500),
  add constraint workflow_inquiries_cost_risk_length
    check (cost_risk is null or char_length(cost_risk) <= 2000);

comment on column public.workflow_inquiries.role is 'Role of the person submitting the inquiry.';
comment on column public.workflow_inquiries.owning_team is 'Team accountable for the current workflow.';
comment on column public.workflow_inquiries.volume is 'Buyer-supplied rough workflow volume or frequency.';
comment on column public.workflow_inquiries.cost_risk is 'Buyer-supplied description of rework, time cost, or risk.';
