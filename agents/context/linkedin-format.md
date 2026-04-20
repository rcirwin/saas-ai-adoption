# LinkedIn Format Reference

External, structural guidance for high-performing LinkedIn posts. Voice, tone, banned words, and topic selection live in `agents/voice-guide.md` — this file only covers **format, structure, and algorithm-aware tactics**. When this file conflicts with `voice-guide.md` on style, voice-guide wins.

Audience for the resulting posts: B2B SaaS founders, CEOs, product leaders. Mobile-first readers (LinkedIn reports ~60% of feed views are mobile).

---

## 1. The "see more" truncation cutoff

LinkedIn truncates a text post in the feed at roughly **210 characters on mobile** and **~300 characters on desktop** before showing a "see more" link. Whatever sits above that line is the entire pitch for the click.

**Engineer the first 3 lines.** A "line" on mobile is roughly 60-80 characters depending on word breaks. The visible window before the cut is 2-3 short lines.

**Do:**
- Open with a hook in line 1 that creates a curiosity gap or stakes.
- Use line 2 to widen the gap or sharpen the stake — never to soften it.
- If line 3 is visible, end it on a hanging clause or a colon that forces the click.
- Keep all content above the fold under ~210 visible characters.

**Don't:**
- Don't open with a greeting, throat-clear, or context. ("Recently I was thinking about..." is dead on arrival.)
- Don't put the punchline above the fold. Reveal it after the click.
- Don't use long words or compound sentences in lines 1-3.

---

## 2. Hook patterns that win for B2B / tech

