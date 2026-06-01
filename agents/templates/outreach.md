# Outreach Templates

All FRS outreach agents reference these templates when personalizing messages.

---

## LinkedIn Connection Request (< 300 chars)

```
Hey {{name}}. I'm Ryan, founder of Future Ready Studio. We run AI-readiness assessments for bootstrapped SaaS at your stage. {{mirror_observation}}. Would value comparing notes.
```

**Hard rules for this template:**

1. **Always name Future Ready Studio explicitly.** Vague "I help founders…" phrasings read like every other LinkedIn DM. Named entity is more credible than role.
2. **Always include the "AI-readiness assessments for bootstrapped SaaS at your stage" clause.** It's the credential. The prospect needs to know in one phrase whether this is relevant.
3. **`{{mirror_observation}}` must be one sentence that proves research AND mirrors the founder's own framing.** Reference something concrete (their podcast, their public post, their roadmap, a specific market dynamic that hits their segment). 150 char budget for this clause.
4. **Always close with "Would value comparing notes."** Do not deflect with "no pitch," "not pitching," or "no agenda." State the positive ask instead of disclaiming what we're not doing.
5. **No em dashes (—), no en dashes (–), no space-hyphen-space ( - ).** Use periods, commas, or "and" instead. Verify before queuing.
6. **300 char cap (LinkedIn limit).** If over, compress `{{mirror_observation}}`, not the positioning clause. The positioning is the upgrade from the old template; never sacrifice it.

---

## LinkedIn Follow-up DM (after connection accepted)

```
Thanks for connecting, {{name}}. Quick question. As AI agents start reshaping how users interact with SaaS tools, have you thought about how {{company}} fits into that picture? I run AI-readiness assessments for bootstrapped SaaS founders in the {{space}} space, so this is the question I spend most of my week on. Happy to share patterns if useful.
```

---

## Cold Email (A/B Variants)

Three structurally distinct email variants. Every variant must still be hyper-personalized per the writer's hard rules (mirror the founder's own framing). They differ in STRUCTURE, not personalization depth, so any reply-rate difference is attributable to structure rather than effort. The writer assigns a variant per the A/B policy in its agent definition (even split until each variant has enough scored sends, then rank by reply/call rate). The chosen variant ID is recorded as `template_used` so outcomes stay attributable.

All variants obey `voice-guide.md`: no em dashes or en dashes, no hyphen-with-spaces, no banned words, "to" for ranges, email body under 200 words.

### Variant A: `hyper-personalized-email` (control)

The incumbent used for all sends to date. Full structure: mirror hook, then the named tension, then an explicit 20-minute call ask. 130 to 190 words.

```
Subject: {{specific_observation}}, the roadmap underneath it

{{name}},

{{mirror_hook}}

{{tension_bridge}}

I run a fixed-scope assessment for B2B SaaS at $500K to $5M ARR, 8 to 12 weeks, four deliverables. It starts with workflow research, not feature ideation.

Worth a 20-minute call to compare notes on where that research would start for {{company}}?

Ryan Irwin
Founder, Future Ready Studio
cal.com/futurereadystudio/discovery-call
```

### Variant B: `email-short-question` (brevity + curiosity)

Ultra short, under 90 words. Mirror observation plus ONE genuine question. No offer, no call ask, no signature block beyond the first name. Tests whether brevity beats the full pitch. Closing line names what the conversation is for instead of disclaiming what we're not doing.

```
Subject: quick one on {{company}} + agents

{{name}},

{{mirror_hook}}

{{one_question}}

Would value comparing notes on how you're framing it.

Ryan
```

### Variant C: `email-proof-led` (credibility first)

Leads with a concrete, real proof point or a sharp category-specific insight BEFORE any ask, then a soft low-commitment ask. 110 to 170 words. Tests whether leading with outcome or insight beats leading with the mirror hook.

```
Subject: what changed when {{peer_or_category}} got the sequence right

{{name}},

{{proof_or_insight}}

{{mirror_bridge}}

If useful, I can share the directional read on where I'd start with {{company}}, no commitment. Open to a short call or just trading notes here.

Ryan Irwin
Founder, Future Ready Studio
```

**Proof integrity:** `{{proof_or_insight}}` must be a real, approved outcome (e.g. the Scale Insights activation result Ryan has cleared) or a genuine category insight. Never invent metrics or clients. Fabrication violates the writer's hard rules.

---

## Warm Intro Request

```
Hey {{referrer}}. Quick ask. I'm looking to connect with SaaS founders who are thinking about AI strategy but haven't committed to a direction yet. {{prospect_name}} at {{company}} came to mind. Would you be open to making an intro? No hard pitch, genuinely just want to compare notes on how {{space}} tools are thinking about agents. Happy to share what I'm seeing in return.
```

---

## Variables

| Variable | Source |
|----------|--------|
| `{{name}}` | prospect first name |
| `{{company}}` | prospect company name |
| `{{space}}` | prospect's SaaS category (e.g., "analytics", "CRM", "project management") |
| `{{referrer}}` | mutual connection's first name |
| `{{prospect_name}}` | prospect full name (for intro requests) |
| `{{specific_observation}}` | one concrete thing from research about the prospect's product |
| `{{mirror_hook}}` | line 1 reflecting the founder's own stated AI posture or product strategy |
| `{{tension_bridge}}` | the specific gap between their current state and the AI-era shift they watch |
| `{{one_question}}` | a single specific, no-pitch question (Variant B) |
| `{{proof_or_insight}}` | a real approved outcome or genuine category insight, never invented (Variant C) |
| `{{mirror_bridge}}` | ties the proof/insight to this founder's situation, mirroring their framing |
| `{{peer_or_category}}` | an anonymized peer or the prospect's category (Variant C subject) |
| `{{mirror_observation}}` | one sentence proving research AND mirroring the founder's own framing (LinkedIn connect template). 150 char budget. |
