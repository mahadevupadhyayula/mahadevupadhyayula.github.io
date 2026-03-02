# GitHub Pages Formatting Issues Audit

This audit identifies Markdown formatting and content-structure issues that affect rendering quality or navigation.

## 1) Broken internal links

### `case-studies.md`
All three case-study links point to non-existent files (old Notion-export style names):
- `Case Studies/Insight Driven Journaling App ... .md`
- `Case Studies/G2 Organic Products ... .md`
- `Case Studies/Product Impact at PayPal ... .md`

### `Case Studies/insight-driven-journaling-app.md`
The "Insight Journal - Product deep dive" link points to a non-existent path (`Insight Driven Journaling App/...`) instead of the existing nested markdown file.

### `Case Studies/insight-driven-journaling-app/insight-journal-product-deepdive.md`
All five links point to non-existent files under a non-existent `Insight Journal - Product deep dive/` subfolder and include stale Notion-style filenames.

### Deep-dive pages with broken media/child links
- `Case Studies/insight-driven-journaling-app/insight-journal-product-deepdive/mvp-backend-architecture-data-modeling-and-ui-design.md` references an image path that does not exist.
- `Case Studies/insight-driven-journaling-app/insight-journal-product-deepdive/mvp-design-insight-driven-journaling-app.md` references several image paths that do not exist.
- `Case Studies/insight-driven-journaling-app/insight-journal-product-deepdive/product-design-insight-based-journaling-app.md` contains a broken link to a non-existent Notion-style markdown file.

## 2) Homepage content formatting issues (`index.md`)

- Two top-level H1 headings are used sequentially (`# Home` and `# Mahadev Upadhyayula`), which creates inconsistent page hierarchy.
- Under "Selected Case Studies", descriptive content appears under the wrong heading:
  - "Architected a collaborative AI-agent framework... meal plans." appears before the `### Meal Prep Optimization – Multi-Agent System` heading, making it visually attached to the previous section.
- A likely typo-level spacing issue appears in "40% ." (extra space before punctuation).

## 3) Content consistency issues likely visible as formatting/navigation problems

- The case-study index and deep-dive index still contain Notion-export URL patterns (`%20`, long UUID-like suffixes, emoji-prefixed filenames) that do not match the repository's current normalized filenames.
- This causes users to experience broken navigation even though the target markdown pages exist with simplified names.

## 4) Environment/tooling note

- `markdownlint-cli` could not be installed due registry access restrictions in this environment, so the audit used a local scripted broken-link scan instead.
