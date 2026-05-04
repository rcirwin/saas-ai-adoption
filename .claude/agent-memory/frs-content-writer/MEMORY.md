# Persistent learnings — frs-content-writer

These are durable preferences accumulated from working with Ryan. They override defaults when they conflict.

---

## Output shape

- **Always produce all three files** (`.md`, `.linkedin.txt`, `.twitter.txt`) by default. Ryan asked for this explicitly on 2026-05-04. Don't ask whether to produce platform variants — produce them.
- After writing the files, surface a short note that the user should copy from the `.linkedin.txt` and `.twitter.txt` in a text editor (TextEdit / VS Code), not from a chat UI — chat UIs strip blank lines and the LinkedIn composer needs them for paragraph spacing.

## Em dashes

- **Zero em dashes, anywhere, in any file.** Ryan flags this every time. Run `grep -c $'—'` on every output file before returning. The count must be `0`.
- Common slips: in passages with parentheticals, in `—` accidentally introduced by autocomplete or paste, in pre-written reference material the writer pulled from. Re-grep, don't trust your own eyes.

## LinkedIn line-break style

- For **analytical / argumentative posts** (thesis posts with bolded section labels, multi-block reasoning, the `ai-agent-thesis` pillar): prefer paragraph-style (multi-sentence paragraphs separated by blank lines). One-line-per-sentence atomizes the argument and breaks dwell-time pacing.
- For **punchy / narrative posts** (story, observation, single-stake hook): one-line-per-sentence with whitespace between every line.
- Mirrored sentence pairs (`If X / If Y`) ALWAYS stay on consecutive lines with no blank between them. They are one beat. Do not split them with whitespace.

## Unicode bold (LinkedIn only)

- Use Unicode mathematical sans-serif bold (U+1D5D4-U+1D607) only in `.linkedin.txt`. The `.md` file always uses standard markdown `**...**`.
- Cap at 4 bolded spans per post: typically the takeaway sentence + up to 3 in-line section labels (`𝗣𝗿𝗶𝗰𝗶𝗻𝗴.`, `𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻.`, `𝗩𝗼𝗰𝗮𝗯𝘂𝗹𝗮𝗿𝘆.`).
- Never bold inside the hook (first ~140 chars). Don't compete with the hook's pull.
- Never bold a keyword you'd want LinkedIn search to surface — Unicode bold is invisible to search.

## Twitter / X format

- Default to threads, not single long posts. Even for X Premium users — threads outperform on the free-tier audience.
- Drop Unicode bold from category labels in threads (each tweet is its own visual block). Keep Unicode bold only on the takeaway sentence, or drop entirely.
- Closing CTA always gets its own standalone tweet. Standalone CTA tweets often outperform the rest of the thread.
- Drop hashtags. Twitter hashtags are dead for organic reach.
- Drop arrow characters (`→`). Rewrite as prose or use line breaks.
- 9-13 tweets for thesis posts, 5-7 for narrative posts. Avoid 14+.

## Iteration patterns

- Ryan often refines the thesis mid-draft after seeing the first version. When he wants a single sentence swapped, swap only that sentence. Do not restructure the surrounding paragraphs unless explicitly asked.
- Ryan tends to want the load-bearing claim of a post to be sharp and specific (e.g., "the agent will rebuild your slice" beats "you'll get commoditized"). Lean specific over general when there's a choice.
- When Ryan says "more like this" with rough wording, treat it as essence-extraction, not literal substitution. Clean the prose, keep the substance.
