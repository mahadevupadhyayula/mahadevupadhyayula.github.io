-- Captures whether the requested workflow output needs human approval before action.
alter table public.workflow_inquiries
  add column if not exists human_approval_required text not null default 'Not sure';

alter table public.workflow_inquiries
  alter column human_approval_required drop default;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'workflow_inquiries_human_approval_required_allowed'
      and conrelid = 'public.workflow_inquiries'::regclass
  ) then
    alter table public.workflow_inquiries
      add constraint workflow_inquiries_human_approval_required_allowed
        check (human_approval_required in ('Yes', 'No', 'Not sure'));
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'workflow_inquiries_human_approval_required_length'
      and conrelid = 'public.workflow_inquiries'::regclass
  ) then
    alter table public.workflow_inquiries
      add constraint workflow_inquiries_human_approval_required_length
        check (char_length(human_approval_required) <= 20);
  end if;
end $$;
