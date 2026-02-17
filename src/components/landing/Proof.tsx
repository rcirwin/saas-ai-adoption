"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionHeadline } from "./Section";
import { proofContent } from "./copy";

const patternAccents = [
  { border: "border-l-[var(--color-a1)]", icon: "text-[var(--color-a1)]" },
  { border: "border-l-[var(--color-a4)]", icon: "text-[var(--color-a4)]" },
  { border: "border-l-[var(--color-a2)]", icon: "text-[var(--color-a2)]" },
  { border: "border-l-[var(--color-a3)]", icon: "text-[var(--color-a3)]" },
];

export default function Proof() {
  return (
    <Section id="proof" className="bg-white">
      <SectionLabel>{proofContent.label}</SectionLabel>
      <SectionHeadline>{proofContent.headline}</SectionHeadline>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
        Common patterns we uncover across engagements.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {proofContent.patterns.map((pattern, i) => (
          <motion.div
            key={pattern.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`rounded-2xl border border-[var(--color-border)] border-l-[3px] ${patternAccents[i].border} bg-[var(--color-bg)] p-6`}
          >
            <div className="mb-3 flex items-center gap-2">
              <svg
                className={`h-4 w-4 ${patternAccents[i].icon}`}
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 8h12M8 2v12" />
              </svg>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                Pattern {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
              {pattern.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {pattern.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
