---
layout: page
title: Work With Me | AI Automation Consultant
description: Work with Mahadev Upadhyayula to map, prototype, and build human-approved AI workflow systems for B2B teams.
permalink: /work-with-me/
---

<section class="services-intro work-with-me-hero" aria-labelledby="work-with-me-intro">
  <p class="section-eyebrow">Freelance AI automation for B2B teams</p>
  <h2 id="work-with-me-intro">Book an AI Workflow Audit for one messy B2B workflow.</h2>
  <p>If your team is copying CRM notes, researching leads manually, turning raw inputs into content briefs, or cleaning up unstructured documents, this is the main place to start.</p>
  <p>I’ll review the workflow, identify what AI should extract, where validation belongs, and what needs human approval before clean output reaches your tools.</p>
  <div class="hero-actions" aria-label="Work with me actions">
    <a class="button-link button-primary" href="#workflow-intake">Send me your workflow</a>
    <a class="button-link button-secondary" href="{{ '/case-studies' | relative_url }}">View Case Studies</a>
  </div>
</section>

<section class="work-with-me-grid" aria-label="Who I help and problems I solve">
  <article class="service-detail-card">
    <p class="service-number">01</p>
    <h2>Best-fit buyers</h2>
    <ul>
      <li>B2B SaaS founders with manual handoffs between sales, success, and ops</li>
      <li>Agencies turning research, interviews, and notes into repeatable deliverables</li>
      <li>RevOps and Sales Ops teams cleaning CRM fields after calls and campaigns</li>
      <li>Content teams turning expert input into briefs, outlines, and draft-ready assets</li>
      <li>Operators who need a validated prototype before committing to a larger build</li>
    </ul>
  </article>

  <article class="service-detail-card">
    <p class="service-number">02</p>
    <h2>Workflows I audit</h2>
    <ul>
      <li>CRM notes that need structured fields, next steps, and missing-information checks</li>
      <li>Lead research that should happen before a prospect enters the CRM</li>
      <li>Content briefs built from transcripts, product notes, and subject-matter input</li>
      <li>Unstructured documents that need extraction, validation, and approval</li>
      <li>Internal updates that need cleaner routing across tools and teams</li>
    </ul>
  </article>
</section>

<section class="stage-one-services" aria-labelledby="engagement-options-title">
  <p class="section-eyebrow">Engagement options</p>
  <h2 id="engagement-options-title">Start with the smallest useful scope, then build only what proves value.</h2>
  <div class="service-card-grid homepage-service-grid">
    <article>
      <h3>AI Workflow Audit</h3>
      <p>Map one workflow, identify inputs and approval points, and leave with a practical automation plan.</p>
    </article>
    <article>
      <h3>CRM Hygiene Agent</h3>
      <p>Extract structured fields, follow-ups, and missing-information checks from CRM notes, emails, and calls.</p>
    </article>
    <article>
      <h3>Pre-CRM Research Agent</h3>
      <p>Turn public account research into reviewed company summaries before records enter the CRM.</p>
    </article>
    <article>
      <h3>Custom AI Automation MVP</h3>
      <p>Build a lightweight prototype that extracts, validates, and prepares clean output for human approval.</p>
    </article>
  </div>
</section>

<section class="workflow-cta" aria-labelledby="project-flow-title">
  <p class="section-eyebrow">How a project works</p>
  <h2 id="project-flow-title">We turn one real workflow into a reviewed automation path.</h2>
  <p>The goal is not to remove judgment. The goal is to make messy inputs easier to extract, validate, approve, and turn into clean output.</p>
  <div class="workflow-path" aria-label="Project flow">
    <span>Messy Inputs</span>
    <span>AI Extraction</span>
    <span>Validation</span>
    <span>Human Approval</span>
    <span>Clean Output</span>
  </div>
</section>

