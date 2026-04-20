# FRS Cloud Routines Setup

5 scheduled sessions to create in Claude Code on the web. Each instruction below is fully self-contained — copy/paste the whole block into the "Instruction" field of the routine.

## Prerequisites

- Complete `agents/SETUP.md` (create Sheet, bootstrap tabs, share service account, set 3 project secrets)
- `main` branch allows direct pushes
- Linear MCP connected at your Claude account level

---

## 1. Weekly Content Planner

| Field | Value |
|---|---|
| **Name** | `FRS — Plan Week` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 1 * * 1` |
| **UTC → ET** | Mon 01:00 UTC = Sun 9pm ET (EDT) |

**Instruction (copy/paste):**

```
Invoke the frs-content-planner subagent. Plan 3 LinkedIn posts for the upcoming week (target publish: next Monday, Wednesday, Friday).

The subagent will:
- Read agents/pillars.md for the 6 content pillars and cadence guidance
- Read recent posts via `python3 scripts/sheet.py read posts --json` and weight pillars by lead-gen outcomes (calls_booked > dms_received > profile_clicks > reactions > impressions)
- Read existing backlog via `python3 scripts/sheet.py read post_ideas status=backlog --json` and promote any ready ideas before creating new ones
- Pick 3 (pillar, angle) pairs with no pillar repeated and no angle used in the last 60 days
- Append each planned post to the `post_ideas` Sheet tab via `python3 scripts/sheet.py append`
- Create one Linear issue per planned post in team RyanIrwin, project Future Ready Studio, label `content`, titled `[Content] <pillar>: <angle>`, with a description that includes the slash command to draft it
- Link the Linear issue key back to the `post_ideas` row via `python3 scripts/sheet.py update`
- Write the plan to agents/plans/<YYYY>-W<WW>.md

CRITICAL — after the subagent finishes, commit and push all changes to main so downstream agents (Draft Post on Monday) can read the plan:
1. Run: git add agents/plans/ .claude/agent-memory/ && git commit -m "[planner] Week plan <YYYY>-W<WW> — 3 posts scheduled"
2. Run: git push origin main
3. If push fails, retry up to 4 times with 2s/4s/8s/16s delays between attempts.

When done, echo only the plan file path and the Linear issue keys. Do not paste the full plan body.
```

---

## 2. Draft Post (Mon/Wed/Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Post` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 10 * * 1,3,5` |
| **UTC → ET** | Mon/Wed/Fri 10:00 UTC = Mon/Wed/Fri 6am ET (EDT) |

**Instruction (copy/paste):**

```
Determine today's day of week in Eastern Time. Read the current week's content plan — find the most recent agents/plans/<YYYY>-W<WW>.md file. Find the row scheduled for today's date.

If a post is scheduled for today, invoke the frs-content-writer subagent with the pillar ID and angle from that plan entry. The subagent will:
- Read agents/voice-guide.md (strict voice rules) and agents/pillars.md (valid pillar IDs)
- Dedup against the last 30 days of posts for the same pillar via `python3 scripts/sheet.py read posts pillar=<id> --limit 30 --json`
- Draft the post following voice-guide.md hook rules and length tier
- Write the draft to agents/drafts/<YYYY-MM-DD>-<slug>.md with frontmatter (pillar, angle, date_drafted, status: draft, length_tier)

If no post is scheduled for today, write a 2-line note to agents/drafts/<YYYY-MM-DD>-no-plan.md explaining the gap and exit.

CRITICAL — after drafting, commit and push all changes to main so Ryan can review and other agents have the latest state:
1. Run: git add agents/drafts/ .claude/agent-memory/ && git commit -m "[writer] Draft post: <pillar> — <angle slug>"
2. Run: git push origin main
3. If push fails, retry up to 4 times with 2s/4s/8s/16s delays between attempts.

When done, echo only the draft file path and the hook (first line). Do not paste the full draft.
```

---

## 3. Weekly Prospect Sourcer

| Field | Value |
|---|---|
| **Name** | `FRS — Source Leads` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 11 * * 2` |
| **UTC → ET** | Tue 11:00 UTC = Tue 7am ET (EDT) |

**Instruction (copy/paste):**

