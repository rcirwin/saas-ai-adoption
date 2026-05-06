---
pillar: pm-lessons
angle: Why the feature users ask for isn't the feature they need
date_drafted: 2026-05-06
status: draft
length_tier: medium
template: pattern-story
---

The most expensive feature I ever shipped was exactly what users asked for.

A power user wrote in. Then ten more. Then a top customer escalated.

They all wanted the same thing: a button to bulk-edit a column in our analytics tool.

We built it. Clean UI, fast, well tested. Adoption was fine for a week, then it cratered. The same users kept writing in with new requests that sounded suspiciously similar.

I went back and watched recordings of how they were actually using the tool before the feature shipped. Every one of them was bulk-editing because a number upstream was wrong, and our pipeline didn't let them fix it at the source. They were patching the same data, over and over, in the only place we'd given them a knob.

The bulk-edit button wasn't the feature. It was a workaround they'd taught themselves to ask for, because asking for "fix your data ingestion" sounds less reasonable in a support ticket.

I've seen this shape repeat across three companies now. Users don't describe problems. They describe the closest button-shaped thing to a problem.

If you take the request at face value, you ship faster. You also ship the wrong thing, and you stack a second feature on top of it six months later when the workaround stops scaling.

The question I started asking instead: "What were you about to do right before you needed this?" The answer is almost never the feature. It's the workflow upstream that broke.

This matters more with AI features, not less. An AI bulk-editor is still a bulk-editor. The model doesn't fix the upstream pipe.

What's a feature you shipped that users asked for, and then quietly stopped using?
