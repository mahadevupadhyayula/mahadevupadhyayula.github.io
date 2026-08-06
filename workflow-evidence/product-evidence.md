---
layout: workflow-proof
title: Product Evidence | Use Cases
permalink: /workflow-evidence/product-evidence/
description: A representative human-approved Product Evidence workflow with source evidence, deterministic validation, reviewer decisions, and controlled output.
evidence_status: Representative workflow and product-building evidence.
lede: A reviewer-first control pattern for evidence-heavy B2B operations.
problem: Feedback, interviews, usage signals, commercial context, and delivery evidence are difficult to reconcile without losing provenance.
weak_pattern: A plausible AI summary hides missing evidence, conflicts, and assumptions, then moves downstream without an accountable decision.
pattern: AI prepares traceable findings; explicit rules test completeness and conflicts; the named owner edits, returns, rejects, or approves the result.
sources: Direct research, behavioral data, support evidence, implementation context, and clearly labelled interpretation. Higher-authority system records and approved documents outrank notes, inferred context, and model-generated claims; every material finding keeps a citation and evidence state.
validation: Required-field checks, allowed-value rules, cross-source conflict tests, freshness checks, and confidence thresholds route gaps to review rather than silently filling them.
owner: Product manager
decision: The reviewer can approve, approve with conditions, return for clarification, reject, or escalate. No operational writeback occurs before this point.
output: A source-linked discovery brief and reviewer decision—not an automated priority or roadmap commitment, together with citations, unresolved gaps, decision status, reviewer identity, and an audit trail.
baseline: Median review time, rework or exception rate, and volume per period measured before the pilot.
target: More reviewer-accepted findings with source coverage; fewer returned outputs and downstream exceptions; no uncontrolled action.
formula: Eligible volume × current avoidable exception rate × cost per exception × share demonstrably prevented by accepted early findings.
decision_rule: Continue only if the pilot improves the agreed workflow metric without increasing material errors, reviewer burden, or uncontrolled actions.
artifact_title: Customer evidence review
artifact_summary: Customer feedback, research, usage, and delivery context become a source-linked evidence brief for human review—not an automated roadmap decision.
artifact_state: approved
artifact_decision: Approve evidence brief; do not commit roadmap action
artifact_source_label: Observed evidence
artifact_source_heading: Source-linked signals
artifact_sources:
  - title: Customer interview
    signal: Admin users report repeated export friction.
    detail: Direct research · observed evidence
  - title: Support evidence
    signal: Export-related tickets increased for enterprise accounts.
    detail: Support record · observed evidence
  - title: Usage signal
    signal: Feature usage declines after initial setup.
    detail: Behavioral data · observed evidence
  - title: Commercial context
    signal: Renewal team flags concern for one strategic segment.
    detail: Delivery context · observed evidence
artifact_finding_label: Interpretation
artifact_finding: AI-prepared findings
artifact_findings: [Export friction appears across several evidence sources, Usage decline is concentrated in one segment, Commercial concern requires validation—not automatic prioritisation]
artifact_check_state: exception
artifact_check_label: Interpretation validation
artifact_check: Interpretation needs review
artifact_checks: [Segment evidence is incomplete, Causation is not established, Conflicting feedback exists from another customer group]
artifact_review_label: Recommendation · human decision
artifact_review: Approve evidence brief; do not commit roadmap action
artifact_outcome: Source-linked discovery brief approved
artifact_outcome_detail: Product team can use the evidence in discovery and prioritisation discussion.
---
