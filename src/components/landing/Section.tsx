"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: "default" | "large" | "none";
}

export default function Section({
  id,
  children,
  className = "",
  padding = "default",
}: SectionProps) {
  const paddingMap = {
    default: "py-14 md:py-20",
    large: "py-20 md:py-24",
    none: "",
  };

  return (
    <section id={id} className={`relative ${paddingMap[padding]} ${className}`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-4 flex items-center gap-3"
    >
      <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-[var(--color-a1)] to-[var(--color-a2)]" aria-hidden="true" />
      <span className="text-[13px] font-medium uppercase leading-snug tracking-[0.2em] text-[var(--color-a1)]">
        {children}
      </span>
    </motion.div>
  );
}

export function SectionHeadline({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--color-text-primary)] md:text-[34px] ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`mt-4 max-w-2xl text-base leading-[1.6] text-[var(--color-text-secondary)] ${className}`}
    >
      {children}
    </motion.p>
  );
}
