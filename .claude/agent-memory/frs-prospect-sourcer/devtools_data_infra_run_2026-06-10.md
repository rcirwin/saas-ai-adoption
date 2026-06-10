---
name: devtools-data-infra-run-2026-06-10
description: 50-prospect devtools/data-infra deep-dive run — veins, DQ patterns, and consolidation map for the under-sampled developer-tools lane
metadata:
  type: project
---

Devtools/data-infra sourcing run 2026-06-10: added 50 net-new of 50 target, all status=identified, source=devtools-data-infra.

**Why:** Caller flagged developer-tools/observability/data-pipelines/API-tooling as explicitly under-sampled per sourcing.md and assigned the lane as one of five concurrent territory sourcers.

**How to apply:** When sourcing this lane again, go straight to the clean veins below and skip the consolidated top of each category.

## Cleanest ICP veins (bootstrapped, $500K-$5M, founder-led, AI-disruption-exposed)
- **Bootstrapped error monitoring**: Honeybadger (Joshua Wood, $1M+), Bugfender (Aleix Ventayol, Barcelona), elmah.io (Thomas Ardal, Denmark), TrackJS (Todd Gardner), Bugsink (Klaas van Schelven solo, NL), GlitchTip (David Burke), Raygun (JD Trask, NZ, only $1.98M raised).
- **Bootstrapped uptime/status/cron**: Oh Dear (Mattias Geniar/Freek, Belgium), updown.io (Adrien Rey-Jarthon solo, FR), HetrixTools (Andrei Paraschiv, Romania), StatusPal (Eduardo Messuti, Berlin), Hyperping (Leo Baecker, FR — borderline small).
- **Database DX tooling**: TablePlus (Huy Pham, Halifax), Beekeeper Studio (Matthew Rathbone), DrawSQL (Dennis Ong, Sydney), DbSchema (Dragos Pruteanu, DE/RO), Postico/Egger Apps (Jakob Egger, Linz, solo), pganalyze (Lukas Fittl, multi-7-fig bootstrapped), pgMustard (Michael Christofides), Bytebase ($3M seed, $1.3M ARR).
- **Feature flags (small/indie)**: ConfigCat (Budapest, bootstrapped), Hypertune (Miraan Tabrez, London), Tggl (Nicolas Keller, Paris bootstrapped $330K).
- **EU/India bootstrapped data-integration & CDN**: Skyvia/Devart (Czech/UA, since 1997, $3.5M), Sheetgo (Valencia, $1.7M), Peliqan (Belgium), Gumlet ($1.6M seed, India), Sirv (Oxford UK, $1.4M), ImageKit (India — DQ, $5.4M over cap).
- **API tooling indie**: Beeceptor (Hyderabad, bootstrapped), Mockoon (Guillaume Monnet solo, FR), Apitally (Simon Gurcke solo, DE/AU), Testfully (Matt Valley, Sydney), Assertible (Christopher Reichert), Apiable (Allan Knabe, Helsinki $500K), Hook0 (FG Ribreau, FR), Hookdeck ($2.67M seed), Bump.sh (Sébastien Charrier, FR €4M).
- **Backup/data-catalog indie**: BackupLABS (Rob Stevenson, UK), SimpleBackups (Laurent Lemaire, Brussels), Dataedo (Piotr Kononow, Gdansk PL).

## DQ patterns specific to this lane
- **Acquisition-consolidated** is the #1 skip: ScrapingBee→Oxylabs, Highlight→LaunchDarkly, Tower→saas.group, SnapShooter→DigitalOcean, Pulseway→Kaseya, Prefab.cloud→Reforge, Studio3T→Redgate, UptimeRobot→itrinity, Metaplane→Datadog, Baselime→Cloudflare, Grouparoo→Airbyte, PopSQL→Timescale, Moesif→WSO2, SQLMesh→Fivetran, Dataform→Google, Neon→Databricks. ALWAYS run "[name] acquired" before qualifying any devtool >3 yrs old.
- **VC over rule #6** ($10M+ raised, <$5M ARR): GrowthBook ($23M), Better Stack ($10M+, $3.4M), AppSignal ($22M), Soda ($27.9M), Tyk ($41M), Tinybird ($30M), Luzmo ($15M), Stellate, Kestra ($8M), Knock ($18M), Courier ($47.5M).
- **AI-native rebrand** signal: FeatBit ("for AI Era"), Treblle ("building AI products"), Releem ("AI reshaping MySQL"), elmah.io/Cosmic both added "AI-powered" tagline but predate AI (kept — disruption-target not AI-native). Filter on PRIMARY positioning + founding date.
- **Agency/studio parent**: Coupler.io (Railsware), Draxlr (Inkoop), Dead Man's Snitch (Collective Idea). DQ if parent is a consultancy with >100 emp; KEEP if the product is a clearly distinct bootstrapped SaaS (Oh Dear/Spatie, Bugfender/Mobile Jazz kept).
- **Over cap on revenue**: ImageKit ($5.4M), Cube Dev ($7.9M), Sublime HQ (huge install base), Navicat (40% Fortune 500), Rewind ($8.7M).

## LinkedIn discipline outcome
- 46/50 verified /in/ URLs; 4 left `unknown` (David Burke/GlitchTip, Yevhenii Kulisidi/Swetrix, Eduardo Messuti/StatusPal, Jakob Egger/Postico — no verifiable /in/ surfaced). Several company-founder rows also unknown where the specific person URL wasn't confirmable. Never guessed a slug.
- GetLatka company-name-first search remains fastest ARR+team+funding verification; pair with "[name] acquired" precheck.
