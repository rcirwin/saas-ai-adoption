"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heroContent } from "./copy";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToDeliverables = () => {
    document.getElementById("deliverables")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      video.pause();
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[60svh] overflow-hidden pt-16 md:min-h-[70svh] md:max-h-[720px]"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay 1: white scrim */}
        <div className="absolute inset-0 bg-[rgba(246,247,248,0.35)]" />
        {/* Overlay 2: gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,247,248,0.52) 0%, rgba(246,247,248,0.20) 45%, rgba(246,247,248,0.52) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1120px] items-center px-6 md:px-8">
        <div className="flex flex-col justify-center py-16 md:py-24 lg:max-w-2xl lg:py-28">
          {/* Headline with word stagger */}
          <h1 className="text-[38px] font-semibold leading-[1.15] tracking-[-0.03em] text-[var(--color-text-primary)] md:text-[52px]">
            {heroContent.headline.split("\n").map((line, lineIdx) => (
              <span key={lineIdx} className={`block ${lineIdx === 1 ? "text-gradient" : ""}`}>
                {line.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + (lineIdx * 0.25) + (wordIdx * 0.06),
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-lg text-base leading-[1.6] text-[var(--color-text-secondary)]"
          >
            {heroContent.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://cal.com/futurereadystudio/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-xl bg-[var(--color-text-primary)] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#111C33] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[rgba(46,196,182,0.35)] focus:ring-offset-2 active:scale-[0.97] inline-block"
            >
              {heroContent.primaryCta}
            </a>
            <button
              onClick={scrollToDeliverables}
              className="rounded-xl border border-[var(--color-border-strong)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:bg-[rgba(15,23,42,0.04)] active:scale-[0.97]"
            >
              {heroContent.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
