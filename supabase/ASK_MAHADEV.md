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

## 2. Configure Supabase secrets

Set these server-only secrets for the existing Supabase project:

```bash
supabase secrets set OPENAI_API_KEY=your_openai_api_key
supabase secrets set OPENAI_VECTOR_STORE_ID=vs_your_vector_store_id
```

Optional settings:

```bash
supabase secrets set OPENAI_MODEL=gpt-5.4-mini
supabase secrets set ALLOWED_ORIGINS=https://mahadevupadhyayula.com,https://www.mahadevupadhyayula.com,https://mahadevupadhyayula.github.io
```

Never add `OPENAI_API_KEY` to `_data/env.yml`, GitHub Pages variables, JavaScript, or any other public file.

## 3. Deploy the Edge Function

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
5. Confirm no OpenAI key appears in browser source, network responses, or the GitHub repository.
6. Check the assistant on a mobile viewport and on a blog post with the sticky CTA visible.