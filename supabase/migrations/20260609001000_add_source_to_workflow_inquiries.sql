-- Captures the site context or form placement that generated the workflow inquiry.
alter table public.workflow_inquiries
  add column if not exists source text;

alter table public.workflow_inquiries
  add constraint workflow_inquiries_source_length
    check (source is null or char_length(source) <= 120);
