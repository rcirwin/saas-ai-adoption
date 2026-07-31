---
pillar: behind-the-process
angle: How I write an AI blueprint (structure + example), four parts with one worked example threaded through
date_drafted: 2026-07-31
status: draft
length_tier: medium
template: saveable-framework
linkedin_style: paragraph
---

An AI blueprint that names a model on page one is already out of date.

The model is the most replaceable decision in the whole document. It's also the one everyone wants to start with.

Here's the structure I actually use. Four parts, with one example running through all of them: an analytics product whose users do a weekly repricing pass by hand.

1. **The job, written as a result.** Not "help users reprice faster." It's "every Monday morning, the week's price changes are drafted and waiting for approval." If nobody can write the definition of done in one sentence, nothing else in the document holds up.

2. **The decision map.** Every judgment call in the workflow, listed, with who makes it today and on what basis. Then split into two columns: what's a rule, and what's actually judgment. "Never price below floor margin" is a rule. "This SKU's dip is seasonal, hold the price" is judgment. The second column is the part that doesn't exist in any training data. That's the moat, and it's the whole reason to write the blueprint.

3. **The escalation rules.** What the system is not allowed to decide alone, written before anything ships. A price change that drops a SKU under its historical floor gets held for a human, every time. Teams almost always write these after the first bad output. That's too late, and it's expensive.

4. **The feedback loop.** Where corrections get captured and what happens to them. Every held or edited price change gets logged with the reason. Otherwise the same human fixes the same mistake forever and the harness never compounds.

There's no model recommendation anywhere in it. Models change every few months. A decision map and a set of escalation rules don't.

A blueprint isn't a plan for a feature. It's the written-down version of the judgment your product already runs on.

Take your hardest workflow. Can you write its definition of done in one sentence right now?