The opening line does ~80% of the work. Top patterns observed across the B2B/tech creator set (Justin Welsh, Lara Acosta, Sahil Bloom, Shaan Puri, Richard van der Blom's analyses, Dickie Bush):

| Pattern | Skeleton | When to use |
|---|---|---|
| **Contrarian claim** | "Most [X] are wrong about [Y]." | Thesis posts, frameworks |
| **Specific observation** | "I [did specific thing N times]. One pattern keeps showing up." | Story / lesson posts |
| **Concrete stake** | "Your [thing] is [losing/leaking/invisible]. Here's what it costs." | Problem-aware audience |
| **Uncomfortable question** | "What happens when [shift] makes [current playbook] obsolete?" | Trend posts, predictions |
| **Stat shock** | "[Surprising number]. That's [reframe of what it means]." | Data-driven posts |
| **Confession / reversal** | "I used to believe [common view]. I was wrong." | Lesson / credibility posts |
| **Naming the elephant** | "Nobody wants to say it, but [uncomfortable truth]." | Strong-opinion posts |

**Do:** Pick one pattern per post. Make the hook fit *the post's actual payload* — a contrarian hook on a non-contrarian post reads as bait.

**Don't:** Don't stack hooks ("Most people are wrong. Here's a stat. Let me tell you a story."). Don't open with a question that has an obvious yes/no answer.

---

## 3. Optimal post length

Current LinkedIn algorithm (2024-2025) favors **dwell time** over reach-per-impression. Longer posts that hold attention now outperform shorter posts on impressions, reversing the 2019-2021 short-form bias. Richard van der Blom's annual *LinkedIn Algorithm Report* and Buffer's analyses both show:

- **1,200–2,000 characters** (~200–350 words) is the current sweet spot for impressions on text posts.
- **Under 600 characters** posts skew toward engagement-per-impression but cap impressions.
- **Over 2,500 characters** loses scroll completion unless the structure is unusually strong.

**Do:**
- Default to ~200–350 words for thesis, story, and framework posts.
- Use short posts (<150 words) only for sharp single observations or punchlines.
- If going long, break it into 6–10 visible "blocks" with whitespace so it scans like a list.

**Don't:**
- Don't pad to hit length. Empty lines don't count toward dwell time the way readable content does.
- Don't write a 600-word post when 200 words says it.

---

## 4. Line breaks and whitespace

LinkedIn renders single line breaks as visible breaks. Top performers use this aggressively for mobile rhythm.

**Do:**
- Single-sentence "paragraphs". A paragraph of 3 sentences feels like a wall on mobile.
- Drop a blank line between every idea unit.
- Use leading dashes for lists: `– point` (en dash works; the writer agent is banned from em dashes — use `-` or `–`).
- Use arrows `→` sparingly to show cause/effect on a single line.
- Leave a blank line before the closing question.

**Don't:**
- Don't write blocks of 4+ lines without a break.
- Don't bold every other sentence — bolding loses meaning when overused (and LinkedIn requires Unicode-bold characters, which screen readers butcher).
- Don't center-align with leading spaces. It looks broken on desktop.

---

## 5. Body structure templates

Pick one. Don't mix.

### Template A: Contrarian Thesis → Evidence → Reframe → Call

```
[Contrarian claim, 1 line]

[Why the conventional view is wrong, 1-2 lines]

I've seen [N specific situations]. Same pattern:
– [Evidence 1]
– [Evidence 2]
– [Evidence 3]

[Reframe: what's actually happening]

[Implication for the reader]

[Specific question]
```

Best for: thesis posts, hot takes, "agent-readiness" type arguments. Highest comment rate.

### Template B: Specific Observation → Story → Lesson → Question

```
[Specific opening observation, 1 line]

[Setup: who, where, what was happening — 2-3 short lines]

[The turning point or surprise — 1-2 lines]

[What it taught me, generalized — 1-2 lines]

[Question that invites the reader's version]
```

Best for: PM lessons, founder stories, anonymized client patterns. Highest save rate.

### Template C: Frame → Numbered Framework → Application → Save Bait

```
[1-line problem framing]

[Why the usual approach fails — 1-2 lines]

The 3 questions I ask before [doing X]:

1. [Question + 1 line of why it matters]
2. [Question + 1 line of why it matters]
3. [Question + 1 line of why it matters]

[How to use it tomorrow — 1 line]

[Question that invites pushback or addition]
```

Best for: workflow-first, frameworks, tactical posts. Highest share/repost rate.

### Template D: Stat Shock → Context → Implication → Stake

```
[Number + tight reframe, 1 line]

[What that number actually means in plain terms — 1-2 lines]

[Why it's happening — 1-2 lines]

[What changes for the reader if they take it seriously — 1-2 lines]

[Question that forces a position]
```

Best for: trend-spotting, market shift posts. Highest forward-share rate.

---

## 6. Closing CTA patterns

The last line is the second-most-important line in the post (after the hook). It determines comment rate, which determines reach.

**Do:**
- Ask a *specific* question tied to the post's content. ("What's one workflow in your product an agent couldn't complete today?" beats "Thoughts?")
- Force a position: "Which one are you betting on?" beats "What do you think?"
- Invite addition: "What would you add to the list?" works on framework posts.
- Soft challenge: "If you disagree, where am I wrong?" Generates high-quality comments without flame bait.

**Don't:**
- Don't end on "Thoughts? 👇" or "Agree?" — generic prompts get generic comments, which the algorithm reads as low-signal.
- Don't end with a link. Outbound links in the post body suppress reach (LinkedIn deprioritizes posts that send users off-platform). Put links in the first comment if needed.
- Don't end with a CTA to DM you. It signals selling and dampens comments.

---

## 7. Algorithm-aware formatting

What the 2024-2025 algorithm rewards and punishes:

**Rewards:**
- Dwell time (people reading slowly, expanding "see more").
- Comments with >12 words ("knowledgeable comments" weight).
- Replies *from the author* within the first 60-90 minutes.
- Reposts (much heavier weight than likes).
- Saves (signal of long-term value).

**Punishes:**
- Outbound links in the post body (suppression of ~25-50% reach in most analyses).
- Engagement-bait phrasings ("comment YES below," "tag a friend who needs this").
- Edits within the first 10 minutes after posting (treated as suspicious).
- Hashtag spam (>3 hashtags correlates with lower reach).
- Posts identical or near-identical to recent ones from the same account.

**Do:**
- Use 0–3 hashtags, placed at the very end on their own line. Niche tags (`#B2BSaaS`, `#ProductManagement`) outperform generic ones (`#AI`, `#Innovation`).
- Reply to every comment in the first 90 minutes with a substantive answer (not "thanks!").
- If a link is essential, post it as the first comment with a short "link in comments" note in the post body.
- Text-only posts and document carousels (PDFs uploaded as native carousels) currently get the highest reach. Single images underperform plain text.

**Don't:**
- Don't tag people who haven't agreed to be tagged. Negative-signal if they don't engage.
- Don't post and ghost. No author replies = lower comment depth = lower reach.
- Don't use emoji as bullet markers (🔥 ✅ 👉). Reads as low-effort. Plain dashes win.

---

## 8. Engagement-trigger tactics

Specific phrasings that empirically lift comment rate:

- **"What would you add?"** at the end of a numbered list. Invites contribution without demanding agreement.
- **"Where am I wrong?"** after a strong claim. Invites disagreement from people who feel smart correcting you.
- **A named framework with a memorable label.** ("The 3-question test." "The legibility gap.") People quote labels back in comments and reposts.
- **A fill-in-the-blank.** "The hardest part of [X] is ___ ." Low-friction comment.
- **A binary forced choice.** "Build it in-house, or buy?" Forces a side.

**Do:** Pick one engagement trigger per post. Match it to the template.

**Don't:** Don't beg. "Please share if you found this useful" reduces shares.

---

## 9. Named templates the writer can pick from

When drafting, declare which template is in use (in the agent's internal notes, not the post). Three go-to templates for FRS:

### 🅰 "The Legibility Hook" (Contrarian Thesis)
Open with a stake about something the reader didn't realize was breaking. Use Template A. Best for `ai-agent-thesis`, `contrarian-takes`.

```
[Thing they own] is [breaking in invisible way].

Not because [obvious reason]. Because [non-obvious reason].

I've been [doing specific work]. The same gaps show up:
– [gap 1]
– [gap 2]
– [gap 3]

[Reframe of what's actually happening.]

[The structural fix, 1 line.]

[Specific question tied to the gap list.]
```

### 🅱 "The Pattern Story" (Observation → Lesson)
Open with a specific observation. Use Template B. Best for `pm-lessons`, `behind-the-process`.

```
[Specific observation across N events.]

[Setup of one representative case, anonymized — 2-3 lines.]

[The moment the pattern clicked.]

[The generalizable lesson.]

[Question inviting their version.]
```

### 🅲 "The Saveable Framework" (Numbered Test)
Open with a sharp problem framing, hand them a numbered framework they'll screenshot. Use Template C. Best for `workflow-first`, tactical posts.

```
[1-line problem framing.]

[Why the usual approach misses — 1-2 lines.]

The [N] questions I ask before [doing X]:

1. [Question.] [Why it matters in 1 line.]
2. [Question.] [Why it matters in 1 line.]
3. [Question.] [Why it matters in 1 line.]

[How to apply it this week — 1 line.]

[Specific question or "what would you add?"]
```

---

## 10. Pre-flight checklist for every draft

Before saving the draft, verify:

- [ ] Line 1 passes one of the 4 hook tests in `voice-guide.md`.
- [ ] First 210 characters create a curiosity gap or concrete stake.
- [ ] No em dashes anywhere. (`-` or `–` only.)
- [ ] Paragraphs are 1-3 lines max. Whitespace between every idea.
- [ ] Length matches the chosen template (200-350 words for default).
- [ ] No outbound links in the post body.
- [ ] 0-3 hashtags, niche, on their own line at the end (if used at all).
- [ ] Closing line is a *specific* question, not "thoughts?"
- [ ] No banned phrases or LLM tells from `voice-guide.md`.
- [ ] One template in use, not a mash-up.
