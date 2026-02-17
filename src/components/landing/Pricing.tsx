"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionHeadline } from "./Section";
import { pricingContent } from "./copy";

interface PricingProps {
  onRequestAssessment: () => void;
}

export default function Pricing({ onRequestAssessment }: PricingProps) {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <SectionLabel>{pricingContent.label}</SectionLabel>
        <SectionHeadline className="mx-auto text-center">
          {pricingContent.headline}
        </SectionHeadline>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 rounded-2xl"
        >
          {/* Animated inner border snake */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* Rotating conic gradient - the visible segment is the "snake" */}
            <div
              className="absolute inset-0"
              style={{
                background: "conic-gradient(from var(--border-angle, 0deg), #2EC4B6 0%, #49BDF2 8%, #7C5CFF 16%, #E96BC8 24%, transparent 28%, transparent 100%)",
                animation: "spin-border 12s linear infinite",
              }}
            />
            {/* Inner mask - leaves only a 2px border visible */}
            <div className="absolute inset-[2px] rounded-[14px] bg-white" />
          </div>

          {/* Static subtle border underneath for when snake isn't covering a side */}
          <div className="absolute inset-0 rounded-2xl border border-[var(--color-border)]" />

          <div className="relative p-8 md:p-10">
            {/* Price */}
            <div className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-gradient md:text-4xl">
                {pricingContent.range}
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {pricingContent.description}
              </p>
            </div>

            <div className="my-8 h-px bg-[var(--color-border)]" />

            {/* Two columns: What's included + What you avoid */}
            <div className="mx-auto grid max-w-lg gap-8 text-left md:grid-cols-2 md:max-w-2xl">
              <div>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                  What&apos;s included
                </h3>
                <ul className="mt-4 space-y-3">
                  {pricingContent.includes.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
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
              </div>
              <div>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                  What you avoid
                </h3>
                <ul className="mt-4 space-y-3">
                  {pricingContent.avoids.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-a4)]"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4l8 8M12 4l-8 8" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={onRequestAssessment}
                className="btn-shine rounded-xl bg-[var(--color-text-primary)] px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#111C33] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[rgba(46,196,182,0.35)] focus:ring-offset-2 active:scale-[0.97]"
              >
                See If It&apos;s a Fit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
