"use client";

import { motion } from "framer-motion";
import Section, { SectionLabel, SectionHeadline } from "./Section";
import FloatingOrbs from "./FloatingOrbs";
import { problemContent } from "./copy";

const bulletAccents = [
  { bar: "bg-[var(--color-a1)]", bg: "bg-[var(--color-a5)]/15", border: "border-[var(--color-a1)]/15" },
  { bar: "bg-[var(--color-a4)]", bg: "bg-[var(--color-a4)]/[0.06]", border: "border-[var(--color-a4)]/12" },
  { bar: "bg-[var(--color-a2)]", bg: "bg-[var(--color-a2)]/[0.05]", border: "border-[var(--color-a2)]/12" },
];

export default function Problem() {
  return (
    <Section id="problem">
      <FloatingOrbs
        orbs={[
          { color: "rgba(46, 196, 182, 0.08)", size: 300, x: "-5%", y: "20%", parallaxRange: [-40, 40] },
          { color: "rgba(124, 92, 255, 0.06)", size: 250, x: "85%", y: "60%", parallaxRange: [30, -30] },
        ]}
      />
      <SectionLabel>{problemContent.label}</SectionLabel>
      <SectionHeadline>
        {problemContent.headline.split("\n").map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </SectionHeadline>

      <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
        {problemContent.bullets.map((bullet, i) => (
          <motion.div
            key={bullet.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl border ${bulletAccents[i].border} ${bulletAccents[i].bg} p-6`}
          >
            <div className={`mb-4 h-0.5 w-10 rounded-full ${bulletAccents[i].bar}`} />
            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
              {bullet.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {bullet.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