```
Invoke the frs-prospect-sourcer subagent. Source 15 new B2B SaaS prospects for the Future Ready Studio pipeline, rotating across sources.

The subagent will:
- Read agents/context/sourcing.md (sources ranked by signal quality + disqualification rules) and agents/context/business.md (ICP)
- Load runtime ICP filters via `python3 scripts/sheet.py read config --json` (icp_arr_min, icp_arr_max)
- Build a dedup cache via `python3 scripts/sheet.py read prospects --json` — never add a company already in the CRM
- Rotate across AppSumo launches (last 12 months), Product Hunt SaaS archives, job boards with AI hiring signals, G2/Capterra category pages — roughly 3 leads per source
- Apply disqualification rules in order (cheap → expensive): dedup, B2C/services, >$50M ARR or >100 employees, already AI-native
- For each qualified prospect, append a row to the `prospects` tab via `python3 scripts/sheet.py append prospects id=<slug> company=... website=... category=... source=... status=identified created_at=<today> updated_at=<today>` (plus contact fields where discoverable)
- Create one Linear issue per new prospect: team RyanIrwin, project Future Ready Studio, label `prospect-research`, title `[Research] <company>`, description includes `/frs-research <id>`
- Write the sourcing summary to agents/sourcing-runs/<YYYY-MM-DD>-all.md

Hard-fail if `sheet.py read prospects` fails — don't risk duplicate rows. Cap at 15 new prospects.

CRITICAL — after sourcing, commit and push all changes to main so the Researcher (runs 2 hours later) can see the new prospects and sourcing summary:
1. Run: git add agents/sourcing-runs/ .claude/agent-memory/ && git commit -m "[sourcer] <N> new prospects sourced from <sources>"
2. Run: git push origin main
3. If push fails, retry up to 4 times with 2s/4s/8s/16s delays between attempts.

When done, echo only the summary file path, count added, count skipped with reasons, and Linear issue keys.
```

---

## 4. Prospect Researcher (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Research Prospects` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 13 * * 2-5` |
| **UTC → ET** | Tue–Fri 13:00 UTC = Tue–Fri 9am ET (EDT) |

**Instruction (copy/paste):**

```
Invoke the frs-prospect-researcher subagent. Research up to 10 prospects with status=identified and score their fit for Future Ready Studio's $30K AI assessment.

The subagent will:
- Read agents/context/research-protocol.md (sources priority + fit-scoring rubric 1-5 + AI posture classification) and agents/context/business.md (what "fit" means)
- Load runtime config via `python3 scripts/sheet.py read config --json` (research_staleness_days, default 90)
- Load the work queue via `python3 scripts/sheet.py read prospects status=identified --json --limit 10`, sorted by created_at ascending
- For each prospect: check `python3 scripts/sheet.py read research_cache prospect_id=<id> --json` — if fresh, reuse cached findings
- Otherwise research fresh: homepage + /pricing + /about + recent blog; G2/Capterra critical reviews for data-heavy products; founder's LinkedIn; funding/news; Product Hunt or AppSumo launch comments if that was the source. Budget ~5 min per prospect.
- Classify per the rubric: product_summary, workflow_complexity, ai_features_observed, ai_posture (none/exploring/bolt-on/strategic/agent-ready), agent_readiness, competitive_landscape, pain_signals, personalization_hooks, fit_assessment, recommended_angle, fit_score (1-5)
- Upsert findings into `research_cache` via `python3 scripts/sheet.py upsert research_cache --key prospect_id prospect_id=<id> researched_at=<today> ...`
- Update the prospect row via `python3 scripts/sheet.py update prospects --where id=<id> --set ai_posture=<value> fit_score=<1-5> fit_notes="..." research_summary="..." status=researched updated_at=<today>` (use status=not-a-fit if fit_score < 3)
- Write summary to agents/research-runs/<YYYY-MM-DD>-<N>-prospects.md

Target ai_posture = none / exploring / bolt-on (these need our help). Score 5 is reserved for prospects with all signals: ARR in range, clear workflow complexity, AI disruption exposure, active founder on LinkedIn, multiple personalization hooks.

CRITICAL — after research, commit and push all changes to main so the Outreach Writer (runs 3 hours later) can see the newly researched prospects and their scores:
1. Run: git add agents/research-runs/ .claude/agent-memory/ && git commit -m "[researcher] <N> prospects researched — <A> fit 3+, <B> not-a-fit"
2. Run: git push origin main
3. If push fails, retry up to 4 times with 2s/4s/8s/16s delays between attempts.

When done, echo only the summary file path, counts (researched, not-a-fit, cache-hits, errors), and the top fit-4/5 prospect IDs.
```

---

## 5. Outreach Writer (Tue–Fri)

| Field | Value |
|---|---|
| **Name** | `FRS — Draft Outreach` |
| **Model** | `claude-opus-4-7` |
| **Schedule (cron)** | `0 16 * * 2-5` |
| **UTC → ET** | Tue–Fri 16:00 UTC = Tue–Fri 12pm ET (EDT) |

**Instruction (copy/paste):**

