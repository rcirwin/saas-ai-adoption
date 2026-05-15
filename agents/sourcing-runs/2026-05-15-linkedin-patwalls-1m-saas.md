# Sourcing Run — 2026-05-15 — LinkedIn / Pat Walls "$1M SaaS in any niche"

## Run metadata

- **Date:** 2026-05-15
- **Source:** LinkedIn post (manual URL)
- **Source URL:** https://www.linkedin.com/posts/patrickwalls_proof-that-you-can-build-a-1m-saas-in-any-activity-7441998114892398592-XiGf
- **Caller request:** extract every company mentioned, qualify, dedupe, append to Sheet, file Linear issues
- **Count requested:** unspecified (driven by extraction)
- **Count added:** 0
- **Status:** DRY_RUN — extraction failed at the source. No prospects written, no Linear issues created.

## Extraction attempts

| Attempt | Tool / URL | Result |
|---|---|---|
| 1 | WebFetch on the LinkedIn post URL | No company names extractable. Page body is gated; only meta + "linked resource at starterstory.com/micro" visible. |
| 2 | WebSearch for the exact activity ID `7441998114892398592` | No hits referencing the post body. |
| 3 | WebFetch on Pat Walls' earlier sibling post (`7252334756351082498`, "I think you can basically build a $1M/year...") | Same shape — references "4 of 100s of examples" but the actual examples live in images that are not OCR'd by WebFetch. |
| 4 | WebFetch on starterstory.com/micro | Landing page for a gated 52-company report. List is behind member signup. |
| 5 | WebFetch on starterstory.com/1m-micro-saas | Same — content gated behind login. |
| 6 | WebFetch via r.jina.ai proxy on the LinkedIn URL | Surfaced post text + comments but the named companies live in image attachments not transcribed. Only mentions surfaced: vague category hints ("saas for honeymoon funds", "saas for gym showers", "saas for biotech") from commenters, plus self-promo by Infrasity in comments. None are companies named by Pat in the post body. |
| 7 | Google + Bing search for cached snippets quoting the post | No usable cached snippets. |

## Why nothing was added

The companies referenced by the post are in **image attachments** (screenshots of revenue dashboards / company logos) inside an authenticated LinkedIn feed. Available tooling (WebFetch, WebSearch, r.jina.ai proxy) cannot OCR or otherwise extract those images. The companion Starter Story "52 micro-SaaS" report is also gated behind member auth.

Per sourcer rules:
- "Never invent contact info" and "Quality over volume"
- "Source returns zero qualified leads after 3 passes → warn, write empty summary, return with DRY_RUN"

Inventing a list of niche $1M SaaS names without confirmation that they appeared in the post would defeat the purpose of the request — the user wanted *those specific* companies, not a generic micro-SaaS list.

## Secondary blocker (would have hit even if extraction succeeded)

`FRS_PROSPECTS_SHEET_ID` and `FRS_GOOGLE_CREDENTIALS` are unset in this shell. The local-session pattern documented in memory (`frs_sheet_env.md`) would still need to be applied: export the two vars before any `scripts/sheet.py` call. Not actioned because extraction failed first.

## Suggested next steps for the user

1. **Easiest path:** Paste the company names from the post directly into chat (or screenshot → ask me to OCR the screenshot via Read on a local image path). I can then run the standard sourcing flow against that list with confidence.
2. **Alternative:** If you have a Starter Story membership, share the 52-company list as CSV or paste-in.
3. **Adjacent angle (if Pat's exact list isn't needed):** kick off a `source=appsumo` or `source=producthunt` run with a "diverse-niche micro-SaaS at ~$1M ARR" framing. I'd surface a comparable set from sources I can reach.

## Skipped (none — extraction never produced candidates)

n/a

## Linear

No issues created. (Also, Linear MCP unavailable in this environment per memory.)
