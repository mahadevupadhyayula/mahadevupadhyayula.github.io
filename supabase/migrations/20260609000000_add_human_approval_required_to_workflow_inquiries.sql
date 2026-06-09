-- Captures whether the requested workflow output needs human approval before action.
alter table public.workflow_inquiries
  add column if not exists human_approval_required text not null default 'Not sure';

alter table public.workflow_inquiries
  alter column human_approval_required drop default;

alter table public.workflow_inquiries
  add constraint workflow_inquiries_human_approval_required_allowed
    check (human_approval_required in ('Yes', 'No', 'Not sure'));
