-- Tracks review state for workflow inquiries inserted by the Edge Function.
alter table public.workflow_inquiries
  add column if not exists status text not null default 'new';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'workflow_inquiries_status_length'
      and conrelid = 'public.workflow_inquiries'::regclass
  ) then
    alter table public.workflow_inquiries
      add constraint workflow_inquiries_status_length
        check (char_length(btrim(status)) between 1 and 80);
  end if;
end $$;
