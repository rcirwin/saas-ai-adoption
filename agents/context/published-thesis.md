# Published Thesis (Ryan's Stated Positions)

Curated record of substantive positions Ryan has staked out in published LinkedIn posts. Future posts should *build on* these positions, not contradict them.

**When this file conflicts with a new draft, the new draft must either:**
1. Build forward on the existing position (preferred), or
2. Explicitly flag the contradiction and check with Ryan before publishing.

Update this file whenever a post is published with new substantive claims.

---

## Synthesized position (across all posts)

Ryan's evolving thesis on AI and B2B SaaS:

1. **Tool-as-product is ending.** Software that helps humans do the work is being displaced by software that does the work.
2. **Workflow ownership + encoded judgment is the durable moat.** Not the model, not the buttons.
3. **Thin slices get commoditized.** Either an agent absorbs them, the frontier model swallows the function, or a competitor rebuilds the slice cheaper.
4. **The harness is the product.** Models commoditize; the judgment encoded around them is the moat. When the model improves, the harness improves with it.
5. **SMEs are not being replaced. They are being repositioned.** The medium-term value of deep domain expertise is becoming the architect of the systems that scale it.
6. **Audience:** B2B SaaS founders / operators AND domain experts (SMEs) themselves. Ryan speaks to both.

---

## Locked-in claims (do not contradict)

Future posts must remain consistent with these:

- SaaS for 20 years was "software that let a human do the service." Agents now make the literal version possible, and the market wants it.
- **Pricing:** Per-seat = tool pricing model (dying). Per-outcome = service pricing model (winning).
- **Competition:** B2B software is no longer competing with other SaaS in its category. It competes with the agency, contractor, or in-house hire the buyer would have used instead.
- **"Tool" is becoming a buyer's red flag.** Buyers are shifting from "can this help my team do X?" to "does this just do X?"
- **Workflow ownership:** Owning 1/7 of a workflow → commoditized. Owning 7/7 + delivering the result → you ARE the service.
- **The bottleneck isn't model intelligence.** It's absence of domain context. AI hits a wall in niche domains where data is fragmented or locked in human heads.
- **Two arbitrages:**
  - **Arbitrage 1 (already in motion, closing):** Rely on the LLM's own decision-making. Point models at tasks, trust raw capability. Most "AI for business" tools live here. Closes as models commoditize.
  - **Arbitrage 2 (now opening, compounding):** Design AI harnesses that pair raw model capability with deep domain expertise. SOPs, tool routing, escalation rules, KPIs, feedback loops.
- **The harness as moat:** The judgment encoded in a harness doesn't exist in training data. When the model improves, the harness compounds.
- **Stop building the tool, start completing the job.** This is the prescriptive call.

---

## Coined / signature phrases to keep using

Consistency builds brand. Reuse these when they fit:

- "Workflow first. AI second."
- "Stop building the tool, start completing the job."
- "The model is the engine. The harness is the product."
- "Own the workflow end-to-end. Complete it. Hand the user the result."
- "Software as a Service was always a misnomer."
- Two-arbitrages framing: "the one that became clear first" / "now becoming clear"
- "SMEs becoming architects of the systems that scale their judgment."
- "1 of 7 vs 7 of 7" workflow ownership framing

---

## Companies cited (so far)

Used as "harness wins" examples. **Future posts should rotate to fresh examples to avoid repetition.**

- **Cursor** (code): file context, IDE-native interaction, project-aware tool use
- **Harvey** (legal)
- **Sierra** (customer support, Bret Taylor)

**Unused candidates for future posts** (verify currency before citing):
- Decagon (CX support)
- Hebbia / AlphaSense (financial research)
- Glean (enterprise search)
- EvenUp (personal injury law / demand letters)
- Replit Agent (dev environments)
- Cognition / Devin (autonomous SWE)
- Casetext / CoCounsel (legal, acquired by Thomson Reuters)

---

## What's left open (building blocks for future posts)

Threads Ryan has gestured at but not yet developed. Strong candidates for new angles:

- **HOW to build a harness.** Practical tactics: pick the workflow, encode the SOPs, decide latent vs deterministic boundaries, design KPIs, set escalation rules.
- **Failure modes of harness-building.** Over-encoding, under-encoding, brittleness, edge-case explosions.
- **Latent vs deterministic** distinction (Garry Tan vocabulary). Useful frame Ryan hasn't borrowed yet but is compatible.
- **Skill files as compounding assets** (Tan vocab). "Skills never degrade. When the next model drops, every skill instantly gets better."
- **Pricing model specifics.** Hybrid models, value-share, results-based gating. Ryan has only established per-seat vs per-outcome at the framing level.
- **Vertical-specific examples** beyond tech-adjacent (healthcare, finance, ops, services).
- **The SME's career transition.** What it looks like to go from "doing the work" to "architecting the harness."
- **Why Arbitrage 1 isn't dead, just narrowing.** There's still value to unlock, but the appetite outgrows the raw LLM.

---

## Published posts (chronological)

### 2026-05-03: "Software as a Service was always a misnomer"
- **File:** `agents/drafts/2026-05-03-own-more-of-the-workflow.{md,linkedin.txt,twitter.txt}`
- **Pillar:** `ai-agent-thesis`
- **Thesis:** SaaS as a tool is dying. The winners in the agent era will own and complete the workflow. SaaS, finally taken literally.
- **Audience:** B2B SaaS founders / product leaders.
- **Key payload:** Three-block analysis (Pricing / Competition / Vocabulary) + the 1-of-7 vs 7-of-7 workflow ownership frame.

### 2026-05-12: "Timing arbitrage and the SME harness"
- **File:** `agents/drafts/2026-05-12-timing-arbitrage-sme-harness.{md,linkedin.txt,twitter.txt}`
- **Pillar:** `ai-agent-thesis`
- **Thesis:** In a revolution, timing beats prediction. The next arbitrage is encoding SME judgment into AI harnesses, not replacing SMEs with AI.
- **Audience:** B2B SaaS operators AND SMEs / domain experts directly. Ryan deliberately expanded the addressee in the bolded takeaway.
- **Key payload:** Two-arbitrages framework. Cursor / Harvey / Sierra as harness-wins examples. "The model is the engine. The harness is the product."
- **Note:** The published version diverges from the `.md` source. Source of truth for what was published = the `.linkedin.txt` file.

---

## Maintenance protocol

When a new post publishes:
1. Append a new entry under "Published posts" with date, file path, pillar, thesis, audience, key payload.
2. If the post stakes a new substantive claim, add it under "Locked-in claims."
3. If it introduces new coined phrases worth reusing, add under "Coined / signature phrases."
4. If it cites new companies, add to "Companies cited (so far)" and remove from "Unused candidates."
5. If it closes off a building block (covers a thread previously listed under "What's left open"), remove that item from the open list.

Keep this file under ~400 lines. If it grows beyond that, archive older "Published posts" entries to a `published-thesis-archive.md` file but keep the synthesized position and locked-in claims here.
