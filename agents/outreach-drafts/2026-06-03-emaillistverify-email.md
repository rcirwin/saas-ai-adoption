---
prospect_id: emaillistverify
channel: email
template_used: email-proof-led
angle: verification-depth-as-ai-moat
date_drafted: 2026-06-03
status: drafted
contact: Martin Krizan (CTO), martin@emaillistverify.com
hook_source: 8-point verification (spam-trap, disposable, catch-all, MX) claiming 99% deliverability; AI-empty while ZeroBounce ships AI Email Scoring
CONTACT_BLOCKER: contact LinkedIn URL is company page, not Martin's personal profile (research flags reachability). Email-only this run.
DATA_QUALITY_FLAG: contact_email martin@emaillistverify.com marked [inferred]; contact_role is CTO not founder. Verify before send.
founder_perspective:
  product_strategy: Email list verification with 8-point checks (syntax, domain, SMTP, spam-trap, disposable, MX, catch-all); bulk plus real-time API; ~10 staff Slovak team.
  ai_posture: None. Pure multi-point verification; no AI features.
  concerns: Verification commoditizing; reachability/contact gap; competing with acquired and AI-augmented peers.
  industry_ai_view: ZeroBounce now offers AI Email Scoring; NeverBounce went to ZoomInfo; the category is consolidating and moving toward AI scoring on top of the check.
mirror_choice: product_strategy. Mirror the 8-point depth as the asset that an AI scoring layer needs, distinct from captainverify's "validity-to-prediction" framing.
---
Subject: Your 8-point stack is the dataset AI scoring runs on

Martin,

The interesting thing about a true 8-point verification stack is that it's not really a commodity, even though the category is being priced like one. Spam-trap, catch-all, and disposable detection across years of bulk runs is a labeled dataset, and that's the exact raw material the AI scoring layer everyone is racing to ship actually runs on.

ZeroBounce moved first with AI Email Scoring, but they're scoring on top of the same primitives EmailListVerify already computes at scale. So the question is whether that depth becomes a scoring product you own or a feature someone else layers on top of you.

If useful, I can share the directional read on where I'd start with EmailListVerify, no commitment. Open to a short call or just trading notes here.

Ryan Irwin
Founder, Future Ready Studio
