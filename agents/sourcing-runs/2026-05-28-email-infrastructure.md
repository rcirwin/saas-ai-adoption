# Sourcing Run — 2026-05-28 — Email Infrastructure

**Source territory:** Email infrastructure / deliverability / parsing / inbox / SMTP / transactional / verification / signature / warmup / DMARC / cold email / email finder / template builder.

**Count requested:** 50 (hard floor)
**Count added:** 50 ✅
**Dedup skips:** ~25 (Buttondown, Mailmeteor, Mailmunch, Stripo DELETED, Folderly, Saleshandy, SmartReach, Gmelius, Userlist, Encharge, Pabbly, Helpwise, Mailbutler, Front, Helpwise, GMass, Mailtrack, Mailsuite, ZeroBounce on cap edge, MailerSend, MailerCheck (Vercom), Boomerang, others)
**DQ count:** ~70+ (see categories below)

## Added (50)

| # | id | company | sub-category | ARR | emp | location |
|---|----|---------|--------------|-----|-----|----------|
| 1 | smtp2go | SMTP2GO | SMTP relay | $870K | 12 | NZ |
| 2 | glockapps | GlockApps | deliverability | $1-3M | 15 | Belarus |
| 3 | inboxally | InboxAlly | deliverability | $1-3M | 15 | NYC |
| 4 | powerdmarc | PowerDMARC | DMARC | $4.1M | 40 | Oman |
| 5 | parserr | Parserr | email parsing | $1.2M | 11 | LA |
| 6 | parsio | Parsio | email parsing | $500K-1M | 5 | distributed |
| 7 | mysignature | MySignature | signature | $880K | 20 | Lviv UA |
| 8 | bulksignature | BulkSignature | signature | $513K | 4 | Austin TX |
| 9 | allegrow | Allegrow | deliverability | $2.1M | 19 | Glasgow |
| 10 | warmbox | Warmbox | warmup | $900K | 6 | US/BE/ES |
| 11 | emaillistverify | EmailListVerify | verification | $1.1M | 10 | Slovakia |
| 12 | captainverify | Captain Verify | verification | $500K-1M | 8 | France |
| 13 | debounce | DeBounce | verification | $500K-1M | 8 | Pune IN |
| 14 | verifalia | Verifalia | verification | $1-3M | 10 | Vigonza IT |
| 15 | emailable | Emailable | verification | $3-5M | 18 | Miami |
| 16 | clearout | Clearout | verification | $5M | 17 | India/US |
| 17 | mailfloss | Mailfloss | verification | $500K-1M | 4 | Canada |
| 18 | forward-email | Forward Email | forwarding | $1-3M | 5 | US |
| 19 | postaga | Postaga | cold email | $500K-1M | 5 | TinySeed |
| 20 | quickmail | QuickMail | cold email | $1-3M | 10 | Switzerland |
| 21 | socketlabs | SocketLabs | transactional | $3.7M | 25 | Aston PA |
| 22 | anymailfinder | Anymail Finder | finder | $1-3M | 8 | London |
| 23 | mailpace | MailPace | transactional | $500K-1M | 3 | distributed |
| 24 | salesgear | Salesgear | cold email | $2.1M | 10 | Singapore |
| 25 | mailreach | MailReach | warmup | $1-3M | 12 | France |
| 26 | warmupinbox | Warmup Inbox | warmup | $500K-1M | 5 | Dabble Holdings |
| 27 | truelist | Truelist | verification | $500K-1M | 5 | ConvertKit-alum founder |
| 28 | emailjs | EmailJS | transactional | $500K-1M | 5 | indie |
| 29 | maildoso | Maildoso | infrastructure | $3-5M | 46 | Granite Bay CA |
| 30 | inframail | Inframail | infrastructure | $500K-1M | 7 | NYC |
| 31 | dmarc-advisor | DMARC Advisor | DMARC | $1-3M | 21 | Netherlands |
| 32 | skrapp | Skrapp.io | finder | $500K-1M | 11 | Lille France |
| 33 | mailmonitor | MailMonitor | deliverability | $1-3M | 14 | Phoenix |
| 34 | designmodo-postcards | Designmodo | template builder | $500K-1M | 12 | Brooklyn/Moldova |
| 35 | aerosend | Aerosend | cold infra | $500K-1M | 5 | Namit Jindal |
| 36 | myemailverifier | MyEmailVerifier | verification | $500K-1M | 15 | Northvale US/IN |
| 37 | findymail | Findymail | finder | $1-3M | 9 | Capinghem France |
| 38 | mailtracker | MailTracker | tracking | $1-3M | 41 | Barcelona |
| 39 | emelia | Emelia | cold email | $500K-1M | 5 | France (Bridgers) |
| 40 | getprospect | GetProspect | finder | $1-3M | 25 | Kyiv |
| 41 | sendx | SendX | marketing | $1-3M | 10 | India |
| 42 | topol | Topol.io | template builder | $1-3M | 10 | Prague (spun out Aug 2025) |
| 43 | chamaileon | Chamaileon | template builder | $660K | 6 | Roland Pokornyik |
| 44 | sanebox | SaneBox | management | $2.3M | 12 | Boston |
| 45 | mailosaur | Mailosaur | testing | $1-3M | 10 | Winchester UK |
| 46 | unlayer | Unlayer | template builder | $5M | 41 | Adeel Raza |
| 47 | bigmailer | BigMailer | marketing | $500K-1M | 5 | NYC |
| 48 | icypeas | Icypeas | finder | $600K | 4 | France |
| 49 | mailtester-ninja | MailTester.Ninja | verification | $500K-1M | 5 | global indie |
| 50 | mailvio | Mailvio | marketing/deliverability | $500K-1M | 10 | distributed |

