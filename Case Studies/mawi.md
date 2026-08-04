---
layout: default
title: MAWI | Human-Controlled AI Workflow System
description: MAWI turns business signals into structured decisions, approval-gated simulated actions and auditable outcomes, with deterministic fallback when model output fails.
permalink: /case-studies/mawi/
---

<link rel="stylesheet" href="{{ '/assets/css/iquote-case-study.css' | relative_url }}">

<div class="iquote-page">
  <section class="iquote-hero" aria-labelledby="mawi-title" style="display: block;">
    <div>
      <p class="iquote-breadcrumb"><a href="{{ '/workflow-evidence/' | relative_url }}">Use Cases</a> / MAWI</p>
      <p class="iquote-eyebrow">Controlled AI orchestration · Reference implementation</p>
      <h1 id="mawi-title">Human-controlled AI workflows that keep execution outside the model</h1>
      <p class="iquote-lede">MAWI turns business signals into structured decisions, approval-gated actions and auditable outcomes, with deterministic fallback when model output fails.</p>
      <p class="iquote-status">Functional portfolio/reference implementation</p>
      <div class="iquote-actions" aria-label="MAWI project links">
        <a class="button-link button-primary" href="https://github.com/mahadevupadhyayula/mawi-os" target="_blank" rel="noopener noreferrer">View GitHub</a>
      </div>
    </div>
  </section>

  <section aria-labelledby="problem-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">The business problem</p>
      <h2 id="problem-title">Recommendations are not enough for operational work</h2>
      <p>Many AI systems stop after proposing a next step. An operational system must also control state, apply policy, collect approval, execute through bounded tools, handle failures and record evaluation evidence.</p>
      <p>MAWI separates those responsibilities so model output remains a proposal—not an external action or the source of workflow truth.</p>
    </div>
    <div class="iquote-contrast">
      <article class="iquote-contrast__weak">
        <h3>Model-only behavior</h3>
        <p>Business signal → model recommendation</p>
        <p>The recommendation does not establish durable state, approval authority, safe execution or an inspectable outcome.</p>
      </article>
      <article class="iquote-contrast__strong">
        <h3>Controlled-system behavior</h3>
        <p>Signal → structured decision → policy → approval → simulated execution → evaluation record</p>
        <p>The orchestrator preserves workflow state while policy and people determine whether a proposed action may proceed.</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="workflow-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Current-state workflow</p>
      <h2 id="workflow-title">A visible path from signal to recorded outcome</h2>
    </div>
    <div class="iquote-flow" aria-label="Business signal to auditable outcome workflow" style="grid-template-columns: repeat(6, minmax(120px, 1fr));">
      <span>Business signal</span>
      <span>Structured proposal</span>
      <span>Validation &amp; policy</span>
      <span>Human approval</span>
      <span>Simulated tool action</span>
      <span>Audit &amp; evaluation</span>
    </div>
  </section>

  <section aria-labelledby="proof-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Three proof points</p>
      <h2 id="proof-title">Control is part of the workflow contract</h2>
    </div>
    <div class="iquote-card-grid">
      <article class="iquote-card"><h3>Structured workflow contracts</h3><p>Typed inputs and outputs give validation, orchestration and tools a defined boundary instead of passing unbounded model text through the system.</p></article>
      <article class="iquote-card"><h3>Human-controlled execution</h3><p>Approval gates keep proposed external actions pending until a person makes the required decision.</p></article>
      <article class="iquote-card"><h3>Deterministic fallback and auditability</h3><p>Deterministic mode remains the default and preserves workflow continuity when model output is unavailable or invalid, while audit history records the path taken.</p></article>
    </div>
  </section>

  <section aria-labelledby="walkthrough-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Product walkthrough</p>
      <h2 id="walkthrough-title">Six views of the controlled workflow</h2>
      <p>The approved product screenshots are not published on this site yet. These reserved positions document the intended walkthrough without linking to missing assets.</p>
    </div>
    <div class="iquote-card-grid">
      <article class="iquote-card"><h3>01 — Signal intake</h3><p>Screenshot reserved for the business-signal intake view.</p></article>
      <article class="iquote-card"><h3>02 — Structured proposal</h3><p>Screenshot reserved for the typed decision output.</p></article>
      <article class="iquote-card"><h3>03 — Validation and policy</h3><p>Screenshot reserved for validation and policy results.</p></article>
      <article class="iquote-card"><h3>04 — Approval queue</h3><p>Screenshot reserved for the human approval decision.</p></article>
      <article class="iquote-card"><h3>05 — Simulated execution</h3><p>Screenshot reserved for the bounded tool result.</p></article>
      <article class="iquote-card"><h3>06 — Audit and evaluation</h3><p>Screenshot reserved for persisted history and evaluation evidence.</p></article>
    </div>
  </section>

  <section aria-labelledby="boundary-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">AI versus controlled-system behavior</p>
      <h2 id="boundary-title">The model proposes. The system decides what can happen.</h2>
    </div>
    <div class="iquote-boundary">
      <article>
        <h3>Proposal and control</h3>
        <ul>
          <li><strong>The model proposes</strong> a structured decision from the available signal.</li>
          <li><strong>The orchestrator controls</strong> workflow state, transitions and sequencing.</li>
          <li><strong>Policy controls</strong> whether a proposal may proceed or needs review.</li>
        </ul>
      </article>
      <article>
        <h3>Approval and evidence</h3>
        <ul>
          <li><strong>Humans approve</strong> gated actions before execution.</li>
          <li><strong>Tools execute</strong> only bounded, simulated actions in this implementation.</li>
          <li><strong>Evaluation records</strong> workflow outcomes as reusable evidence.</li>
        </ul>
      </article>
    </div>
  </section>

  <section aria-labelledby="architecture-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Architecture</p>
      <h2 id="architecture-title">Execution remains behind orchestration, policy and approval boundaries</h2>
      <p>This page translates the current architecture into the same components and responsibilities exposed by the reference implementation; it does not add integrations or workflow services.</p>
    </div>
    <div class="iquote-architecture-grid">
      <article class="iquote-architecture-card">
        <h3>Decision path</h3>
        <div class="iquote-architecture-path" aria-label="MAWI decision architecture">
          <span>Business signals</span><span>Workflow orchestrator and persisted state</span><span>Model proposal or deterministic fallback</span><span>Validation and policy</span><span>Human approval</span><span>Simulated tools</span>
        </div>
      </article>
      <article class="iquote-architecture-card">
        <h3>Evidence path</h3>
        <div class="iquote-architecture-path" aria-label="MAWI evidence architecture">
          <span>Workflow outcome</span><span>Audit history</span><span>Evaluation record</span><span>Local SQL persistence</span>
        </div>
      </article>
    </div>
  </section>

  <section aria-labelledby="reliability-title">
    <div class="iquote-section-header"><p class="iquote-section-eyebrow">Reliability controls</p><h2 id="reliability-title">Failures return to a controlled path</h2></div>
    <div class="iquote-card-grid">
      <article class="iquote-card"><h3>Before a decision</h3><ul><li>Typed outputs</li><li>Validation</li><li>Retry behavior</li><li>Deterministic fallback</li></ul></article>
      <article class="iquote-card"><h3>Before an action</h3><ul><li>Policy checks</li><li>Human approval</li><li>Bounded simulated tools</li></ul></article>
      <article class="iquote-card"><h3>After every transition</h3><ul><li>Audit history</li><li>Persistence</li><li>Evaluation evidence</li></ul></article>
    </div>
  </section>

  <section aria-labelledby="value-title">
    <div class="iquote-section-header"><p class="iquote-section-eyebrow">Expected value</p><h2 id="value-title">Value categories for controlled workflow operations</h2></div>
    <div class="iquote-value-grid">
      <article class="iquote-value-card"><ul><li>Reduce manual coordination</li><li>Make decisions inspectable</li><li>Control external actions</li></ul></article>
      <article class="iquote-value-card"><ul><li>Preserve workflow continuity during model failure</li><li>Turn workflow outcomes into reusable evidence</li></ul></article>
    </div>
  </section>

  <section aria-labelledby="maturity-title">
    <div class="iquote-section-header"><p class="iquote-section-eyebrow">Maturity and limitations</p><h2 id="maturity-title">A functional reference implementation—not a production deployment</h2></div>
    <div class="iquote-maturity">
      <p><strong>Current maturity:</strong> Functional portfolio/reference implementation with local SQL persistence.</p>
      <p><strong>Simulation boundary:</strong> Simulated email and CRM tools only. The project does not connect to real email, CRM or customer systems.</p>
      <p><strong>Claims not made:</strong> No production customer deployment claimed. No scale or multi-tenant claim. No real revenue-impact claim.</p>
    </div>
  </section>

  <section class="iquote-final-cta" aria-labelledby="mawi-cta-title">
    <p class="iquote-section-eyebrow">Roles and projects</p>
    <h2 id="mawi-cta-title">Interested in a controlled AI workflow?</h2>
    <p>Let’s discuss the operating decisions, approval boundaries and evidence your workflow needs.</p>
    <div class="iquote-actions"><a class="button-link button-primary" href="{{ '/start-a-workflow-audit/?intent=mawi-case-study' | relative_url }}">Book a Discovery Call</a></div>
  </section>
</div>
