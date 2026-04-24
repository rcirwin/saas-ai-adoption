---
pillar: workflow-first
angle: The 3 questions to ask before building any AI feature
date_drafted: 2026-04-24
status: draft
length_tier: medium
template: saveable-framework
---

Most AI features fail before a single line of code gets written.

Not because the model is wrong. Because the team started with "where can we add AI?" instead of "where is the workflow actually breaking?"

The 3 questions I ask before building any AI feature:

1. What step in this workflow do users do the same way every single time?
   Repetition is the cheapest signal of automation value. If it varies every time, AI won't save them anything.

2. Where do users currently export to a spreadsheet?
   That's a flashing light. Export is a workaround. It means your product stopped being useful at that step and the user went somewhere else to finish the job.

3. Is the user asking for a suggestion, or an action?
   Suggestions are easy to ship and easy to ignore. Actions are harder to build and harder to walk back. Most "AI assistant" features fail because they suggest when the user wanted the thing done.

If the feature doesn't clear all three, it's probably a demo, not a workflow tool.

The teams that ship AI that actually gets used don't start from the model. They start from the repeated task, the spreadsheet export, and the action the user would pay to skip.

What's one workflow in your product where users still export to a spreadsheet?
