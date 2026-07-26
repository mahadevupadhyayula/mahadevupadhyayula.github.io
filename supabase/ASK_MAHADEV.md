# Ask Mahadev RAG assistant

Ask Mahadev uses a site-wide Jekyll chat interface, a Supabase Edge Function, and OpenAI File Search. The OpenAI API key stays inside Supabase and is never sent to the browser.

## 1. Create the knowledge base

Create an OpenAI vector store and upload the public website content that Ask Mahadev may use. Start with:

- `index.md`
- `about.md`
- `services.md`
- `work-with-me.md`
- `case-studies.md`
- `product-deep-dive.md`
- Files inside `Case Studies/`
- Files inside `blog/`

Do not upload secrets, private client information, drafts that should not be quoted, or internal notes. Keep uploaded filenames recognizable because the Edge Function maps file citations back to website routes.

Whenever important website content changes, replace or re-upload the relevant file in the vector store.

## 2. Apply the database migration

The assistant allows 20 questions per hour for each hashed connection identifier. Apply the included migration before deploying the function:

```bash
supabase db push
```

The table has row-level security enabled and is accessed only through a service-role RPC from the Edge Function.

## 3. Configure Supabase secrets

Set these server-only secrets for the existing Supabase project:

```bash
supabase secrets set OPENAI_API_KEY=your_openai_api_key
supabase secrets set OPENAI_VECTOR_STORE_ID=vs_your_vector_store_id
supabase secrets set RATE_LIMIT_SALT=a_long_random_value
```

Optional settings:

```bash
supabase secrets set OPENAI_MODEL=gpt-5.4-mini
supabase secrets set ALLOWED_ORIGINS=https://mahadevupadhyayula.com,https://www.mahadevupadhyayula.com,https://mahadevupadhyayula.github.io
```

`gpt-5.4-mini` is the default to balance response quality, latency, and cost for a public website assistant. The function forces a File Search call, uses low reasoning effort, and limits the visible answer length.

Never add `OPENAI_API_KEY`, `RATE_LIMIT_SALT`, or service-role credentials to `_data/env.yml`, GitHub Pages variables, JavaScript, or any other public file.

## 4. Deploy the Edge Function

```bash
supabase functions deploy ask-mahadev
```

The committed frontend endpoint uses the current Supabase project:

```text
https://dgrwgiagpcqkxdokhglb.supabase.co/functions/v1/ask-mahadev
```

The GitHub Pages workflow also accepts the public repository variable `VITE_ASK_MAHADEV_ENDPOINT` as an override.

## Request and response

The browser sends:

```json
{
  "message": "What AI workflows has Mahadev built?",
  "previous_response_id": null,
  "page_url": "https://mahadevupadhyayula.com/services/"
}
```

A successful response uses:

```json
{
  "success": true,
  "answer": "...",
  "response_id": "resp_...",
  "sources": [
    { "title": "AI Workflow Services", "url": "/services/" }
  ]
}
```

## Acceptance checks

1. Open and close the assistant with mouse and keyboard.
2. Ask each suggested question and confirm the answer stays within published site content.
3. Confirm source links open the correct page.
4. Ask for information not present on the site and confirm the assistant says it does not have enough information.
5. Send more than 20 questions in an hour from one connection and confirm the function returns HTTP 429.
6. Confirm no OpenAI key appears in browser source, network responses, or the GitHub repository.
7. Check the assistant on a mobile viewport and on a blog post with the sticky CTA visible.