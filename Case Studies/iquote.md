---
layout: default
title: iQuote | AI-Assisted Commercial Quote Workflow
description: A working AI-assisted quote workflow that turns unstructured requests into reviewed, priced and approval-ready customer quotes using deterministic commercial rules and human approval.
permalink: /case-studies/iquote/
---

<link rel="stylesheet" href="{{ '/assets/css/iquote-case-study.css' | relative_url }}">

<div class="iquote-page">
  <section class="iquote-hero" aria-labelledby="iquote-title">
    <div>
      <p class="iquote-breadcrumb"><a href="{{ '/case-studies' | relative_url }}">Case Studies</a> / iQuote</p>
      <p class="iquote-eyebrow">Enterprise finance &amp; commercial operations workflow</p>
      <h1 id="iquote-title">From messy quote requests to approved commercial output</h1>
      <p class="iquote-lede">iQuote is a working AI-assisted quote workflow that extracts unstructured customer requests, resolves products and inventory, applies deterministic pricing rules, and routes exceptions through human approval before producing a customer-ready quote.</p>
      <p class="iquote-status">Functional portfolio demo using representative commercial data</p>
      <div class="iquote-actions" aria-label="iQuote project links">
        <a class="button-link button-primary" href="#demo">Watch the walkthrough</a>
        <a class="button-link button-secondary" href="https://i-quote-seven.vercel.app/quotes" target="_blank" rel="noopener noreferrer">Try the live demo</a>
        <a class="button-link button-secondary" href="https://github.com/mahadevupadhyayula/iQuote/tree/main" target="_blank" rel="noopener noreferrer">View GitHub</a>
      </div>
    </div>
    <div id="demo" class="iquote-video-shell">
      <div class="iquote-video">
        <iframe src="https://www.loom.com/embed/e9fa80ef934a4eff91f0e0a508616f61" title="iQuote product walkthrough" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <section class="iquote-proof-bar" aria-label="iQuote proof summary">
    <article><span>Workflow</span><strong>Request-to-approved-quote</strong></article>
    <article><span>AI role</span><strong>Structured extraction and candidate ranking</strong></article>
    <article><span>Business controls</span><strong>Pricing, inventory, margin and approvals</strong></article>
    <article><span>Output</span><strong>Approved customer PDF and audit trail</strong></article>
  </section>

  <section aria-labelledby="problem-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">The business problem</p>
      <h2 id="problem-title">Quote creation is not only a document-generation problem</h2>
      <p>Commercial requests arrive through emails, notes and loosely structured documents. Producing a valid quote requires product matching, inventory decisions, pricing policy, exception handling and delegated approval. AI can interpret the request, but it should not independently control commercial truth.</p>
    </div>
    <div class="iquote-contrast">
      <article class="iquote-contrast__weak">
        <h3>Weak pattern</h3>
        <p>Prompt → model → customer quote</p>
        <p>The model is implicitly trusted to interpret the request and establish commercial output.</p>
      </article>
      <article class="iquote-contrast__strong">
        <h3>iQuote pattern</h3>
        <p>Request → extraction → validation → deterministic rules → exception handling → approval → customer-safe output</p>
        <p>AI handles ambiguity while application state, business rules and people control commitments.</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="workflow-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">End-to-end workflow</p>
      <h2 id="workflow-title">A governed path from intake to customer output</h2>
      <p>Exceptions return to review rather than being hidden or guessed. Workflow events preserve an auditable history of what the system proposed, what the user confirmed and what an approver decided.</p>
    </div>
    <div class="iquote-flow" aria-label="iQuote workflow">
      <span>Unstructured request</span>
      <span>AI-assisted extraction</span>
      <span>Rep validation</span>
      <span>Catalogue matching</span>
      <span>Inventory resolution</span>
      <span>Pricing &amp; policy</span>
      <span>Approval when required</span>
      <span>Customer PDF</span>
    </div>
    <div class="iquote-flow-legend">
      <span>AI-assisted: interpretation and ranking</span>
      <span>Deterministic: product, stock, pricing and totals</span>
      <span>Human-controlled: ambiguity, exceptions and final approval</span>
    </div>
  </section>

  <section aria-labelledby="proof-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Three proof points</p>
      <h2 id="proof-title">The demo is designed around control, not a chatbot</h2>
    </div>
    <div class="iquote-card-grid">
      <article class="iquote-card">
        <h3>Structured extraction</h3>
        <p>Converts a free-text commercial request into editable, typed quote information with source-backed values, confidence and missing-field handling.</p>
      </article>
      <article class="iquote-card">
        <h3>Deterministic commercial truth</h3>
        <p>Keeps catalogue, inventory, pricing, margin, totals and customer terms outside the language model.</p>
      </article>
      <article class="iquote-card">
        <h3>Human-controlled exceptions</h3>
        <p>Packages discount and fulfilment exceptions with decision context before any customer-facing output is produced.</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="walkthrough-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Product walkthrough</p>
      <h2 id="walkthrough-title">Follow the quote from request intake to customer-safe output</h2>
      <p>Each stage exposes what the system extracted, what deterministic services resolved and where a person must review or approve the commercial decision.</p>
    </div>

    <div class="iquote-walkthrough">
      <article class="iquote-step">
        <div class="iquote-step__copy">
          <span class="iquote-step__number">01 — REQUEST INTAKE</span>
          <h3>Begin with the customer’s operational request</h3>
          <p>The workflow starts with an unstructured quote request, customer context, opportunity details and commercial requirements rather than an empty chat interface.</p>
          <p>The original request remains visible so every downstream field can be reviewed against its source.</p>
        </div>
        <div class="iquote-step__media">
          <img src="{{ '/assets/iQuote-scs/iQuote-scs-intake.png' | relative_url }}" alt="iQuote customer request intake with an unstructured quote request and customer context" loading="lazy" decoding="async">
        </div>
      </article>

      <article class="iquote-step">
        <div class="iquote-step__copy">
          <span class="iquote-step__number">02 — STRUCTURED QUOTE DRAFT</span>
          <h3>Convert the request into reviewable structured fields</h3>
          <p>AI-assisted extraction proposes customer, product, quantity, discount, installation and delivery fields with confidence and source indicators.</p>
          <p>The sales representative can review and correct the draft before any catalogue, inventory or pricing decision is made.</p>
        </div>
        <div class="iquote-step__media">
          <img src="{{ '/assets/iQuote-scs/iQuote-scs-structuredextraction.png' | relative_url }}" alt="iQuote structured quote draft with editable extracted fields and confidence indicators" loading="lazy" decoding="async">
        </div>
      </article>

      <article class="iquote-step">
        <div class="iquote-step__copy">
          <span class="iquote-step__number">03 — INVENTORY EXCEPTION</span>
          <h3>Block unsupported fulfilment instead of guessing</h3>
          <p>When the requested quantity cannot be fulfilled from seeded warehouse inventory, the quote remains unresolved and the user must choose a supported path.</p>
          <p>The application makes operational uncertainty explicit rather than inventing stock availability or silently producing an incomplete commitment.</p>
        </div>
        <div class="iquote-step__media">
          <img src="{{ '/assets/iQuote-scs/iQuote-scs-insufficient-inventory.png' | relative_url }}" alt="iQuote insufficient inventory exception requiring a supported fulfilment decision" loading="lazy" decoding="async">
        </div>
      </article>

      <article class="iquote-step">
        <div class="iquote-step__copy">
          <span class="iquote-step__number">04 — DISCOUNT APPROVAL</span>
          <h3>Route policy exceptions with commercial context</h3>
          <p>A requested discount above the straight-through threshold creates a delegated approval containing the subtotal, discount, margin and required approval role.</p>
          <p>The approver can accept, modify or reject the exception before the workflow returns to quote generation.</p>
        </div>
        <div class="iquote-step__media">
          <img src="{{ '/assets/iQuote-scs/iQuote-scs-approval-decision.png' | relative_url }}" alt="iQuote discount approval decision with approve, edit and reject controls" loading="lazy" decoding="async">
        </div>
      </article>

      <article class="iquote-step">
        <div class="iquote-step__copy">
          <span class="iquote-step__number">05 — CUSTOMER PDF</span>
          <h3>Generate customer-facing output only from approved state</h3>
          <p>The final document contains approved products, quantities, prices, terms, validity and delivery assumptions.</p>
          <p>Internal economics, workflow reasoning and approval details remain outside the customer-safe PDF.</p>
          <div class="iquote-actions">
            <a class="button-link button-primary" href="https://www.loom.com/share/e9fa80ef934a4eff91f0e0a508616f61" target="_blank" rel="noopener noreferrer">Open the full walkthrough</a>
            <a class="button-link button-secondary" href="https://i-quote-seven.vercel.app/quotes" target="_blank" rel="noopener noreferrer">Explore the live workflow</a>
          </div>
        </div>
        <div class="iquote-step__media">
          <img src="{{ '/assets/iQuote-scs/iQuote-scs-quote-generated.png' | relative_url }}" alt="Customer-facing quote PDF generated from approved iQuote state" loading="lazy" decoding="async">
        </div>
      </article>
    </div>
  </section>

  <section aria-labelledby="boundary-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">AI judgement boundary</p>
      <h2 id="boundary-title">The model proposes structure. The application controls commercial truth.</h2>
    </div>
    <div class="iquote-boundary">
      <article>
        <h3>AI assists with</h3>
        <ul>
          <li>Interpreting unstructured customer requests</li>
          <li>Extracting explicitly stated facts with confidence</li>
          <li>Identifying missing or ambiguous information</li>
          <li>Ranking known catalogue candidates</li>
        </ul>
      </article>
      <article>
        <h3>Deterministic services and people control</h3>
        <ul>
          <li>SKU and catalogue truth</li>
          <li>Inventory availability and fulfilment</li>
          <li>Pricing, discounts, margin and totals</li>
          <li>Approval authority, quote status and customer terms</li>
        </ul>
      </article>
    </div>
    <p class="iquote-boundary-callout">Timeouts, malformed output or incomplete extraction return the quote to manual review without losing the workflow state.</p>
  </section>

  <section aria-labelledby="decisions-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Key product and technical decisions</p>
      <h2 id="decisions-title">Three choices that shape the system</h2>
    </div>
    <div class="iquote-decision-grid">
      <article class="iquote-decision">
        <h3>Exception resolution over chat</h3>
        <p>The product experience is organised around quote readiness, unresolved issues and approval—not open-ended conversation.</p>
      </article>
      <article class="iquote-decision">
        <h3>Typed extraction boundary</h3>
        <p>Model output is normalised and reviewed before catalogue, inventory and pricing services use it.</p>
      </article>
      <article class="iquote-decision">
        <h3>Approved-state output</h3>
        <p>The customer document is rendered from persisted, approved quote state rather than direct model output.</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="scenarios-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Reproducible scenarios</p>
      <h2 id="scenarios-title">The workflow is tested through normal and exception paths</h2>
    </div>
    <div class="iquote-scenario-grid">
      <article class="iquote-scenario">
        <h3>Straight-through quote</h3>
        <p><strong>System response:</strong> Product, inventory, pricing and policy resolve normally.</p>
        <p><strong>Outcome:</strong> The quote becomes ready for review and customer output.</p>
      </article>
      <article class="iquote-scenario">
        <h3>Discount approval</h3>
        <p><strong>System response:</strong> A discount above policy creates delegated approval.</p>
        <p><strong>Outcome:</strong> The approver can accept, edit or reject before generation.</p>
      </article>
      <article class="iquote-scenario">
        <h3>Inventory exception</h3>
        <p><strong>System response:</strong> Insufficient stock blocks readiness and surfaces supported fulfilment options.</p>
        <p><strong>Outcome:</strong> A human confirms the resolution before the quote proceeds.</p>
      </article>
    </div>
  </section>

  <section aria-labelledby="architecture-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Architecture and implementation</p>
      <h2 id="architecture-title">A modular monolith for V1 speed with replaceable integration boundaries</h2>
      <p>The current implementation keeps UI, server actions, workflow services, rules, persistence and PDF generation inside a Next.js application. Supabase persists customers, products, prices, inventory, quotes, approvals and workflow events. OpenAI is isolated behind an extraction adapter.</p>
    </div>
    <div class="iquote-architecture-grid">
      <article class="iquote-architecture-card">
        <h3>Current architecture</h3>
        <div class="iquote-architecture-path" aria-label="iQuote technical architecture">
          <span>Next.js UI and server actions</span>
          <span>Application workflow services</span>
          <span>AI extraction adapter</span>
          <span>Deterministic domain rules</span>
          <span>Supabase repositories and workflow state</span>
          <span>Customer-safe PDF renderer</span>
        </div>
      </article>
      <article class="iquote-architecture-card">
        <h3>Integration path</h3>
        <ul>
          <li>Replace seeded customer and opportunity data with a CRM adapter.</li>
          <li>Replace seeded catalogue, pricing and inventory with ERP or CPQ adapters.</li>
          <li>Add production identity, RBAC, secure logging and telemetry.</li>
          <li>Run controlled dry-runs before expanding catalogue and policy coverage.</li>
        </ul>
        <div class="iquote-doc-links">
          <a class="button-link button-secondary" href="https://github.com/mahadevupadhyayula/iQuote/tree/main" target="_blank" rel="noopener noreferrer">Implementation repository</a>
          <a class="button-link button-secondary" href="https://docs.google.com/spreadsheets/d/1Cx_7fD3d8oKU4sP3wmESo3riSXfBnMOOeKlWzEEYB3g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Explore ROI model</a>
        </div>
      </article>
    </div>
  </section>

  <section aria-labelledby="value-title">
    <div class="iquote-section-header">
      <p class="iquote-section-eyebrow">Expected value and project maturity</p>
      <h2 id="value-title">Built to validate workflow control before enterprise integration</h2>
    </div>
    <div class="iquote-value-grid">
      <article class="iquote-value-card">
        <h3>Expected business value</h3>
        <ul>
          <li>Reduce repetitive translation of quote requests.</li>
          <li>Surface missing information and exceptions earlier.</li>
          <li>Protect pricing and inventory from model-generated assumptions.</li>
          <li>Make approvals visible and auditable.</li>
          <li>Create a repeatable intake-to-output workflow.</li>
        </ul>
      </article>
      <article class="iquote-value-card">
        <h3>What this demonstrates</h3>
        <ul>
          <li>Translating an ambiguous operating process into a working application.</li>
          <li>Deciding where AI should and should not be used.</li>
          <li>Designing exception, approval and safe-failure paths.</li>
          <li>Combining product judgement with hands-on implementation.</li>
          <li>Building for inspectability, testing and customer-safe output.</li>
        </ul>
      </article>
    </div>
    <div class="iquote-maturity">
      <h3>Project status and credibility boundary</h3>
      <p><strong>Implemented:</strong> request intake, structured extraction, rep corrections, catalogue and fulfilment resolution, seeded pricing and policy, deterministic calculations, approval routing, PDF generation, mock delivery and automated scenario paths.</p>
      <p><strong>Not presented as production:</strong> live CRM/ERP integration, production RBAC, real email delivery, broad catalogue coverage, enterprise-scale security and verified customer outcome metrics.</p>
      <p>A production pilot would add identity and permissions, secure logging, telemetry, real system adapters, evaluation, operational monitoring and a measured set of dry-runs.</p>
    </div>
  </section>

  <section class="iquote-final-cta" aria-labelledby="iquote-cta-title">
    <p class="iquote-section-eyebrow">Relevant to finance, procurement and commercial operations</p>
    <h2 id="iquote-cta-title">Building an AI workflow where business rules and human judgement must stay in control?</h2>
    <p>I’m interested in roles and projects where ambiguous operational work needs to become a reliable, inspectable and human-controlled AI system.</p>
    <div class="iquote-actions">
      <a class="button-link button-primary" href="{{ '/work-with-me?intent=iquote-case-study' | relative_url }}">Discuss the workflow</a>
      <a class="button-link button-secondary" href="https://www.linkedin.com/in/mahadevupadhyayula/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
    </div>
  </section>
</div>
