---
layout: page
title: "📄 Product Requirements Document (PRD)"
permalink: /case-studies/insight-driven-journaling-app/insight-journal-product-deepdive/product-requirements-document-prd/
---


## Product: Insights-Driven Journaling App

## Version: MVP v4 (Phase-Aware + AI Governance)

## Author: Mahadev Upadhyayula

---

# 1. Overview

## Problem

People journal for clarity and growth, but:

- Insights remain buried in text
- Progress is invisible early on
- Feedback is delayed or nonexistent
- Users drop off before seeing value

Existing journaling tools like Day One and Reflectly focus primarily on writing experience and mood logging — not adaptive intelligence that evolves with user data.

## Opportunity

Build a progressive AI reflection system that:

- Builds trust immediately
- Deepens insight over time
- Increases behavioral awareness
- Improves journaling retention

---

# 2. Core Product Hypothesis

> Progressive insight depth increases trust and improves journaling retention.
> 

---

# 3. MVP Scope Overview

Ultra-lean build:

**User writes → System detects phase → AI generates adaptive response**

No dashboards.

No analytics UI.

No gamification.

The adaptive intelligence layer is the product.

---

# 4. Feature Requirements

---

## 4.1 Journal Entry System

- Free-text input
- Submit button
- Timestamped storage
- Secure authentication
- Minimum character threshold (e.g., 100 characters)

---

## 4.2 Phase-Aware Insight Engine

System adapts response depth based on total entries.

### Phase 1 (1–2 entries): Reflection Amplification

- Emotional mirroring
- Thought expansion
- 1 reflective question
- No pattern claims

### Phase 2 (3–5 entries): Micro-Pattern Detection

- Repeated keyword detection
- Light sentiment comparison
- Probabilistic phrasing only

### Phase 3 (6+ entries): Pattern Insight

- Recurring theme detection
- Emotional trend analysis
- Trigger identification
- One actionable suggestion

---

# 5. Where AI Is Actually Required

AI should be used only where deterministic logic fails.

### AI Required For:

1. Emotional tone detection
2. Thematic clustering of unstructured text
3. Reflection expansion generation
4. Context-aware summarization
5. Natural language phrasing of insights

Without AI, these would require complex NLP systems.

---

# 6. Where AI Is NOT Required

Avoid using AI where simple logic works.

AI is NOT required for:

- Entry count detection
- Phase switching logic
- Timestamping
- Authentication
- Character threshold enforcement
- Keyword frequency counting (can be deterministic pre-processing)
- Basic sentiment scoring (can use lightweight NLP before LLM call)

Principle:

> Use AI for interpretation and language generation, not control flow or logic.
> 

This reduces cost, latency, and unpredictability.

---

# 7. AI Design Principles (Do’s and Don’ts)

---

## ✅ AI Do’s

### 1. Quote the user

Insights should reference exact user phrases when possible.

### 2. Use probabilistic language early

Phase 1 & 2 must avoid certainty.

Use:

- “It seems…”
- “You often mention…”
- “This might indicate…”

### 3. Limit suggestions

Max 1 actionable suggestion in Phase 3.

### 4. Keep responses short

Max 3 short paragraphs.

### 5. Build progressive authority

Insight confidence increases only as data increases.

---

## ❌ AI Don’ts

### 1. No medical claims

Never diagnose depression, anxiety, trauma, etc.

### 2. No deterministic behavioral conclusions

Never say:

- “You have burnout.”
- “You suffer from X.”

### 3. No moral judgment

Avoid:

- “You should stop…”
- “You are failing to…”

### 4. No overconfidence in early phases

Phase 1 cannot claim patterns.

### 5. No life-altering directives

Never:

- Advise quitting jobs
- Ending relationships
- Financial decisions

This is a reflection tool, not a therapist.

---

# 8. Handling Sensitive Entries

This is critical for trust and safety.

Sensitive categories include:

- Self-harm language
- Suicidal ideation
- Abuse disclosures
- Severe emotional distress
- Violence intent

---

## 8.1 Detection Strategy

Before generating insight:

1. Run content through safety classifier.
2. If high-risk signals detected → override standard phase logic.

---

## 8.2 Sensitive Response Mode

If high-risk content is detected:

The system must:

- Pause pattern generation
- Avoid analytical tone
- Switch to supportive mode

Example response:

> I’m really sorry that you’re feeling this way.
> 
> 
> You don’t have to handle this alone.
> 
> If you're in immediate danger or considering harming yourself, please reach out to local emergency services or a trusted person right now.
> 

No analysis.

No pattern detection.

No suggestions beyond safety.

---

## 8.3 Regional Helpline Consideration

In later versions:

- Detect user region
- Provide relevant crisis helpline numbers

MVP may include generic guidance.

---

## 8.4 Logging & Privacy

Sensitive entries:

- Must not be flagged visibly to user
- Must not be used for behavioral modeling
- Must not trigger external notifications

User privacy remains intact.

---

# 9. Data & Privacy Principles

- No resale of data
- No training external models on user entries without consent
- Clear privacy policy
- Option to delete all data
- Encrypted storage at rest

Trust is foundational.

---

# 10. Explicitly What the MVP Will NOT Do

The MVP will NOT:

- Provide dashboards
- Show emotional graphs
- Track habits/goals
- Send push notifications
- Offer therapist matching
- Diagnose mental health conditions
- Replace professional support
- Use AI to score personality traits
- Auto-contact authorities
- Make irreversible recommendations

---

# 11. Success Metrics

## North Star Metric

% of users who journal again within 7 days after AI response.

## Safety Metrics

- % sessions triggering sensitive mode
- False positive rate of safety classifier
- User feedback on response appropriateness

---

# 12. Risks

### Risk 1: AI hallucination

Mitigation:

- Restrict output length
- Strict prompt constraints

### Risk 2: Over-interpretation

Mitigation:

- Progressive phase system
- Enforced uncertainty language

### Risk 3: Harmful response to sensitive content

Mitigation:

- Safety override system
- Human-reviewed response templates

---

# 13. Summary

This MVP is:

- An adaptive AI reflection engine
- Governed by strict AI usage boundaries
- Designed for progressive trust
- Built with safety-first architecture

It does not attempt therapy.

It does not replace professional help.

It focuses on reflective awareness and retention validation.
