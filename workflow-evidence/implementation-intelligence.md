---
layout: workflow-proof
title: Implementation Intelligence | Use Cases
permalink: /workflow-evidence/implementation-intelligence/
description: A representative human-approved Implementation Intelligence workflow with source evidence, deterministic validation, reviewer decisions, and controlled output.
evidence_status: Representative workflow and product-building evidence.
lede: A reviewer-first control pattern for evidence-heavy B2B operations.
problem: Sales commitments, requirements, dependencies, security needs, owners, and open questions remain scattered when delivery begins.
weak_pattern: A plausible AI summary hides missing evidence, conflicts, and assumptions, then moves downstream without an accountable decision.
pattern: AI prepares traceable findings; explicit rules test completeness and conflicts; the named owner edits, returns, rejects, or approves the result.
sources: Executed agreements, approved solution documents, CRM commitments, discovery evidence, and clearly labelled assumptions. Higher-authority system records and approved documents outrank notes, inferred context, and model-generated claims; every material finding keeps a citation and evidence state.
validation: Required-field checks, allowed-value rules, cross-source conflict tests, freshness checks, and confidence thresholds route gaps to review rather than silently filling them.
owner: Implementation manager
decision: The reviewer can approve, approve with conditions, return for clarification, reject, or escalate. No operational writeback occurs before this point.
output: An approved implementation-readiness baseline and controlled handoff package, together with citations, unresolved gaps, decision status, reviewer identity, and an audit trail.
baseline: Median review time, rework or exception rate, and volume per period measured before the pilot.
target: More reviewer-accepted findings with source coverage; fewer returned outputs and downstream exceptions; no uncontrolled action.
formula: Eligible volume × current avoidable exception rate × cost per exception × share demonstrably prevented by accepted early findings.
decision_rule: Continue only if the pilot improves the agreed workflow metric without increasing material errors, reviewer burden, or uncontrolled actions.
demo_url: /workflow-demos/sales-to-implementation-handoff-validator/
artifact_title: Implementation readiness review
artifact_summary: Sales-to-implementation inputs are checked, reconciled, and reviewed before the kickoff baseline is released.
artifact_state: withheld
artifact_decision: Return for clarification
artifact_sources:
  - title: CRM opportunity
    signal: Enterprise renewal marked ready
    detail: Close date confirmed; implementation owner missing.
  - title: Sales call notes
    signal: Migration requested before launch
    detail: Commitment requires confirmation against solution requirements.
  - title: Requirements document
    signal: "Migration scope: incomplete"
    detail: Named data owner not yet confirmed.
artifact_finding: Readiness findings prepared
artifact_findings: [Migration requested before launch, Delivery owner missing, Scope confirmation required]
artifact_check_state: exception
artifact_check: 2 readiness gaps found
artifact_checks: [Migration scope conflicts across sales context and requirements., No accountable implementation owner is recorded.]
artifact_review: Account owner must confirm migration scope and name the implementation lead before handoff.
artifact_outcome: Handoff not released
artifact_outcome_detail: Implementation baseline remains pending until required fields are confirmed.
artifact_resolved_label: When resolved
artifact_resolved: After confirmation → approved readiness baseline
---
