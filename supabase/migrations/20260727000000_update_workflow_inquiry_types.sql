-- Aligns inquiry qualification with the AI Workflow Prototype Sprint offer architecture.
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
      'Custom Workflow MVP'
    ));
