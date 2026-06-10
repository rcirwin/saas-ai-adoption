---
name: vertical-saas-run-2026-06-10
description: Vertical-SaaS sourcing lane 2026-06-10 — 50/50; niche-retail/service verticals richest vein, field-service a graveyard, Fullsteam roll-up watch, dedup-checker key-drift bug
metadata:
  type: project
---

# Vertical-SaaS run — 2026-06-10 (1 of 5 concurrent lanes)

50 net-new added of 50 target. ~180 evaluated, ~95 DQ. Sheet 1252 -> 1448 during run (4 other lanes concurrent). LINEAR_SKIPPED, no git commit. Summary: `agents/sourcing-runs/2026-06-10-vertical-saas.md`.

**Why this matters / how to apply:**

- **Niche-retail/service verticals are the richest under-mined bootstrapped vein right now.** Print/sign shops (YoPrint $1.2M, Teesom, Ordant, InfoFlo Print, SignTracker), jewelry (WJewel since 1987, PIRO/MindSpark), consignment (ConsignCloud, Ricochet), bike/repair (Bikedesk Denmark, BytePhase India, My Gadget Repairs), gun/FFL (Trident 1, Rapid Gun Systems), catering (HoneyCart, Flex Catering AU, Planning Pod), childcare (ChildPilot $1.8M, HubHello AU). Far less PE-consolidated than healthcare/legal/field-service. Print-shop management alone yielded 5 clean fits in one pass. Mine these next time before the heavily-picked-over allied-health/legal lanes.

- **Field-service trades = graveyard.** HVAC/plumbing/locksmith/pool/towing/garage-door are almost all VC-funded (Workiz, ServiceTitan, Housecall Pro, Autura, PushPress, Hemlane) or holding-co rolled-up. GorillaDesk + Towbook are the rare independents (already in sheet). Don't spend cycles here.

- **Fullsteam is the dominant SMB-vertical roll-up parent this cycle** — absorbed The Flybook, Club Prophet, shopVOX. Vehlo absorbed Shop Boss/Shop-Ware. Also watch Horizon (Caterease), ServiceCore (Docket), Business Infusions/Merit Holdings (Cassadol equine), plus the standing list (EverCommerce, Togetherwork, ProfitSolv, AffiniPay). Run `"<name>" acquired` + check these parents BEFORE qualifying any niche-retail/field candidate.

- **Equine vet/stable PM** has a tight intentional-bootstrapper cluster (The Equestrian App, Equicty Belgium, ThoroVet) but BarnManager/Stable Secretary/Stablebuzz/equineGenie/VetBlue already in sheet.

- **Over-ICP-but-bootstrapped skips** (good thesis fits, just too big): Open Dental (300+ emp), HawkSoft/WaterStreet/PracticeSuite/CenterEdge/RepairDesk/ShiftCare/Wodify/MyStudio (all $7-50M ARR or 100+ emp). DQ rule #6 + AI-native positioning hit Splose ($46M), Opus1 (Five Elms Series B), Pedal Mobility, Programa, Curate, Hauler Hero, Spoonfed.

- **[TOOLING BUG — important]** The in-run dedup checker (`/tmp/check.py`) and dedup cache (`/tmp/dedup.json`) drifted on key name (`slugs` vs `ids`) after I rebuilt the cache file mid-run, so `campium` (prior not-a-fit) and `propet`/ProPet Software (existing `propet-software`) slipped through as false-NEW and got appended as duplicates. Sourced 2 clean replacements (thorovet, commit-swimming) to keep net-new honest at 50. **Fix forward: build the dedup set ONCE at start, never rebuild the cache file mid-run, and make the checker read the exact key it wrote. Verify single id+name immediately before each append.** Append-only discipline held (didn't delete the dup rows).

- GetLatka by-industry indexes (e.g. `i-driving-school-software`) remain the fastest ARR/employee source for obscure verticals.

See also [[getlatka_country_pages_workhorse]], [[directory_vertical_pm_run_2026-05-18]].
