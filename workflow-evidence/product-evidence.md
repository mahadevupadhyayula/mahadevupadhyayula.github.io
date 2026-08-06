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
artifact_title: Product evidence review
artifact_summary: Research and usage evidence are reconciled before a discovery brief is accepted.
artifact_state: approved
artifact_decision: Approved after resolution
artifact_sources: [Interview excerpts, Usage events, Support themes]
artifact_finding: Evidence brief prepared
artifact_findings: [Problem themes grouped, Claims source-linked, Interpretation labelled]
artifact_check_state: approved
artifact_check: Conflict resolved
artifact_checks: [Usage window corrected, Segment mismatch reconciled, Source coverage confirmed]
artifact_review: Confirms the corrected usage window and accepts the source-linked brief for discovery.
artifact_outcome: Discovery brief released
artifact_outcome_detail: Approved evidence enters planning; no roadmap priority is assigned automatically.
---
