# Supabase workflow inquiry backend

This static site does not write directly to `public.workflow_inquiries`. The browser posts JSON to the `submit-workflow-inquiry` Supabase Edge Function, and the function inserts the validated payload with `SUPABASE_SERVICE_ROLE_KEY`.

## Deploy

1. Apply the table migration:

   ```bash
   supabase db push
   ```

2. Deploy the Edge Function:

   ```bash
   supabase functions deploy submit-workflow-inquiry
   ```

3. Confirm the function has these environment variables available:

   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

4. Replace `YOUR_SUPABASE_PROJECT_REF` in `_includes/workflow-form.html` with the project ref for the deployed function URL. The endpoint is assigned by `workflow_form_endpoint` near the top of `_includes/workflow-form.html`:

   ```text
   https://YOUR_SUPABASE_PROJECT_REF.functions.supabase.co/submit-workflow-inquiry
   ```

## Response shape

Success responses use:

```json
{
  "success": true,
  "message": "Thanks — your workflow inquiry was received. I will review it and follow up by email.",
  "inquiry_id": "..."
}
```

Validation or server errors use:

```json
{
  "success": false,
  "message": "Please fix the highlighted fields and submit again.",
  "errors": [
    { "field": "email", "message": "Enter a valid work email address." }
  ]
}
```
