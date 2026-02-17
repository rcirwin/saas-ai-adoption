"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section, {
  SectionLabel,
  SectionHeadline,
  SectionDescription,
} from "./Section";
import { outcomesContent } from "./copy";

const deliverableAccents = [
  { color: "var(--color-a1)", light: "rgba(46, 196, 182, 0.08)", border: "rgba(46, 196, 182, 0.20)" },
  { color: "var(--color-a4)", light: "rgba(73, 189, 242, 0.08)", border: "rgba(73, 189, 242, 0.20)" },
  { color: "var(--color-a2)", light: "rgba(124, 92, 255, 0.08)", border: "rgba(124, 92, 255, 0.20)" },
  { color: "var(--color-a3)", light: "rgba(233, 107, 200, 0.07)", border: "rgba(233, 107, 200, 0.18)" },
];

const deliverableVideos: (string | null)[] = [
  "/deliverable-01.mp4",
  "/deliverable-02.mp4",
  "/deliverable-03.mp4",
  "/deliverable-04.mp4",
];

export default function Outcomes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="deliverables" className="bg-white">
      <SectionLabel>{outcomesContent.label}</SectionLabel>
      <SectionHeadline>{outcomesContent.headline}</SectionHeadline>
      <SectionDescription>{outcomesContent.subheadline}</SectionDescription>

      <div ref={ref} className="mt-16 space-y-0">
        {outcomesContent.deliverables.map((d, i) => {
          const accent = deliverableAccents[i];
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col gap-8 border-b border-[var(--color-border)] py-12 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:items-center md:gap-16 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Illustration */}
              <div className="flex flex-shrink-0 items-center justify-center md:w-[280px]">
                {deliverableVideos[i] ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[200px] w-auto rounded-2xl object-contain"
                  >
                    <source src={deliverableVideos[i]} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    className="flex h-[200px] w-full items-center justify-center rounded-2xl border border-dashed"
                    style={{
                      borderColor: accent.border,
                      background: accent.light,
                    }}
                  >
                    <span
                      className="font-mono text-[72px] font-bold leading-none"
                      style={{ color: accent.color, opacity: 0.25 }}
                    >
                      {d.number}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ backgroundColor: accent.color }}
                  >
                    {d.number}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${accent.border} 0%, transparent 100%)`,
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {d.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {d.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