<!-- Canonical intake: keep all CTAs pointed to this route. If a lightweight modal is added later, reuse these fields and this form action instead of creating separate popup forms. -->
<section class="service-detail-card intake-block" aria-labelledby="intake-title">
  <div class="intake-copy">
    <p class="section-eyebrow">Main conversion page</p>
    <h2 id="intake-title">Send me your workflow</h2>
    <p>Share the workflow you want cleaned up. I’ll use it to decide whether an audit, CRM hygiene build, lead research workflow, content system, or custom automation MVP is the right first step.</p>
    <ul class="contact-list">
      <li><strong>Good inputs:</strong> CRM notes, lead research steps, content brief examples, document workflows, or screenshots of the current process.</li>
      <li><strong>What I’ll look for:</strong> extraction points, validation checks, human approval moments, and the clean output your team needs.</li>
      <li><strong>Prefer email?</strong> The form opens a structured email draft so the workflow context stays organized.</li>
    </ul>
  </div>

  <form id="workflow-intake" class="workflow-intake-form" action="mailto:mahadev@mahadevupadhyayula.com" method="post" enctype="text/plain" data-recipient="mahadev@mahadevupadhyayula.com">
    <input type="hidden" name="source" value="work-with-me-main-conversion-page">
    <input id="intent" type="hidden" name="intent" value="">

    <div class="form-field">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" autocomplete="name" required>
    </div>

    <div class="form-field">
      <label for="email">Work email</label>
      <input id="email" name="email" type="email" autocomplete="email" required>
    </div>

    <div class="form-field">
      <label for="company">Company or team</label>
      <input id="company" name="company" type="text" autocomplete="organization" placeholder="B2B SaaS team, agency, RevOps group...">
    </div>

    <div class="form-field">
      <label for="workflow-type">Workflow type</label>
      <select id="workflow-type" name="workflow_type" required>
        <option value="">Select one</option>
        <option value="AI Workflow Audit" data-intents="workflow-audit,audit">AI Workflow Audit</option>
        <option value="CRM Hygiene Agent" data-intents="crm-hygiene,crm-notes">CRM Hygiene Agent</option>
        <option value="Pre-CRM Research Agent" data-intents="pre-crm-research,lead-research">Pre-CRM Research Agent</option>
        <option value="Long-form Blog Content Generator" data-intents="content-workflow,content-briefs,blog-content">Long-form Blog Content Generator</option>
        <option value="Custom AI Automation MVP" data-intents="custom-ai-mvp,automation-mvp,prototype">Custom AI Automation MVP</option>
      </select>
    </div>

    <div class="form-field form-field-full">
      <label for="messy-workflow">Messy workflow description</label>
      <textarea id="messy-workflow" name="messy_workflow_description" rows="5" placeholder="Example: Sales reps paste CRM notes after calls, RevOps checks missing fields, and managers still need to confirm next steps before Salesforce is clean." required></textarea>
    </div>

    <div class="form-field form-field-full">
      <label for="clean-output">Desired clean output</label>
      <textarea id="clean-output" name="desired_clean_output" rows="4" placeholder="Example: Validated account summary, updated CRM fields, clear follow-up tasks, content brief, or reviewed lead research package." required></textarea>
    </div>

    <div class="form-field form-field-full">
      <label for="tools">Current tools</label>
      <input id="tools" name="current_tools" type="text" placeholder="HubSpot, Salesforce, Airtable, Notion, Google Docs, Slack, Clay, Zapier...">
    </div>

    <div class="form-field">
      <label for="timeline">Timeline</label>
      <select id="timeline" name="timeline" required>
        <option value="">Select one</option>
        <option value="This week">This week</option>
        <option value="Next 2-4 weeks">Next 2-4 weeks</option>
        <option value="This quarter">This quarter</option>
        <option value="Exploring options">Exploring options</option>
      </select>
    </div>

    <div class="form-field">
      <label for="budget-range">Budget range <span>(optional)</span></label>
      <select id="budget-range" name="budget_range">
        <option value="">Select one</option>
        <option value="Under $2,500">Under $2,500</option>
        <option value="$2,500-$5,000">$2,500-$5,000</option>
        <option value="$5,000-$10,000">$5,000-$10,000</option>
        <option value="$10,000+">$10,000+</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>
    </div>

    <p class="form-note">Messy Inputs → AI Extraction → Validation → Human Approval → Clean Output</p>
    <button class="button-link button-primary" type="submit">Send me your workflow</button>
  </form>
</section>

<script>
  (function () {
    var form = document.getElementById('workflow-intake');

    if (!form) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var intent = params.get('intent') || '';
    var intentField = document.getElementById('intent');
    var workflowType = document.getElementById('workflow-type');

    if (intentField) {
      intentField.value = intent;
    }

    if (intent && workflowType) {
      Array.prototype.slice.call(workflowType.options).some(function (option) {
        var optionIntents = (option.getAttribute('data-intents') || '').split(',');

        if (optionIntents.indexOf(intent) !== -1) {
          workflowType.value = option.value;
          return true;
        }

        return false;
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var recipient = form.getAttribute('data-recipient');
      var data = new FormData(form);
      var subject = 'Workflow inquiry: ' + (data.get('workflow_type') || 'AI Workflow Audit');
      var body = [
        'Name: ' + (data.get('name') || ''),
        'Email: ' + (data.get('email') || ''),
        'Company: ' + (data.get('company') || ''),
        'Intent query parameter: ' + (data.get('intent') || ''),
        'Workflow type: ' + (data.get('workflow_type') || ''),
        '',
        'Messy workflow description:',
        data.get('messy_workflow_description') || '',
        '',
        'Desired clean output:',
        data.get('desired_clean_output') || '',
        '',
        'Current tools: ' + (data.get('current_tools') || ''),
        'Timeline: ' + (data.get('timeline') || ''),
        'Budget range: ' + (data.get('budget_range') || '')
      ].join('\n');

      window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }());
</script>
