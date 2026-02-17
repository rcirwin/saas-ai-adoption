"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Orb {
  color: string;
  size: number;
  x: string;
  y: string;
  parallaxRange: [number, number];
}

interface FloatingOrbsProps {
  orbs: Orb[];
}

export default function FloatingOrbs({ orbs }: FloatingOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <OrbElement key={i} orb={orb} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function OrbElement({
  orb,
  scrollYProgress,
}: {
  orb: Orb;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], orb.parallaxRange);

  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: orb.size,
        height: orb.size,
        left: orb.x,
        top: orb.y,
        background: orb.color,
        y,
      }}
    />
  );
}
