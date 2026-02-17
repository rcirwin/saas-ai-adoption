"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionHeadline } from "./Section";
import { whoContent } from "./copy";

export default function WhoItsFor() {
  return (
    <Section id="fit">
      <SectionLabel>{whoContent.label}</SectionLabel>
      <SectionHeadline>{whoContent.headline}</SectionHeadline>

      <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
        {/* For */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[var(--color-a1)]/20 bg-[var(--color-a5)]/15 p-6 md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-a1)]/15">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="var(--color-a1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7l3.5 3.5L12 4" />
              </svg>
            </div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-a1)]">
              Good fit
            </h3>
          </div>
          <ul className="space-y-3">
            {whoContent.forItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
              >
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-a1)]"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8l3.5 3.5L13 5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Not for */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-bg-panel)]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="var(--color-muted-2)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4l6 6M10 4l-6 6" />
              </svg>
            </div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
              Not a fit
            </h3>
          </div>
          <ul className="space-y-3">
            {whoContent.notForItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-tertiary)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-muted-2)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
