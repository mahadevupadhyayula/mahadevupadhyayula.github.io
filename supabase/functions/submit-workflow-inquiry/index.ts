declare const Deno: {
  serve(handler: (request: Request) => Response | Promise<Response>): void;
  env: { get(key: string): string | undefined };
};

const ALLOWED_WORKFLOW_TYPES = new Set([
  'AI Workflow Prototype Sprint',
  'Quality / Release Workflow',
  'Implementation / Onboarding Workflow',
  'Product / Customer-Evidence Workflow',
  'Other Internal Workflow',
  'CRM Hygiene Workflow',
  'Pre-CRM Research Workflow',
  'Quote / Proposal Workflow',
  'Content Workflow',
  'Custom Workflow MVP',
  'Revenue Intelligence',
  'Implementation Intelligence',
  'Quality Intelligence',
  'Product Evidence',
]);

const ALLOWED_ENGAGEMENTS = new Set([
  'Free Review',
  'Workflow Audit',
  'AI Workflow Prototype Sprint',
  'AI Workflow Advisory',
  'Exploring options',
]);

const ALLOWED_HUMAN_APPROVAL_REQUIRED = new Set([
  'Yes',
  'No',
  'Not sure',
]);

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  workflow_type: 120,
  company: 180,
  role: 180,
  owning_team: 180,
  intent: 120,
  messy_workflow: 4000,
  desired_output: 2500,
  human_approval_required: 20,
  tools: 1000,
  volume: 500,
  cost_risk: 2000,
  timeline: 80,
  budget_range: 80,
  page_url: 2048,
  referrer: 2048,
  user_agent: 512,
};

const MIN_LENGTHS = {
  name: 2,
  messy_workflow: 25,
  desired_output: 10,
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  owning_team?: unknown;
  intent?: unknown;
  workflow_type?: unknown;
  messy_workflow?: unknown;
  desired_output?: unknown;
  human_approval_required?: unknown;
  tools?: unknown;
  volume?: unknown;
  cost_risk?: unknown;
  timeline?: unknown;
  budget_range?: unknown;
  page_url?: unknown;
  referrer?: unknown;
  user_agent?: unknown;
};

type ValidationError = {
  field: string;
  message: string;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  });
}

function toCleanString(value: unknown) {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
}

function toNullableString(value: unknown, maxLength: number) {
  const cleaned = toCleanString(value);

  if (!cleaned) {
    return null;
  }

  return cleaned.slice(0, maxLength);
}

function addRequiredStringError(
  errors: ValidationError[],
  value: string,
  field: keyof typeof MAX_LENGTHS,
  label: string,
) {
  if (!value) {
    errors.push({ field, message: `${label} is required.` });
    return;
  }

  const minLength = MIN_LENGTHS[field as keyof typeof MIN_LENGTHS];

  if (minLength && value.length < minLength) {
    errors.push({ field, message: `${label} must be at least ${minLength} characters.` });
  }

  if (value.length > MAX_LENGTHS[field]) {
    errors.push({ field, message: `${label} must be ${MAX_LENGTHS[field]} characters or fewer.` });
  }
}

function validatePayload(payload: InquiryPayload) {
  const normalized = {
    name: toCleanString(payload.name),
    email: toCleanString(payload.email).toLowerCase(),
    company: toNullableString(payload.company, MAX_LENGTHS.company),
    role: toCleanString(payload.role),
    owning_team: toCleanString(payload.owning_team),
    intent: toNullableString(payload.intent, MAX_LENGTHS.intent),
    workflow_type: toCleanString(payload.workflow_type),
    messy_workflow: toCleanString(payload.messy_workflow),
    desired_output: toCleanString(payload.desired_output),
    human_approval_required: toCleanString(payload.human_approval_required),
    tools: toNullableString(payload.tools, MAX_LENGTHS.tools),
    volume: toCleanString(payload.volume),
    cost_risk: toCleanString(payload.cost_risk),
    timeline: toCleanString(payload.timeline),
    budget_range: toNullableString(payload.budget_range, MAX_LENGTHS.budget_range),
    page_url: toNullableString(payload.page_url, MAX_LENGTHS.page_url),
    referrer: toNullableString(payload.referrer, MAX_LENGTHS.referrer),
    user_agent: toNullableString(payload.user_agent, MAX_LENGTHS.user_agent),
  };

  const errors: ValidationError[] = [];

  addRequiredStringError(errors, normalized.name, 'name', 'Name');
  addRequiredStringError(errors, normalized.email, 'email', 'Email');
  addRequiredStringError(errors, normalized.company || '', 'company', 'Company');
  addRequiredStringError(errors, normalized.role, 'role', 'Role');
  addRequiredStringError(errors, normalized.owning_team, 'owning_team', 'Owning team');
  addRequiredStringError(errors, normalized.workflow_type, 'workflow_type', 'Workflow type');
  addRequiredStringError(errors, normalized.messy_workflow, 'messy_workflow', 'Current workflow and inputs');
  addRequiredStringError(errors, normalized.desired_output, 'desired_output', 'Desired decision, action, or output');
  addRequiredStringError(
    errors,
    normalized.human_approval_required,
    'human_approval_required',
    'Human approval requirement',
  );
  addRequiredStringError(errors, normalized.volume, 'volume', 'Rough volume or frequency');
  addRequiredStringError(errors, normalized.cost_risk, 'cost_risk', 'Current rework, time cost, or risk');
  addRequiredStringError(errors, normalized.timeline, 'timeline', 'Timeline');

  if (normalized.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    errors.push({ field: 'email', message: 'Enter a valid work email address.' });
  }

  if (normalized.workflow_type && !ALLOWED_WORKFLOW_TYPES.has(normalized.workflow_type)) {
    errors.push({ field: 'workflow_type', message: 'Select an allowed workflow type.' });
  }

  if (normalized.timeline && !ALLOWED_ENGAGEMENTS.has(normalized.timeline)) {
    errors.push({ field: 'timeline', message: 'Select an allowed engagement.' });
  }

  if (
    normalized.human_approval_required
    && !ALLOWED_HUMAN_APPROVAL_REQUIRED.has(normalized.human_approval_required)
  ) {
    errors.push({
      field: 'human_approval_required',
      message: 'Select Yes, No, or Not sure for human approval.',
    });
  }

  return { normalized, errors };
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return jsonResponse({
      success: false,
      message: 'Use POST to submit a workflow inquiry.',
    }, 405);
  }

  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch (_error) {
    return jsonResponse({
      success: false,
      message: 'Send a valid JSON request body.',
    }, 400);
  }

  const { normalized, errors } = validatePayload(payload);

  if (errors.length > 0) {
    return jsonResponse({
      success: false,
      message: 'Please fix the highlighted fields and submit again.',
      errors,
    }, 400);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({
      success: false,
      message: 'Workflow inquiry endpoint is not configured yet.',
    }, 500);
  }

  const insertResponse = await fetch(`${supabaseUrl}/rest/v1/workflow_inquiries`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(normalized),
  });

  if (!insertResponse.ok) {
    console.error('workflow_inquiries insert failed', await insertResponse.text());

    return jsonResponse({
      success: false,
      message: 'I could not save the workflow inquiry. Please email Mahadev directly or try again shortly.',
    }, 500);
  }

  const insertedRows = await insertResponse.json();
  const inquiryId = Array.isArray(insertedRows) && insertedRows[0] ? insertedRows[0].id : undefined;

  return jsonResponse({
    success: true,
    message: 'Thanks — your workflow inquiry was received. I will review it and follow up by email.',
    inquiry_id: inquiryId,
  });
});