## Notable DQ patterns

- **Acquired/PE-rolled**: WiseStamp (vCita), Newoldstamp (Blackpearl), Mailparser/Docparser (SureSwift Capital), Kickbox (j2 Global), NeverBounce (ZoomInfo), Email on Acid (Pathwire/Sinch), Litmus (Validity Apr 2025), Mailwarm (mailX Jun 2025), FindThatLead (Clientify Jun 2024), Inboxbooster (shut down). MailerSend/MailerCheck owned by Vercom (MailerLite parent).
- **Multi-product holding parents** DQ'd entire product lines: DuoCircle (AutoSPF, DMARC Report, NuReply, OutboundSMTP, etc.), Awesome Motive (SendLayer), The Remote Company (MailerLite/MailerSend/MailerCheck), Magnet Brains (Pabbly), Ecomail (DMARCeye), Sumo (Mailmunch in cache), Solva (Newoldstamp DQ but MySignature kept as small indie).
- **AI-native rebrand**: SalesBlink, Outboundly, Smartwriter, ReachInbox (Pre-Seed AI-positioned), Warmforge ("Adeline AI"), MailToaster (70+ emp distributed).
- **DQ rule #6** (raised >$10M, ARR <$5M): EasyDMARC ($22M raised), Sendmarc ($8.5M raised + $2M ARR), MagicBell ($4.5M raised + $1.2M ARR YC), Mailmodo (YC + $2M Sequoia + sub-$1M ARR), Reply.io ($10M Tel Aviv).
- **Over-cap**: ZeroBounce $10M, Snov.io $22.7M, Bouncer $7.5M, Sender $10.2M, Elastic Email $6.8M, Email Hippo $7M, Dropcontact $19.5M, Beefree $15M (Growens parent), GMass $8.6M (in cache anyway), Mailshake $4-10M (Ramp Ventures), Right Inbox $5.5M (Sujan Patel portfolio), Boomerang $9.1M, Mailbutler $8M, DragApp $6.7M, Hiver $25M, Litmus $9.8-45M, Trengo $37.9M raised + $17.9M ARR, Klenty 152 emp, Woodpecker $11.6M, Warmy $8.4M + 56 emp, MailToaster 70+, DMARCian $6.8-25M edge.
- **Below ICP floor** (<$500K ARR): Mailivery ($450K), MillionVerifier ($440K), Bouncify ($330K), MailRush ($120K), Bybrand ($120K), MoonMail ($53K), AcyMailing ($220K), DMARCLY ($157K), DMARC Analyzer ($78K).

## Dedup hits (skipped — already in prospects)

- Buttondown, Mailmeteor, Mailmunch, Stripo (DELETED-DUP), Folderly, Saleshandy, SmartReach, Gmelius, Userlist, Encharge, Pabbly, Helpwise (DQ for parent), Mailbutler (also over cap), Mailtrap, Mailtrack, Mailsuite, MailerSend, MailerCloud, EmailOctopus.

## Linear

LINEAR_SKIPPED — no .mcp.json in repo per memory.

## Sheet count

Started: 708. Other parallel sourcer agents added rows concurrently. My 50 confirmed via individual `count id=<slug>` checks. Final overall sheet count: 1123.
