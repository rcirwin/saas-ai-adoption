# Sourcing Run — 2026-06-10 — vertical-saas

## Metadata
- Date: 2026-06-10
- Territory: Niche VERTICAL SaaS (healthcare/allied-health, legal, accounting, construction/field-service, dental, vet, optometry, nonprofit, hospitality/restaurant, brewery/winery/distillery, religious/community, fitness/wellness/salon/spa, education/school admin, real-estate/property ops, plus adjacent niche-retail/service verticals)
- Source tag: vertical-saas
- Target: 50 net-new qualified prospects
- Net-new added (genuine): 50
- Rows appended to sheet: 52 (includes 2 in-flight duplicates created in error — see below)
- Candidates evaluated: ~180
- DQ / skipped: ~95
- Linear: SKIPPED (LINEAR_SKIPPED — no Linear MCP in environment, per standing instruction)
- Git: NOT committed/pushed (per instructions)
- Prospects tab grew from 1252 to 1448 during the run (4 other sourcer lanes running concurrently)

## In-flight duplicates created (transparency note — append-only, not deleted)
Two appended rows collided with pre-existing prospects that my dedup checker missed due to a transient key-name mismatch between the dedup cache file and the checker script mid-run:
- `campium` — already existed (source=all, 2026-05-19, status=not-a-fit). Prior sourcer already rejected it.
- `propet` — ProPet Software already existed as `propet-software` (source=directory-vertical-saas, 2026-05-28, status=researched).

To keep net-new honest at 50, I sourced 2 clean replacements and appended them: **thorovet** and **commit-swimming**. The two duplicate rows remain in the sheet (append-only discipline; not overwritten/deleted) and should be ignored by the researcher in favor of the original rows.

## Added prospects (id | company | category | arr | linkedin)
1. practice-master-pro | Practice Master Pro | allied-health-practice-mgmt | unknown | unknown
2. wherefour | Wherefour | food-beverage-erp | 1.4M | yes
3. one-church-software | One Church Software | church-management | unknown | yes
4. the-5th-ingredient | The 5th Ingredient | brewery-management | unknown | unknown
5. guestplan | Guestplan | restaurant-reservations | unknown | unknown
6. childpilot | ChildPilot | childcare-management | 1.8M | unknown
7. massagebook | MassageBook | massage-therapy-scheduling | 720K | unknown
8. sessions-health | Sessions Health | mental-health-ehr | 770K | unknown
9. class-manager | Class Manager | dance-studio-management | unknown | unknown
10. medesk | Medesk | clinic-practice-management | 1.6M | unknown
11. planning-pod | Planning Pod | event-venue-management | unknown | yes
12. paydc | PayDC | chiropractic-practice-mgmt | unknown | unknown
13. ezbis | EZBIS | chiropractic-practice-mgmt | unknown | unknown
14. clubworx | Clubworx | gym-studio-management | unknown | yes
15. pembee | Pembee | class-club-booking | unknown | unknown
16. propet | ProPet Software | pet-boarding-kennel-mgmt | 5M | unknown  [DUP — see note; original is propet-software]
17. calysta-emr | Calysta EMR | medical-spa-aesthetics-emr | unknown | unknown
18. waveortho | WaveOrtho | orthodontic-practice-mgmt | unknown | unknown
19. campworks | CampWorks | campground-rv-reservation | unknown | unknown
20. honeycart | HoneyCart | catering-online-ordering | unknown | unknown
21. flex-catering | Flex Catering | catering-management | unknown | unknown
22. theralytics | Theralytics | aba-therapy-practice-mgmt | unknown | unknown
23. nutriadmin | NutriAdmin | nutritionist-practice-mgmt | unknown | unknown
24. designfiles | DesignFiles | interior-design-software | unknown | unknown
25. zoconut | Zoconut | dietitian-practice-mgmt | unknown | yes
26. campium | Campium | summer-camp-management | unknown | unknown  [DUP — see note; prior row is not-a-fit]
27. managecasa | ManageCasa | hoa-property-management | unknown | unknown
28. wjewel | WJewel | jewelry-retail-erp | unknown | unknown
29. piro | PIRO | jewelry-erp-manufacturing | unknown | yes
30. consigncloud | ConsignCloud | consignment-resale-mgmt | unknown | unknown
31. ricochet | Ricochet | consignment-resale-pos | unknown | unknown
32. yoprint | YoPrint | print-apparel-shop-mgmt | 1.2M | unknown
33. teesom | Teesom | screen-printing-shop-mgmt | unknown | unknown
34. bikedesk | Bikedesk | bike-shop-pos | unknown | unknown
35. ordant | Ordant | print-mis-estimating | unknown | unknown
36. infofloprint | InfoFlo Print | print-shop-management | unknown | unknown
37. optosoft | OptoSoft | optical-retail-mgmt | unknown | unknown
38. the-equestrian-app | The Equestrian App | equine-care-management | unknown | yes
39. streamways | streamways | driving-school-management | 1.2M | unknown
40. equicty | Equicty | equine-stable-management | unknown | unknown
41. drivescout | Drive Scout | driving-school-management | unknown | unknown
42. ezloadertms | EZ Loader TMS | freight-broker-tms | 1-5M | unknown
43. class-manager-plus | Class Manager Plus | class-registration-mgmt | unknown | unknown
44. signtracker | SignTracker | sign-shop-project-mgmt | unknown | unknown
45. mygadgetrepairs | My Gadget Repairs | repair-shop-crm-pos | unknown | unknown
46. bytephase | BytePhase | repair-shop-crm | unknown | unknown
47. lifeevents | Life Events | crematorium-cemetery-mgmt | unknown | unknown
48. hubhello | HubHello | childcare-management | unknown | unknown
49. rapid-gun-systems | Rapid Gun Systems | gun-store-range-pos | unknown | unknown
50. trident1 | Trident 1 | ffl-gun-store-mgmt | unknown | unknown
51. thorovet | ThoroVet | equine-veterinary-mgmt | unknown | unknown  [replacement for propet dup]
52. commit-swimming | Commit Swimming | swim-team-management | unknown | unknown  [replacement for campium dup]

