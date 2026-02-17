"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section, { SectionLabel, SectionHeadline } from "./Section";
import { faqContent } from "./copy";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>{faqContent.label}</SectionLabel>
        <SectionHeadline>{faqContent.headline}</SectionHeadline>

        <div className="mt-12 divide-y divide-[var(--color-border)]">
          {faqContent.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`flex w-full items-start justify-between gap-4 py-5 text-left transition-colors ${openIndex === i ? "text-[var(--color-text-primary)]" : ""}`}
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                  {item.question}
                </span>
                <span className="mt-1 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className={`transition-all duration-200 ${
                      openIndex === i ? "rotate-45 text-[var(--color-a1)]" : "text-[var(--color-text-tertiary)]"
                    }`}
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-l-2 border-[var(--color-a2)]/40 pb-5 pl-4 pr-8 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
