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
      <li><strong>What happens after submit:</strong> The form sends your workflow to a secure serverless endpoint for review, then shows a clear confirmation on this page.</li>
    </ul>
  </div>

  <form id="workflow-intake" class="workflow-intake-form" action="https://YOUR_SUPABASE_PROJECT_REF.functions.supabase.co/submit-workflow-inquiry" method="post" data-endpoint="https://YOUR_SUPABASE_PROJECT_REF.functions.supabase.co/submit-workflow-inquiry" novalidate>
    <input type="hidden" name="source" value="work-with-me-main-conversion-page">
    <input id="intent" type="hidden" name="intent" value="">
    <input id="page-url" type="hidden" name="page_url" value="">
    <input id="referrer" type="hidden" name="referrer" value="">

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
      <textarea id="messy-workflow" name="messy_workflow" rows="5" placeholder="Example: Sales reps paste CRM notes after calls, RevOps checks missing fields, and managers still need to confirm next steps before Salesforce is clean." required></textarea>
    </div>

    <div class="form-field form-field-full">
      <label for="clean-output">Desired clean output</label>
      <textarea id="clean-output" name="desired_output" rows="4" placeholder="Example: Validated account summary, updated CRM fields, clear follow-up tasks, content brief, or reviewed lead research package." required></textarea>
    </div>

    <div class="form-field">
      <label for="human-approval-required">Does this output need human approval before action?</label>
      <select id="human-approval-required" name="human_approval_required" required>
        <option value="">Select one</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Not sure">Not sure</option>
      </select>
    </div>

    <div class="form-field form-field-full">
      <label for="tools">Current tools</label>
      <input id="tools" name="tools" type="text" placeholder="HubSpot, Salesforce, Airtable, Notion, Google Docs, Slack, Clay, Zapier...">
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
    <p id="workflow-intake-status" class="form-status" role="status" aria-live="polite"></p>
    <button class="button-link button-primary" type="submit">Send me your workflow</button>
  </form>
</section>

