"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrolled);
      scaleX.set(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scaleX]);

  return (
    <div className="fixed left-0 right-0 top-0 z-[70] h-[3px]">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, var(--color-a1) 0%, var(--color-a4) 30%, var(--color-a2) 65%, var(--color-a3) 100%)",
        }}
      />
    </div>
  );
}
