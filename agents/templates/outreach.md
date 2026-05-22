# Outreach Templates

All FRS outreach agents reference these templates when personalizing messages.

---

## LinkedIn Connection Request (< 300 chars)

```
Hey {{name}} — I help B2B SaaS founders figure out which AI features actually matter (and which to skip). Saw {{company}} and thought there might be an interesting conversation here. No pitch, just curious about your AI thinking.
```

---

## LinkedIn Follow-up DM (after connection accepted)

```
Thanks for connecting, {{name}}. Quick question — as AI agents start reshaping how users interact with SaaS tools, have you thought about how {{company}} fits into that picture? I've been working with SaaS founders in the {{space}} space on exactly this. Happy to share some patterns I'm seeing if useful.
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

Ultra short, under 90 words. Mirror observation plus ONE genuine question. No offer, no call ask, no signature block beyond the first name. Mirrors the "no pitch, just curious" register that earns LinkedIn replies. Tests whether brevity beats the full pitch.

```
Subject: quick one on {{company}} + agents

{{name}},

{{mirror_hook}}

{{one_question}}

No pitch, genuinely curious how you're thinking about it.

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
Hey {{referrer}} — quick ask. I'm looking to connect with SaaS founders who are thinking about AI strategy but haven't committed to a direction yet. {{prospect_name}} at {{company}} came to mind — would you be open to making an intro? No hard pitch, genuinely just want to compare notes on how {{space}} tools are thinking about agents. Happy to share what I'm seeing in return.
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