```
Invoke the frs-outreach-writer subagent. Draft personalized cold outreach for researched prospects that are ready for first-touch or follow-up.

The subagent will:
- Read agents/templates/outreach.md (connect / DM / email templates with placeholders), agents/voice-guide.md (voice rules), agents/context/business.md (offer framing)
- Load runtime config via `python3 scripts/sheet.py read config --json` (outreach_daily_cap, follow_up_cadence_days)
- Load the work queue via `python3 scripts/sheet.py read prospects status=researched --json`, filter out any prospect whose last_outreach_date is within follow_up_cadence_days, sort by fit_score descending, cap at outreach_daily_cap (default 15)
- Analyze template performance once per run via `python3 scripts/sheet.py read outreach_log --json` — group by (template_used, angle, category), compute reply_rate and call_rate, build best_template(category, ai_posture) lookup
- For each prospect: read research via `python3 scripts/sheet.py read research_cache prospect_id=<id> --json`; pick channel (email if contact_email exists; linkedin-dm if contact_linkedin and fit_score>=4; else linkedin-connect); pick the winning template for (category, ai_posture) or the default from outreach.md
- If ai_posture=strategic, also read agents/context/objections.md and preemptively address the main objection in the message body
- Personalize: hook line must reference ONE specific personalization_hook (launch, blog, hire, review — never generic); bridge ties to a pain signal; ask matches the channel's norm
- Voice-check against voice-guide.md (no banned words, no filler openers, within channel limits: connect <300 chars, DM <1000 chars, email <200 words)
- Write each draft to agents/outreach-drafts/<YYYY-MM-DD>-<prospect_id>-<channel>.md with frontmatter
- Append to outreach_log via `python3 scripts/sheet.py append outreach_log log_id=<date>-<id>-<channel> prospect_id=<id> channel=<channel> template_used=<tmpl> angle="..." message_ref=<path> personalization_notes="..." status=drafted` (leave response columns blank)
- Update prospect rows via `python3 scripts/sheet.py update prospects --where id=<id> --set last_outreach_date=<today> last_outreach_channel=<channel> follow_up_due=<today+cadence_days> updated_at=<today>` — do NOT change status (human marks sent manually)
- Write run summary to agents/outreach-runs/<YYYY-MM-DD>.md

Never send messages. Never fabricate facts. Skip any prospect with no personalization hooks and flag for re-research. Reuse no hook across two prospects in the same run.

CRITICAL — after drafting outreach, commit and push all changes to main so Ryan can review the drafts and future runs have the latest memory and outreach history:
1. Run: git add agents/outreach-drafts/ agents/outreach-runs/ .claude/agent-memory/ && git commit -m "[outreach] <N> drafts — <A> connect, <B> DM, <C> email"
2. Run: git push origin main
3. If push fails, retry up to 4 times with 2s/4s/8s/16s delays between attempts.

When done, echo only the run summary file path, count by channel, and top 3 draft paths.
```

---

## Cron Reference

Format: `minute hour day-of-month month day-of-week` (all UTC).

| Cron | Meaning (EDT / summer) |
|---|---|
| `0 1 * * 1` | Mon 1am UTC = Sun 9pm ET |
| `0 10 * * 1,3,5` | Mon/Wed/Fri 10am UTC = Mon/Wed/Fri 6am ET |
| `0 11 * * 2` | Tue 11am UTC = Tue 7am ET |
| `0 13 * * 2-5` | Tue-Fri 1pm UTC = Tue-Fri 9am ET |
| `0 16 * * 2-5` | Tue-Fri 4pm UTC = Tue-Fri 12pm ET |

Day-of-week: `0` = Sunday, `1` = Monday, … `6` = Saturday.

## DST Adjustment

Cron is UTC. When EDT ends (first Sunday in November), add 1 hour to each UTC time to keep the same ET hour:

| EDT (summer) cron | EST (winter) cron |
|---|---|
| `0 1 * * 1` | `0 2 * * 1` |
| `0 10 * * 1,3,5` | `0 11 * * 1,3,5` |
| `0 11 * * 2` | `0 12 * * 2` |
| `0 13 * * 2-5` | `0 14 * * 2-5` |
| `0 16 * * 2-5` | `0 17 * * 2-5` |

Reverse when EDT resumes (second Sunday in March). Set calendar reminders for both dates — scheduled sessions do not auto-adjust for DST.

## Troubleshooting

**"Session ran but nothing happened"**
Session log → look for `[frs-session-start] Ready.` If you see the credentials warning, your secrets aren't configured.

**"google-api-python-client not installed"**
The SessionStart hook runs `pip install -r scripts/requirements.txt` on every boot. If it fails, check the session log for `WARNING: pip install failed`.

**"Draft Post routine ran but no post was drafted"**
Check `agents/plans/` for the current week's plan file. If missing, the Plan Week session didn't run or its push failed. Check the Plan Week session log.

**"Researcher isn't processing prospects"**
Check the Sheet `prospects` tab — any rows with `status=identified`? If not, the sourcer didn't find qualified leads or its push failed.

**"Outreach writer finds no work"**
Check `prospects` for rows with `status=researched`. Researcher must complete and push before outreach runs.

**"Push failed"**
Each routine retries 4x with exponential backoff. If main has branch protection, either (a) disable the protection, (b) add a deploy key with bypass, or (c) edit instructions to push to a branch + open a PR via `gh`.

## Iteration loop

After each week:
1. Review summary files in `agents/plans/`, `agents/sourcing-runs/`, `agents/research-runs/`, `agents/outreach-runs/`
2. Fill engagement data on the `posts` Sheet tab — planner uses this next Sunday
3. Fill response data on the `outreach_log` Sheet tab — outreach writer uses this to pick winning templates
4. In an ad-hoc session, give agents feedback. They update `.claude/agent-memory/<agent>/MEMORY.md` and improve over time.
