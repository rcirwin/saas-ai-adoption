---
name: email-infrastructure-run-2026-05-28
description: 50-prospect deep dive into email infrastructure/deliverability/parsing/inbox/transactional niche; key DQ patterns, sub-category density observations, and Sheet rate-limit handling
metadata:
  type: project
---

50 net-new prospects added 2026-05-28 in the email infrastructure territory (deliverability, verification, parsing, signature, warmup, transactional, finder, tracking, template builder, shared inbox). Prospects tab 708 -> 757 (mine) of ~1123 total after parallel sourcer adds. See run summary below.

## Why this matters

Email infrastructure is a tight under-AI'd niche: ~30% of evaluated candidates were either acquired (DQ), >$5M ARR (DQ), or AI-native rebrand (DQ). The remaining bootstrapped indies are nearly all 5-50 emp, $500K-$5M ARR — exactly ICP. Highest-yield sub-categories: **DMARC monitoring** (PowerDMARC, DMARC Advisor, DMARCLY all fit), **email verification** (8+ verified fits — Verifalia, DeBounce, EmailListVerify, Captain Verify, Emailable, MyEmailVerifier, MailTester.Ninja, Truelist), and **email finder** (Findymail, Skrapp, GetProspect, Icypeas, AnymailFinder).

## How to apply

- Skip these acquired/consolidated brands going forward: WiseStamp (vCita), Newoldstamp (Blackpearl Group), Mailparser/Docparser (SureSwift), Kickbox (j2 Global), NeverBounce (ZoomInfo), Email on Acid (Pathwire/Sinch), Litmus (Validity), MailerCheck/MailerLite/MailerSend (Vercom), MailMate (Bridgers parent), Mailmunch (Sumo/cache), FindThatLead (Clientify Jun 2024), Mailwarm (mailX Jun 2025), Inboxbooster (shut down).
- Multi-product parents to DQ all sub-products: DuoCircle (AutoSPF + DMARC Report + 10+ products), Awesome Motive (SendLayer + WPForms + others), The Remote Company (MailerLite/MailerSend/MailerCheck), Solva (MySignature + Newoldstamp — but Vol Zastavnyy is small-team indie 30 emp, qualified MySignature anyway).
- AI-native cold email rebrand to DQ: SalesBlink ("BlinkGPT"), Outboundly, Smartwriter, ReachInbox, Warmforge ("AI engine Adeline"), MailToaster (Oleg Campbell 70+ emp), Warmy ($8.4M ARR + 56 emp).
- DQ rule #6 (raised >$10M w/ <$5M ARR) hit: Sendmarc ($8.5M raised + $2M ARR), MagicBell ($4.5M raised + $1.2M ARR), Mailmodo ($2M YC funded + sub-$1M ARR), EasyDMARC ($22M raised), Reply.io ($10M Tel Aviv), Sender ($10M+ at $10.2M ARR).
- Below-floor DQs (<$500K ARR): Mailivery ($450K), MillionVerifier ($440K), Bouncify ($330K), MailRush ($120K), Bybrand ($120K), MoonMail ($53K), AcyMailing ($220K), DMARCLY ($157K) — all interesting but below ICP minimum.
- Over-cap DQs (>$5M ARR): ZeroBounce ($10M), Snov.io $22.7M, Bouncer $7.5M, Sender $10.2M, Elastic Email $6.8M, Email Hippo $7M, Dropcontact $19.5M, Beefree $15M, GMass $8.6M, Mailshake $4.1-10M (edge), Right Inbox $5.5M (Sujan Patel/Ramp Ventures portfolio), Boomerang $9.1M, Stripo $3.7-5M (over cap; also in DELETED-DUP), Mailbutler $8M, DragApp $6.7M, Hiver $25M, Litmus $9.8-45M, Reply.io enterprise, Klenty 152 emp.

## Sub-category density

- **Email verification**: highest fit rate. Indie bootstrapped clusters from India (DeBounce, Clearout, MyEmailVerifier, MailRush), France (Captain Verify, Findymail, Icypeas), Italy (Verifalia), Slovakia (EmailListVerify), US (Emailable, Truelist, BigMailer).
- **DMARC/email auth**: small but high-fit. PowerDMARC ($4.1M Oman), DMARC Advisor ($1-5M Netherlands), DMARCian ($6.8M edge), DMARCLY (small).
- **Email finder**: heavy France/Eastern Europe presence. Findymail (Lille), Icypeas (France), Skrapp (Lille), GetProspect (Kyiv), AnymailFinder (London).
- **Cold email warmup**: very fragmented + many AI-native to DQ. Warmbox ($900K), Allegrow ($2.1M), MailReach (France), Warmup Inbox (Dabble Holdings).
- **Email parsing**: handful — Parserr ($1.2M, LA), Parsio (small), Airparser (early), Email Parser. Mailparser + Docparser owned by SureSwift Capital — DQ.
- **Email signature**: ~3 indie fits (MySignature, BulkSignature, Email Signature Rescue). Most others rolled up.
- **Transactional/SMTP**: Mailtrap (in cache), SMTP2GO ($870K NZ), MailPace, EmailJS, SocketLabs ($3.7M edge), Sender (over cap), MailerSend (Vercom).
- **Email template builders**: Topol.io (just spun from Ecomail Aug 2025!), Chamaileon ($660K), Stripo (over cap), Unlayer ($5M AT cap), Designmodo Postcards, Beefree (over cap).
- **Email tracking Gmail extensions**: MailTracker (Tom Benattar Barcelona $1.9M).
- **Shared inbox**: limited fits. Missive (in cache), SaneBox ($2.3M).
- **Email testing developer**: Mailosaur (UK).

## Sheet rate-limit handling

Confirmed earlier observation: Sheets API caps at 60 reads/minute. Hit 429 after 7 parallel appends. Resolution: sequential appends (~10/batch) work fine. NEVER run `count` or `read` calls during a burst of appends — they consume read quota. Just do appends, then verify with one count at end.

## Founder patterns

- France/Belgium = high concentration of bootstrapped email infra indies: MailReach, Icypeas, Findymail, Skrapp, Captain Verify, Emelia, Dropcontact (over cap), Bridgers (Emelia parent).
- Ukraine = email tooling powerhouse: MySignature (Lviv), Newoldstamp (Lviv), GetProspect (Kyiv), Snov.io (over cap), Stripo (over cap), Selzy (over cap), MailToaster (over cap).
- India = email verification + cold email cluster: DeBounce, Clearout (cap), MyEmailVerifier, MailRush, SendX, Mailmodo (VC).
- Bootstrap-to-acquired arc is the dominant 5-year exit pattern in this space. Run "[name] acquired" first for any candidate >5 years old.

## Email infra-specific AI-readiness hook

Every email infra player is exposed to AI-native displacement now that gpt/claude/etc can write personalized cold emails at scale. The pitch lands hard: "Your sender reputation product faces a different threat in 2026 — buyers want an AI co-pilot that suggests fixes, not just diagnostics." This is a much sharper pitch than the generic FRS messaging because deliverability + AI = legitimately existential.
