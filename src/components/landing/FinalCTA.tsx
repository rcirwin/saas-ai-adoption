"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import FloatingOrbs from "./FloatingOrbs";
import { finalCtaContent } from "./copy";

export default function FinalCTA() {
  const scrollToDeliverables = () => {
    document
      .getElementById("deliverables")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section padding="large" className="grain relative overflow-hidden">
      {/* Gradient wash backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-wash"
        aria-hidden="true"
      />
      <FloatingOrbs
        orbs={[
          { color: "rgba(46, 196, 182, 0.10)", size: 280, x: "10%", y: "30%", parallaxRange: [-30, 30] },
          { color: "rgba(124, 92, 255, 0.08)", size: 220, x: "75%", y: "20%", parallaxRange: [20, -20] },
          { color: "rgba(233, 107, 200, 0.05)", size: 180, x: "50%", y: "70%", parallaxRange: [-15, 25] },
        ]}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[34px] lg:text-[40px]"
        >
          {finalCtaContent.headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-lg text-base leading-[1.6] text-[var(--color-text-secondary)]"
        >
          {finalCtaContent.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://cal.com/futurereadystudio/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine rounded-xl bg-[var(--color-text-primary)] px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#111C33] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[rgba(46,196,182,0.35)] focus:ring-offset-2 active:scale-[0.97] inline-block"
          >
            {finalCtaContent.primaryCta}
          </a>
          <button
            onClick={scrollToDeliverables}
            className="rounded-xl border border-[var(--color-border-strong)] bg-transparent px-8 py-3.5 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:bg-[rgba(15,23,42,0.04)] active:scale-[0.97]"
          >
            {finalCtaContent.secondaryCta}
          </button>
        </motion.div>
      </div>
    </Section>
  );
}
