"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionHeadline, SectionDescription } from "./Section";
import GlowCard from "./GlowCard";
import { valueSurfaceContent } from "./copy";

/* Icon: user silhouette with radiating action nodes — agentic experiences */
function AgenticIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Central user */}
      <circle cx="24" cy="16" r="5" />
      <path d="M16 30a8 8 0 0116 0" />
      {/* Radiating action nodes */}
      <line x1="24" y1="34" x2="24" y2="40" />
      <circle cx="24" cy="42" r="2" fill="currentColor" stroke="none" />
      <line x1="14" y1="26" x2="8" y2="22" />
      <circle cx="6" cy="21" r="2" fill="currentColor" stroke="none" />
      <line x1="34" y1="26" x2="40" y2="22" />
      <circle cx="42" cy="21" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Icon: product block with connection port — agent-ready product */
function AgentReadyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Product block */}
      <rect x="10" y="12" width="20" height="20" rx="3" />
      {/* API / connection lines extending out */}
      <line x1="30" y1="18" x2="38" y2="18" />
      <circle cx="40" cy="18" r="2" fill="currentColor" stroke="none" />
      <line x1="30" y1="24" x2="38" y2="24" />
      <circle cx="40" cy="24" r="2" fill="currentColor" stroke="none" />
      <line x1="30" y1="30" x2="38" y2="30" />
      <circle cx="40" cy="30" r="2" fill="currentColor" stroke="none" />
      {/* Small circuit lines inside the block */}
      <path d="M15 19h6M15 24h4M15 29h6" opacity="0.5" />
    </svg>
  );
}

const angleIcons = [AgenticIcon, AgentReadyIcon];

const dimAccents = [
  {
    bg: "border-[var(--color-a1)]/25 bg-[var(--color-a5)]/25",
    bar: "bg-[var(--color-a1)]",
    icon: "text-[var(--color-a1)]",
    tag: "bg-[var(--color-a1)]/10 text-[var(--color-a1)] border-[var(--color-a1)]/20",
    glow: "rgba(46, 196, 182, 0.12)",
  },
  {
    bg: "border-[var(--color-a2)]/20 bg-[var(--color-a2)]/[0.06]",
    bar: "bg-[var(--color-a2)]",
    icon: "text-[var(--color-a2)]",
    tag: "bg-[var(--color-a2)]/10 text-[var(--color-a2)] border-[var(--color-a2)]/20",
    glow: "rgba(124, 92, 255, 0.12)",
  },
];

export default function ValueSurface() {
  return (
    <Section id="value-surface">
      <div>
        <SectionLabel>{valueSurfaceContent.label}</SectionLabel>
        <SectionHeadline>
          {valueSurfaceContent.headline.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </SectionHeadline>
        <SectionDescription>
          {valueSurfaceContent.description}
        </SectionDescription>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {valueSurfaceContent.dimensions.map((dim, i) => (
          <motion.div
            key={dim.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <GlowCard
              glowColor={dimAccents[i].glow}
              className={`h-full rounded-2xl border p-8 ${dimAccents[i].bg}`}
            >
              <img
                src={i === 0 ? "/angle-agentic.png" : "/angle-agent-ready.png"}
                alt=""
                className="mb-5 h-[84px] w-[84px]"
              />

              <h3 className="text-xl font-semibold leading-snug text-[var(--color-text-primary)]">
                {dim.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {dim.description}
              </p>
              <ul className="mt-6 space-y-3">
                {dim.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${dimAccents[i].icon}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8l3.5 3.5L13 5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
