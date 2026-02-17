"use client";

import { motion } from "framer-motion";
import Section, {
  SectionLabel,
  SectionHeadline,
  SectionDescription,
} from "./Section";
import { processContent } from "./copy";

const phaseAccents = [
  { dot: "border-[var(--color-a1)]/40 bg-[var(--color-a5)]/50 text-[var(--color-a1)]", card: "border-l-[var(--color-a1)]/40", line: "var(--color-a1)" },
  { dot: "border-[var(--color-a4)]/30 bg-[var(--color-a4)]/10 text-[var(--color-a4)]", card: "border-l-[var(--color-a4)]/30", line: "var(--color-a4)" },
  { dot: "border-[var(--color-a2)]/30 bg-[var(--color-a2)]/10 text-[var(--color-a2)]", card: "border-l-[var(--color-a2)]/30", line: "var(--color-a2)" },
  { dot: "border-[var(--color-a3)]/25 bg-[var(--color-a3)]/10 text-[var(--color-a3)]", card: "border-l-[var(--color-a3)]/25", line: "var(--color-a3)" },
];

export default function Process() {
  const total = processContent.phases.length;

  return (
    <Section id="process" className="bg-white">
      <SectionLabel>{processContent.label}</SectionLabel>
      <SectionHeadline>{processContent.headline}</SectionHeadline>
      <SectionDescription>{processContent.subheadline}</SectionDescription>

      <div className="mt-16">
        <div className="space-y-8 md:space-y-0">
          {processContent.phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 md:gap-8"
            >
              {/* Timeline column - dot + connector line */}
              <div className="hidden flex-shrink-0 md:flex md:w-12 md:flex-col md:items-center">
                {/* Dot */}
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-[10px] font-bold ${phaseAccents[i].dot}`}
                >
                  {phase.label.replace("Weeks ", "W")}
                </div>
                {/* Connector line between dots (not on last item) */}
                {i < total - 1 && (
                  <div
                    className="w-0.5 flex-1 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${phaseAccents[i].line} 0%, ${phaseAccents[i + 1].line} 100%)`,
                      opacity: 0.3,
                      minHeight: "2rem",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 rounded-2xl border border-[var(--color-border)] border-l-2 ${phaseAccents[i].card} bg-[var(--color-bg)] p-6 md:mb-8`}>
                <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] md:hidden">
                  {phase.label}
                </span>
                <h3 className="mt-1 text-base font-semibold text-[var(--color-text-primary)] md:mt-0">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
