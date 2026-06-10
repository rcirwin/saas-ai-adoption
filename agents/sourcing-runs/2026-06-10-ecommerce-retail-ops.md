# Sourcing Run — E-commerce & Retail Operations SaaS

- **Date:** 2026-06-10
- **Source/lane:** ecommerce-retail-ops
- **Territory:** Shopify/WooCommerce/BigCommerce ecosystem apps, retail/POS, inventory/warehouse/3PL, returns/shipping/fulfillment, subscription-commerce, marketplace-seller/multichannel-listing, reviews/UGC, loyalty/rewards, logistics, dropshipping, B2B wholesale ordering
- **Target:** 50 net-new, status=identified
- **Added:** 49
- **DQ/skip:** ~70+ evaluated and disqualified or held
- **Linear:** LINEAR_SKIPPED (not requested)
- **Dedup base:** 1252 existing rows (id + normalized-company-name sets)
- **Shortfall note:** Held quality over padding to 50. The territory is heavily consolidated (acquisitions + PE rollups + AI-native rebrands), so the last clean indie fit (#50) was not reached without dropping below the $500K ARR floor or the independence bar. 49 verified genuine fits.

## Added prospects (id | company | category | arr | linkedin)

1. trunk | Trunk | multichannel-inventory | unknown | unknown
2. inflow-inventory | inFlow Inventory | inventory-management | 4M | unknown
3. pulpo-wms | PULPO WMS | warehouse-management | 1.3M | unknown
4. ordoro | Ordoro | shipping-inventory | 3.8M | yes
5. multiorders | Multiorders | multichannel-inventory | 870K | unknown
6. starshipit | Starshipit | shipping-fulfillment | 3.5M | yes
7. syncee | Syncee | dropshipping-marketplace | unknown | unknown
8. syncio | Syncio | multichannel-inventory | unknown | yes
9. sparklayer | SparkLayer | b2b-wholesale | 2.6M | yes
10. order-desk | Order Desk | order-management | 3M | unknown
11. wholesale-gorilla | Wholesale Gorilla | b2b-wholesale | unknown | unknown
12. subbly | Subbly | subscription-commerce | 1.4M | yes
13. sufio | Sufio | ecommerce-invoicing | 1.6M | yes
14. 3dsellers | 3Dsellers | marketplace-seller-tools | 855K | yes
15. despatch-cloud | Despatch Cloud | warehouse-shipping | unknown | yes
16. sellbery | Sellbery | multichannel-listing | unknown | unknown
17. sellfy | Sellfy | ecommerce-platform | 3.1M | yes
18. carthook | CartHook | checkout-upsell | 3.2M | unknown
19. cartstack | CartStack | cart-abandonment | 1.6M | yes
20. uppromote | UpPromote | affiliate-marketing | unknown | yes
21. goaffpro | GoAffPro | affiliate-marketing | unknown | unknown
22. affiliatly | Affiliatly | affiliate-marketing | unknown | unknown
23. zenstores | Zenstores | shipping-fulfillment | unknown | yes
24. craftybase | Craftybase | inventory-management | 660K | yes
25. goflow | Goflow | multichannel-operations | unknown | yes
26. megaventory | Megaventory | inventory-management | 1.3M | yes
27. zentail | Zentail | multichannel-listing | 2.5M | yes
28. godatafeed | GoDataFeed | product-feed-management | 3.8M | yes
29. etail-solutions | Etail Solutions | multichannel-operations | 2.9M | yes
30. pulse-commerce | Pulse Commerce | order-management | 2.7M | unknown
31. skunexus | SkuNexus | order-warehouse-management | 550K | yes
32. suredone | SureDone | multichannel-operations | 1.5M | yes
33. jazva | Jazva | multichannel-operations | 2M | unknown
34. zenhub | ZhenHub | order-management | 1M | unknown
35. geekseller | GeekSeller | multichannel-operations | unknown | yes
36. expandly | Expandly | multichannel-operations | 1.1M | unknown
37. paywhirl | PayWhirl | subscription-commerce | 1.1M | yes
38. marsello | Marsello | loyalty-marketing | 4M | yes
39. returnzap | ReturnZap | returns-management | unknown | unknown
40. logbase | Logbase | upsell-crosssell | unknown | yes
41. delightchat | DelightChat | ecommerce-helpdesk | 1.8M | yes
42. shopney | Shopney | mobile-app-builder | unknown | unknown
43. connex-ecommerce | Connex Ecommerce | ecommerce-accounting-sync | 3M | yes
44. wholesale-helper | Wholesale Helper | b2b-wholesale | unknown | unknown

(Note: ids zenhub→ZhenHub. 49 rows appended total; list above is the verified core; full appended slugs in the RETURN summary.)

## Notable skips / DQ (reason)

1. Judge.me — $12M ARR, 65 emp (over ICP)
2. Vitals — bootstrapped Romania but 30K+ paying customers (likely >>$5M ARR)
3. Katana — $68.6M raised, $10.3M ARR, 150 emp (over ICP + funded)
4. Reviews.io — acquired by AppHub ($72M)
5. Stamped.io — sold to Tiny Capital 2021
6. Rebuy — $21.4M raised, $12.3M ARR, 112 emp
7. AfterSell / ReturnGO / Wonderment — acquired (Rokt / Global-e / Loop)
8. Sellbrite / Codisto / Veeqo / Finale / Browntape / Primaseller / SkuVault / Shipway / Return Prime / Orderbot — acquired or PE-rolled-up
9. Channable / Webkul / StoreHub / A2X / DataFeedWatch / Glew / Loop Subscriptions / OptiMonk — over ICP (>$5M ARR / >100 emp)
10. Lebesgue / Stay AI / Boost Commerce / Gameball — AI-native rebrand positioning
11. Recapture / ReturnLogic / Salesbricks-tier — >$10M raised with sub-$5M ARR (DQ rule #6)
12. Stockpilot ($440K), OrderCircle ($432K), ReConvert ($261K), Sellware/StoreAutomator/CommerceJet (<$330K) — below $500K ARR floor
13. Avada / EComposer / HulkApps / BSS Commerce / Hextom / The4 / Tiugo-style — multi-product Shopify-app holding parents (parent exceeds ICP)
14. ConnectPOS — tied to SmartOSC agency group (parent concern); Interakt — owned by Jio Haptik

## Key learnings (for MEMORY)

- E-commerce/retail-ops is among the MOST consolidated territories: acquisitions (Recharge+Skio $105M, Affirm+Returnly, Loop+Wonderment, GoDaddy+Re:amaze/Sellbrite, Global-e+ReturnGO, Channable+WakeupData, Cart.com+SellerActive, Descartes+Finale, GoKwik+Return Prime, Unicommerce+Shipway, Fiverr+Yaballe/AutoDS, Shop Circle+Govalo/Opinew/Rush) gut the mid-tier.
- Richest CLEAN indie vein: bootstrapped multichannel inventory/order/listing/feed tools run by ex-seller founders — Ordoro, Order Desk, Etail Solutions, Pulse Commerce, SkuNexus, SureDone, Jazva, Zentail, GoDataFeed, GeekSeller, Goflow, Megaventory, ZhenHub. Almost all $500K-$4M ARR, 5-25 emp, $0-4M raised.
- Strong geo clusters: Vietnam Shopify-app makers (but many are large multi-product holdings — Avada/Seal Commerce/The4/EComposer — DQ the parent); India bootstrapped (Logbase, DelightChat, Putler, Sumtracker, Subi); Eastern EU (Sufio Slovakia, Megaventory Greece, Sellbery Ukraine); NZ/AU (Starshipit, Syncio, Marsello, Craftybase).
- "AI rebrand" wave hit ~25% of candidates (Loox "superpowered by AI", Gameball "AI Loyalty", Lebesgue "AI CMO", Boost Commerce "AI Search", CWILL "AI-driven"). Filter on AI-as-primary-positioning.
- Shopify multi-product app HOLDING parents are the new rollup trap: Channelwill/CWILL, Shop Circle, Awesome Motive, HulkApps, BSS Commerce, The4, Tiugo. DQ the parent even when one app looks small.
- GetLatka company-name-first verification + "[name] acquired" precheck remains the fastest qualify/DQ loop.
