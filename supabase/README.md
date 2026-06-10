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

4. Configure the public frontend endpoint for GitHub Pages. This repo is a Jekyll site, not a Vite app, but the GitHub Actions Pages workflow intentionally reads the public repository variable named `VITE_WORKFLOW_INQUIRY_ENDPOINT` and writes it into generated Jekyll data at build time. In the repository Pages settings, use GitHub Actions as the source, then set the repository variable to:

   ```text
   https://dgrwgiagpcqkxdokhglb.functions.supabase.co/submit-workflow-inquiry
   ```

   The workflow form reads `site.data.env.workflow_inquiry_endpoint`. The committed `_data/env.yml` provides the public Supabase Edge Function endpoint for GitHub Pages builds; `VITE_WORKFLOW_INQUIRY_ENDPOINT` can still override it during the Pages build when that repository variable is set. If neither value is present, the browser shows a safe fallback message and does not attempt to submit the form.

   Only put the public Edge Function URL in this frontend variable. Do not expose `SUPABASE_SERVICE_ROLE_KEY`, Supabase secret keys, or other server-only credentials in GitHub Pages variables or client-side code.

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