## Verified LinkedIn count
- Verified personal LinkedIn located: 6 (wherefour/Matt Brown, one-church-software/James Lovins, planning-pod/Jeff Kear, clubworx/Emily Smart, zoconut/Balkeerat Singh, piro/Zsolt Torok, the-equestrian-app/Patrick Husting)
  (= 7 of 52; all others set to literal `unknown` — never guessed/constructed)

## Notable skips (DQ reasons)
1. Splose (allied-health AU) — raised $46M Series A (DQ rule #6 / over ICP)
2. Open Dental — 251-500 employees (over 100-emp cap), despite bootstrapped/independent
3. HawkSoft / WaterStreet (insurance AMS) — 73-100+ emp, $7M+ ARR (over ICP)
4. CenterEdge Software (FEC) — bootstrapped but $10.1M ARR / 92 emp (over ICP)
5. PracticeSuite (medical billing) — bootstrapped but $19.3M ARR / 175+ emp + acquired MicroMD & Hello Health (consolidator)
6. The Flybook, Club Prophet, shopVOX, Shop Boss, Caterease, Docket — all acquired by holding cos (Fullsteam / Horizon / ServiceCore / Vehlo)
7. Firm360 (CPA) — Level Equity growth-equity backed (not bootstrapped)
8. Software4Nonprofits — acquired + solo/3-person lifestyle biz
9. RepairDesk — bootstrapped but 135-166 employees (over cap); also already in sheet
10. Pedal Mobility, Opus1, Curate, Programa, Spoonfed, Hauler Hero — VC-backed and/or AI-native-positioned
11. FloristWare — solo founder (1 employee) per solo-founder DQ rule
12. ShiftCare — bootstrapped but $7.2M ARR / 65 emp (over ICP ceiling, no strong anti-VC stance to justify exception)

## Key learnings (for MEMORY.md)
- Niche-retail/service verticals (print/sign shops, jewelry, consignment, bike/repair shops, gun/FFL, catering) are an extremely rich vein of bootstrapped founder-built sub-$5M SaaS — far less PE-consolidated than healthcare/legal/field-service. Print-shop management especially (YoPrint, Teesom, Ordant, InfoFlo Print, SignTracker) yielded 5 clean fits in one pass.
- Field-service trades (HVAC/plumbing/locksmith/pool/towing/garage-door) are a graveyard — almost everything is VC-funded (Workiz, ServiceTitan, Housecall Pro, Autura) or holding-co rolled-up (Fullsteam, Vehlo, ECI). Skip unless a clear independent surfaces (GorillaDesk already in).
- Equine/vet practice-mgmt has a tight cluster of intentional bootstrappers (The Equestrian App, Equicty, ThoroVet) but watch for Business Infusions/Merit Holdings rollup (Cassadol DQ'd).
- Fullsteam is the dominant SMB-vertical SaaS roll-up parent this cycle (Flybook, Club Prophet, shopVOX all absorbed) — run "[name] acquired" + check Fullsteam/Vehlo/EverCommerce/Togetherwork BEFORE qualifying any niche-retail/field candidate.
- GetLatka by-industry indexes (e.g. i-driving-school-software) remain the fastest path to ARR/employee data for obscure verticals.
- TOOLING BUG: the in-run dedup checker (/tmp/check.py) and dedup cache (/tmp/dedup.json) drifted on key name (slugs vs ids) mid-run, causing campium + propet to slip through as false-NEW. Going forward: build dedup set ONCE, never rebuild the file mid-run, and confirm the checker reads the same key it wrote.
