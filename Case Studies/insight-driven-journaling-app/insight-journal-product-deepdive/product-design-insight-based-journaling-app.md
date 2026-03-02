**📌 Product Design - Insight based journaling app**

### Why journaling?

- Journaling is a tool
- knowledge workers and high performance professionals use
- used to :
    - reflect on  thoughts
    - share emotional outlook on how they are progressing towards their goal.

This tool is phenomenal in building:

- self-awareness
- ensuring great mental clarity
- helps in decluttering minds
- ensuring  day to day actions are conducted without any emotional baggage blocking them.

### Current journaling modes:

- Traditional journals (physical books)
- Digital journals (any notes taking app)
- Audio notes ( again no simple way to go through your thoughts to gain any value added insights)

### Painpoints in journaling?

- Journaling historically has been a passive activity.
- Users reflect their thoughts —> forget about them (no reviews to gain insights)
- No explicit feedback loop directly aiming at self-improvement, and increasing self-awareness
- stressful to unpack emotionally loaded baggage
- difficult to know if journaling is helpful or not
- difficult to maintain consistency
- Not knowing what to journal about

## Problem Statement

Journaling today captures thoughts, but fails to surface patterns. Without a feedback loop, users struggle to sustain the habit because they can’t see how their reflections translate into growth.

## User Segmentation

| User Segments | Impact | Risk | Complexity | Reasoning |
| --- | --- | --- | --- | --- |
| High performing knowledge professionals who understand the importance of journaling | High | Low | Low | Any improvement to the journaling tool would have high impact on the performance of these professionals as they are easily adapting and value great insights, where as there no perceivable risks associated.  |
| 
Novices who are new to journaling or do not understand much about its benefits | Low | Low | Low | Since, this user segment is not used to journaling as a tool they have low probability of adapting to the improvements while the risk and complexity are low as well. |
|  Coaches or mentors who use journaling as a tool for their clients | High | Low | High | Since this would be a 2 sided segment with highly customizable use cases, while the impact is high, the complexity of the problem is also high |
| Mental health professionals who use it as a tool for their patients | High | Very High | Very High | This segment is very sensitive, any improvements would have severe risks associated and the compliances with industry norms would add greater complexity |

Therefore, with Higher impact and lower risk and complexity, “High performing knowledge professionals who understand the importance of journaling” is chosen to be the user segment to which the journaling product would cater to. 

## User Pain points

- Difficult to maintain consistency.
- Emotionally draining activity (especially at the end of day)
- Most days having a mental block on what to reflect about.
- Lack of a feedback loop —> lack of insights on reflections
    - No way to dynamically adjust one’s actions to facilitate self-improvement
    - No way to gauge one’s progress

## Solutions

- Solition A: Improve consistency by providing gentle and encouraging notifications to help users continue their journaling habit.
- Solution B: Gamifying consistency by highlighting longest journaling streaks
- Solution C: AI generated prompts/ suggestions / questionnaire which guides user on what to reflect about.
- Solution D: AI - powered insights engine which analyzes reflections over a rolling period and derive change in patterns in the reflection’s tone and language and identify improvements, mood shifts, growth and problem areas, and provide daily insights and functional suggestions for improvements

## Solution Prioritization for MVP

| Solutions | Impact  | Effort  | Cost  |  |
| --- | --- | --- | --- | --- |
| Solution A | Low | Low | Low | ❌ |
| Solution B | Med | Med | High | ❌ |
| Solution C | High | High | High | ❌ |
| Solution D | High | Med | Med | ✅ |

While, solutions C and D both have high impact on the chosen user segment, solution C might require extensive LLM model development and testing which implies higher efforts and cost. For Solution D on the other hand, simple AI models can be used and their use could be highly limited only for the core tasks such as pattern recognition, summarization and insight generation.  Hence, for the purpose of the MVP, I would go ahead with solution D.

## Metrics of Interest

Goals and respective metrics:

- Valuing daily insights:
    - North Star metric ⇒  % of users viewing daily insights every day (hypothesis validated if this metric > 50% )
    - % of users who found daily insights helpful ( hypothesis validated if metric > 25%)
- Improved consistency: % of users making journal entry more than 7 days straight > 30 %

## Conclusion:

An AI powered journaling app was designed to drive insightful reflections and identify critical growth patterns for high performing professionals such as founders, PMs etc. who understand the importance of journaling but find it hard to stick to it because of lack of a feedback loop. 

Next: [🧩 MVP design - Insight driven Journaling App](mvp-design-insight-driven-journaling-app.md)
