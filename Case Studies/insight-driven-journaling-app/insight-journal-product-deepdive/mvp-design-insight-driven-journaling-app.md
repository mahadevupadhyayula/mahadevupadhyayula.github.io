---
layout: page
title: "🧩 MVP design - Insight driven Journaling App"
permalink: /case-studies/insight-driven-journaling-app/insight-journal-product-deepdive/mvp-design-insight-driven-journaling-app/
---


### Vision

Redefine journaling by turning reflection into insight.

### Goal

Launch and validate a phase-aware, insight-driven journaling MVP that improves retention compared to baseline writing-only behavior.

### MVP User Flow:


# A Minimalist MVP Design

## UI Design:

 

- Sign up page
- Journal Entry Page
- Insights Page
- Support Page
- Not-enough-data page


## AI Insights Engine:

## Highlevel Insights Engine logic

- Journal entry creates raw text
- AI used to generate Structured signals and embeddings from the raw text
- Latest structured signal + last 3 days structured signal aggregated using deterministic backend logic to generate summary structured signal
- AI used to generate daily insight using summary structured signals

Raw Text  → Using AI  → Structured Signals + Text Embedding

Then: 

latest Structured Signals + last 3 days structured signals → deterministic summary aggregation

latest Embeddings + last 3 days embeddings → similarity / clustering / pattern recurrence engine 

then: 

deterministic summary aggregation + similarity / clustering / pattern recurrence engine -> daily insights


## Structured Signals  and Text Embeddings:

- Emotional signals
- Themes/Topics
- Cognitive Patterns
- Goal References
- Behavioral Indicators
- Identity Signals
- Key Sentences (Embeddings)


These structured signals could be generated using:

- NLP processing: Technically complex but operational costs lower at scale as using AI models at this stage would increase the costs
- AI model: Technically simpler but would add costs at scale

For the purpose of MVP, we are using AI to generate structured signals and text embeddings from the raw text.

## Aggregated Summary Signals

Daily insights are NOT based on just today’s entry. They are based on:

- Short-term patterns (last 3–7 days)
- Medium-term trends (last 30 days)
- Recurring historical patterns

The aggregated summary of  structured signals are generated using deterministic backend logic. 

### Aggregation Layers

Layer 1 — Short-Term Emotional Drift

Aggregate structured signals:

- Avg emotion intensity (last 3–5 entries)
- Polarity shift (increasing negativity?)
- Volatility (emotion swings)

Insight example:

> “Your emotional intensity has increased 40% in the last 4 days, mostly around work.”
> 

Layer 2 — Recurring Theme Clustering

Use embeddings to detect:

- Similar emotional contexts recurring
- Repeated themes tied to similar emotion

Example:

User feels frustrated whenever “team meetings” appear.

Insight:

> “You’ve mentioned frustration around team discussions 6 times in the past 2 weeks.”
> 

---

## Daily Insights

Finally, AI is used to generate daily insights using the aggregated summary structured signals and the Recurring Theme Clusters. 

### 5 core rules for MVP (guardrails):

1. Only comment on signals that cross recurrence threshold.
2. Anchor insight to past 3 or 7 day rolling data.
3. Include at least one named emotion + one named theme.
4. Avoid diagnosis or therapy-style language.
5. Keep insight under 180 words.

---

### 🔥 Most Important Principle

AI should feel like:

- A pattern analyst reflecting your behavior not a therapist or a motivational coach.
- If signals detect for extreme hopelessness or self-harm ideation or severe distress markers, switch to:
    - Supportive tone
    - Encourage external help
    - No analytical commentary

This would be a separate safety pathway.

## Scope for MVP:

### Scope of AI in MVP

In Scope ✅

- Generating structured signals and text embeddings from raw text.
- Generating daily insights from aggregated summary signals.

Not in scope ❌

- Directly generating insights from raw text
- Detect non-linear patterns
- Discover emergent clusters
- Infer hidden correlations
- Detect subtle behavioral trajectories
- Using AI for Long-Term Pattern Modeling (not in the scope of MVP)
- Dynamic Prompt Evolution

### Structured Signal Extraction

Signals in Scope ✅

- Primary emotion
- Emotional intensity (0–1)
- Polarity
- Themes (max 3)
- Cognitive patterns (max 3)
- Identity statements (if any)
- Goal reference (yes/no + sentiment)
- Text embedding

Signals not in scope ❌

- Agency score
- Behavioral scoring
- Complex psychometrics
- Latent personality modeling

### Deterministic Aggregation: 3 or 7 Day Rolling Window Only

In Scope ✅

- Avg emotional intensity (3 days)
- Emotional direction (↑ / ↓ / stable)
- Most frequent theme
- Most frequent cognitive pattern
- Identity recurrence count
- Goal mention frequency

Not in scope ❌

- 30-day modeling
- Baseline normalization
- Volatility index
- Cross-domain correlation
- Predictive scoring

### Pattern Recurrence Engine

In Scope ✅

- Detect similarity > threshold
- Flag repeated semantic statements
- Return top recurring thought cluster

Not in scope ❌

- No deep clustering
- No complex graph models

### Daily Insight Generation

In Scope ✅

Input:

- Deterministic summary
- Recurrence result
- 1–2 supporting sentences

Output:

- 120–180 word insight
- 1 observation
- 1 interpretation
- 1 optional reflection question

Not in scope ❌

- Coaching plan
- Multi-step action guidance
- Behavioral prescriptions
- Mental health framing

🚫 Explicitly Out of MVP

You do NOT build:

- Long-term emotional baseline modeling
- Personalization engine
- Predictive risk modeling
- Identity evolution tracker
- Weekly reports
- Insight ranking AI
- Self-improving prompt loops
- Adaptive tone engine
- Coaching plan
- Multi-step action guidance
- Behavioral prescriptions
- Mental health framing
