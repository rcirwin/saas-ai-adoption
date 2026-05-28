---
name: indie-chrome-extension-run-2026-05-28
description: 50-prospect indie Chrome extension run learnings — sub-categories, ICP fit patterns, DQ patterns, and update-where-id gotcha that caused double-rename
metadata:
  type: project
---

## Run summary (2026-05-28)
50 net-new indie Chrome extension prospects added. Source territory = browser-extension SaaS + adjacent indie dev tools. Prospects tab went from ~708 → 1142 (concurrent sibling sourcers also writing).

## Sub-categories most productive for ICP fit
1. **Email/Gmail extensions** (highest hit rate): MailTag, Mailmeteor, FollowUpThen, Inbox When Ready, Leave Me Alone — all bootstrapped, <30 emp, founder publicly known.
2. **Web scraper / web automation**: Simplescraper, Web Scraper, Lobstr, Browserflow, Captain Data, Datagma — strong indie scene.
3. **Notes / web clipper / annotation**: Web Highlights, Heptabase, Milanote, Glasp, Diigo, Notesnook, mymind, Refind, Pinboard — large cluster of bootstrapped solo founders.
4. **Tab management**: Workona, Toby, Manganum, tabExtend, BrainTool — small-team category with many ICP fits.
5. **Sales prospecting / LinkedIn enrichment**: Wiza, Datagma, GetProspect, Skrapp, AeroLeads — bootstrapped sub-$5M cohort.

## Disqualification patterns specific to Chrome extension space
- **AI rebrand wave** (DQ): EasyGen, Cluely, Krisspy, BeLikeNative, Promptly, GPTChain, Helper-AI — positioned as "AI-native" from day one.
- **YC + sub-$5M ARR** (DQ rule #6): Axiom.ai ($330K-$200M speculative), PixieBrix ($10.4M/$498K), Bardeen ($22M total), Akiflow ($2.3M/$200K), Tactiq ($12M/$1.6M), Requestly (acquired by BrowserStack May 2025).
- **Acquired 2024-2025**: Tweet Hunter/Taplio→lempire, LanguageTool→Learneo, Splitbee→Vercel, Olvy→Amoeboids (Feb 2025), Rytr→Copy Smith.
- **Multi-product Tiny Capital / Ramp Ventures**: Mailman, RightInbox+Mailshake+VoilaNorbert.
- **Solo founder who EXITED**: Rick Blyth Merch Wizard/KDP Wizard (sold).

## Sources that worked best
- Starter Story founder breakdowns (Closet Tools, Heptabase, Sync2Sheets, NotionForms, Data Fetcher, MailTag, EasyGen, Helper-AI).
- IndieHackers product page revenue tabs (transparent self-reporting).
- GetLatka for $0.5-5M ARR bootstrapped — most accurate snapshot for indie Chrome ext.
- WebSearch by candidate name + multi-source verification.

## Geographic distribution noted
Chrome extension ICP is heavily non-US: Brazil (Rizzo), Berlin/Germany (Folge, Web Highlights, Mailmeteor, Manganum, Keepa), Iceland (Inbox When Ready), Poland (BugBug), Austria (Userbrain), Argentina (Sync2Sheets), Netherlands (Polypane), Kazakhstan (Raindrop), Latvia (Web Scraper), Italy (Typefully), Taiwan (Heptabase), India (AeroLeads, Helper-AI), Morocco (Skrapp).

## The `update --where id=X` gotcha (NEW PATTERN)
When `sheet.py update prospects --where id=linkinize --set 'id=DELETED-DUP-DO-NOT-USE-linkinize'` was run on a duplicated row, it matched BOTH rows and renamed both. To clean up properly:
1. Always check `count` or `read prospects` by ID before update.
2. If two rows have same ID, you can't selectively update one — must use a uniquely identifying combo (e.g., `--where id=X created_at=Y`).
3. To recover: re-append the correct entry as a fresh row.
4. Outcome: net-new IDs are preserved but you have 2 retired marker rows.

## Workflow: how to write 50 in <2 hours
1. Cast a wide initial WebSearch for each sub-category.
2. Triangulate candidate via WebSearch with candidate name + "founder revenue ARR funding bootstrapped" — gives GetLatka + Crunchbase + Tracxn results in one query.
3. Apply DQ rules immediately (check "acquired", "$X raised", "AI-native positioning"). Don't deep-dive borderline candidates.
4. Batch in 4-6 prospects per append cycle to avoid rate-limit (60 req/min).
5. Skip prospects without verifiable ICP signal — better to skip than risk wrong tier.