<script>
  (function () {
    var form = document.getElementById('workflow-intake');

    if (!form) {
      return;
    }

    var allowedWorkflowTypes = [
      'AI Workflow Audit',
      'CRM Hygiene Agent',
      'Pre-CRM Research Agent',
      'Long-form Blog Content Generator',
      'Custom AI Automation MVP'
    ];
    var allowedHumanApprovalResponses = [
      'Yes',
      'No',
      'Not sure'
    ];
    var capturedPageUrl = window.location.href;
    var capturedReferrer = document.referrer || '';
    var params = new URLSearchParams(window.location.search);
    var intent = params.get('intent') || '';
    var intentField = document.getElementById('intent');
    var pageUrlField = document.getElementById('page-url');
    var referrerField = document.getElementById('referrer');
    var workflowType = document.getElementById('workflow-type');
    var status = document.getElementById('workflow-intake-status');
    var submitButton = form.querySelector('button[type="submit"]');

    function setStatus(message, state) {
      if (!status) {
        return;
      }

      status.textContent = message || '';
      status.className = state ? 'form-status form-status--' + state : 'form-status';
    }

    function getField(name) {
      return form.elements[name];
    }

    function getValue(name) {
      var field = getField(name);

      return field && typeof field.value === 'string' ? field.value.trim() : '';
    }

    function clearFieldErrors() {
      Array.prototype.slice.call(form.querySelectorAll('[data-error-for]')).forEach(function (error) {
        error.remove();
      });

      Array.prototype.slice.call(form.querySelectorAll('[aria-invalid="true"]')).forEach(function (field) {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
      });
    }

    function showFieldError(fieldName, message) {
      var field = getField(fieldName);

      if (!field) {
        return;
      }

      var error = document.createElement('span');
      var errorId = fieldName + '-error';
      error.id = errorId;
      error.className = 'form-field-error';
      error.setAttribute('data-error-for', fieldName);
      error.textContent = message;
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', errorId);
      field.parentNode.appendChild(error);
    }

    function validateForm() {
      var errors = [];
      var email = getValue('email');
      var workflowTypeValue = getValue('workflow_type');
      var messyWorkflow = getValue('messy_workflow');
      var desiredOutput = getValue('desired_output');
      var humanApprovalRequired = getValue('human_approval_required');

      [
        ['name', 'Name is required.'],
        ['email', 'Work email is required.'],
        ['workflow_type', 'Workflow type is required.'],
        ['messy_workflow', 'Messy workflow description is required.'],
        ['desired_output', 'Desired clean output is required.'],
        ['human_approval_required', 'Human approval requirement is required.'],
        ['timeline', 'Timeline is required.']
      ].forEach(function (item) {
        if (!getValue(item[0])) {
          errors.push({ field: item[0], message: item[1] });
        }
      });

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push({ field: 'email', message: 'Enter a valid work email address.' });
      }

      if (workflowTypeValue && allowedWorkflowTypes.indexOf(workflowTypeValue) === -1) {
        errors.push({ field: 'workflow_type', message: 'Select one of the listed workflow types.' });
      }

      if (humanApprovalRequired && allowedHumanApprovalResponses.indexOf(humanApprovalRequired) === -1) {
        errors.push({ field: 'human_approval_required', message: 'Select Yes, No, or Not sure.' });
      }

      if (messyWorkflow && messyWorkflow.length < 25) {
        errors.push({ field: 'messy_workflow', message: 'Add a little more context about the messy workflow.' });
      }

      if (messyWorkflow.length > 4000) {
        errors.push({ field: 'messy_workflow', message: 'Keep the messy workflow description under 4,000 characters.' });
      }

      if (desiredOutput && desiredOutput.length < 10) {
        errors.push({ field: 'desired_output', message: 'Describe the clean output your team needs.' });
      }

      if (desiredOutput.length > 2500) {
        errors.push({ field: 'desired_output', message: 'Keep the desired output under 2,500 characters.' });
      }

      return errors;
    }

    function buildPayload() {
      return {
        name: getValue('name'),
        email: getValue('email'),
        company: getValue('company'),
        intent: getValue('intent'),
        workflow_type: getValue('workflow_type'),
        messy_workflow: getValue('messy_workflow'),
        desired_output: getValue('desired_output'),
        human_approval_required: getValue('human_approval_required'),
        tools: getValue('tools'),
        timeline: getValue('timeline'),
        budget_range: getValue('budget_range'),
        page_url: capturedPageUrl,
        referrer: capturedReferrer,
        user_agent: window.navigator.userAgent
      };
    }

    function getCaseStudy(workflowTypeValue) {
      var caseStudies = {
        'CRM Hygiene Agent': {
          label: 'View the CRM Hygiene Agent case study',
          url: '{{ "/case-studies/crm-hygiene-agent/" | relative_url }}'
        },
        'Pre-CRM Research Agent': {
          label: 'View the Pre-CRM Research Agent case study',
          url: '{{ "/case-studies/pre-crm-research-agent/" | relative_url }}'
        },
        'Long-form Blog Content Generator': {
          label: 'View the Long-form Blog Content Generator case study',
          url: '{{ "/case-studies/long-form-blog-content-generator/" | relative_url }}'
        }
      };

      return caseStudies[workflowTypeValue] || null;
    }

    function showConfirmation(workflowTypeValue) {
      var confirmation = document.createElement('div');
      var heading = document.createElement('h3');
      var summary = document.createElement('p');
      var nextStep = document.createElement('p');
      var caseStudy = getCaseStudy(workflowTypeValue);

      confirmation.className = 'workflow-confirmation';
      confirmation.setAttribute('role', 'status');
      confirmation.setAttribute('aria-live', 'polite');
      confirmation.setAttribute('tabindex', '-1');

      heading.textContent = 'Workflow received.';
      summary.textContent = 'Thanks for sending the messy workflow. I’ll review the inputs, validation checks, human approval moments, and clean output your team needs.';
      nextStep.textContent = 'Next step: I’ll look for the smallest useful automation scope and follow up with whether an audit, prototype, or focused workflow build is the right fit.';

      confirmation.appendChild(heading);
      confirmation.appendChild(summary);
      confirmation.appendChild(nextStep);

      if (caseStudy) {
        var caseStudyCopy = document.createElement('p');
        var caseStudyLink = document.createElement('a');

        caseStudyCopy.className = 'workflow-confirmation__case-study';
        caseStudyCopy.textContent = 'While I review it, you can see a related workflow example: ';
        caseStudyLink.href = caseStudy.url;
        caseStudyLink.textContent = caseStudy.label;
        caseStudyCopy.appendChild(caseStudyLink);
        confirmation.appendChild(caseStudyCopy);
      }

      form.replaceChildren(confirmation);
      confirmation.focus();
    }

    function intentMatches(optionIntent, capturedIntent) {
      return optionIntent === capturedIntent || capturedIntent.slice(-optionIntent.length - 1) === '-' + optionIntent;
    }

    if (intentField) {
      intentField.value = intent;
    }

    if (pageUrlField) {
      pageUrlField.value = capturedPageUrl;
    }

    if (referrerField) {
      referrerField.value = capturedReferrer;
    }

    if (intent && workflowType) {
      Array.prototype.slice.call(workflowType.options).some(function (option) {
        var optionIntents = (option.getAttribute('data-intents') || '').split(',');

        if (optionIntents.some(function (optionIntent) { return intentMatches(optionIntent, intent); })) {
          workflowType.value = option.value;
          return true;
        }

        return false;
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearFieldErrors();
      setStatus('', '');

      var endpoint = form.getAttribute('data-endpoint') || form.getAttribute('action');
      var errors = validateForm();

      if (endpoint.indexOf('YOUR_SUPABASE_PROJECT_REF') !== -1) {
        errors.push({ field: 'workflow_type', message: 'The workflow inquiry endpoint needs the deployed Supabase Function URL.' });
      }

      if (errors.length > 0) {
        errors.forEach(function (error) {
          showFieldError(error.field, error.message);
        });
        setStatus('Please fix the highlighted fields and submit again.', 'error');
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending workflow...';
      }

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload())
      })
        .then(function (response) {
          return response.json().catch(function () {
            return { success: false, message: 'The endpoint returned an unreadable response.' };
          }).then(function (body) {
            return { ok: response.ok, body: body };
          });
        })
        .then(function (result) {
          if (!result.ok || !result.body.success) {
            if (Array.isArray(result.body.errors)) {
              result.body.errors.forEach(function (error) {
                showFieldError(error.field, error.message);
              });
            }

            setStatus(result.body.message || 'Something went wrong. Please try again.', 'error');
            return;
          }

          showConfirmation(getValue('workflow_type'));
        })
        .catch(function () {
          setStatus('I could not reach the workflow inquiry endpoint. Please try again shortly.', 'error');
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send me your workflow';
          }
        });
    });
  }());
</script>
