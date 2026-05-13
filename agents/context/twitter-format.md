# Twitter / X Format Reference

External, structural guidance for Twitter / X posts and threads. Voice/tone live in `agents/voice-guide.md`. LinkedIn-specific format lives in `agents/context/linkedin-format.md`.

When this file conflicts with `voice-guide.md` on style, voice-guide wins.

Audience: same B2B SaaS founders, CEOs, product leaders. Twitter culture is punchier and more compressed than LinkedIn — translate, don't just paste.

---

## 1. Default to a thread, not a single long post

X Premium allows up to 25,000 characters per post. The free tier still caps at 280. **Always produce a thread** unless explicitly told otherwise, because:

- Most readers aren't on Premium and a clamped long post hides past the read-more click.
- Threads provide visual hierarchy for free — every tweet is its own visual block.
- Each tweet is its own engagement unit (likes, replies, reposts compound across the thread).
- Mid-thread tweets become independently quote-tweetable, expanding reach.

Single long post is acceptable only if (a) the user explicitly asks for one and (b) the body is short enough that the thread structure adds nothing.

---

## 2. Thread length

- **9-13 tweets** for analytical / thesis posts (the FRS default for `ai-agent-thesis`, `workflow-first` content).
- **5-7 tweets** for narrative / observation / lesson posts.
- **Avoid 14+ tweets.** Drop-off accelerates past tweet 12; cut or compress.
- The hook tweet (`1/`) carries ~80% of the click-through weight. Engineer it like a LinkedIn hook (curiosity gap or concrete stake in line 1, no greeting, no throat-clear).

---

## 3. Character budget (free tier, 280)

Twitter / X uses *weighted* character counts. Most Latin characters count as 1. Characters in the Mathematical Alphanumeric Symbols block (U+1D400-U+1D7FF) — which is what Unicode bold uses — count as **2 each**.

**Practical rules:**
- Plain-text tweet: aim for ≤260 visible characters to leave headroom for line breaks.
- Tweet containing Unicode bold: each bold letter counts as 2. Spaces, numbers, and punctuation stay at 1. A 30-char bold span = ~60 weighted chars.
- If a tweet feels tight, give the bold span (or the punchline sentence) its own tweet.

---

## 4. Numbering convention

Use `1/`, `2/`, `3/` (digit, slash, no space) at the start of every tweet on threads ≥ 4 tweets long. Readers use the numbers to track position.

- Don't use `1/N` (you don't always know N until the thread is finalized).
- Don't omit numbering on long threads.
- The hook tweet may end with `🧵` to signal a thread is coming. Optional. Drop if Ryan's voice in this post doesn't take emoji.

---

## 5. LinkedIn → Twitter adaptation table

| LinkedIn element | Twitter / X equivalent |
|---|---|
| Bolded section labels (`𝗣𝗿𝗶𝗰𝗶𝗻𝗴.`, etc.) | **Drop the bold.** Each section gets its own tweet; the tweet boundary IS the visual break. Plain `Pricing.` is enough. |
| Paragraph-style multi-sentence blocks | Tighter. Compress two sentences into one where possible. |
| Long, hedged setup sentences | Cut prepositional phrases, qualifiers, parentheticals. Twitter prose is ~30% shorter per beat than LinkedIn prose. |
| Bullet list of 4 items | Keep bullets if they fit in one tweet. Otherwise: hook tweet + bullets in tweet 2. |
| Closing CTA question | **Always its own standalone tweet.** Standalone CTA tweets often outperform the rest of the thread. |
| Hashtags at the end | Drop them. Twitter hashtags are largely dead for organic reach. |
| Arrows `→` showing cause/effect | Drop. Use line breaks or rewrite as prose. |

---

## 6. Unicode bold on Twitter

Use sparingly. The takeaway / punchline sentence at the end of the thread is the only place Unicode bold reliably earns its keep — same reasoning as LinkedIn.

**Drop Unicode bold from:**
- Category labels in numbered/sectioned threads. Each tweet is already a visual block.
- The hook tweet. Don't compete with the hook's own pull.
- Any keyword you want indexed by Twitter search.

**Keep Unicode bold on:**
- The single takeaway sentence (final thesis compression).

Conversion mappings live in `linkedin-format.md` section 4a.

---

## 7. Conversion workflow (LinkedIn draft → Twitter thread)

1. Take the LinkedIn paragraph-style version as input.
2. Split each "block" of the LinkedIn post into one or more tweets.
3. Compress sentences. Cut hedges, parentheticals, transitional phrases.
4. Drop em dashes (still banned everywhere). Drop most parentheticals.
5. Drop Unicode bold from labels. Keep on the takeaway sentence only.
6. Closing CTA gets its own standalone tweet.
7. Verify each tweet's weighted character count is ≤ 280.
8. Use `---` separators in the draft file between tweets (purely for the writer's readability — never paste them into Twitter).

---

## 8. Engagement triggers (Twitter-specific)

- **Specific question CTAs** beat "Thoughts?" — same as LinkedIn.
- **Quote-tweetable lines.** Engineer at least one mid-thread tweet that stands alone with no context. Short, sharp, opinionated.
- **The takeaway sentence** (final thesis compression) often gets quote-tweeted independently. Make it tweetable on its own.
- **Don't beg replies.** "RT if you agree" suppresses reach.

---

## 9. Pre-flight checklist for every Twitter thread

- [ ] Each tweet ≤ 280 weighted characters (Unicode bold counted as 2 per char).
- [ ] No em dashes anywhere.
- [ ] Numbering on every tweet (`1/`, `2/`, ...) when thread is ≥ 4 tweets.
- [ ] Hook tweet (`1/`) creates a curiosity gap or concrete stake in line 1. No greeting, no throat-clear.
- [ ] No outbound links in the hook tweet (suppresses reach).
- [ ] Unicode bold limited to the takeaway sentence (or absent entirely).
- [ ] Closing CTA is a standalone tweet.
- [ ] 9-13 tweets for thesis posts; 5-7 for narrative.
- [ ] At least one tweet is independently quote-tweetable.
- [ ] `---` separators used in draft file only, not in posted content.
