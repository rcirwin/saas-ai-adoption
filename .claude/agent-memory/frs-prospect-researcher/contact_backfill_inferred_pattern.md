---
name: contact-backfill-inferred-pattern
description: When backfilling missing emails, mark inferred emails with "[inferred email]" prefix in fit_notes (not contact_email). Default email pattern is firstname@domain.com.
metadata:
  type: feedback
---

When the contact_backfill task asks to mark `[inferred]` prefix, it goes in `fit_notes` (not as a prefix in `contact_email`). Outreach Writer reads fit_notes for context and email for sending — prefixing email breaks the actual email value.

**Why:** Initial run prefixed `[inferred]michael@gosweft.com` into contact_email — that becomes the literal address used by outreach. Caller corrected: prefix in fit_notes only.

**How to apply:** For inferred emails (firstname@domain pattern, no public confirmation), prepend `[inferred email]` to the existing fit_notes value (truncate to 200 chars). contact_email gets the clean inferred address.

**Common firstname@domain patterns confirmed across SaaS founders backfill (2026-05-29):** beds24/mark, aprika/colin, croptracker/matt, findthatlead/gerard, m2north/ivan, qbench/nicholas, condens/matej, designmodo-postcards/adrian, boords/james, syncspider/norbert, sprout-studio/bryan@getsproutstudio.com, mrpeasy/konstantin, marvia/joep@getmarvia.com, almabase/kalyan, gleam/stuart@gleam.io.

**Confirmed (not inferred) via Zoominfo/Aeroleads/RocketReach masked-email reveals:** oneup/nadal@oneup.com, talentguard/linda.ginac@talentguard.com, repurpose-io/hani@repurpose.io, implementhit/aj@implementhit.com, cliniko/joel@cliniko.com.

**Wrong-CEO-in-sheet corrections seen this run:**
- elfsight: sheet had "Andrei Mochalov" — actual CEO is Andrey Yusupov (Crunchbase + LinkedIn confirmed).
- implementhit duplicate row had "Steve Hess" — actual CEO is Andres Jimenez MD.
- junocal: sheet had LI "uk.linkedin.com/in/onyinye-abraham" — correct (Sharon Onyinye, founder of Junocal, separate from her older Coachli venture).

**LinkedIn-deleted edge case:** Joel Friedlaender (Cliniko) deleted his LinkedIn in 2016. Leave contact_linkedin empty; email-only outreach.

**Port443/TutorBird/MyMusicStaff/AthletaDesk parent company pattern:** Dan Santoni runs all four products from Port443 Inc. Burlington Ontario. tutorbird and port443 share contact_name/linkedin/email.

**Beae (Vietnam, Joint Stock) and BulkSignature (Uzbekistan-HQ via Apps Record LLC) hidden-founder pattern:** Beae has no public founder name on website or LinkedIn — use generic contact@beae.com. BulkSignature CEO is Shukhrat Mirsaid (LinkedIn confirms) — was hidden from quick searches because of Uzbek/Texas dual-HQ.
